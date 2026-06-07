<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_favourites', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');

            // Polymorphic — favouritable_type + favouritable_id
            // Supported models: Cover, Comparison, Song, Artist, Article
            // Allows users to save any content type to their favourites list
            // from a single table without separate pivot tables per model
            $table->morphs('favouritable');

            $table->timestamps();
            $table->softDeletes();

            // Prevents a user from favouriting the same item more than once
            $table->unique(['user_id', 'favouritable_type', 'favouritable_id'], 'idx_user_favourite');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_favourites');
    }
};
