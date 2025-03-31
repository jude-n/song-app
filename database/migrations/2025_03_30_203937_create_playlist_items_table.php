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
        Schema::create('playlist_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('playlist_id')->constrained('playlists', 'id');
            $table->foreignId('comparison_id')->constrained('comparisons', 'id');
            $table->integer('order');
            $table->timestamps('added_at');
            $table->timestamps();
            $table->softDeletes();

            // Unique constraint
            $table->unique(['playlist_id', 'order'], 'idx_playlist_order');
            // Indexes
            $table->index(['playlist_id', 'comparison_id'], 'idx_playlist_comparison_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('playlist_items');
    }
};
