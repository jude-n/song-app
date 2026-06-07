<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sample_analysis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('relationship_id')->constrained('sample_relationships', 'id');
            $table->float('tempo_change'); //'Percentage change in tempo'
            $table->integer('pitch_shift'); //'Semitones shifted'
            $table->float('transformation_level'); //'Scale 0-100 of how transformed the sample is
            $table->integer('chop_complexity'); //How complex the sample chopping is (1-10)
            $table->text('additional_effects'); //Description of effects applied to the sample
            $table->json('additional_data');
            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sample_analysis');
    }
};
