<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CoversSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $findSong = fn($title,$artist) => DB::table('songs')
            ->where('title',$title)
            ->where('artist_id', DB::table('artists')->where('name',$artist)->value('id'))
            ->value('id');

        DB::table('covers')->insert([
            [
                'original_song_id' => $findSong('Hallelujah', 'Leonard Cohen'),
                'cover_song_id'    => $findSong('Hallelujah', 'Jeff Buckley'),
                'title'            => 'Hallelujah (Cover)',
                'artist_id'        => DB::table('artists')->where('name', 'Jeff Buckley')->value('id'),
                'release_date'     => 1994,
                'view_count'      => 0,
                'is_featured'      => false,
                'album_id'         => DB::table('albums')->where('title', 'Grace')->value('id'),
                'duration'         => 342,
                'audio_url'        => 'https://example.com/audio/hallelujah-jeff-buckley.mp3',
                'video_url'        => 'https://example.com/video/hallelujah-jeff-buckley.mp4',
                'waveform_url'     => 'https://example.com/waveform/hallelujah-jeff-buckley.png',
                'lyrics'           => 'Well, maybe there’s a God above...',
            ],
            [
                'original_song_id' => $findSong('I Will Always Love You', 'Dolly Parton'),
                'cover_song_id'    => $findSong('I Will Always Love You', 'Whitney Houston'),
                'title'            => 'I Will Always Love You (Cover)',
                'artist_id'        => DB::table('artists')->where('name', 'Whitney Houston')->value('id'),
                'release_date'     => 1992,
                'view_count'      => 0,
                'is_featured'      => false,
                'album_id'         => DB::table('albums')->where('title', 'The Bodyguard: Original Soundtrack Album')->value('id'),
                'duration'         => 273,
                'audio_url'        => 'https://example.com/audio/i-will-always-love-you-whitney-houston.mp3',
                'video_url'        => 'https://example.com/video/i-will-always-love-you-whitney-houston.mp4',
                'waveform_url'     => 'https://example.com/waveform/i-will-always-love-you-whitney-houston.png',
                'lyrics'           => "If I should stay, I would only be in your way...",
            ],
            [
                'original_song_id' => $findSong('Respect', 'Otis Redding'),
                'cover_song_id'    => $findSong('Respect', 'Aretha Franklin'),
                'title'            => 'Respect (Cover)',
                'artist_id'        => DB::table('artists')->where('name', 'Aretha Franklin')->value('id'),
                'release_date'     => 1967,
                'view_count'      => 0,
                'is_featured'      => false,
                'album_id'         => DB::table('albums')->where('title', "I Never Loved a Man the Way I Love You")->value('id'),
                'duration'         => 135,
                'audio_url'        => 'https://example.com/audio/respect-aretha-franklin.mp3',
                'video_url'        => 'https://example.com/video/respect-aretha-franklin.mp4',
                'waveform_url'     => 'https://example.com/waveform/respect-aretha-franklin.png',
                'lyrics'           => "What you want, baby, I got it...",

            ],
            [
                'original_song_id' => $findSong('All Along the Watchtower', 'Bob Dylan'),
                'cover_song_id'    => $findSong('All Along the Watchtower', 'Jimi Hendrix'),
                'title'            => 'Watchtower (Cover)',
                'artist_id'        => DB::table('artists')->where('name', 'Jimi Hendrix')->value('id'),
                'release_date'     => 1968,
                'view_count'      => 0,
                'is_featured'      => false,
                'album_id'         => DB::table('albums')->where('title', 'Electric Ladyland')->value('id'),
                'duration'         => 162,
                'audio_url'        => 'https://example.com/audio/watchtower-jimi-hendrix.mp3',
                'video_url'        => 'https://example.com/video/watchtower-jimi-hendrix.mp4',
                'waveform_url'     => 'https://example.com/waveform/watchtower-jimi-hendrix.png',
                'lyrics'           => "There must be some way out of here...",
            ],
            [
                'original_song_id' => $findSong('Hurt', 'Nine Inch Nails'),
                'cover_song_id'    => $findSong('Hurt', 'Johnny Cash'),
                'title'            => 'Hurt (Cover)',
                'artist_id'        => DB::table('artists')->where('name', 'Johnny Cash')->value('id'),
                'release_date'     => 2002,
                'view_count'      => 0,
                'is_featured'      => false,
                'album_id'         => DB::table('albums')->where('title', 'American IV: The Man Comes Around')->value('id'),
                'duration'         => 249,
                'audio_url'        => 'https://example.com/audio/hurt-johnny-cash.mp3',
                'video_url'        => 'https://example.com/video/hurt-johnny-cash.mp4',
                'waveform_url'     => 'https://example.com/waveform/hurt-johnny-cash.png',
                'lyrics'           => "I hurt myself today, to see if I still feel...",
            ],
            [
                'original_song_id' => $findSong('Mad World', 'Tears for Fears'),
                'cover_song_id'    => $findSong('Mad World', 'Gary Jules'),
                'title'            => 'Mad World (Cover)',
                'artist_id'        => DB::table('artists')->where('name', 'Gary Jules')->value('id'),
                'release_date'     => 2001,
                'view_count'      => 0,
                'is_featured'      => false,
                'album_id'         => DB::table('albums')->where('title', 'Coffeehouse (EP)')->value('id'),
                'duration'         => 180,
                'audio_url'        => 'https://example.com/audio/mad-world-gary-jules.mp3',
                'video_url'        => 'https://example.com/video/mad-world-gary-jules.mp4',
                'waveform_url'     => 'https://example.com/waveform/mad-world-gary-jules.png',
                'lyrics'           => "All around me are familiar faces, worn out places...",
            ]
        ]);
    }
}
