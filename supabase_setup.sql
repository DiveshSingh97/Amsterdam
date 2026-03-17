-- Run this entire file in your Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → paste → Run

-- 1. Restaurant votes (👍/👎)
create table if not exists amsterdam_restaurant_votes (
  id uuid default gen_random_uuid() primary key,
  restaurant_id text not null,
  anon_id text not null,
  vote text check (vote in ('up', 'down')) not null,
  created_at timestamptz default now(),
  unique (restaurant_id, anon_id)
);

-- 2. Poll votes (Haarlem vs Free Day, Canal Cruise, RLD Tour)
create table if not exists amsterdam_poll_votes (
  id uuid default gen_random_uuid() primary key,
  poll_id text not null,
  option_id text not null,
  anon_id text not null,
  created_at timestamptz default now(),
  unique (poll_id, anon_id)
);

-- 3. Day comments / feedback
create table if not exists amsterdam_comments (
  id uuid default gen_random_uuid() primary key,
  day_id text not null,
  name text default 'Anonymous',
  message text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS) - allow public read/write (anon key)
alter table amsterdam_restaurant_votes enable row level security;
alter table amsterdam_poll_votes enable row level security;
alter table amsterdam_comments enable row level security;

-- Policies: allow anyone with the anon key to read and write
create policy "allow_all_restaurant_votes" on amsterdam_restaurant_votes for all using (true) with check (true);
create policy "allow_all_poll_votes" on amsterdam_poll_votes for all using (true) with check (true);
create policy "allow_all_comments" on amsterdam_comments for all using (true) with check (true);
