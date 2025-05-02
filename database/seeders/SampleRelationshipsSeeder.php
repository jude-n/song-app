<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SampleRelationshipsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $getSong = fn($title,$artist) => DB::table('songs')
            ->where('title',$title)
            ->where('artist_id', DB::table('artists')->where('name',$artist)->value('id'))
            ->value('id');

        DB::table('sample_relationships')->insert([
            [
                'source_song_id'  => $getSong('Ice Ice Baby','Vanilla Ice'),
                'sampled_song_id' => $getSong('Under Pressure','Queen'),
                'sample_type'     => 'bassline',
                'notes'           => 'The iconic bass riff from Queen’s “Under Pressure” is sampled throughout “Ice Ice Baby.”',
                'created_at'      => now(),
                'updated_at'      => now(),
            ],
        ]);
    }
}
