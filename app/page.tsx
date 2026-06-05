"use client"

import { useEffect, useState } from "react"

type Page = "home" | "story" | "details" | "schedule" | "dress" | "venue" | "rsvp"

export default function WeddingWebsiteV5() {
  const [page, setPage] = useState<Page>("home")
  const weddingDate = new Date("2026-07-14T14:30:00").getTime()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const distance = weddingDate - new Date().getTime()

      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
        seconds: Math.max(0, Math.floor((distance / 1000) % 60)),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  const heroImage =
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600&auto=format&fit=crop"

  const greenPalette = ["#CFE1B9", "#B5C99A", "#97A97C", "#87986A", "#718355"]

  const navItems: [Page, string][] = [
    ["home", "Home"],
    ["story", "Story"],
    ["details", "Details"],
    ["schedule", "Schedule"],
    ["dress", "Dress Code"],
    ["venue", "Venue"],
    ["rsvp", "RSVP"],
  ]

  return (
    <main
      className="min-h-screen bg-[#FFF7ED] text-[#4A3527]"
      style={{ fontFamily: "'The Seasons', Georgia, serif" }}
    >
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF7ED]/90 backdrop-blur-md border-b border-[#D9A441]/30">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex justify-between items-center text-[#4A3527]">
          <button
            onClick={() => setPage("home")}
            className="text-sm md:text-xl tracking-[0.22em] uppercase"
          >
            The Nuptials
          </button>

          <div className="hidden md:flex gap-6 text-xs uppercase tracking-[0.2em]">
            {navItems.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={page === key ? "text-[#9A5B3F] font-semibold" : "text-[#4A3527]/80"}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPage("details")}
            className="md:hidden text-xs uppercase tracking-[0.18em] text-[#4A3527]"
          >
            Menu
          </button>
        </div>
      </nav>

      {page === "home" && (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 pt-24 pb-12">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${heroImage})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#4A3527]/65 via-[#9A5B3F]/40 to-[#FFF7ED]" />
          <div className="absolute inset-0 bg-[#4A3527]/10" />
          <div className="absolute w-[420px] md:w-[560px] h-[420px] md:h-[560px] rounded-full bg-[#E6A85C]/25 blur-3xl bottom-10 left-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center max-w-5xl">
            <p className="text-[#FFF3D6] text-2xl md:text-5xl mb-4 tracking-wide">
              The Wedding of
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-9xl text-white drop-shadow-xl mb-8 md:mb-10 tracking-wide leading-tight">
              Jaki & Gehan
            </h1>

            <div className="max-w-3xl mx-auto mb-8 md:mb-10 bg-[#4A3527]/35 backdrop-blur-md border border-[#F7DFA7]/35 rounded-[2rem] px-6 py-6 shadow-2xl">
              <p className="italic text-xl sm:text-2xl md:text-4xl text-[#FFF8E8] leading-relaxed drop-shadow-md">
                “He hath made every thing beautiful in his time.”
              </p>

              <p className="text-xs md:text-base tracking-[0.22em] uppercase text-[#F7DFA7] mt-4">
                Ecclesiastes 3:11a
              </p>
            </div>

            <div className="w-24 md:w-32 h-[1px] bg-[#F7DFA7] mx-auto mb-7" />

            <p className="text-xl md:text-3xl text-white mb-2">July 14, 2026</p>

            <p className="text-base md:text-xl text-[#FFF3D6] mb-8 leading-relaxed">
              Villa Cruz Nature&apos;s Resort<br />
              Balud, San Roque, Northern Samar
            </p>

            <Countdown timeLeft={timeLeft} />

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <button onClick={() => setPage("story")} className="heroBtn">Our Story</button>
              <button onClick={() => setPage("details")} className="heroBtn">View Details</button>
              <button onClick={() => setPage("rsvp")} className="heroBtn">RSVP</button>
            </div>
          </div>
        </section>
      )}

      {page === "story" && (
        <PageShell title="Our Story" subtitle="A Sunset Years in the Making">
          <p className="text-lg md:text-2xl leading-relaxed text-center max-w-4xl mx-auto text-[#5C4434]">
            What began as a friendship grew into a love story shaped by faith,
            patience, and God&apos;s perfect timing. Through seasons of distance,
            challenges, and growth, our bond only became stronger. Today, we
            celebrate the journey that brought us together and look forward to a
            lifetime of love, laughter, and unwavering commitment.
          </p>
        </PageShell>
      )}

      {page === "details" && (
        <PageShell title="Wedding Details" subtitle="Celebrate With Us">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <DetailCard
              title="Wedding Day"
              text="Garden ceremony and hall reception."
              image="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop"
              onClick={() => setPage("schedule")}
            />

            <DetailCard
              title="Dress Code"
              text="Semi-formal attire in shades of green."
              image="https://images.unsplash.com/photo-1523264766116-1e09b3145b84?q=80&w=1200&auto=format&fit=crop"
              onClick={() => setPage("dress")}
            />

            <DetailCard
              title="Venue"
              text="Villa Cruz Nature's Resort, Northern Samar."
              image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              onClick={() => setPage("venue")}
            />
          </div>
        </PageShell>
      )}

      {page === "schedule" && (
        <PageShell title="Wedding Day" subtitle="Garden Ceremony & Hall Reception">
          <div className="max-w-3xl mx-auto space-y-5">
            {[
              ["2:00 PM", "Arrival of Guests"],
              ["2:30 PM – 3:30 PM", "Wedding Ceremony"],
              ["3:30 PM – 4:00 PM", "Pictorial / Recessional"],
              ["4:00 PM – 5:30 PM", "Cocktail Hour"],
              ["5:30 PM – 8:00 PM", "Reception"],
              ["8:00 PM", "Send Off"],
            ].map(([time, event]) => (
              <div key={time} className="bg-white/85 rounded-3xl p-6 border border-[#F1D3A2] shadow-sm">
                <p className="text-[#9A5B3F] text-base md:text-lg">{time}</p>
                <p className="text-xl md:text-2xl">{event}</p>
              </div>
            ))}
          </div>
        </PageShell>
      )}

      {page === "dress" && (
        <PageShell title="Dress Code" subtitle="Semi-Formal in Shades of Green">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              To complement our special day, we would love to see you in semi-formal attire in shades of green.
            </p>

            <p className="text-base md:text-lg mb-6">
              Please avoid denim/maong, t-shirt, and slippers.
            </p>

            <p className="text-base md:text-lg mb-10">
              Please skip white attire—let&apos;s keep that color reserved for the bride 🤍
            </p>

            <div className="flex rounded-full overflow-hidden shadow-xl border border-white">
              {greenPalette.map((color) => (
                <div key={color} className="h-16 md:h-20 flex-1" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        </PageShell>
      )}

      {page === "venue" && (
        <PageShell title="Venue" subtitle="Villa Cruz Nature's Resort">
          <div className="text-center">
            <p className="text-lg md:text-xl mb-8">Balud, San Roque, Northern Samar</p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Villa%20Cruz%20Nature%27s%20Resort%20Balud%20San%20Roque%20Northern%20Samar"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 md:px-9 py-4 rounded-full bg-[#9A5B3F] text-white uppercase tracking-[0.18em] text-xs md:text-sm hover:bg-[#6F4E37] transition"
            >
              Open Location in Google Maps
            </a>
          </div>
        </PageShell>
      )}

      {page === "rsvp" && (
        <PageShell title="RSVP" subtitle="Will You Join Us?">
          <div className="max-w-3xl mx-auto bg-white/85 rounded-[2rem] p-6 md:p-10 shadow-xl border border-[#F1D3A2]">
            <form className="space-y-5">
              <input className="input" placeholder="Your Name" />
              <input className="input" placeholder="Email Address" />

              <select className="input">
                <option>Will you attend?</option>
                <option>Yes, I will attend</option>
                <option>Sorry, I cannot attend</option>
              </select>

              <textarea className="input" rows={4} placeholder="Message or dietary preferences" />

              <button className="w-full py-4 rounded-2xl bg-[#9A5B3F] text-white uppercase tracking-[0.18em] text-sm">
                Confirm Attendance
              </button>
            </form>
          </div>
        </PageShell>
      )}

      <style jsx global>{`
        .heroBtn {
          padding: 0.95rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          color: white;
          background: rgba(74, 53, 39, 0.3);
          backdrop-filter: blur(12px);
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.75rem;
          transition: all 0.3s ease;
        }

        .heroBtn:hover {
          background: white;
          color: #4A3527;
        }

        .input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid #f1d3a2;
          background: rgba(255, 255, 255, 0.9);
          padding: 1rem 1.25rem;
          outline: none;
          color: #4A3527;
        }

        .input::placeholder {
          color: rgba(74, 53, 39, 0.55);
        }
      `}</style>
    </main>
  )
}

function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen pt-28 md:pt-32 pb-20 px-5 md:px-16 lg:px-32 bg-gradient-to-b from-[#FFF7ED] via-[#F7E7CE] to-[#FFF7ED]">
      <div className="text-center mb-12 md:mb-14">
        <p className="uppercase tracking-[0.3em] md:tracking-[0.35em] text-[#9A5B3F] text-xs md:text-sm mb-4">
          {title}
        </p>

        <h2 className="text-4xl md:text-7xl text-[#4A3527] tracking-wide leading-tight">
          {subtitle}
        </h2>
      </div>

      {children}
    </section>
  )
}

function DetailCard({
  title,
  text,
  image,
  onClick,
}: {
  title: string
  text: string
  image: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-white/90 rounded-[2rem] overflow-hidden shadow-xl border border-[#F1D3A2] hover:-translate-y-2 transition w-full"
    >
      <img src={image} alt={title} className="h-64 md:h-72 w-full object-cover" />

      <div className="p-7 md:p-8">
        <h3 className="text-3xl mb-4">{title}</h3>
        <p className="text-[#6F4E37] leading-relaxed">{text}</p>
        <p className="mt-8 text-[#9A5B3F] uppercase tracking-[0.2em] text-xs">
          View Details
        </p>
      </div>
    </button>
  )
}

function Countdown({
  timeLeft,
}: {
  timeLeft: { days: number; hours: number; minutes: number; seconds: number }
}) {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-3xl mx-auto">
      {[
        [timeLeft.days, "Days"],
        [timeLeft.hours, "Hours"],
        [timeLeft.minutes, "Minutes"],
        [timeLeft.seconds, "Seconds"],
      ].map(([number, label]) => (
        <div
          key={label}
          className="h-20 sm:h-28 md:h-32 rounded-2xl md:rounded-3xl bg-white/25 backdrop-blur-md border border-white/45 flex flex-col items-center justify-center"
        >
          <span className="text-xl sm:text-3xl md:text-4xl text-white">
            {number}
          </span>

          <span className="uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[9px] sm:text-xs text-[#FFF3D6] mt-1 sm:mt-2">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}