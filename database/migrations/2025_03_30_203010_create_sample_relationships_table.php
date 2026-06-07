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
        Schema::create('sample_relationships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sampled_song_id')->constrained('songs', 'id');
            $table->foreignId('sampling_by_song_id')->constrained('songs', 'id');
            // NOTE: sample chronological position is NOT stored here.
            // It is derived at query time by ranking rows with the same sampled_song_id
            // ordered by songs.release_year, release_month, release_date ASC via the sampling_by_song_id join.
            // release_year and release_month are required; release_date (exact day) is nullable and used as a tiebreaker.
            $table->integer('sample_start_time')->nullable(); // Start time in seconds in the original
            $table->integer('sample_end_time')->nullable();   // End time in seconds in the original
            $table->integer('placement_time')->nullable();    // Where the sample appears in the new song (seconds)
            $table->text('sample_description')->nullable();
            $table->boolean('is_confirmed')->default(false); // If the sample is confirmed by the artist
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sample_relationships');
    }
};
