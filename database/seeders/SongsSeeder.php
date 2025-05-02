<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SongsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // fetch artist and album IDs
        $ids = [
            'Leonard Cohen'  => DB::table('artists')->where('name','Leonard Cohen')->value('id'),
            'Jeff Buckley'   => DB::table('artists')->where('name','Jeff Buckley')->value('id'),
            'Dolly Parton'   => DB::table('artists')->where('name','Dolly Parton')->value('id'),
            'Whitney Houston'=> DB::table('artists')->where('name','Whitney Houston')->value('id'),
            'Otis Redding'   => DB::table('artists')->where('name','Otis Redding')->value('id'),
            'Aretha Franklin'=> DB::table('artists')->where('name','Aretha Franklin')->value('id'),
            'Bob Dylan'      => DB::table('artists')->where('name','Bob Dylan')->value('id'),
            'Jimi Hendrix'   => DB::table('artists')->where('name','Jimi Hendrix')->value('id'),
            'Nine Inch Nails'=> DB::table('artists')->where('name','Nine Inch Nails')->value('id'),
            'Johnny Cash'    => DB::table('artists')->where('name','Johnny Cash')->value('id'),
            'Tears for Fears'=> DB::table('artists')->where('name','Tears for Fears')->value('id'),
            'Gary Jules'     => DB::table('artists')->where('name','Gary Jules')->value('id'),
        ];
        $albums = [
            'Various Positions' => DB::table('albums')->where('title','Various Positions')->value('id'),
            'Grace'             => DB::table('albums')->where('title','Grace')->value('id'),
            'Jolene'            => DB::table('albums')->where('title','Jolene')->value('id'),
            'The Bodyguard: Original Soundtrack Album'=>DB::table('albums')->where('title','The Bodyguard: Original Soundtrack Album')->value('id'),
            'Otis Blue/Otis Redding Sings Soul' => DB::table('albums')->where('title','Otis Blue/Otis Redding Sings Soul')->value('id'),
            'I Never Loved a Man the Way I Love You'=>DB::table('albums')->where('title','I Never Loved a Man the Way I Love You')->value('id'),
            'John Wesley Harding'=> DB::table('albums')->where('title','John Wesley Harding')->value('id'),
            'Electric Ladyland'=> DB::table('albums')->where('title','Electric Ladyland')->value('id'),
            'The Downward Spiral'=> DB::table('albums')->where('title','The Downward Spiral')->value('id'),
            'American IV: The Man Comes Around'=> DB::table('albums')->where('title','American IV: The Man Comes Around')->value('id'),
            'The Hurting'=> DB::table('albums')->where('title','The Hurting')->value('id'),
            'Coffeehouse (EP)'=> DB::table('albums')->where('title','Coffeehouse (EP)')->value('id'),
        ];

        DB::table('songs')->insert([
            // originals
            ['title'=>'Hallelujah','artist_id'=>$ids['Leonard Cohen'],'album_id'=>$albums['Various Positions'],'release_date'=>'1984-12-11','duration'=>360,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'I Will Always Love You','artist_id'=>$ids['Dolly Parton'],'album_id'=>$albums['Jolene'],'release_date'=>'1974-02-04','duration'=>180,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Respect','artist_id'=>$ids['Otis Redding'],'album_id'=>$albums['Otis Blue/Otis Redding Sings Soul'],'release_date'=>'1965-04-29','duration'=>150,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'All Along the Watchtower','artist_id'=>$ids['Bob Dylan'],'album_id'=>$albums['John Wesley Harding'],'release_date'=>'1967-11-10','duration'=>150,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Hurt','artist_id'=>$ids['Nine Inch Nails'],'album_id'=>$albums['The Downward Spiral'],'release_date'=>'1995-02-20','duration'=>240,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Mad World','artist_id'=>$ids['Tears for Fears'],'album_id'=>$albums['The Hurting'],'release_date'=>'1982-09-14','duration'=>180,'created_at'=>now(),'updated_at'=>now()],
            // covers
            ['title'=>'Hallelujah','artist_id'=>$ids['Jeff Buckley'],'album_id'=>$albums['Grace'],'release_date'=>'1994-08-23','duration'=>420,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'I Will Always Love You','artist_id'=>$ids['Whitney Houston'],'album_id'=>$albums['The Bodyguard: Original Soundtrack Album'],'release_date'=>'1992-11-17','duration'=>273,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Respect','artist_id'=>$ids['Aretha Franklin'],'album_id'=>$albums['I Never Loved a Man the Way I Love You'],'release_date'=>'1967-02-14','duration'=>150,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'All Along the Watchtower','artist_id'=>$ids['Jimi Hendrix'],'album_id'=>$albums['Electric Ladyland'],'release_date'=>'1968-09-24','duration'=>150,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Hurt','artist_id'=>$ids['Johnny Cash'],'album_id'=>$albums['American IV: The Man Comes Around'],'release_date'=>'2002-05-05','duration'=>220,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Mad World','artist_id'=>$ids['Gary Jules'],'album_id'=>$albums['Coffeehouse (EP)'],'release_date'=>'2001-10-24','duration'=>180,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Under Pressure', 'artist_id'=>$ids['Queen'],      'album_id'=>$albums['Hot Space'],      'release_date'=>'1982-05-21','duration'=>245,'created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Ice Ice Baby',  'artist_id'=>$ids['Vanilla Ice'],'album_id'=>$albums['To the Extreme'],'release_date'=>'1990-09-04','duration'=>259,'created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
