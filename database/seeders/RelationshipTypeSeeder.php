<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RelationshipTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('relationship_types')->insert([
            ['name' => 'cover', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'remake', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'remix', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'sample', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'tribute', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'parody', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'mashup', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
