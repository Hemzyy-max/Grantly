# Grantly

Grantly is a responsive scholarship discovery and application-management dashboard. The shipped interface runs in **demo mode** so it never presents fabricated opportunities as verified. Demo cards carry an explicit status and official-source links are kept separate from platform content.

## Run locally

1. Install Node.js 20+ and run `npm install`.
2. Copy `.env.example` to `.env.local` and add your Supabase project URL and publishable/anon key.
3. Run `npm run dev` and open `http://localhost:3000`.

## Supabase setup

1. Create a Supabase project and enable email authentication.
2. Apply `supabase/migrations/20261107100000_grantly_schema.sql` through the Supabase CLI or SQL editor.
3. Optionally apply `supabase/seed.sql`. It contains clearly labelled demo content only.
4. Add a user ID to `public.administrators` only from a trusted server/admin workflow. Do not use browser-editable metadata for roles.

The migration enables RLS for every public table. User data is restricted by `auth.uid()`, documents live in a private bucket under a per-user folder, and the browser must never receive a service-role key.

## Architecture

- `app/page.tsx`: responsive student experience with working discovery, filtering, saved items, tracker stages/checklists, document vault, calendar and detail drawer.
- `lib/demo-data.ts`: intentionally labelled demo records used before a Supabase connection is configured.
- `lib/supabase/client.ts`: browser Supabase client factory.
- `supabase/migrations`: normalized PostgreSQL schema, policies and private storage setup.

## Production completion notes

Connect the client to server-side route handlers/actions for authentication, CRUD and uploads; keep administrative mutations server-side and verify `administrators` there. Any AI route must ground responses exclusively in retrieved scholarship records, flag missing fields as uncertain, never synthesize official URLs/dates/criteria, and rate-limit requests. Use a scheduled server job for reminders and record delivery in `reminders.sent_at`.

## Deployment

Deploy to Vercel or another Node-compatible Next.js host. Configure the two `NEXT_PUBLIC_SUPABASE_*` variables in the host settings, run the migration against the production database, and set a server-only AI key only if the grounded AI route is enabled.
