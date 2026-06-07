<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cover_suggestions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('suggested_by')->constrained('users', 'id')->onDelete('cascade');

            // The original song this is a cover of
            $table->foreignId('original_song_id')->constrained('songs', 'id');

            // The cover song if it already exists in the DB
            $table->foreignId('cover_song_id')->nullable()->constrained('songs', 'id')->nullOnDelete();

            // Freeform fields for when the cover isn't in the DB yet
            $table->string('cover_artist_name')->nullable();
            $table->string('cover_title')->nullable();
            $table->string('cover_url')->nullable(); // link to YouTube, Spotify, etc.

            $table->string('status')->default('pending'); // pending, approved, rejected
            $table->foreignId('reviewed_by')->nullable()->constrained('users', 'id')->nullOnDelete();
            $table->timestamp('reviewed_at')->nullable();
            $table->text('review_notes')->nullable(); // reason for rejection etc.

            $table->timestamps();
            $table->softDeletes();

            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cover_suggestions');
    }
};
