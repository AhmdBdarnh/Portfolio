import React, { useState } from "react";

import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code2,
  Terminal,
  Layers,
  Cloud,
  Menu,
  X,
  MapPin,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

import { profile, skills, projects } from "./data";

const sections = ["About", "Skills", "Projects", "Contact"];
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

function IconLink({ href, children, label }) {
  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social"
    >
      {children}
    </a>
  );
}

function Heading({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <p className="eyebrow">{eyebrow}</p>

      <h2 className="section-title">{title}</h2>

      {description && (
        <p className="mt-4 max-w-xl text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="ambient ambient-a" />

      <div className="ambient ambient-b" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070b17]/85 backdrop-blur-xl">
        <nav className="container-main flex h-20 items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3 font-semibold tracking-tight"
          >
            <span className="brand-mark">
              <Code2 size={19} />
            </span>

            <span>
              {profile.initials}

              <span className="text-cyan">.</span>

              <span className="ml-2 text-xs font-normal tracking-[.22em] text-slate-500 hidden sm:inline">
                PORTFOLIO
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            {sections.map((s) => (
              <a key={s} className="nav-link" href={"#" + s.toLowerCase()}>
                {s}
              </a>
            ))}
          </div>

          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-outline text-sm"
          >
            Let's talk <ArrowUpRight size={15} />
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-slate-200"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </nav>

        {menu && (
          <div className="md:hidden border-t border-white/10 bg-[#0b1020] px-8 py-5 flex flex-col gap-5">
            {sections.map((s) => (
              <a
                key={s}
                onClick={() => setMenu(false)}
                href={"#" + s.toLowerCase()}
              >
                {s}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="container-main relative min-h-[740px] flex items-center py-24 lg:py-36"
        >
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium tracking-wide text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />{" "}
                OPEN TO OPPORTUNITIES
              </div>

              <p className="mt-9 text-lg text-slate-400">
                Hello, I'm {profile.name}{" "}
                <span className="inline-block">✳</span>
              </p>

              <h1 className="mt-4 text-5xl font-bold leading-[1.08] tracking-[-.055em] sm:text-6xl xl:text-[82px]">
                Building the <br />
                <span className="gradient-text">future with code.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                {profile.summary}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a className="btn-primary" href="#projects">
                  Explore my work <ArrowUpRight size={17} />
                </a>

                <a className="btn-outline" href="#contact">
                  Get in touch <ArrowRight size={17} />
                </a>
              </div>

              <div className="mt-14 flex items-center gap-4">
                <IconLink href={profile.github} label="GitHub">
                  <Github size={19} />
                </IconLink>

                <IconLink href={profile.linkedin} label="LinkedIn">
                  <Linkedin size={19} />
                </IconLink>

                <IconLink href={gmailComposeUrl} label="Email">
                  <Mail size={19} />
                </IconLink>

                <span className="ml-3 hidden h-6 w-px bg-white/10 sm:block" />

                <span className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
                  <MapPin size={15} />

                  {profile.location}
                </span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="orbit orbit-one" />

              <div className="orbit orbit-two" />

              <div className="code-window">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <div className="flex gap-2">
                    <span className="dot bg-rose-400" />

                    <span className="dot bg-amber-400" />

                    <span className="dot bg-emerald-400" />
                  </div>

                  <span className="text-xs text-slate-500">engineer.js</span>

                  <Terminal size={16} className="text-slate-500" />
                </div>

                <div className="space-y-3 px-7 py-8 font-mono text-[14px] leading-7">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan">engineer</span> = {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">"{profile.name}"</span>,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-emerald-300">
                      "Software Engineer"
                    </span>
                    ,
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-400">focus:</span> [
                  </p>

                  <p className="pl-10 text-amber-200">"Clean Code",</p>

                  <p className="pl-10 text-amber-200">"Creative Solutions",</p>

                  <p className="pl-10 text-amber-200">"Real Impact"</p>

                  <p className="pl-5">],</p>

                  <p className="pl-5">
                    <span className="text-slate-400">passion:</span>{" "}
                    <span className="text-purple-300">true</span>
                  </p>

                  <p>{"}"};</p>

                  <p className="pt-3 text-slate-500">
                    // Let's build something great_
                  </p>
                </div>
              </div>

              <div className="floating-tag">
                <CheckCircle2 size={16} className="text-emerald-300" /> Always
                learning. Always building.
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-10 left-0 hidden items-center gap-3 text-xs tracking-[.2em] text-slate-500 lg:flex"
          >
            <span className="h-8 w-px bg-gradient-to-b from-cyan to-transparent" />{" "}
            SCROLL TO EXPLORE
          </a>
        </section>

        <section id="about" className="section-wrap border-t border-white/5">
          <div className="container-main grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <Heading
              eyebrow="01 / ABOUT ME"
              title={
                <>
                  Engineer by mindset.
                  <br />
                  <span className="text-slate-500">Creator by nature.</span>
                </>
              }
            />

            <div>
              <p className="text-xl leading-9 text-slate-300">
                {profile.about}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <span className="pill">Software Engineering</span>

                <span className="pill">Full-Stack Development</span>

                <span className="pill">Problem Solving</span>
              </div>

              {profile.resume && (
                <a
                  href={profile.resume}
                  download
                  className="mt-9 inline-flex items-center gap-2 text-cyan hover:text-white"
                >
                  Download resume <Download size={16} />
                </a>
              )}
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap">
          <div className="container-main">
            <Heading
              eyebrow="02 / TECH STACK"
              title={
                <>
                  Tools of the <span className="gradient-text">trade.</span>
                </>
              }
              description="A versatile toolkit for building products from the ground up."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {skills.map((s, i) => {
                const Icon = [Layers, Terminal, Code2, Layers, Cloud][i];

                return (
                  <article key={s.group} className="glass-card group">
                    <div className="mb-8 inline-flex rounded-xl border border-cyan/15 bg-cyan/10 p-3 text-cyan group-hover:bg-cyan/20">
                      <Icon size={22} />
                    </div>

                    <h3 className="mb-5 text-xl font-semibold">{s.group}</h3>

                    <div className="flex flex-wrap gap-2">
                      {s.items.map((t) => (
                        <span key={t} className="skill-chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section-wrap">
          <div className="container-main">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <Heading
                eyebrow="03 / SELECTED WORK"
                title={
                  <>
                    Featured <span className="gradient-text">projects.</span>
                  </>
                }
                description="A few examples of what I build."
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <article key={p.number} className="project-card">
                  <div className={"project-art art-" + i}>
                    {p.image ? (
                      <a
                        href={p.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${p.name} image`}
                        className="block h-full w-full overflow-hidden"
                      >
                        <img
                          src={p.image}
                          alt={p.imageAlt || `${p.name} logo`}
                          loading="lazy"
                          className={`h-full w-full transition duration-500 hover:scale-[1.03] ${
                            p.number === "01"
                              ? "bg-white object-contain p-4"
                              : "bg-[#080e1c] object-contain object-center p-2"
                          }`}
                        />
                      </a>
                    ) : (
                      <>
                        <div className="project-art-grid" />

                        <span className="project-art-icon">
                          <Code2 size={38} />
                        </span>
                      </>
                    )}

                    <span className="pointer-events-none absolute bottom-5 left-6 rounded bg-[#080e1c]/80 px-2 py-1 text-xs font-mono tracking-widest text-white/80">
                      PROJECT / {p.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <p className="eyebrow !mb-3">{p.category}</p>

                    <h3 className="text-2xl font-semibold tracking-tight">
                      {p.name}
                    </h3>

                    <p className="mt-4 min-h-[95px] text-sm leading-7 text-slate-400">
                      {p.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span className="skill-chip" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-5 border-t border-white/10 pt-5 text-sm">
                      {p.demo && (
                        <a
                          className="project-link"
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live demo <ExternalLink size={15} />
                        </a>
                      )}

                      {p.repo && (
                        <a
                          className="project-link"
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {p.imageProcessingRepo ? "Main source" : "Source"} <Github size={15} />
                        </a>
                      )}
                      {p.imageProcessingRepo && (
                        <a
                          className="project-link"
                          href={p.imageProcessingRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Image processing <Github size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap">
          <div className="container-main">
            <div className="contact-panel">
              <div className="relative z-10">
                <p className="eyebrow">04 / CONTACT</p>

                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Have something <br />
                  <span className="gradient-text">in mind?</span>
                </h2>

                <p className="mt-6 max-w-lg text-slate-400 leading-8">
                  I'm always interested in meaningful projects, new challenges,
                  and opportunities to collaborate. Let's connect.
                </p>

                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-9"
                >
                  Say hello <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="relative z-10 mt-12 lg:mt-0">
                <p className="text-xs uppercase tracking-[.25em] text-slate-500">
                  GET IN TOUCH
                </p>

                <a
                  className="mt-5 block break-all text-xl text-white hover:text-cyan"
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.email}
                </a>

                <div className="mt-7 flex gap-3">
                  <IconLink href={profile.github} label="GitHub">
                    <Github size={19} />
                  </IconLink>

                  <IconLink href={profile.linkedin} label="LinkedIn">
                    <Linkedin size={19} />
                  </IconLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="container-main flex flex-wrap items-center justify-between gap-4 py-8 text-sm text-slate-500">
          <span>
            © {new Date().getFullYear()} {profile.name}.
          </span>

          <a href="#home" className="hover:text-cyan">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
