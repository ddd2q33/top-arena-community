import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "Community", href: "#community" },
  { label: "Strategies", href: "#strategies" },
  { label: "Players", href: "#players" },
  { label: "Book", href: "#book" },
];

const CHANNELS = [
  {
    icon: "💬",
    title: "General Chat",
    text: "Talk with other members and share ideas.",
  },
  {
    icon: "⚔",
    title: "Find A Player",
    text: "Find people to play friendly matches and challenges.",
  },
  {
    icon: "◈",
    title: "Strategy Lab",
    text: "Discuss tactics, decisions and battle situations.",
  },
  {
    icon: "★",
    title: "Weekly Challenges",
    text: "Participate in community challenges and events.",
  },
];

const POSTS = [
  {
    initials: "MK",
    user: "MasterKai",
    time: "12 minutes ago",
    content:
      "I started focusing on defensive timing instead of attacking immediately. The difference in my matches has been huge.",
    tags: ["Strategy", "Discussion"],
    likes: 24,
    comments: 8,
  },
  {
    initials: "AL",
    user: "ArenaLearner",
    time: "31 minutes ago",
    content:
      "What do you think is more important when learning a new deck: understanding the cards or understanding the matchups?",
    tags: ["Question", "Deck Building"],
    likes: 18,
    comments: 14,
  },
  {
    initials: "RX",
    user: "RexPlayer",
    time: "1 hour ago",
    content:
      "New weekly challenge idea: win a match without making the first offensive move.",
    tags: ["Challenge"],
    likes: 31,
    comments: 11,
  },
];

const PLAYERS = ["Jaden", "ArenaRay", "Vex"];

const STRATEGIES = [
  {
    n: "01",
    title: "Reading The Arena",
    text: "Learn how to observe the battlefield before committing resources.",
  },
  {
    n: "02",
    title: "Identify The Weak Lane",
    text: "Find where your opponent has fewer defensive options.",
  },
  {
    n: "03",
    title: "Control The Pace",
    text: "Learn when to slow the battle down and when to apply pressure.",
  },
  {
    n: "04",
    title: "Positive Trades",
    text: "Create situations where your resources generate more value than your opponent's.",
  },
  {
    n: "05",
    title: "Defense Creates Offense",
    text: "Turn successful defensive decisions into opportunities.",
  },
  {
    n: "06",
    title: "Punish Overcommitment",
    text: "Recognize when an opponent spends too many resources.",
  },
];

const FLOATING_CARDS = [
  {
    cls: "top-[45px] left-[35px]",
    title: "Strategy Lab",
    sub: "Analyze your decisions",
  },
  {
    cls: "top-[110px] right-[30px]",
    title: "Find Players",
    sub: "Connect and compete",
  },
  {
    cls: "bottom-[40px] left-[60px]",
    title: "Weekly Challenge",
    sub: "New challenge available",
  },
];

function initialsOf(name: string) {
  return name
    .split(/[\s_]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function SectionHeading({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <h2 className="text-[28px] tracking-[-1px]">{title}</h2>
      <p className="max-w-[450px] text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-100 h-[72px] border-b border-border bg-background/85 backdrop-blur-[14px]">
        <div className="mx-auto flex h-full w-[min(1280px,calc(100%-40px))] items-center justify-between gap-7">
          <a href="#" className="flex items-center gap-3 font-extrabold tracking-[-0.5px]">
            <div className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-[linear-gradient(135deg,var(--brand),var(--brand-soft))] text-sm font-black text-white">
              TA
            </div>
            <div>
              Top Arena
              <span className="block font-medium text-muted-foreground">Community</span>
            </div>
          </a>

          <nav className="hidden items-center gap-[26px] lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Button
              variant="outline"
              size="lg"
              className="hidden rounded-[10px] font-bold sm:inline-flex"
            >
              Log in
            </Button>
            <Button
              size="lg"
              className="rounded-[10px] bg-brand font-bold hover:bg-brand-soft"
            >
              Join Free
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid w-[min(1280px,calc(100%-40px))] grid-cols-1 items-center gap-[60px] py-14 lg:grid-cols-[1.2fr_0.8fr] lg:pt-20 lg:pb-[60px]">
        <div>
          <div className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-border bg-brand-wash px-[11px] py-[7px] text-xs font-bold text-brand-2">
            ● THE ARENA COMMUNITY
          </div>

          <h1 className="max-w-[720px] text-[clamp(44px,6vw,76px)] leading-[0.98] tracking-[-3px]">
            Play smarter.
            <span className="block text-brand">Improve faster.</span>
          </h1>

          <p className="mt-6 max-w-[600px] text-base text-muted-foreground sm:text-lg">
            A community built around strategy, competition and continuous
            improvement. Learn new tactics, discuss battles and connect with
            players who want to get better.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="rounded-[10px] bg-brand font-bold hover:bg-brand-soft">
              Join The Community
            </Button>
            <Button variant="outline" size="lg" className="rounded-[10px] font-bold">
              Explore Strategies
            </Button>
          </div>

          <div className="mt-[38px] flex gap-5 sm:gap-[35px]">
            {[
              ["2.4K", "Members"],
              ["180+", "Strategies"],
              ["420", "Active Players"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong className="block text-2xl">{value}</strong>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ARENA VISUAL */}
        <div className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-border bg-[radial-gradient(circle_at_30%_20%,rgb(124_92_255/0.25),transparent_35%),radial-gradient(circle_at_80%_80%,rgb(93_225_196/0.12),transparent_30%),var(--surface-hero)]">
          <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[length:45px_45px]" />

          {FLOATING_CARDS.map((card) => (
            <div
              key={card.title}
              className={`absolute w-[150px] rounded-[15px] border border-border bg-float p-[15px] backdrop-blur-[10px] ${card.cls}`}
            >
              <strong className="block text-[13px]">{card.title}</strong>
              <small className="mt-1 block text-[11px] text-muted-foreground">
                {card.sub}
              </small>
            </div>
          ))}

          <div className="absolute top-1/2 left-1/2 grid h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-[radial-gradient(circle,rgb(124_92_255/0.30),rgb(124_92_255/0.04))]">
            <div className="grid h-[90px] w-[90px] -rotate-8 place-items-center rounded-[26px] bg-brand text-[38px] font-black shadow-[0_20px_60px_rgba(124,92,255,0.35)]">
              A
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-[min(1280px,calc(100%-40px))]">
        {/* CHANNELS */}
        <section id="community" className="py-[55px]">
          <SectionHeading
            title="Inside The Arena"
            text="Everything you need to learn, discuss, compete and improve."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {CHANNELS.map((channel) => (
              <a
                key={channel.title}
                href="#"
                className="rounded-[18px] border border-border bg-card p-6 transition-all hover:-translate-y-[3px] hover:bg-surface-2"
              >
                <div className="mb-[18px] grid h-[42px] w-[42px] place-items-center rounded-xl bg-brand/12 text-[19px]">
                  {channel.icon}
                </div>
                <h3 className="mb-[7px] text-base">{channel.title}</h3>
                <p className="text-[13px] text-muted-foreground">{channel.text}</p>
              </a>
            ))}
          </div>
        </section>

        {/* FEED */}
        <section className="py-[55px]">
          <SectionHeading
            title="Community Activity"
            text="See what players are discussing right now."
          />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_0.7fr]">
            <div className="flex flex-col gap-3.5">
              {POSTS.map((post) => (
                <article
                  key={post.user}
                  className="rounded-[18px] border border-border bg-card p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-[13px] font-extrabold">
                      {post.initials}
                    </div>
                    <div>
                      <strong className="block text-[13px]">{post.user}</strong>
                      <span className="text-[11px] text-muted-foreground">{post.time}</span>
                    </div>
                  </div>

                  <div className="mt-[15px] text-sm text-post-text">{post.content}</div>

                  <div className="mt-[15px] flex flex-wrap gap-[7px]">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[7px] bg-muted px-2 py-[5px] text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-[18px] flex gap-[18px] text-xs text-muted-foreground">
                    <span>{post.likes} Likes</span>
                    <span>{post.comments} Comments</span>
                  </div>
                </article>
              ))}
            </div>

            {/* SIDEBAR */}
            <aside id="players" className="flex flex-col gap-[15px]">
              <div className="rounded-[18px] border border-border bg-card p-5">
                <h3 className="mb-[15px] text-[15px]">Players Online</h3>
                {PLAYERS.map((name, i) => (
                  <div
                    key={name}
                    className={`flex items-center justify-between py-2.5 ${
                      i === PLAYERS.length - 1 ? "" : "border-b border-border"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-8 w-8 place-items-center rounded-[9px] bg-secondary text-[10px] font-extrabold">
                        {initialsOf(name)}
                      </div>
                      <div>
                        <div className="text-xs font-bold">{name}</div>
                        <div className="text-[10px] text-brand-2">● Online</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[18px] border border-border bg-card p-5">
                <h3 className="mb-[15px] text-[15px]">Upcoming Event</h3>
                <strong>Weekly Strategy Challenge</strong>
                <p className="mt-2 text-xs text-muted-foreground">Starts Friday</p>
                <Button
                  size="lg"
                  className="mt-[15px] w-full rounded-[10px] bg-brand font-bold hover:bg-brand-soft"
                >
                  View Challenge
                </Button>
              </div>
            </aside>
          </div>
        </section>

        {/* STRATEGIES */}
        <section id="strategies" className="py-[55px]">
          <SectionHeading
            title="Strategy Library"
            text="Learn principles that help you make better decisions during competitive matches."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STRATEGIES.map((strategy) => (
              <article
                key={strategy.n}
                className="relative min-h-[210px] overflow-hidden rounded-[18px] border border-border bg-card p-6 after:absolute after:right-[-30px] after:bottom-[-30px] after:h-[100px] after:w-[100px] after:rounded-full after:bg-brand/7 after:content-['']"
              >
                <div className="mb-[35px] text-xs font-extrabold text-brand">
                  STRATEGY #{strategy.n}
                </div>
                <h3 className="mb-2 text-[19px]">{strategy.title}</h3>
                <p className="text-[13px] text-muted-foreground">{strategy.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* BOOK */}
        <section id="book" className="py-[55px]">
          <div className="grid grid-cols-1 items-center gap-[50px] rounded-[28px] border border-border bg-[linear-gradient(120deg,rgb(124_92_255/0.12),transparent_60%),var(--card)] p-[30px] lg:grid-cols-[1fr_0.8fr] lg:p-12">
            <div>
              <div className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-border bg-brand-wash px-[11px] py-[7px] text-xs font-bold text-brand-2">
                THE ARENA LIBRARY
              </div>
              <h2 className="text-3xl leading-[1.05] tracking-[-1.5px] lg:text-[38px]">
                100 Clash Strategies
              </h2>
              <p className="mt-4 max-w-[550px] text-muted-foreground">
                A visual guide built around practical decision-making, battlefield
                awareness, resource management, defense, attack strategy and
                competitive mindset.
              </p>
              <div className="mt-6">
                <Button
                  size="lg"
                  className="rounded-[10px] bg-brand font-bold hover:bg-brand-soft"
                >
                  Explore The Book
                </Button>
              </div>
            </div>

            <div>
              <div className="mx-auto flex h-[300px] w-[220px] flex-col justify-between rounded-lg border border-hairline bg-[linear-gradient(145deg,var(--cover-a),var(--cover-b))] p-6 shadow-[20px_25px_60px_rgba(0,0,0,0.45)]">
                <small className="text-[9px] font-extrabold tracking-[2px] text-brand-2">
                  TOP ARENA
                </small>
                <h3 className="text-[30px] leading-[0.95]">
                  100
                  <br />
                  CLASH
                  <br />
                  STRATEGIES
                </h3>
                <span className="text-[10px] text-muted-foreground">
                  A COMPLETE VISUAL GUIDE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 text-center">
          <h2 className="text-[32px] tracking-[-2px] lg:text-[42px]">Enter The Arena.</h2>
          <p className="mx-auto mt-4 max-w-[520px] text-muted-foreground">
            Learn better strategies, meet other players and turn every battle into an
            opportunity to improve.
          </p>
          <div className="mt-6">
            <Button size="lg" className="rounded-[10px] bg-brand font-bold hover:bg-brand-soft">
              Join The Community
            </Button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border py-[30px] text-xs text-muted-foreground">
        <div className="mx-auto flex w-[min(1280px,calc(100%-40px))] flex-col gap-2.5 sm:flex-row sm:justify-between">
          <div>© 2026 Top Arena</div>
          <div>Independent gaming strategy community</div>
        </div>
      </footer>
    </>
  );
}