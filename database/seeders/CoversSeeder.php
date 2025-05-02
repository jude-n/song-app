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
                'original_song_id'  => $findSong('Hallelujah','Leonard Cohen'),
                'based_on_cover_id' => $findSong('Hallelujah','Jeff Buckley'),
                'title'             => 'Hallelujah (Cover)',
                'created_at'=>now(),'updated_at'=>now(),
            ],
            [
                'original_song_id'  => $findSong('I Will Always Love You','Dolly Parton'),
                'based_on_cover_id' => $findSong('I Will Always Love You','Whitney Houston'),
                'title'             => 'I Will Always Love You (Cover)',
                'created_at'=>now(),'updated_at'=>now(),
            ],
            [
                'original_song_id'  => $findSong('Respect','Otis Redding'),
                'based_on_cover_id' => $findSong('Respect','Aretha Franklin'),
                'title'             => 'Respect (Cover)',
                'created_at'=>now(),'updated_at'=>now(),
            ],
            [
                'original_song_id'  => $findSong('All Along the Watchtower','Bob Dylan'),
                'based_on_cover_id' => $findSong('All Along the Watchtower','Jimi Hendrix'),
                'title'             => 'Watchtower (Cover)',
                'created_at'=>now(),'updated_at'=>now(),
            ],
            [
                'original_song_id'  => $findSong('Hurt','Nine Inch Nails'),
                'based_on_cover_id' => $findSong('Hurt','Johnny Cash'),
                'title'             => 'Hurt (Cover)',
                'created_at'=>now(),'updated_at'=>now(),
            ],
            [
                'original_song_id'  => $findSong('Mad World','Tears for Fears'),
                'based_on_cover_id' => $findSong('Mad World','Gary Jules'),
                'title'             => 'Mad World (Cover)',
                'created_at'=>now(),'updated_at'=>now(),
            ],
        ]);
    }
}
