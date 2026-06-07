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
        Schema::create('comparisons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('original_song_id')->constrained('songs', 'id');
            $table->foreignId('cover_id')->constrained('covers', 'id');
            $table->string('title');
            $table->string('description');
            $table->boolean('featured')->default(false);
            $table->integer('view_count')->default(0);
            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->unique(['original_song_id', 'cover_id'], 'idx_song_cover');
            $table->index('featured', 'idx_featured');
            $table->index('view_count', 'idx_views');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comparisons');
    }
};
