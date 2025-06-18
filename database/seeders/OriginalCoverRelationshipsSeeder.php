<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OriginalCoverRelationshipsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $findRelationshipType = fn($name) => DB::table('relationship_types')
            ->where('name',$name)
            ->value('id');
        // fetch song IDs
        $getSongs = fn($title,$artist) => DB::table('songs')
            ->where('title',$title)
            ->where('artist_id', DB::table('artists')->where('name',$artist)->value('id'))
            ->value('id');

        DB::table('original_cover_relationships')->insert([
            [
                'original_song_id' => $getSongs('Hallelujah', 'Leonard Cohen'),
                'cover_song_id'    => $getSongs('Hallelujah', 'Jeff Buckley'),
                'relationship_type_id' => $findRelationshipType('Cover'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'original_song_id' => $getSongs('I Will Always Love You', 'Dolly Parton'),
                'cover_song_id'    => $getSongs('I Will Always Love You', 'Whitney Houston'),
                'relationship_type_id' => $findRelationshipType('Cover'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'original_song_id' => $getSongs('Respect', 'Otis Redding'),
                'cover_song_id'    => $getSongs('Respect', 'Aretha Franklin'),
                'relationship_type_id' => $findRelationshipType('Cover'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'original_song_id' => $getSongs('All Along the Watchtower', 'Bob Dylan'),
                'cover_song_id'    => $getSongs('All Along the Watchtower', 'Jimi Hendrix'),
                'relationship_type_id' => $findRelationshipType('Cover'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'original_song_id' => $getSongs('Hurt', 'Nine Inch Nails'),
                'cover_song_id'    => $getSongs('Hurt', 'Johnny Cash'),
                'relationship_type_id' => $findRelationshipType('Cover'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'original_song_id' => $getSongs('Mad World', 'Tears for Fears'),
                'cover_song_id'    => $getSongs('Mad World', 'Gary Jules'),
                'relationship_type_id' => $findRelationshipType('Cover'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
