<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SongGenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // fetch song IDs
        $get = fn($title,$artist) => DB::table('songs')
            ->where('title',$title)
            ->where('artist_id', DB::table('artists')->where('name',$artist)->value('id'))
            ->value('id');

        // fetch genre IDs
        $g = fn($name) => DB::table('genres')->where('name',$name)->value('id');

        DB::table('song_genre')->insert([
            ['song_id'=>$get('Hallelujah','Leonard Cohen'),'genre_id'=>$g('Folk'),'created_at'=>now(),'updated_at'=>now()],
            ['song_id'=>$get('Hallelujah','Jeff Buckley'),'genre_id'=>$g('Alternative Rock'),'created_at'=>now(),'updated_at'=>now()],

            ['song_id'=>$get('I Will Always Love You','Dolly Parton'),'genre_id'=>$g('Country'),'created_at'=>now(),'updated_at'=>now()],
            ['song_id'=>$get('I Will Always Love You','Whitney Houston'),'genre_id'=>$g('Pop'),'created_at'=>now(),'updated_at'=>now()],

            ['song_id'=>$get('Respect','Otis Redding'),'genre_id'=>$g('Soul'),'created_at'=>now(),'updated_at'=>now()],
            ['song_id'=>$get('Respect','Aretha Franklin'),'genre_id'=>$g('Soul'),'created_at'=>now(),'updated_at'=>now()],

            ['song_id'=>$get('All Along the Watchtower','Bob Dylan'),'genre_id'=>$g('Folk'),'created_at'=>now(),'updated_at'=>now()],
            ['song_id'=>$get('All Along the Watchtower','Jimi Hendrix'),'genre_id'=>$g('Hard Rock'),'created_at'=>now(),'updated_at'=>now()],

            ['song_id'=>$get('Hurt','Nine Inch Nails'),'genre_id'=>$g('Industrial'),'created_at'=>now(),'updated_at'=>now()],
            ['song_id'=>$get('Hurt','Johnny Cash'),'genre_id'=>$g('Country'),'created_at'=>now(),'updated_at'=>now()],

            ['song_id'=>$get('Mad World','Tears for Fears'),'genre_id'=>$g('New Wave'),'created_at'=>now(),'updated_at'=>now()],
            ['song_id'=>$get('Mad World','Gary Jules'),'genre_id'=>$g('Alternative Rock'),'created_at'=>now(),'updated_at'=>now()],

            ['song_id'=>$get('Under Pressure','Queen'), 'genre_id'=>$g('Rock'),      'created_at'=>now(),'updated_at'=>now()],
            ['song_id'=>$get('Ice Ice Baby','Vanilla Ice'), 'genre_id'=>$g('Hip Hop'),   'created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
