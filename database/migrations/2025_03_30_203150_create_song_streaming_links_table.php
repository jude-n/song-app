<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('song_streaming_links', function (Blueprint $table) {
            $table->id();
            $table->foreignId('song_id')->constrained('songs', 'id')->onDelete('cascade');
            $table->string('platform'); // spotify, youtube, apple_music, soundcloud, tidal, etc.
            $table->string('url');
            $table->string('external_id')->nullable(); // platform-specific track/video ID
            $table->timestamps();

            // One link per platform per song
            $table->unique(['song_id', 'platform'], 'idx_song_platform');
            $table->index('platform');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('song_streaming_links');
    }
};
