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
        Schema::create('song_genres', function (Blueprint $table) {
            $table->id();
            $table->foreignId('song_id')->constrained('songs', 'id')->onDelete('cascade');
            $table->foreignId('genre_id')->constrained('genres', 'id')->onDelete('cascade');
            $table->timestamps();
            // No softDeletes — pivot rows use hard delete.
            // Soft-deleting here would leave a live FK while hiding the row, causing ghost associations.

            $table->unique(['song_id', 'genre_id'], 'idx_song_genre');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('song_genres');
    }
};
