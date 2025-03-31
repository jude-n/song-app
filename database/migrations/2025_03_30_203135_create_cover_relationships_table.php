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
        Schema::create('cover_relationships', function (Blueprint $table) {
            $table->id();
            $table->foreignId('influencer_cover_id')->constrained('covers', 'id');
            $table->foreignId('influenced_cover_id')->constrained('covers', 'id');
            $table->text('influence_description');
            $table->timestamps();
            $table->softDeletes();

            // Unique constraint
            $table->unique(['influencer_cover_id', 'influenced_cover_id'], 'idx_influencer_influenced');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cover_relationships');
    }
};
