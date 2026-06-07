Project: MusicEvolution (Song App)
=================================

Overview
--------
MusicEvolution is a music discovery platform focused on the relationships between songs — covers, samples, and remixes. The core idea: you hear a beat or a melody and know it came from somewhere else. This app lets you find it, explore it, and save what you love.

Key features
- Discover covers and samples of any song
- Track which part of a song was sampled and when
- Compare an original and its cover side by side with audio analysis
- See the full chronological lineage of covers for any original
- Save favourite covers, rate them, leave comments
- Playlists that can hold songs, covers, or comparisons in any mix
- "Cover of the Day" editorial feature
- User-submitted cover suggestions and community discussion

Tech & Tools
------------
- Backend: PHP 8.x (Laravel 11)
- Frontend: React + Inertia.js + Vite + TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Icons: lucide-react
- DB: MySQL (primary) — SQLite supported for local dev
- Docker: docker-compose for PHP, Nginx, and Vite

Laravel packages
----------------
- spatie/laravel-permission — roles and permissions (admin, moderator, user)
- spatie/laravel-activitylog — audit trail for content changes
- spatie/laravel-medialibrary — media handling (artist images, album art, profile pictures)
- spatie/laravel-sluggable — auto-generates slugs on artists, songs, albums, genres, articles
- spatie/laravel-tags — polymorphic tagging across covers, comparisons, songs
- Laravel Sanctum — session-based auth for the Inertia frontend
- Laravel Scout — powers advanced search (Meilisearch or Algolia driver)
- Laravel Passport — Phase 3, public API OAuth2

Project structure (high level)
-------------------------------
- app/                  Laravel application (Http, Models, Services, Repositories)
- resources/js/         React + Inertia frontend
- database/migrations/  Full schema — source of truth for the diagrams below
- docker/ + docker-compose.yml

Database schema
---------------
Tables are organised by phase. Polymorphic relationships are noted with the models they support.

Phase 1 — Core (MVP)
  users                   Accounts, auth, profiles
  artists                 Music artists (slug, bio, external_url)
  albums                  Albums belonging to an artist (slug, release_date)
  songs                   All song records — originals and cover versions alike (slug, is_original, lyrics, duration)
  song_streaming_links    Platform links per song: Spotify, YouTube, Apple Music, etc.
  genres                  Music genres (slug)
  song_genres             Many-to-many: songs ↔ genres
  relationship_types      Type of cover relationship: cover, remake, remix, reinterpretation (slug)
  covers                  Relationship table linking original → cover song.
                          Holds: root_original_song_id, original_song_id, cover_song_id,
                          based_on_cover_id (lineage chain), relationship_type_id,
                          cover_number (chronological position), reference_start/end_time
                          (for section-specific covers), notes, view_count, is_featured
  cover_influences        Cover-to-cover influence links (Phase 3 feature, table present)
  sample_relationships    Song A samples Song B. Captures sample_start/end_time, placement_time,
                          sample_number (chronological), is_confirmed
  sample_analysis         Audio analysis of a sample: tempo_change, pitch_shift,
                          transformation_level, chop_complexity, additional_effects
  comparisons             Editorial original-vs-cover pairing with title, description, view_count
  comparison_analysis     Audio diff data: tempo, key, instrumentation_difference,
                          vocal_style_difference, transformation_level
  playlists               User playlists (name, is_public)
  playlist_items          Polymorphic — can hold Song, Cover, or Comparison in any order
                          (playlistable_type + playlistable_id)
  comments                Polymorphic — Cover, Comparison, Song, Article
                          (commentable_type + commentable_id)
                          Threaded via parent_id self-reference
  ratings                 Polymorphic — Cover, Comparison, Song
                          (ratable_type + ratable_id, score unsignedTinyInteger)
  user_favourites         Polymorphic — Cover, Comparison, Song, Artist, Article
                          (favouritable_type + favouritable_id)
  user_history            Polymorphic — tracks page visits for logged-in users
                          (viewable_type + viewable_id, viewed_at)
  featured_covers         Cover of the Day scheduling (featured_date unique, blurb, curated_by)

Phase 2 — Community & Content
  articles                Editorial articles, interviews, analyses (slug, type, published_at)
  article_references      Polymorphic — links articles to Songs, Covers, Comparisons, Artists
                          (referenceable_type + referenceable_id)
  cover_suggestions       User-submitted covers: original_song_id, cover_song_id (nullable),
                          freeform cover_artist_name/title/url, status, reviewed_by
  user_follows            Polymorphic — follow Artist or User
                          (followable_type + followable_id)

Phase 3 — Analytics & API
  page_views              Granular view tracking for guests + logged-in users
                          (viewable_type + viewable_id, ip_address, country_code, user_agent)
  oauth_* tables          Added automatically by Laravel Passport for public API access

Infrastructure (Laravel / packages)
  password_reset_tokens
  sessions
  cache / cache_locks
  jobs / job_batches / failed_jobs
  activity_log            spatie/laravel-activitylog
  permissions / roles     spatie/laravel-permission

```mermaid
erDiagram
    USERS {
        bigint id PK
        varchar username UNIQUE
        varchar first_name
        varchar last_name
        varchar display_name
        text bio NULL
        varchar email UNIQUE
        varchar password
        timestamp last_login_at NULL
        timestamp email_verified_at NULL
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    ARTISTS {
        bigint id PK
        varchar name
        varchar slug UNIQUE
        text bio NULL
        int formed_year NULL
        varchar external_url NULL
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    ALBUMS {
        bigint id PK
        varchar title
        varchar slug UNIQUE
        bigint artist_id FK
        date release_date
        int view_count
        boolean is_featured
        varchar external_url NULL
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    SONGS {
        bigint id PK
        varchar title
        varchar slug UNIQUE
        bigint artist_id FK
        bigint album_id FK NULL
        int view_count
        boolean is_featured
        date release_date
        int duration NULL
        boolean is_original
        text lyrics NULL
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    SONG_STREAMING_LINKS {
        bigint id PK
        bigint song_id FK
        varchar platform
        varchar url
        varchar external_id NULL
        timestamp created_at
        timestamp updated_at
    }

    GENRES {
        bigint id PK
        varchar name
        varchar slug UNIQUE
        varchar description NULL
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    RELATIONSHIP_TYPES {
        bigint id PK
        varchar name UNIQUE
        varchar slug UNIQUE
        timestamp created_at
        timestamp updated_at
    }

    COVERS {
        bigint id PK
        bigint root_original_song_id FK
        bigint original_song_id FK
        bigint cover_song_id FK
        bigint based_on_cover_id FK NULL
        bigint relationship_type_id FK NULL
        smallint cover_number NULL
        int reference_start_time NULL
        int reference_end_time NULL
        text notes NULL
        int view_count
        boolean is_featured
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    SAMPLE_RELATIONSHIPS {
        bigint id PK
        bigint sampled_song_id FK
        bigint sampling_by_song_id FK
        smallint sample_number NULL
        int sample_start_time NULL
        int sample_end_time NULL
        int placement_time NULL
        text sample_description NULL
        boolean is_confirmed
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    COMPARISONS {
        bigint id PK
        bigint original_song_id FK
        bigint cover_id FK
        varchar title
        text description NULL
        boolean featured
        int view_count
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    PLAYLISTS {
        bigint id PK
        bigint user_id FK
        varchar name
        text description NULL
        boolean is_public
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    PLAYLIST_ITEMS {
        bigint id PK
        bigint playlist_id FK
        varchar playlistable_type
        bigint playlistable_id
        int order
        timestamp added_at NULL
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    COMMENTS {
        bigint id PK
        bigint user_id FK
        varchar commentable_type
        bigint commentable_id
        bigint parent_id FK NULL
        text content
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    RATINGS {
        bigint id PK
        bigint user_id FK
        varchar ratable_type
        bigint ratable_id
        tinyint score
        timestamp created_at
        timestamp updated_at
    }

    USER_FAVOURITES {
        bigint id PK
        bigint user_id FK
        varchar favouritable_type
        bigint favouritable_id
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    FEATURED_COVERS {
        bigint id PK
        bigint cover_id FK
        date featured_date UNIQUE
        text blurb NULL
        bigint curated_by FK NULL
        timestamp created_at
        timestamp updated_at
    }

    ARTICLES {
        bigint id PK
        bigint author_id FK
        varchar title
        varchar slug UNIQUE
        text body
        varchar type
        timestamp published_at NULL
        int view_count
        boolean is_featured
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    COVER_SUGGESTIONS {
        bigint id PK
        bigint suggested_by FK
        bigint original_song_id FK
        bigint cover_song_id FK NULL
        varchar cover_artist_name NULL
        varchar cover_title NULL
        varchar cover_url NULL
        varchar status
        bigint reviewed_by FK NULL
        timestamp reviewed_at NULL
        text review_notes NULL
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at NULL
    }

    USER_FOLLOWS {
        bigint id PK
        bigint user_id FK
        varchar followable_type
        bigint followable_id
        timestamp created_at
        timestamp updated_at
    }

    %% Core music relationships
    ARTISTS ||--o{ ALBUMS : "releases"
    ARTISTS ||--o{ SONGS : "performs"
    ALBUMS ||--o{ SONGS : "contains"
    SONGS ||--o{ SONG_STREAMING_LINKS : "streamed_via"
    SONGS ||--o{ SONG_GENRES : "categorised_as"
    GENRES ||--o{ SONG_GENRES : "contains"

    %% Cover and sample relationships
    SONGS ||--o{ COVERS : "root_original_of"
    SONGS ||--o{ SAMPLE_RELATIONSHIPS : "sampled_in"
    COVERS ||--o{ COVER_INFLUENCES : "influences"
    RELATIONSHIP_TYPES ||--o{ COVERS : "types"

    %% Comparisons
    SONGS ||--o{ COMPARISONS : "original_in"
    COVERS ||--o{ COMPARISONS : "compared_in"

    %% User interactions
    USERS ||--o{ PLAYLISTS : "creates"
    PLAYLISTS ||--o{ PLAYLIST_ITEMS : "contains"
    USERS ||--o{ COMMENTS : "writes"
    USERS ||--o{ RATINGS : "gives"
    USERS ||--o{ USER_FAVOURITES : "saves"
    USERS ||--o{ USER_FOLLOWS : "follows"

    %% Editorial
    COVERS ||--o{ FEATURED_COVERS : "featured_as"
    USERS ||--o{ ARTICLES : "authors"
    USERS ||--o{ COVER_SUGGESTIONS : "suggests"
```

Design notes
------------
**songs is the universal song record.** Both original songs and cover versions are rows in `songs`. The `covers` table is purely a relationship — it links an original song to its cover song and captures lineage metadata.

**covers tracks chronological lineage.** Chronological position is derived at query time by ranking covers of the same `root_original_song_id` ordered by `release_year` then `release_date`. It is never stored — a later discovery of an older cover would invalidate any stored number. `songs` requires `release_year` and `release_month` (minimum known info) and has a nullable `release_date` (only set when the exact day is known). Ranking always has at least year + month to work with; within the same month, full-date covers sort precisely while day-unknown covers follow. `based_on_cover_id` is separate — it captures explicit artist intent ("I based this on Sinatra's version, not the original") and must be entered by a human.

**samples capture the "I know that beat" moment.** `sample_relationships` records exactly which section of the original was sampled (`sample_start_time`, `sample_end_time`) and where it appears in the new song (`placement_time`).

**Polymorphic tables use Laravel morphs.** Five tables use `_type` + `_id` column pairs so a single table serves multiple models without duplication:
- `playlist_items` (playlistable) — Song, Cover, Comparison
- `comments` (commentable) — Cover, Comparison, Song, Article — threaded via `parent_id`
- `ratings` (ratable) — Cover, Comparison, Song
- `user_favourites` (favouritable) — Cover, Comparison, Song, Artist, Article
- `user_history` (viewable) — Cover, Comparison, Song, Artist, Article
- `user_follows` (followable) — Artist, User
- `article_references` (referenceable) — Song, Cover, Comparison, Artist
- `page_views` (viewable) — Cover, Comparison, Song, Artist, Article

**Media is handled by spatie/laravel-medialibrary.** No image or audio URL columns exist in the schema — all media is stored and retrieved through the package's `media` table.

Running the app with Docker
---------------------------
Prerequisites: Docker and docker-compose installed. Copy `.env.example` to `.env`.

Recommended `.env` variables
```
APP_NAME=MusicEvolution
APP_PORT=8443
VOLUME_LOCAL_MACHINE=/absolute/path/to/your/song-app
APP_ENV=local
APP_DEBUG=true
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=songapp
DB_USERNAME=songapp
DB_PASSWORD=secret
```

```bash
# Start the full stack
docker-compose up --build -d

# Run migrations
docker-compose exec php php artisan migrate --force

# Seed demo data
docker-compose exec php php artisan db:seed

# Tail logs
docker-compose logs -f web
```

Local dev without Docker
```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm run dev
```

Developer tips
- `docker-compose exec php bash` — shell into the PHP container
- `docker-compose exec vite npm run build` — rebuild frontend assets
- `php artisan migrate:fresh --seed` — reset and reseed the database

Acknowledgements
----------------
Built with Laravel, Inertia.js, React, Tailwind CSS, Vite, and the Spatie package ecosystem.

---
Last updated: 2026-06-07
