<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArtistsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('artists')->insert([
            ['name'=>'Leonard Cohen', 'bio'=>'Canadian singer-songwriter.', 'formed_year'=>1967, 'created_at'=>now(), 'updated_at'=>now()],
            ['name'=>'Jeff Buckley', 'bio'=>'American singer known for his emotive voice.', 'formed_year'=>1994, 'created_at'=>now(), 'updated_at'=>now()],
            ['name'=>'Dolly Parton', 'bio'=>'American singer-songwriter and actress.', 'formed_year'=>1967, 'created_at'=>now(), 'updated_at'=>now()],
            ['name'=>'Whitney Houston','bio'=>'American singer and actress with powerful vocals.','formed_year'=>1985,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Otis Redding','bio'=>'American singer-songwriter, “King of Soul.”','formed_year'=>1958,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Aretha Franklin','bio'=>'“Queen of Soul,” known for her powerful vocals.','formed_year'=>1960,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Bob Dylan','bio'=>'Influential American folk-rock singer-songwriter.','formed_year'=>1961,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Jimi Hendrix','bio'=>'Legendary guitarist who reshaped rock music.','formed_year'=>1966,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Nine Inch Nails','bio'=>'Industrial rock project founded by Trent Reznor.','formed_year'=>1988,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Johnny Cash','bio'=>'American singer-songwriter, “Man in Black.”','formed_year'=>1954,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Tears for Fears','bio'=>'British new wave band founded by Roland Orzabal & Curt Smith.','formed_year'=>1981,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Gary Jules','bio'=>'Singer-songwriter known for melancholic covers.','formed_year'=>1992,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Queen',              'bio'=>'British rock band formed in London.',                  'formed_year'=>1970, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Vanilla Ice',        'bio'=>'American rapper known for blending hip hop with pop.',  'formed_year'=>1985, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'The Beatles',        'bio'=>'Iconic British rock band formed in Liverpool.',         'formed_year'=>1960, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Elton John',         'bio'=>'British singer-songwriter and pianist.',               'formed_year'=>1962, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Madonna',            'bio'=>'American singer-songwriter and actress.',              'formed_year'=>1982, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Michael Jackson',    'bio'=>'“King of Pop,” known for his groundbreaking music videos.','formed_year'=>1964, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Beyoncé',            'bio'=>'American singer-songwriter and actress.',              'formed_year'=>1997, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Adele',              'bio'=>'British singer-songwriter known for her powerful voice.','formed_year'=>2006, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Taylor Swift',       'bio'=>'American singer-songwriter known for her narrative songs.','formed_year'=>2004, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Kendrick Lamar',     'bio'=>'American rapper and songwriter known for his lyricism.',  'formed_year'=>2003, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Billie Eilish',      'bio'=>'American singer-songwriter known for her unique style.',  'formed_year'=>2015, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Ed Sheeran',         'bio'=>'British singer-songwriter known for his melodic tunes.',  'formed_year'=>2011, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Bruno Mars',         'bio'=>'American singer-songwriter and record producer.',        'formed_year'=>2004, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Rihanna',            'bio'=>'Barbadian singer and businesswoman.',                   'formed_year'=>2003, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Lady Gaga',          'bio'=>'American singer-songwriter and actress.',              'formed_year'=>2003, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Justin Bieber',      'bio'=>'Canadian singer and songwriter.',                     'formed_year'=>2008, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Post Malone',        'bio'=>'American rapper and singer-songwriter.',              'formed_year'=>2015, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Lil Nas X',         'bio'=>'American rapper and singer-songwriter.',              'formed_year'=>2018, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Dua Lipa',           'bio'=>'British singer-songwriter and model.',                 'formed_year'=>2015, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Sia',                'bio'=>'Australian singer-songwriter known for her unique voice.','formed_year'=>1997, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Sam Smith',          'bio'=>'British singer-songwriter known for their emotive ballads.','formed_year'=>2012, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Halsey',             'bio'=>'American singer-songwriter known for her unique style.','formed_year'=>2014, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'The Weeknd',         'bio'=>'Canadian singer-songwriter known for his unique sound.','formed_year'=>2010, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Imagine Dragons',    'bio'=>'American rock band known for their anthemic sound.',   'formed_year'=>2008, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Coldplay',           'bio'=>'British rock band known for their melodic tunes.',     'formed_year'=>1996, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Maroon 5',          'bio'=>'American pop rock band known for their catchy songs.',  'formed_year'=>2001, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Linkin Park',        'bio'=>'American rock band known for their nu-metal sound.',   'formed_year'=>1996, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Green Day',          'bio'=>'American punk rock band known for their energetic sound.','formed_year'=>1986, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Foo Fighters',       'bio'=>'American rock band formed by Nirvana’s Dave Grohl.',   'formed_year'=>1994, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Red Hot Chili Peppers','bio'=>'American rock band known for their funk-rock sound.','formed_year'=>1983, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Nirvana',            'bio'=>'American rock band known for their grunge sound.',     'formed_year'=>1987, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'The Rolling Stones', 'bio'=>'British rock band known for their bluesy sound.',       'formed_year'=>1962, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'The Who',            'bio'=>'British rock band known for their energetic performances.','formed_year'=>1964, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'U2',                 'bio'=>'Irish rock band known for their anthemic sound.',      'formed_year'=>1976, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'The Doors',          'bio'=>'American rock band known for their psychedelic sound.', 'formed_year'=>1965, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Led Zeppelin',       'bio'=>'British rock band known for their heavy sound.',       'formed_year'=>1968, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'AC/DC',             'bio'=>'Australian rock band known for their hard rock sound.', 'formed_year'=>1973, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Queen Latifah',      'bio'=>'American rapper and actress known for her versatility.','formed_year'=>1988, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Katy Perry',         'bio'=>'American singer-songwriter known for her pop hits.',   'formed_year'=>2001, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Shakira',            'bio'=>'Colombian singer-songwriter known for her unique voice.','formed_year'=>1990, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Ariana Grande',      'bio'=>'American singer-songwriter and actress.',              'formed_year'=>2008, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Nicki Minaj',        'bio'=>'Trinidadian-American rapper and singer-songwriter.',  'formed_year'=>2007, 'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Cardi B',           'bio'=>'American rapper and songwriter known for her bold style.','formed_year'=>2015,'created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
