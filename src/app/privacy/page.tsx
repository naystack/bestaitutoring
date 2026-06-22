export default function Privacy() {
  return (
    <main className="bg-white text-neutral-900">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated June 2026</p>

        <div className="space-y-8 text-base text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">What this site collects</h2>
            <p>
              This site uses Google Analytics and Meta Pixel to understand how visitors use it.
              These tools collect anonymous data including which pages you visit, how long you spend on the site,
              what device and browser you&apos;re using, and your general location (city or country level, not your address).
              No names, email addresses, or other personally identifying information are collected through these tools.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">Cookies</h2>
            <p>
              Google Analytics and Meta Pixel set cookies in your browser to track visits over time and
              measure traffic patterns. These are standard analytics cookies. They don&apos;t store personal information
              and aren&apos;t used to serve you ads on this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">Affiliate links</h2>
            <p>
              Some links on this site may be affiliate links, meaning I earn a small commission if you
              click through and make a purchase. I&apos;ll note this clearly wherever it applies.
              Right now, no affiliate relationships are active on this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">Your data is not sold</h2>
            <p>
              I don&apos;t sell, rent, or share your data with anyone outside of the analytics tools listed above.
              The data collected is used only to understand how the site is being used so I can improve it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">How to opt out</h2>
            <p>
              You can limit analytics tracking in a few ways: use your browser&apos;s built-in privacy settings to
              block third-party cookies, install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 underline"
              >
                Google Analytics opt-out browser add-on
              </a>
              , or use a browser extension that blocks tracking scripts.
              Most modern browsers also have a &ldquo;Do Not Track&rdquo; setting, though not all tools honor it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">Questions</h2>
            <p>
              This is a one-person site. If you have questions about how your data is handled, the best way
              to reach me is through the contact information listed on this site.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <a href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            &larr; Back to bestaitutoring.com
          </a>
        </div>
      </div>
    </main>
  );
}
