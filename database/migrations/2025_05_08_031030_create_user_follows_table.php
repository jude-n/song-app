<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_follows', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');

            // Polymorphic — followable_type + followable_id
            // Supported models: Artist, User
            // A single table handles both artist follows (get notified when a new
            // cover drops) and user follows (social graph for the community features)
            $table->morphs('followable');

            $table->timestamps();

            // A user can only follow the same entity once
            $table->unique(['user_id', 'followable_type', 'followable_id'], 'idx_user_follow');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_follows');
    }
};
