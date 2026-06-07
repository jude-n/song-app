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
            $table->integer('sample_start_time'); // Start time in seconds in the original
            $table->integer('sample_end_time'); // End time in seconds in the original
            $table->integer('placement_time'); // in seconds, Where the sample appears in the new song (seconds)
            $table->text('sample_description');
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
