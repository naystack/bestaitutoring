import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="bg-white text-neutral-900">

        {/* 1. Hero — full viewport width, image left edge aligns with nav */}
        <div className="bg-white">
          <div className="flex flex-col lg:flex-row lg:items-center w-full py-10 lg:py-14">
            {/* Left: image — pl matches nav px-6/px-8 exactly */}
            <div className="w-full lg:w-1/2 pl-6 lg:pl-8">
              <img
                src="/hero-image.png.png"
                alt="A dad helping his son with AI tutoring"
                className="w-full h-auto"
              />
            </div>
            {/* Right: text */}
            <div className="w-full lg:w-1/2 px-6 lg:px-12 py-10 lg:py-0 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-neutral-900">
                AI is changing education. Most &ldquo;AI tutors&rdquo; are just smarter flashcards.
              </h1>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                I&apos;m a dad trying to figure this out for my son. Here&apos;s what I found after going deep on the category.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Answer callout — white band, indigo card */}
        <div className="px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">Quick Answer</p>
              <p className="text-xl font-semibold text-neutral-900 mb-2">Best AI tutor for kids right now: Wild Zebra</p>
              <p className="text-base text-gray-700 leading-relaxed mb-5">
                It&apos;s the only tool I&apos;ve found that explicitly commits to persistent memory of your child&apos;s interests and learning style, not just adaptive difficulty.
              </p>
              <a
                href="https://wildzebra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                Try Wild Zebra free for 14 days
              </a>
            </div>
          </div>
        </div>

        {/* 2. What I mean by AI tutor — bg-gray-50 */}
        <div id="definition" className="bg-gray-50">
          <section className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-5">What I mean by AI tutor</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              When I say AI tutor, I mean something specific. Not a program that adjusts difficulty on the fly. Not a quiz engine that tracks right and wrong answers. Something closer to what a good human tutor actually does. Here are the three things I used to evaluate everything I looked at.
            </p>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-neutral-900">Customization to your child</p>
                <p className="mt-1 text-gray-700 leading-relaxed">
                  Not just adjusting difficulty based on right/wrong answers. Personalizing to how your child thinks, what they&apos;re interested in, and where they get stuck.
                </p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Persistent memory of your child</p>
                <p className="mt-1 text-gray-700 leading-relaxed">
                  The tutor should know your child over time, not start from scratch every session. Built up gradually, not from a one-off assessment.
                </p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">A focus on mastery, not answers</p>
                <p className="mt-1 text-gray-700 leading-relaxed">
                  A tutor pushes back even when your child gets the right answer. Flashcards reward the right answer. A tutor asks &ldquo;how did you get there?&rdquo;
                </p>
              </div>
            </div>
            <p className="mt-8 text-base text-gray-700 leading-relaxed">
              By that definition, most products on the market aren&apos;t AI tutors. They&apos;re AI-assisted practice tools. That&apos;s not a bad thing, but it&apos;s a different thing.
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
                      href="https://wildzebra.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                    >
                      Try Wild Zebra free for 14 days
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
            </p>
          </div>
        </footer>

      </main>
    </>
  );
}
