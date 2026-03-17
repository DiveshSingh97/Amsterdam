# Amsterdam Trip 2026 🌷

Group trip planning site with live restaurant voting, group polls, per-day comments, and live Amsterdam weather.

## Stack
- **React + Vite** — same as Finanza
- **Supabase** — reusing your existing Finanza project (new tables, no conflict)
- **Vercel** — new project, deploys on every push to main
- **OpenWeatherMap** — free tier, live Amsterdam forecast

---

## Setup (one-time, ~15 minutes)

### 1. Create the GitHub repo

```bash
# In terminal, from wherever you keep your projects
git init amsterdam-trip
cd amsterdam-trip
# Copy all these files in, then:
git add .
git commit -m "Initial commit"
gh repo create amsterdam-trip --public --push
# or manually create on github.com and push
```

### 2. Set up Supabase tables

1. Go to your **Finanza Supabase project** dashboard
2. Click **SQL Editor** → **New Query**
3. Paste the entire contents of `supabase_setup.sql`
4. Click **Run**

That creates 3 tables: `amsterdam_restaurant_votes`, `amsterdam_poll_votes`, `amsterdam_comments`

### 3. Get your Supabase keys

In your Supabase dashboard:
- **Project Settings** → **API**
- Copy **Project URL** and **anon/public key** (same ones as Finanza)

### 4. Get a free OpenWeatherMap API key (optional — for live weather)

1. Sign up free at https://openweathermap.org/api
2. Go to **API Keys** tab
3. Copy your default key
4. Free tier allows 1,000 calls/day — more than enough

### 5. Create `.env` file locally

```bash
cp .env.example .env
```

Edit `.env`:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_WEATHER_API_KEY=your-openweathermap-key-here
```

### 6. Run locally to test

```bash
npm install
npm run dev
```

Open http://localhost:5173 — everything should work.

### 7. Deploy to Vercel

1. Go to https://vercel.com/new
2. Click **Import Git Repository** → select `amsterdam-trip`
3. Framework preset: **Vite** (auto-detected)
4. Click **Environment Variables** and add all 3 from your `.env`:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_WEATHER_API_KEY`
5. Click **Deploy**

Done. You'll get a URL like `amsterdam-trip.vercel.app` — share this with the group.

---

## Making edits

The entire trip content lives in one file:

```
src/data/tripData.js
```

To change anything — restaurants, activities, descriptions, prices, weather notes, add a new poll — just edit that file and push to GitHub. Vercel auto-deploys in ~30 seconds.

```bash
# Typical edit workflow
# 1. Edit src/data/tripData.js (or any component)
# 2. Test locally with npm run dev
# 3. Push:
git add .
git commit -m "Update Day 3 dinner options"
git push
# Vercel picks it up automatically
```

---

## Adding new polls

In `src/data/tripData.js`, find the `POLLS` array and add:

```js
{
  id: 'my-new-poll',          // unique ID, no spaces
  question: 'Should we do X?',
  options: [
    { id: 'yes', label: '✅ Yes', desc: 'Optional subtitle' },
    { id: 'no',  label: '❌ No',  desc: 'Optional subtitle' },
  ]
}
```

---

## Project structure

```
amsterdam-trip/
├── public/
│   └── bobby.png              ← Bobby the cat (favicon + tips photo)
├── src/
│   ├── components/
│   │   ├── BobbyTips.jsx      ← Collapsible tips section
│   │   ├── DayCard.jsx        ← Each day (weather, activities, extras, meals, comments)
│   │   ├── RestaurantCard.jsx ← Individual restaurant with voting
│   │   ├── Poll.jsx           ← Group poll widget
│   │   └── Comments.jsx       ← Per-day comments
│   ├── data/
│   │   └── tripData.js        ← ALL content lives here — edit this to update the site
│   ├── hooks/
│   │   └── useTrip.js         ← Supabase hooks for votes, polls, comments, weather
│   ├── lib/
│   │   └── supabase.js        ← Supabase client
│   ├── App.jsx                ← Layout, hero, nav, polls, day cards
│   └── main.jsx               ← Entry point
├── supabase_setup.sql         ← Run once in Supabase SQL editor
├── .env.example               ← Copy to .env and fill in keys
├── .gitignore                 ← .env is gitignored (never commit keys)
├── index.html
├── vite.config.js
└── package.json
```

---

## Voting & comments — how it works

- Each browser gets a random anonymous ID stored in `localStorage`
- Restaurant votes (👍/👎) are per-person, toggle-able
- Poll votes are per-person, changeable
- Comments are public — anyone can post with any name
- All data is stored in your Finanza Supabase project under the 3 new tables
- No login required — just share the URL with the group
