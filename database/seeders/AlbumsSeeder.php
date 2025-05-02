<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AlbumsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('albums')->insert([
            ['title'=>'Various Positions','artist_id'=> DB::table('artists')->where('name','Leonard Cohen')->value('id'), 'release_date'=>'1984-12-11','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Grace','artist_id'=> DB::table('artists')->where('name','Jeff Buckley')->value('id'), 'release_date'=>'1994-08-23','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Jolene','artist_id'=> DB::table('artists')->where('name','Dolly Parton')->value('id'), 'release_date'=>'1974-02-04','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'The Bodyguard: Original Soundtrack Album','artist_id'=> DB::table('artists')->where('name','Whitney Houston')->value('id'),'release_date'=>'1992-11-17','created_at'=>now(),'updated_at'=>now()],

            ['title'=>'Otis Blue/Otis Redding Sings Soul','artist_id'=> DB::table('artists')->where('name','Otis Redding')->value('id'),'release_date'=>'1965-09-16','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'I Never Loved a Man the Way I Love You','artist_id'=> DB::table('artists')->where('name','Aretha Franklin')->value('id'),'release_date'=>'1967-03-10','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'John Wesley Harding','artist_id'=> DB::table('artists')->where('name','Bob Dylan')->value('id'),'release_date'=>'1967-12-27','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Electric Ladyland','artist_id'=> DB::table('artists')->where('name','Jimi Hendrix')->value('id'),'release_date'=>'1968-10-16','created_at'=>now(),'updated_at'=>now()],

            ['title'=>'The Downward Spiral','artist_id'=> DB::table('artists')->where('name','Nine Inch Nails')->value('id'),'release_date'=>'1994-03-08','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'American IV: The Man Comes Around','artist_id'=> DB::table('artists')->where('name','Johnny Cash')->value('id'),'release_date'=>'2002-11-05','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'The Hurting','artist_id'=> DB::table('artists')->where('name','Tears for Fears')->value('id'),'release_date'=>'1983-03-07','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Coffeehouse (EP)','artist_id'=> DB::table('artists')->where('name','Gary Jules')->value('id'),'release_date'=>'2001-10-24','created_at'=>now(),'updated_at'=>now()],

            ['title'=>'Hot Space',          'artist_id'=> DB::table('artists')->where('name','Queen')->value('id'),            'release_date'=>'1982-05-21','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'To the Extreme',     'artist_id'=> DB::table('artists')->where('name','Vanilla Ice')->value('id'),      'release_date'=>'1990-09-04','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Please Please Me',   'artist_id'=> DB::table('artists')->where('name','The Beatles')->value('id'),    'release_date'=>'1963-03-22','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Goodbye Yellow Brick Road','artist_id'=> DB::table('artists')->where('name','Elton John')->value('id'),'release_date'=>'1973-10-05','created_at'=>now(),'updated_at'=>now()],

            ['title'=>'Like a Virgin',      'artist_id'=> DB::table('artists')->where('name','Madonna')->value('id'),         'release_date'=>'1984-11-12','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Thriller',           'artist_id'=> DB::table('artists')->where('name','Michael Jackson')->value('id'),'release_date'=>'1982-11-30','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Dangerously in Love','artist_id'=> DB::table('artists')->where('name','Beyoncé')->value('id'),       'release_date'=>'2003-06-24','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'19',                 'artist_id'=> DB::table('artists')->where('name','Adele')->value('id'),           'release_date'=>'2008-01-28','created_at'=>now(),'updated_at'=>now()],

            ['title'=>'Taylor Swift',       'artist_id'=> DB::table('artists')->where('name','Taylor Swift')->value('id'),  'release_date'=>'2006-10-24','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'good kid, m.A.A.d city','artist_id'=>DB::table('artists')->where('name','Kendrick Lamar')->value('id'),'release_date'=>'2012-10-22','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'When We All Fall Asleep, Where Do We Go?','artist_id'=>DB::table('artists')->where('name','Billie Eilish')->value('id'),'release_date'=>'2019-03-29','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'+ (Plus)',           'artist_id'=> DB::table('artists')->where('name','Ed Sheeran')->value('id'),        'release_date'=>'2011-09-09','created_at'=>now(),'updated_at'=>now()],

            ['title'=>'Doo-Wops & Hooligans','artist_id'=>DB::table('artists')->where('name','Bruno Mars')->value('id'),'release_date'=>'2010-10-05','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Anti',              'artist_id'=>DB::table('artists')->where('name','Rihanna')->value('id'),         'release_date'=>'2016-01-27','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Born This Way',     'artist_id'=>DB::table('artists')->where('name','Lady Gaga')->value('id'),      'release_date'=>'2011-05-23','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Purpose',           'artist_id'=>DB::table('artists')->where('name','Justin Bieber')->value('id'),  'release_date'=>'2015-11-13','created_at'=>now(),'updated_at'=>now()],

            ['title'=>'Beerbongs & Bentleys','artist_id'=>DB::table('artists')->where('name','Post Malone')->value('id'),'release_date'=>'2018-04-27','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Montero',           'artist_id'=>DB::table('artists')->where('name','Lil Nas X')->value('id'),      'release_date'=>'2021-09-17','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'Future Nostalgia',  'artist_id'=>DB::table('artists')->where('name','Dua Lipa')->value('id'),       'release_date'=>'2020-03-27','created_at'=>now(),'updated_at'=>now()],
            ['title'=>'1000 Forms of Fear', 'artist_id'=>DB::table('artists')->where('name','Sia')->value('id'),         'release_date'=>'2014-07-24','created_at'=>now(),'updated_at'=>now()],

            ['title'=>'In the Lonely Hour', 'artist_id'=>DB::table('artists')->where('name','Sam Smith')->value('id'),   'release_date'=>'2014-05-26','created_at'=>now(),'updated_at'=>now()],

        ]);
    }
}
