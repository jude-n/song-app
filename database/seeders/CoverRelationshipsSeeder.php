<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CoverRelationshipsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $findCover = fn($title) => DB::table('covers')
            ->where('title',$title)
            ->value('id');

        DB::table('cover_influences')->insert([
            [
                'influencer_cover_id'  => $findCover('Hallelujah (Cover)'),
                'influenced_cover_id'  => $findCover('Hallelujah (Cover)'),
                'influence_description'=> 'Jeff Buckley’s iconic interpretation influenced many future versions.',
                'created_at'=>now(),'updated_at'=>now(),
            ],
            [
                'influencer_cover_id'  => $findCover('I Will Always Love You (Cover)'),
                'influenced_cover_id'  => $findCover('I Will Always Love You (Cover)'),
                'influence_description'=> 'Whitney Houston’s powerful rendition redefined the original ballad.',
                'created_at'=>now(),'updated_at'=>now(),
            ],
            [
                'influencer_cover_id'  => $findCover('Respect (Cover)'),
                'influenced_cover_id'  => $findCover('Respect (Cover)'),
                'influence_description'=> 'Aretha’s soul-infused remake became definitive.',
                'created_at'=>now(),'updated_at'=>now(),
            ],
            [
                'influencer_cover_id'  => $findCover('Watchtower (Cover)'),
                'influenced_cover_id'  => $findCover('Watchtower (Cover)'),
                'influence_description'=> 'Hendrix’s electric guitar reinvention set a new standard.',
                'created_at'=>now(),'updated_at'=>now(),
            ],
            [
                'influencer_cover_id'  => $findCover('Hurt (Cover)'),
                'influenced_cover_id'  => $findCover('Hurt (Cover)'),
                'influence_description'=> 'Cash’s stripped-down version brought a country poignancy.',
                'created_at'=>now(),'updated_at'=>now(),
            ],
            [
                'influencer_cover_id'  => $findCover('Mad World (Cover)'),
                'influenced_cover_id'  => $findCover('Mad World (Cover)'),
                'influence_description'=> 'Gary Jules turned the new-wave hit into a minimalist ballad.',
                'created_at'=>now(),'updated_at'=>now(),
            ],
        ]);
    }
}
