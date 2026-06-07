<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('playlist_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('playlist_id')->constrained('playlists', 'id')->onDelete('cascade');

            // Polymorphic — playlistable_type + playlistable_id
            // Supported models: Song, Cover, Comparison
            // Allows a playlist to mix content types — e.g. a standalone cover
            // alongside a full original-vs-cover comparison in the same list
            $table->morphs('playlistable');

            $table->unsignedInteger('order');
            $table->timestamp('added_at')->nullable();
            $table->timestamps();
            $table->softDeletes();

            // Order position must be unique within a playlist
            $table->unique(['playlist_id', 'order'], 'idx_playlist_order');

            // The same item cannot appear twice in the same playlist
            $table->unique(['playlist_id', 'playlistable_type', 'playlistable_id'], 'idx_playlist_item');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('playlist_items');
    }
};
