<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('covers', function (Blueprint $table) {
            $table->id();

            // The root original song this cover ultimately derives from
            $table->foreignId('root_original_song_id')->constrained('songs', 'id');

            // The specific song this cover is directly based on (could be the original or another cover)
            $table->foreignId('original_song_id')->constrained('songs', 'id');

            // The song record representing this cover version
            $table->foreignId('cover_song_id')->constrained('songs', 'id');

            // If this cover was based on a prior cover rather than the original
            $table->foreignId('based_on_cover_id')->nullable()->constrained('covers', 'id');

            // Type of relationship (cover, remake, remix, reinterpretation, etc.)
            $table->foreignId('relationship_type_id')->nullable()->constrained('relationship_types', 'id');

            // NOTE: chronological position (cover_number) is NOT stored here.
            // It is derived at query time by ranking covers of the same root_original_song_id
            // ordered by songs.release_date ASC via the cover_song_id join.
            // Covers with no release_date are ranked NULL and shown last.

            // Optional: specific section of the original this cover references
            $table->integer('reference_start_time')->nullable(); // seconds
            $table->integer('reference_end_time')->nullable();   // seconds

            // Editorial notes about what was taken or changed
            $table->text('notes')->nullable();

            $table->integer('view_count')->default(0)->index('idx_cover_views');
            $table->boolean('is_featured')->default(false)->index('idx_cover_featured');

            $table->timestamps();
            $table->softDeletes();

            // A song can only be a cover of another song once
            $table->unique(['original_song_id', 'cover_song_id'], 'idx_original_cover');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('covers');
    }
};
