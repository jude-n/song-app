<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('genres')->insert([
            ['name' => 'Folk', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Alternative Rock', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Country', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Pop', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Soul', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Hard Rock', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Industrial', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'New Wave', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Rock',            'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Hip Hop',         'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Jazz',           'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Classical',      'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Reggae',         'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Electronic',     'created_at' => now(), 'updated_at' => now()],
            ['name' => 'R&B',            'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Blues',          'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Metal',          'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Punk',           'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Gospel',         'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Latin',          'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Funk',           'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Ska',            'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Disco',          'created_at' => now(), 'updated_at' => now()],
            ['name' => 'House',          'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Techno',         'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Trance',         'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Ambient',        'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Dubstep',        'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Grunge',         'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Indie Rock',     'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Post-Rock',      'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Shoegaze',       'created_at' => now(), 'updated_at' => now()],

        ]);
    }
}
