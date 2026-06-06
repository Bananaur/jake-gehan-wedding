"use client"

import { useState, useEffect, useRef } from "react"
import { Great_Vibes } from "next/font/google"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
})

type Page =
  | "home"
  | "timeline"
  | "venue"
  | "attire"
  | "entourage"
  | "request"
  | "confirmation"
  | "thankyou"

  export default function WeddingWebsiteV6() {
    const [page, setPage] = useState<Page>("home")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [previousScrollY, setPreviousScrollY] = useState(0)
    const audioRef = useRef<HTMLAudioElement>(null)
const [musicPlaying, setMusicPlaying] = useState(false)

const toggleMusic = () => {
if (!audioRef.current) return

if (musicPlaying) {
  audioRef.current.pause()
  setMusicPlaying(false)
} else {
  audioRef.current.play()
  setMusicPlaying(true)
}
}

    const weddingDate = new Date("2026-07-14T14:30:00").getTime()
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
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
    
    useEffect(() => {
      if (page !== "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    }, [page])

  const heroImage =
  "canva2.png"  

  const greenPalette = ["#CFE1B9", "#B5C99A", "#97A97C", "#87986A", "#718355"]

  const cards = [
    {
      title: "Wedding Timeline",
      text: "Garden ceremony, cocktail hour, hall reception, and send off.",
      image:
        "https://i.imgur.com/Oa9pVU3.png",
      page: "timeline" as Page,
    },
    {
      title: "Venue",
      text: "Villa Cruz Nature's Resort, Balud, San Roque Northern Samar.",
      image:
      "/Venue-garden.jpg",
      page: "venue" as Page,
    },
    {
      title: "Guests Attire Guide",
      text: "Semi-formal attire in beautiful shades of green.",
      image:
        "https://i.imgur.com/RJffayR.jpeg",
      page: "attire" as Page,
    },
    {
      title: "The Entourage",
      text: "The people who will stand with us on our wedding day.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
      page: "entourage" as Page,
    },
    {
      title: "Gentle Request",
      text: "A few loving reminders for our ceremony and celebration.",
      image:
        "https://i.imgur.com/UwO6Hep.png",
      page: "request" as Page,
    },
    {
      title: "Thank You Note",
      text: "A message from our hearts to everyone who celebrates with us.",
      image:
        "hearthand.png",
      page: "thankyou" as Page,
    },
  ]

  return (
    <main
      className="m  in-h-screen bg-[#FFF7ED] text-[#4A3527]"
      style={{ fontFamily: "'The Seasons', Georgia, serif" }}
    >
     <audio
  ref={audioRef}
  src="/til-the-end-of-time.mp3"
  loop
  preload="auto"
/>
{page !== "home" && (
  <button
    onClick={() => {
      setPage("home")

      setTimeout(() => {
        window.scrollTo({
          top: previousScrollY,
          behavior: "smooth",
        })
      }, 100)
    }}
    className="fixed bottom-5 right-5 z-50 bg-[#4A3527] text-white px-4 py-2 rounded-full shadow-lg"
  >
    Back
  </button>
)}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF7ED]/90 backdrop-blur-md border-b border-[#D9A441]/30">
<div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex justify-between items-center">
  <button
    onClick={() => {
      setPage("home")
      setMobileMenuOpen(false)
    }}
    className="text-xs uppercase tracking-[0.2em] text-[#4A3527]"
  >
    Home
  </button>

  <div className="hidden md:flex gap-6 text-xs uppercase tracking-[0.18em] text-[#4A3527]">
  <button onClick={() => {
    setPreviousScrollY(window.scrollY)
    setPage("timeline")
  }}>Timeline</button>

  <button onClick={() => {
    setPreviousScrollY(window.scrollY)
    setPage("venue")
  }}>Venue</button>

  <button onClick={() => {
    setPreviousScrollY(window.scrollY)
    setPage("attire")
  }}>Attire</button>

  <button onClick={() => {
    setPreviousScrollY(window.scrollY)
    setPage("entourage")
  }}>Entourage</button>

  <button onClick={() => {
    setPreviousScrollY(window.scrollY)
    setPage("request")
  }}>Request</button>

  <button onClick={() => {
    setPreviousScrollY(window.scrollY)
    setPage("confirmation")
  }}>RSVP</button>

  <button onClick={() => {
    setPreviousScrollY(window.scrollY)
    setPage("thankyou")
  }}>Thank You Note</button>
</div>

  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="md:hidden text-xs uppercase tracking-[0.18em] text-[#4A3527]"
  >
    Menu
  </button>
</div>

{mobileMenuOpen && (
  <div className="md:hidden px-5 pb-5 flex flex-col gap-4 text-xs uppercase tracking-[0.18em] text-[#4A3527] bg-[#FFF7ED]/95">
    <button
      onClick={() => {
        setPreviousScrollY(window.scrollY)
        setPage("timeline")
        setMobileMenuOpen(false)
      }}
      className="text-left border-b border-[#D9A441]/20 pb-3"
    >
      Timeline
    </button>

    <button
      onClick={() => {
        setPreviousScrollY(window.scrollY)
        setPage("venue")
        setMobileMenuOpen(false)
      }}
      className="text-left border-b border-[#D9A441]/20 pb-3"
    >
      Venue
    </button>

    <button
      onClick={() => {
        setPreviousScrollY(window.scrollY)
        setPage("attire")
        setMobileMenuOpen(false)
      }}
      className="text-left border-b border-[#D9A441]/20 pb-3"
    >
      Attire
    </button>

    <button
      onClick={() => {
        setPreviousScrollY(window.scrollY)
        setPage("entourage")
        setMobileMenuOpen(false)
      }}
      className="text-left border-b border-[#D9A441]/20 pb-3"
    >
      Entourage
    </button>

    <button
      onClick={() => {
        setPreviousScrollY(window.scrollY)
        setPage("request")
        setMobileMenuOpen(false)
      }}
      className="text-left border-b border-[#D9A441]/20 pb-3"
    >
      Request
    </button>

    <button
      onClick={() => {
        setPreviousScrollY(window.scrollY)
        setPage("confirmation")
        setMobileMenuOpen(false)
      }}
      className="text-left border-b border-[#D9A441]/20 pb-3"
    >
      Attendance
    </button>

    <button
      onClick={() => {
        setPreviousScrollY(window.scrollY)
        setPage("thankyou")
        setMobileMenuOpen(false)
      }}
      className="text-left border-b border-[#D9A441]/20 pb-3"
    >
      Thank You Note
    </button>
  </div>
)}
</nav>

      {page === "home" && (
        <>
          <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 pt-24 pb-12">
  <div className="absolute inset-0">
    <div className="absolute inset-0 md:hidden bg-[#5A3A1E]">
      <img
        src="/hero-mobile.jpg"
        alt="Jake and Gehan"
        className="w-full h-full object-cover object-top"
      />
    </div>

    <div
      className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
      style={{ backgroundImage: "url('/canva2.png')" }}
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-b from-[#3D2B1F]/70 via-[#8F5A3A]/40 to-[#FFF7ED]" />

  <div className="relative z-10 text-center max-w-5xl w-full">
    {/* MOBILE HERO TEXT */}
    <div className="md:hidden flex flex-col items-center text-center">
      <div className="text-[#FFF3D6] uppercase tracking-[0.25em] mt-2 mb-10">
        <p className="text-white text-base mb-12">07.14.26</p>
        <p className="text-2xl">THE WEDDING</p>
        <p className="text-xl mt-4 mb-5">OF</p>
      </div>

      <div
        className={`${greatVibes.className} text-white w-full`}
        style={{ textShadow: "0 4px 20px rgba(0,0,0,0.18)" }}
      >
        <p className="text-[8rem] leading-[0.9] tracking-[0.05em] text-center -ml-16 mb-2">
          Jake
        </p>

        <p className="text-[5rem] leading-none text-center my-0">
          &
        </p>

        <p className="text-[8rem] leading-[0.8] tracking-[0.05em] text-center -mr-6 mt-2">
          Gehan
        </p>
      </div>
    </div>

    {/* DESKTOP HERO TEXT */}
    <div className="hidden md:flex flex-col items-center text-center">
      <div className="text-[#FFF3D6] uppercase tracking-[0.35em] mt-8 mb-20">
        <p className="text-white text-lg mb-8">07.14.26</p>
        <p className="text-4xl">THE WEDDING</p>
        <p className="text-4xl mt-6">OF</p>
      </div>

      <div
        className={`${greatVibes.className} text-white`}
        style={{ textShadow: "0 4px 20px rgba(0,0,0,0.18)" }}
      >
        <p className="text-[10rem] leading-[0.8]">
          Jake
          <span className="mx-10 text-[8rem]">&</span>
          Gehan
        </p>
      </div>
    </div>

    <div className="h-16 md:h-20"></div>

    <div className="bg-[#4A3527]/40 backdrop-blur-md rounded-[2rem] p-6 md:p-8 max-w-3xl mx-auto border border-[#F7DFA7]/25 shadow-2xl mt-20">
      <p className="italic text-[#FFF8E8] text-xl md:text-3xl leading-relaxed">
        “He hath made every thing beautiful in His time”
      </p>
      <p className="uppercase tracking-[0.25em] text-[#F7DFA7] mt-4 text-xs md:text-sm">
        Ecclesiastes 3:11a KJV
      </p>
    </div>

    <div className="my-8 w-32 h-[1px] bg-[#F7DFA7] mx-auto" />

    <p className="text-[#FFF3D6] mt-5 text-xl md:text-2xl leading-relaxed">
      2:00 PM @
    </p>

    <p className="text-[#FFF3D6] mt-1 text-xl md:text-2xl leading-relaxed">
      Villa Cruz Nature&apos;s Resort
      <br />
      Balud, San Roque Northern Samar
    </p>

    <p className="text-[#FFF3D6] uppercase tracking-[0.22em] text-lg md:text-2xl mt-10 mb-10">
      Counting the Days Until We Say{" "}
      <span
        className="italic"
        style={{ fontFamily: "'The Seasons', serif" }}
      >
        “I DO”
      </span>
    </p>

    <Countdown timeLeft={timeLeft} />

    <div className="max-w-2xl mx-auto mt-20">
      <div className="bg-white/80 rounded-[2rem] p-6 md:p-8 shadow-xl border border-[#F1D3A2] text-center">
        <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-sm font-bold mb-3">
          Listen to Our Music
        </p>

        <h3
          className={`${greatVibes.className} text-3xl md:text-5xl text-[#4A3527] mb-3 tracking-wide`}
        >
          'Til the End of Time
        </h3>

        <p className="text-[#9A5B3F] mb-5">
          by Steve Green
        </p>

        <button
          onClick={toggleMusic}
          className="bg-[#4A3527]/90 text-[#FFF7ED] px-6 py-3 rounded-full shadow-xl border border-[#F1D3A2] text-xs uppercase tracking-[0.18em]"
        >
          {musicPlaying ? "Pause Music" : "Play Music"}
        </button>
      </div>
    </div>
  </div>
</section>

          <section className="pt-16 pb-24 md:py-24 px-5 md:px-16 bg-gradient-to-b from-[#FFF7ED] via-[#F7E7CE] to-[#FFF7ED]">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-14">
      <p className="uppercase tracking-[0.35em] text-[#9A5B3F] text-sm mb-4">
        Our Story
      </p>

      <h2 className="text-4xl md:text-7xl text-[#4A3527] leading-tight">
        A Sunset Years in the Making
      </h2>
    </div>

    <div className="relative rounded-[2rem] bg-[#6F4E37]/85 border border-[#F1D3A2] shadow-xl p-8 md:p-14 overflow-hidden">
      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-center">
        <div>
          <p className="text-[#5C4434] text-lg md:text-2xl leading-relaxed text-center md:text-left">
            What began as a friendship grew into a love story woven together by
            faith, patience, and God&apos;s perfect timing.
            <br />
            <br />
            Through seasons of distance, challenges, and growth, we continued to 
            choose each other every step of the way.
            <br />
            <br />
            We thank God for His faithfulness and the countless ways He has shaped our lives. As we turn the page to a new chapter, we look ahead to a 
            lifetime of love and laughter—our hearts forever devoted.
          </p>
          <p className="mt-8 italic text-[#9A5B3F] text-center">
  #
  <span className="font-bold">Jake</span>
  FoundHis
  <span className="font-bold">Gehan</span>
  uineLove
</p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm rounded-[2rem] bg-[#FFF7ED] p-3 shadow-2xl border border-[#F1D3A2] rotate-0 md:rotate-1">
            <img
              src="https://i.imgur.com/9L9E5kr.jpeg"
              alt="Jake and Gehan"
              className="w-full h-[420px] object-cover rounded-[1.5rem]"
            />

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#F7E7CE] px-6 py-2 rounded-full shadow-md border border-[#F1D3A2]">
              <p className="text-[#9A5B3F] text-xs uppercase tracking-[0.2em] whitespace-nowrap">
                18 years TO FOREVER
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="pt-6 pb-20 md:py-20 px-5 md:px-16 bg-[#FFF7ED]">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.35em] text-[#9A5B3F] text-sm mb-4">
                Wedding Guide
              </p>
              <h2 className="text-4xl md:text-6xl text-[#4A3527]">
                Everything You Need To Know
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cards.map((card) => (
  <DetailCard
    key={card.title}
    {...card}
    onClick={() => {
      setPreviousScrollY(window.scrollY)
      setPage(card.page)
    }}
  />
))}
            </div>
          </section>

          <AttendanceSection />
        </>
      )}

{page === "timeline" && (
  <section
    className="min-h-screen pt-28 md:pt-32 pb-20 px-5 md:px-16 lg:px-32 bg-cover bg-[40%_center]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,247,237,0.82), rgba(255,247,237,0.82)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000&auto=format&fit=crop')",
    }}
  >
    <div className="text-center mb-12 md:mb-14">
      <p className="uppercase tracking-[0.35em] text-[#9A5B3F] text-xs md:text-sm mb-4">
        The Wedding Timeline
      </p>

      <h2 className="text-4xl md:text-7xl text-[#4A3527]">
        Garden Ceremony & Hall Reception
      </h2>
    </div>

    <Timeline />
  </section>
)}

{page === "venue" && (
  <section
    className="min-h-screen pt-28 md:pt-32 pb-20 px-5 md:px-16 lg:px-32 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,247,237,0.75), rgba(255,247,237,0.75)), url('/Venue-garden.jpg')",
    }}
  >
    <div className="text-center mb-12 md:mb-18">
  <p className="uppercase tracking-[0.35em] text-[#9A5B3F] text-xs md:text-sm mb-4">
    Ceremony & Reception Venue
  </p>

  <h2 className="text-4xl md:text-7xl text-[#4A3527]">
    Villa Cruz Nature&apos;s Resort
  </h2>
</div>

<div className="text-center max-w-3xl mx-auto">
  <p className="text-lg md:text-2xl italic mb-6 text-[#4A3527]">
  </p>

  <p className="text-lg md:text-2xl mb-4 text-[#4A3527]">
    Balud, San Roque Northern Samar
  </p>

  <p className="text-lg md:text-2xl mb-4 text-[#4A3527]">
    July 14, 2026
  </p>
  
  <p className="text-m md:text-xl mb-5 text-[#4A3527]">
    2:00 PM
  </p>

  <a
    href="https://www.google.com/maps/search/?api=1&query=Villa%20Cruz%20Nature%27s%20Resort%20Balud%20San%20Roque%20Northern%20Samar"
    target="_blank"
    rel="noreferrer"
    className="inline-block px-8 py-4 rounded-full bg-[#9A5B3F] text-white uppercase tracking-[0.18em] text-xs md:text-sm hover:bg-[#6F4E37] transition"
  >
        Open Location in Google Maps
      </a>
    </div>
  </section>
)}

{page === "attire" && (
  <section
    className="min-h-screen pt-28 md:pt-32 pb-20 px-5 md:px-16 lg:px-32 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,247,237,0.88), rgba(255,247,237,0.88)), url('https://i.imgur.com/HORNPqN.jpeg')",
    }}
  >
    <div className="text-center mb-12 md:mb-14">
      <p className="uppercase tracking-[0.3em] text-[#9A5B3F] text-xs md:text-sm mb-4">
        Guests Attire Guide
      </p>

      <h2 className="text-4xl md:text-7xl text-[#4A3527] tracking-wide leading-tight">
        Semi-Formal in Shades of Green
      </h2>
    </div>

    <AttireGuide greenPalette={greenPalette} />
  </section>
)}

{page === "entourage" && (
  <section
    className="min-h-screen pt-28 md:pt-32 pb-20 px-5 md:px-16 lg:px-32 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,247,237,0.88), rgba(255,247,237,0.88)), url('https://i.imgur.com/sFufozo.jpeg')",
    }}
  >
    <div className="text-center mb-10 md:mb-12">
<p className="uppercase tracking-[0.3em] text-[#9A5B3F] text-xs md:text-sm mb-4">
  The Entourage
</p>

<h2 className="text-4xl md:text-7xl text-[#4A3527] tracking-wide leading-tight">
  With The People We Hold Dear
</h2>

<div className="mt-10 md:mt-12 text-[#9A5B3F]">
<p
  className={`${greatVibes.className} text-3xl md:text-5xl text-[#6F4E37] whitespace-nowrap`}
>
  Pinca
  <span className="mx-2 md:mx-5">&amp;</span>
  Brozas
</p>

<p className="uppercase tracking-[0.18em] text-xs md:text-base mt-1 text-[#9A5B3F]">
  Nuptials
</p>
</div>
</div>

    <Entourage />
  </section>
)}

{page === "request" && (
  <section
    className="min-h-screen pt-28 md:pt-32 pb-20 px-5 md:px-16 lg:px-32 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,247,237,0.88), rgba(255,247,237,0.88)), url('https://i.imgur.com/E5x3Rc8.jpeg')",
    }}
  >
    <div className="text-center mb-12 md:mb-14">
      <p className="uppercase tracking-[0.3em] text-[#9A5B3F] text-xs md:text-sm mb-4">
        Gentle Request
      </p>

      <h2 className="text-4xl md:text-7xl text-[#4A3527] tracking-wide leading-tight">
        A Note From Our Hearts
      </h2>
    </div>

    <GentleRequest />
  </section>
)}

{page === "confirmation" && (
  <section
    className="min-h-screen pt-28 md:pt-32 pb-20 px-5 md:px-16 lg:px-32 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,247,237,0.88), rgba(255,247,237,0.88)), url('https://i.imgur.com/fsWA9z8.jpeg')",
    }}
  >
    <div className="text-center mb-12 md:mb-14">
      <p className="uppercase tracking-[0.3em] text-[#9A5B3F] text-xs md:text-sm mb-4">
        Attendance Confirmation
      </p>

      <h2 className="text-4xl md:text-7xl text-[#4A3527] tracking-wide leading-tight">
        Come Celebrate With us
      </h2>
    </div>

    <AttendanceForm />
  </section>
)}
      {page === "thankyou" && (
  <section
    className="min-h-screen pt-28 md:pt-32 pb-20 px-5 md:px-16 lg:px-32 bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,247,237,0.85), rgba(255,247,237,0.85)), url('https://i.imgur.com/PFsPP3y.png')",
    }}
  >
    <div className="text-center mb-12 md:mb-14">
      <p className="uppercase tracking-[0.3em] text-[#9A5B3F] text-xs md:text-sm mb-4">
        MARAMING SALAMAT PO
      </p>

      <h2 className="text-4xl md:text-7xl text-[#4A3527] tracking-wide leading-tight">
        Our Heartfelt Gratitude
      </h2>
    </div>

    <div className="max-w-3xl mx-auto bg-white/90 rounded-[2rem] p-8 md:p-12 shadow-xl border border-[#F1D3A2] text-center">
      <p className="text-lg md:text-2xl leading-relaxed text-[#5C4434]">
        Thank you so much for making the time to celebrate with us!
        <br />
        <br />
        Your love, prayers, support, and presence mean more to us than words can express.
        <br />
        <br />
        As we begin our life together, we are grateful to share this joyful day with family and friends we value and respect.
        <br />
        <br />
        May God bless each of you abundantly.
      </p>

      <div className="mt-10">
      <p
  className={`${greatVibes.className} text-3xl md:text-8xl leading-tight whitespace-nowrap`}
>
  Jake &amp; Gehan
</p>
      </div>
    </div>
  </section>
)}

      <style jsx global>{`
        .heroBtn {
          padding: 0.95rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          color: white;
          background: rgba(74, 53, 39, 0.35);
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
          background: rgba(255,255,255,0.9);
          padding: 1rem 1.25rem;
          outline: none;
          color: #4A3527;
        }
        .label {
          display: block;
          margin-bottom: 0.5rem;
          color: #4A3527;
          font-size: 0.95rem;
        }
      `}</style>
    </main>
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
          className="h-24 sm:h-32 md:h-36 rounded-3xl bg-[#4A3527]/70 backdrop-blur-xl border border-[#F7DFA7]/70 shadow-2xl flex flex-col items-center justify-center shadow-xl"
        >
          <span className="text-2xl sm:text-4xl md:text-5xl font-semibold text-[#FFF8E8] drop-shadow-lg">
            {number}
          </span>
          <span className="uppercase tracking-[0.18em] text-xs md:text-sm text-[#F7DFA7] mt-2">
            {label}
          </span>
        </div>
      ))}
    </div>
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

function Timeline() {
  const schedule = [
    ["2:00 PM", "Arrival of Guests"],
    ["2:30 PM", "Wedding Ceremony"],
    ["3:30 PM", "Pictorial / Recessional"],
    ["4:00 PM", "Cocktail Hour"],
    ["5:30 PM", "Reception"],
    ["8:00 PM", "Send Off"],
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      {schedule.map(([time, event]) => (
        <div
        key={time}
        className="bg-white/85 rounded-3xl p-6 border border-[#F1D3A2] shadow-sm grid grid-cols-2 gap-6 md:gap-20 items-center"
      >
        <div>
          <p className="text-[#9A5B3F] text-lg md:text-xl font-semibold text-right pr-3">
            {time}
          </p>
        </div>
      
        <div>
          <p className="text-xl md:text-2xl text-[#4A3527] text-left pl-3">
            {event}
          </p>
        </div>
      </div>
      ))}
    </div>
  )
}

function AttireGuide({ greenPalette }: { greenPalette: string[] }) {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-lg md:text-xl leading-relaxed mb-6">
      To complement our special day, we would love to see you in semi-formal attire in our wedding color palette below.
      </p>
      <div className="mt-12 mb-10">
      <p className="text-xl md:text-2xl font-bold text-[#4A3527] mb-8">
  A Gentle Reminder
</p>

  <ul className="text-base md:text-lg text-center max-w-2xl mx-auto space-y-2 list-none pl-2">
    <li>
      Please avoid denim/maong, t-shirt, and slippers.
    </li>

    <li>
      Please skip white attire—let&apos;s keep that color reserved for the bride.
    </li>
  </ul>

  <div className="mt-8 text-center max-w-2xl mx-auto">
  <p className="text-xl md:text-2xl font-semibold text-[#4A3527] mb-3">
Note
</p>

<ul className="text-base md:text-lg text-[#6F4E37] list-none">
      <li>
        To our entourage, we will reach out to you personally with your specific color guide.
      </li>
    </ul>
  </div>
</div>

      <div className="flex rounded-full overflow-hidden shadow-xl border border-white">
        {greenPalette.map((color) => (
          <div
            key={color}
            className="h-16 md:h-20 flex-1"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  )
}

  function Entourage() {
    const principalMen = [
      "PTR. LOWELL BARTE",
      "PTR. BALTAZAR ALIDON",
      "PTR. VALENTINO DACUNO",
      "PTR. EDUARDO MENGORIA",
      "ENGR. AMANCIO ACEDERA JR.",
      "HON. OWEN LAMBERTO SIERVO",
      "HON. FELIPE SOSING",
      "MR. JUDY MERINO",
      "MR. JACINTO CANDOLE",
      "MR. ROMEO SALAZAR",
      "MR. NORIEL JARITO",
      "MR. DANTE LOBOS",
      "MR. PHIL KAHOTEA",
      "MR. WENDEL ANDRADE",
      "MR. GERSON RECIPROCO",
      "DR. WENDELL UMALI",
      "MR. RICHARD PAGUIO",
    ]

    const principalWomen = [
      "MRS. ANA BARTE",
      "MRS. MERLYN ALIDON",
      "DR. LAARNI DACUNO",
      "MRS. LILIBETH MENGORIA",
      "MRS. FLORIZA ACEDERA",
      "MRS. MARIA FE SIERVO",
      "MRS. CAROL SOSING",
      "DR. EMMA MERINO",
      "MRS. REMA CANDOLE",
      "MRS. ILLUMINADA SALAZAR",
      "MRS. JENNY LUCBAN",
      "MRS. EMMA LEBECO",
      "MRS. BEBINA DOCEO",
      "MS. JULIE DULFO",
      "MRS. MONALISA ROMINEZ",
      "MRS. LEIDA VILLANUEVA",
      "MRS. RICA MICHELLE PAGUIO",
    ]

    const groomsmen = [
      "JOHN MICHAEL GALUPO",
      "RALPH LAWRENCE CUI",
      "GIO LAGARTO",
      "APRIL CALEB OBIADO",
      "RAUL POSO",
      "JOHNMAR MERCADO",
      "IAN ROBERT ONG",
      "MARVIE TENEDERO",
      "SAMSON NEONES",
      "RENZ CANDOLE",
    ]

    const bridesmaids = [
      "ANFEL JOY DUMORAN",
      "JOMARIE TAN",
      "JEAN OBIADO",
      "DEBORAH ANN DACUNO",
      "BEVERLY CLARK OBIADO",
      "JELLYCA PINCA",
      "XYLEEN KIM ACEDERA",
      "JUDY ANN PINCA",
      "XI ANNE RAIZZA ACEDERA",
      "MISCHA CASSANDRA ACEDERA",
    ]

    const NameList = ({ names }: { names: string[] }) => (
      <div className="space-y-1">
        {names.map((name) => (
          <p key={name} className="text-sm md:text-xl text-[#4A3527] tracking-wide">
            {name}
          </p>
        ))}
      </div>
    )
    const formatSponsorName = (name: string) => {
      const parts = name.trim().split(" ")
      const lastName = parts.pop()
      const firstNames = parts.join(" ")
    
      return (
        <>
          <span className="block">{firstNames}</span>
          <span className="block">{lastName}</span>
        </>
      )
    }
    return (
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="bg-white/85 rounded-[2rem] p-8 md:p-10 shadow-xl border border-[#F1D3A2] text-center">
          <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-3">
            Officiating Minister
          </p>
          <h3 className="text-sm md:text-xl text-[#4A3527]">
            PTR. LOWELL BARTE
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/85 rounded-[2rem] p-8 shadow-lg border border-[#F1D3A2] text-center">
            <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-5">
              Parents of the Groom
            </p>
            <NameList names={["MR. WILLIAM M. PINCA", "MRS. ALICIA PINCA"]} />
          </div>

          <div className="bg-white/85 rounded-[2rem] p-8 shadow-lg border border-[#F1D3A2] text-center">
            <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-5">
              Parents of the Bride
            </p>
            <NameList names={["MR. ALEBRO ANDREW BROZAS", "MRS. MARCELA BROZAS"]} />
          </div>
        </div>

        <div className="bg-white/85 rounded-[2rem] p-8 md:p-10 shadow-xl border border-[#F1D3A2] text-center">
    <h3 className="text-4xl md:text-5xl text-[#4A3527] mb-8">
      Principal Sponsors
    </h3>

    <div className="grid grid-cols-2 gap-16 mb-6">
    <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs text-center">
      Ninong
    </p>

    <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs text-center">
      Ninang
    </p>
  </div>

  <div className="space-y-3">
{principalMen.map((ninong, index) => (
<div key={ninong} className="grid grid-cols-2 gap-4 md:gap-14">
  <p className="text-sm md:text-xl text-[#4A3527] text-right md:pr-16 whitespace-normal md:whitespace-nowrap leading-tight">
    {ninong}
  </p>

  <p className="text-sm md:text-xl text-[#4A3527] text-left md:pl-16 whitespace-normal md:whitespace-nowrap leading-tight">
    {principalWomen[index]}
  </p>
</div>
))}
</div>
<div className="mt-10">
{/* Mobile Layout */}
<div className="md:hidden text-center space-y-2">
  <p className="text-sm text-[#4A3527]">
    MRS. ELSA ACEDERA
  </p>

  <p className="text-sm text-[#4A3527]">
    MRS. SARITA MORALES
  </p>

  <p className="text-sm text-[#4A3527]">
    MRS. SOLEDAD TAN
  </p>
</div>

  {/* Desktop Layout */}
  <div className="hidden md:grid md:grid-cols-3 md:gap-4 text-center">
    <p className="text-xl text-[#4A3527]">
    MRS. SOLEDAD TAN
    </p>

    <p className="text-xl text-[#4A3527]">
    MRS. ELSA ACEDERA
    </p>

    <p className="text-xl text-[#4A3527]">
    MRS. SARITA MORALES
    </p>
  </div>
</div>
</div>

      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div className="bg-white/85 rounded-[2rem] p-8 shadow-lg border border-[#F1D3A2] text-center">
          <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-5">
            Best Man
          </p>
          <NameList names={["ROYETTE BALANQUIT"]} />
        </div>

        <div className="bg-white/85 rounded-[2rem] p-8 shadow-lg border border-[#F1D3A2] text-center">
          <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-5">
            Maid of Honor
          </p>
          <NameList names={["CHRISTINE ANDREA BROZAS"]} />
        </div>
      </div>

      <div className="bg-white/85 rounded-[2rem] p-8 md:p-10 shadow-xl border border-[#F1D3A2] text-center">
        <h3 className="text-4xl md:text-5xl text-[#4A3527] mb-8">
          Secondary Sponsors
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-4">
              To Clothe Us As One
            </p>
            <NameList names={["CHRISTIAN ANDREW BROZAS", "MADELINE GRACE BARTE"]} />
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-4">
              To Bind Us Together
            </p>
            <NameList names={["JACK NIKLAUS PHUA", "GIRLIE FAITH BROZAS"]} />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/85 rounded-[2rem] p-8 shadow-lg border border-[#F1D3A2] text-center">
          <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-6">
            Groomsmen
          </p>
          <NameList names={groomsmen} />
        </div>

        <div className="bg-white/85 rounded-[2rem] p-8 shadow-lg border border-[#F1D3A2] text-center">
          <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-6">
            Bridesmaids
          </p>
          <NameList names={bridesmaids} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
  <div className="bg-white/85 rounded-[2rem] p-8 text-center shadow-lg border border-[#F1D3A2]">
    <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-4">
      Ring Bearer
    </p>
    <p className="text-sm md:text-2xl text-[#4A3527]">
      AMANCIO ACEDERA III
    </p>
  </div>

  <div className="bg-white/85 rounded-[2rem] p-8 text-center shadow-lg border border-[#F1D3A2]">
    <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-4">
      Coin Bearer
    </p>
    <p className="text-sm md:text-2xl text-[#4A3527]">
      ADRIEL LUCAS CUEVAS
    </p>
  </div>

  <div className="bg-white/85 rounded-[2rem] p-8 text-center shadow-lg border border-[#F1D3A2]">
    <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-4">
      Bible Bearer
    </p>
    <p className="text-sm md:text-2xl text-[#4A3527]">
      XION ISAAC ACEDERA
    </p>
  </div>

  <div className="bg-white/85 rounded-[2rem] p-8 text-center shadow-lg border border-[#F1D3A2]">
    <p className="uppercase tracking-[0.25em] text-[#9A5B3F] text-xs mb-4">
      Flower Girls
    </p>
    <p className="text-sm md:text-2xl text-[#4A3527]">
      LECIA JHEN PINCA
      <br />
      MIREILLE SHAOQING LEW
    </p>
  </div>
</div>
    </div>
  )
}

function GentleRequest() {
  return (
    <div className="max-w-3xl mx-auto bg-white/85 rounded-[2rem] p-8 md:p-12 shadow-xl border border-[#F1D3A2] text-center">
      <div className="text-left max-w-3xl mx-auto">
  <ul className="space-y-5 text-base md:text-lg text-[#5C4434] list-disc pl-6">

    <li>
      <strong>RSVP:</strong> If you haven’t yet, please confirm your attendance by June 15, 2026.
    </li>

    <li>
      <strong>Timing:</strong> The ceremony begins promptly at 2:30 PM. Please arrive 15–20 minutes early to settle in.
    </li>

    <li>
      <strong>Guest Count:</strong> To keep our celebration intimate, we can only accommodate guests who have formally received and confirmed their invitation through RSVP. We kindly ask for no plus-ones. Thank you for understanding!
    </li>

    <li>
      <strong>Photos:</strong> Feel free to snap photos on your phone, but please give our professional photography team plenty of space to capture the big moments.
    </li>
    
    <li>
      <strong>Children:</strong>  While we adore your little ones, we respectfully request that attendance be limited to older children and adults.
    </li>

    <li>
      <strong>Gifts:</strong> Your presence is our favorite gift, but if you wish to bless us with something extra, we would be grateful for a gift toward our New Beginning Fund rather than traditional gifts.

    </li>

  </ul>

  <p className="mt-8 text-center italic text-lg md:text-xl text-[#6F4E37]">
  Most importantly, we want you to relax, enjoy, and be fully present as we celebrate together.
    <br />
    We can’t wait to see you soon.
  </p>
</div>
    </div>
  )
}

function AttendanceSection() {
  return (
    <section className="pt-8 pb-24 md:pt-8 md:pb-24 px-5 md:px-16 bg-gradient-to-b from-[#FFF7ED] to-[#F7E7CE]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.35em] text-[#9A5B3F] text-sm mb-6">
          Attendance Confirmation
        </p>
        <h2 className="text-4xl md:text-6xl text-[#4A3527] mb-6">
          Come Celebrate With Us!
        </h2>
        <p className="text-lg text-[#5C4434] mb-10">
        To help us plan better, we request that you confirm your attendance before 
June 15, 2026.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden"
        />
      </div>
      <AttendanceForm />
    </section>
  )
}

function AttendanceForm() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    family: "",
    comments: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyQS7icPUxI4RVbVjhHJevfDGazBxYeXC5R9Ds87zYiT0c8I4w6Vvav8VA368eOaLipdA/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
        }
      )

      alert("Thank you for confirming your attendance!")

      setFormData({
        name: "",
        attendance: "",
        family: "",
        comments: "",
      })
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  return (
    <div className="max-w-3xl mx-auto bg-white/85 rounded-[2rem] p-6 md:p-10 shadow-xl border border-[#F1D3A2]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="label">Name *</label>
          <input
            className="input"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        <div>
          <label className="label">
            Will you grace us with your presence? *
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="cursor-pointer rounded-2xl border border-[#F1D3A2] bg-white/90 p-5 text-center hover:bg-[#FFF7ED] transition">
              <input
                type="radio"
                name="attendance"
                value="Joyfully Accept"
                required
                className="sr-only peer"
                checked={formData.attendance === "Joyfully Accept"}
                onChange={(e) =>
                  setFormData({ ...formData, attendance: e.target.value })
                }
              />
              <span className="block rounded-xl peer-checked:bg-[#9A5B3F] peer-checked:text-white px-4 py-3 transition">
                Joyfully Accept
              </span>
            </label>

            <label className="cursor-pointer rounded-2xl border border-[#F1D3A2] bg-white/90 p-5 text-center hover:bg-[#FFF7ED] transition">
              <input
                type="radio"
                name="attendance"
                value="Regretfully Decline"
                required
                className="sr-only peer"
                checked={formData.attendance === "Regretfully Decline"}
                onChange={(e) =>
                  setFormData({ ...formData, attendance: e.target.value })
                }
              />
              <span className="block rounded-xl peer-checked:bg-[#9A5B3F] peer-checked:text-white px-4 py-3 transition">
                Regretfully Decline
              </span>
            </label>
          </div>
        </div>

        <div>
          <label className="label">
            If you are RSVPing for a family, please list the names of everyone
            who will be attending:
          </label>
          <textarea
            className="input"
            rows={4}
            placeholder="Family / guest names"
            value={formData.family}
            onChange={(e) =>
              setFormData({ ...formData, family: e.target.value })
            }
          />
        </div>

        <div>
          <label className="label">
            Questions and/or Comments? Let us know here:
          </label>
          <textarea
            className="input"
            rows={4}
            placeholder="Your message"
            value={formData.comments}
            onChange={(e) =>
              setFormData({ ...formData, comments: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-2xl bg-[#9A5B3F] text-white uppercase tracking-[0.18em] text-sm disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Confirm Attendance"}
        </button>
      </form>
    </div>
  )
}