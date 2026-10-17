
import { useEffect, useMemo, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";

type AdminProps = {
  onBack: () => void;
};

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function dateId(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function Admin({ onBack }: AdminProps) {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [saving, setSaving] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [blockedDates, setBlockedDates] = useState<Set<string>>(new Set());

  const [month, setMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!user) {
      setBlockedDates(new Set());
      return;
    }

    const unsubscribe = onSnapshot(
      collection(db, "blockedDates"),
      (snapshot) => {
        setBlockedDates(
          new Set(snapshot.docs.map((item) => item.id))
        );
      },
      (error) => {
        console.error("Availability listener:", error);
        setMessage("Could not load availability. Check Firestore rules.");
      }
    );

    return unsubscribe;
  }, [user]);

  const calendarDays = useMemo(() => {
    const firstDay = new Date(
      month.getFullYear(),
      month.getMonth(),
      1
    );
    const offset = firstDay.getDay();
    const numberOfDays = new Date(
      month.getFullYear(),
      month.getMonth() + 1,
      0
    ).getDate();

    return [
      ...Array.from({ length: offset }, () => null),
      ...Array.from({ length: numberOfDays }, (_, index) => index + 1),
    ];
  }, [month]);

  const blockedCount = [...blockedDates].filter((id) => {
    const date = new Date(`${id}T12:00:00`);
    return (
      date.getMonth() === month.getMonth() &&
      date.getFullYear() === month.getFullYear()
    );
  }).length;

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
    } catch {
      setLoginError("Login failed. Check your email and password.");
    }
  }

  async function toggleDate(id: string) {
    setSaving(id);
    setMessage("");

    try {
      if (blockedDates.has(id)) {
        await deleteDoc(doc(db, "blockedDates", id));
        setMessage(`${id} is now marked available.`);
      } else {
        await setDoc(doc(db, "blockedDates", id), {
          date: id,
          blocked: true,
          updatedAt: new Date().toISOString(),
        });
        setMessage(`${id} is now blocked.`);
      }
    } catch (error) {
      console.error("Could not update date:", error);
      setMessage("Couldn't update the date. Check your Firestore rules.");
    } finally {
      setSaving(null);
    }
  }

  if (authLoading) {
    return (
      <main className="min-h-screen bg-[#FAF8F4] flex items-center justify-center text-[#1C1915]">
        Checking admin access...
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-[#FAF8F4] flex items-center justify-center px-5 py-12">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white border border-[#8C5E3A]/20 rounded-2xl p-8 shadow-xl"
        >
          <button
            type="button"
            onClick={onBack}
            className="text-sm text-[#8C5E3A] mb-8"
          >
            ← Back to website
          </button>

          <p className="text-xs uppercase tracking-[0.25em] text-[#8C5E3A] mb-3">
            Mainnasglam Beauty
          </p>
          <h1 className="text-3xl text-[#1C1915] mb-2">
            Admin Login
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Sign in to manage appointment availability.
          </p>

          <label className="block text-sm mb-2">Admin email</label>
          <input
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 mb-5 outline-none focus:border-[#8C5E3A]"
            placeholder="Your admin email"
          />

          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 mb-5 outline-none focus:border-[#8C5E3A]"
            placeholder="Your password"
          />

          {loginError && (
            <p role="alert" className="text-sm text-red-600 mb-4">
              {loginError}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#1C1915] text-white rounded-lg py-3 hover:bg-[#8C5E3A] transition-colors"
          >
            Sign In
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#1C1915] px-4 py-8 md:px-10 md:py-12">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8C5E3A] mb-2">
              Mainnasglam Beauty
            </p>
            <h1 className="text-3xl md:text-4xl">Admin Dashboard</h1>
            <p className="text-sm text-gray-500 mt-2">
              Manage which dates customers can request.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="border border-[#8C5E3A]/30 rounded-lg px-4 py-2 text-sm"
            >
              Website
            </button>
            <button
              onClick={() => signOut(auth)}
              className="bg-[#1C1915] text-white rounded-lg px-4 py-2 text-sm"
            >
              Sign Out
            </button>
          </div>
        </header>

        <section className="bg-white border border-[#8C5E3A]/15 rounded-2xl p-5 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
            <div>
              <h2 className="text-xl font-medium">Calendar Availability</h2>
              <p className="text-sm text-gray-500 mt-1">
                Select a date to block it or reopen it.
              </p>
            </div>

            <div className="text-sm bg-[#FAF8F4] rounded-lg px-4 py-3">
              <span className="text-[#8C5E3A] font-semibold">
                {blockedCount}
              </span>{" "}
              blocked this month
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <button
              aria-label="Previous month"
              onClick={() =>
                setMonth(
                  new Date(month.getFullYear(), month.getMonth() - 1, 1)
                )
              }
              className="rounded-lg border px-4 py-2 hover:bg-[#FAF8F4]"
            >
              ←
            </button>

            <h3 className="text-lg font-medium">
              {MONTHS[month.getMonth()]} {month.getFullYear()}
            </h3>

            <button
              aria-label="Next month"
              onClick={() =>
                setMonth(
                  new Date(month.getFullYear(), month.getMonth() + 1, 1)
                )
              }
              className="rounded-lg border px-4 py-2 hover:bg-[#FAF8F4]"
            >
              →
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day) => (
                <div
                  key={day}
                  className="text-xs text-gray-500 py-2"
                >
                  {day}
                </div>
              )
            )}

            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} />;
              }

              const id = dateId(
                new Date(month.getFullYear(), month.getMonth(), day)
              );
              const isBlocked = blockedDates.has(id);
              const isPast = id < dateId(new Date());

              return (
                <button
                  key={id}
                  disabled={isPast || saving === id}
                  onClick={() => toggleDate(id)}
                  title={
                    isPast
                      ? "Past date"
                      : isBlocked
                      ? "Click to reopen this date"
                      : "Click to block this date"
                  }
                  className={`min-h-12 md:min-h-16 rounded-xl border text-sm transition-colors
                    ${
                      isBlocked
                        ? "bg-[#8C5E3A] text-white border-[#8C5E3A]"
                        : "bg-white border-gray-200 hover:border-[#8C5E3A] hover:bg-[#FAF8F4]"
                    }
                    ${isPast ? "opacity-30 cursor-not-allowed" : ""}
                    ${saving === id ? "opacity-50" : ""}
                  `}
                >
                  <span className="block">{day}</span>
                  <span className="block text-[10px] mt-1">
                    {saving === id
                      ? "Saving"
                      : isBlocked
                      ? "Blocked"
                      : ""}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-5 mt-6 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-white border border-gray-300" />
              Available
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-[#8C5E3A]" />
              Blocked
            </span>
          </div>

          {message && (
            <p role="status" className="text-sm mt-5 text-[#8C5E3A]">
              {message}
            </p>
          )}
        </section>

        <p className="text-xs text-gray-500 mt-5">
          Signed in as {user.email}. Changes are saved to Firebase.
        </p>
      </div>
    </main>
  );
}
