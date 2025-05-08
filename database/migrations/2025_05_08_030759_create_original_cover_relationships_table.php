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
        Schema::create('original_cover_relationships', function (Blueprint $table) {
            $table->id('relationship_id');
            $table->unsignedBigInteger('original_song_id');
            $table->unsignedBigInteger('cover_song_id');
            $table->unsignedBigInteger('relationship_type_id')->nullable();

            $table->foreign('original_song_id')->references('song_id')->on('songs')->onDelete('cascade');
            $table->foreign('cover_song_id')->references('song_id')->on('songs')->onDelete('cascade');
            $table->foreign('relationship_type_id')->references('id')->on('relationship_types')->nullOnDelete();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('original_cover_relationships');
    }
};
