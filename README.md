# Best AI Tutoring

A parent's hands-on look at AI tutoring tools for kids.

## Status

This is the infrastructure scaffold only, basic Next.js + Tailwind project,
no real page content yet. Next steps in the build plan: comparison content,
the actual page design, then tracking (GA4, GTM, Meta Pixel).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

## Deploying

1. Push this repo to GitHub.
2. Import it at vercel.com/new, connect the GitHub repo.
3. In the Vercel project's Settings > Domains, add bestaitutoring.com.
4. Vercel will give you a DNS record to add. Add it in Cloudflare under
   the domain's DNS settings.
5. SSL provisions automatically once DNS resolves, usually within minutes.
