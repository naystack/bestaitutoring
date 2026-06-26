import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="bg-white text-neutral-900">

        {/* 1. Hero — shared max-w-4xl container matches nav exactly */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-8 py-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left: image — 1/2 of container */}
              <div className="w-full lg:w-1/2">
                <img
                  src="/hero-image.png.png"
                  alt="A dad helping his son with AI tutoring"
                  className="w-full h-auto max-h-72 lg:max-h-none object-contain"
                />
              </div>
              {/* Right: text — 1/2, offset from top */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center pt-8 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-neutral-900">
                  It&apos;s 2026. Where are the AI Tutors?
                </h1>
                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                  A great human tutor knows your child, remembers them session to session, and pushes for understanding over right answers. Today, all of that should be possible with AI. So where are the AI tutors?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Answer callout — white band, indigo card */}
        <div className="px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">Quick Answer</p>
              <p className="text-xl font-semibold text-neutral-900 mb-2">Best AI tutor today: Wild Zebra</p>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                The only tool I&apos;ve found that works like a human tutor, building on what it knows about your child to teach in a way that actually fits them.
              </p>
              <a
                href="https://wildzebra.com/?utm_source=bestaitutoring&utm_medium=referral&utm_campaign=comparison_site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Check out Wild Zebra
              </a>
            </div>
          </div>
        </div>

        {/* 2. AI Tutors vs. Smarter Flashcards — bg-gray-50 */}
        <div id="definition" className="bg-gray-50">
          <section className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-5">AI Tutors vs. Smarter Flashcards</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              Three things separate them. Most products on the market only have one or two.
            </p>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-neutral-900">Knows your child, not just their score</p>
                <p className="mt-1 text-gray-700 leading-relaxed">
                  Personalizes to how your child thinks, what they&apos;re interested in, and where they get stuck. Not just whether they got the last question right.
                </p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Remembers them session to session</p>
                <p className="mt-1 text-gray-700 leading-relaxed">
                  Builds understanding of your child over time. Not from a one-off assessment. Not starting from scratch every session.
                </p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Pushes for understanding, not just right answers</p>
                <p className="mt-1 text-gray-700 leading-relaxed">
                  When your child gets the right answer, a tutor asks how they got there. Flashcards reward the right answer. A tutor questions it.
                </p>
              </div>
            </div>
            <p className="mt-8 text-base text-gray-700 leading-relaxed">
              Most of what&apos;s calling itself an AI tutor today is AI-assisted practice. That&apos;s not a bad thing. But it&apos;s a different thing.
            </p>
          </section>
        </div>

        {/* 3. What I've ruled out — white */}
        <section id="ruled-out" className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-5">What I&apos;ve ruled out and why</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-7">
            Two well-known names parents ask about:
          </p>
          <div className="space-y-4">
            <div className="border border-neutral-200 rounded-lg p-5">
              <p className="font-semibold text-neutral-900 mb-2">IXL</p>
              <p className="text-gray-700 leading-relaxed text-base">
                IXL is genuinely good at what it does. Adaptive difficulty, broad subject coverage, clean interface. But the core loop is: answer questions, get them right, move on. That&apos;s not tutoring, that&apos;s practice. No persistent memory, no interest-based personalization, no Socratic pushback. We use it. I just wouldn&apos;t call it an AI tutor.
              </p>
            </div>
            <div className="border border-neutral-200 rounded-lg p-5">
              <p className="font-semibold text-neutral-900 mb-2">Photomath</p>
              <p className="text-gray-700 leading-relaxed text-base">
                Snap a photo of a math problem and get the answer with steps shown. Useful in a pinch. But it&apos;s optimized to give your child the answer fast, which is the opposite of what a tutor should do. If your child uses this for homework, they&apos;re not learning, they&apos;re finishing.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Three tools worth your time — bg-gray-50 */}
        <div id="top-picks" className="bg-gray-50">
          <section className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-8">
              Three tools worth your time (and one that&apos;s earning the top spot)
            </h2>
            <div className="space-y-6">

              {/* Wild Zebra - top pick */}
              <div className="rounded-lg shadow-sm border border-neutral-200 overflow-hidden bg-white">
                <div className="h-1.5 bg-emerald-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="text-xl font-semibold text-neutral-900">Wild Zebra</h3>
                    <span className="bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full border border-emerald-200">
                      Top Pick
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm mb-6 pb-5 border-b border-neutral-100">
                    <div>
                      <p className="text-neutral-400 mb-0.5">Grades</p>
                      <p className="font-medium text-neutral-800">2&ndash;9</p>
                    </div>
                    <div>
                      <p className="text-neutral-400 mb-0.5">Subjects</p>
                      <p className="font-medium text-neutral-800">Math, reading</p>
                    </div>
                    <div>
                      <p className="text-neutral-400 mb-0.5">Price</p>
                      <p className="font-medium text-neutral-800">$48/mo or $40/mo annually</p>
                    </div>
                  </div>
                  <div className="space-y-4 leading-relaxed text-base">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-1">What it is</p>
                      <p className="text-gray-700">Wild Zebra is a Socratic, interest-based AI tutor built in partnership with ERB. It asks questions rather than giving answers, and it ties every problem to what your child is actually interested in, whether that&apos;s sports, animals, music, or something else entirely.</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-1">What makes it different</p>
                      <p className="text-gray-700">It&apos;s the only product I&apos;ve found that explicitly commits to persistent memory of your child&apos;s interests and learning style across sessions. It&apos;s also the only one built specifically for the independent school market, ERB-aligned standards and all.</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-1">Honest take</p>
                      <p className="text-gray-700">Math and reading only for now, so it won&apos;t cover everything. Pricier than alternatives. But if you want a tutor that actually knows your kid over time rather than one that just adjusts difficulty based on right answers, this is the one.</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://wildzebra.com/?utm_source=bestaitutoring&utm_medium=referral&utm_campaign=comparison_site"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                    >
                      Check out Wild Zebra
                    </a>
                    <p className="mt-2 text-xs text-neutral-400">14-day free trial, no credit card required.</p>
                  </div>
                </div>
              </div>

              {/* Khanmigo */}
              <div className="rounded-lg shadow-sm border border-neutral-200 p-6 bg-white">
                <h3 className="text-xl font-semibold text-neutral-900 mb-5">Khanmigo</h3>
                <div className="grid grid-cols-3 gap-4 text-sm mb-6 pb-5 border-b border-neutral-100">
                  <div>
                    <p className="text-neutral-400 mb-0.5">Grades</p>
                    <p className="font-medium text-neutral-800">K&ndash;12</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-0.5">Subjects</p>
                    <p className="font-medium text-neutral-800">Math, science, humanities, coding, writing</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-0.5">Price</p>
                    <p className="font-medium text-neutral-800">$4/mo or $44/yr</p>
                  </div>
                </div>
                <div className="space-y-4 leading-relaxed text-base">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-1">What it is</p>
                    <p className="text-gray-700">Khan Academy&apos;s AI tutor, powered by GPT-4. It uses Socratic questioning rather than giving direct answers, and it&apos;s deeply integrated with Khan Academy&apos;s content library across virtually every subject.</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-1">What makes it different</p>
                    <p className="text-gray-700">Widest subject coverage in the category at the lowest price point. If your child already uses Khan Academy, this is an easy add. Common Sense Media rates it higher than ChatGPT for school use.</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-1">Honest take</p>
                    <p className="text-gray-700">Doesn&apos;t explicitly claim persistent memory of your child across sessions, and only about 15% of students use it consistently, which Khan Academy has publicly acknowledged. Text-only, no voice. At $4/month it&apos;s hard to argue against trying it.</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="https://khanmigo.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-800 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Try Khanmigo
                  </a>
                </div>
              </div>

              {/* Synthesis Tutor */}
              <div className="rounded-lg shadow-sm border border-neutral-200 p-6 bg-white">
                <h3 className="text-xl font-semibold text-neutral-900 mb-5">Synthesis Tutor</h3>
                <div className="grid grid-cols-3 gap-4 text-sm mb-6 pb-5 border-b border-neutral-100">
                  <div>
                    <p className="text-neutral-400 mb-0.5">Ages</p>
                    <p className="font-medium text-neutral-800">5&ndash;11 (K&ndash;5)</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-0.5">Subjects</p>
                    <p className="font-medium text-neutral-800">Math only</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 mb-0.5">Price</p>
                    <p className="font-medium text-neutral-800">~$99&ndash;119/yr, up to 7 kids</p>
                  </div>
                </div>
                <div className="space-y-4 leading-relaxed text-base">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-1">What it is</p>
                    <p className="text-gray-700">An AI math tutor built on DARPA-funded research, originally developed by SpaceX educators. It uses a multi-sensory approach (visual manipulatives, number lines, conversational back-and-forth) to build real mathematical understanding, not memorization.</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-1">What makes it different</p>
                    <p className="text-gray-700">Exceptional engagement numbers, especially for kids who hate math. Parents consistently report their kids asking to use it. Strong track record with neurodiverse learners.</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 mb-1">Honest take</p>
                    <p className="text-gray-700">Math only, and it tops out at grade 5. Doesn&apos;t explicitly claim persistent memory. If your child is in the K&ndash;5 window and math is the primary concern, this is worth a serious look.</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="https://www.synthesis.com/tutor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-800 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Try Synthesis Tutor
                  </a>
                  <p className="mt-2 text-xs text-neutral-400">7-day free trial.</p>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* 5. A note on ChatGPT wrappers — white */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-5">A note on ChatGPT wrappers</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            You&apos;ll find plenty of other tools calling themselves AI tutors. Most are what I&apos;d call ChatGPT wrappers: a clean interface layered on top of a general-purpose AI model, with no persistent memory of your child and no particular commitment to mastery over answer-getting. TutorAI is a good example. Their own marketing calls it personalized, but there&apos;s nothing in the product that pushes a child to understand why, not just what. That&apos;s not a tutor. That&apos;s a very fast homework helper. The three tools above are the ones I think are actually building toward what AI tutoring should be.
          </p>
        </section>

        {/* 6. What I'm watching for — bg-gray-50 */}
        <div className="bg-gray-50">
          <section className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-5">What I&apos;m watching for</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              None of these tools have fully cracked it yet. The version I&apos;m waiting for is an AI tutor with a deep, persistent understanding of my child built over years, not sessions. One that knows he gets frustrated when problems feel arbitrary, that he lights up when math connects to something real, and that he needs to be pushed even when he gets the right answer. That product doesn&apos;t fully exist yet. Wild Zebra is the closest I&apos;ve seen to building toward it.
            </p>
          </section>
        </div>

        {/* 7. About this site — bg-gray-900 */}
        <footer id="about" className="bg-gray-900">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold text-white mb-5">About this site</h2>
            <p className="text-base text-gray-300 leading-relaxed">
              I&apos;m a dad and a marketing operator who spent 12 years scaling growth for tech companies. I built this site to learn about digital attribution and because I got genuinely curious about this category after going deep with several AI tutoring companies. I have no formal affiliation with any of the products listed here. If I earn an affiliate commission from a link on this page, I&apos;ll say so clearly. Right now, I don&apos;t.
            </p>
            <p className="mt-8 text-sm text-gray-500">
              bestaitutoring.com | Built by a parent, for parents
              <span className="mx-3 text-gray-600">&middot;</span>
              <a href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </footer>

      </main>
    </>
  );
}
