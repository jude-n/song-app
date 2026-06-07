<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_history', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');

            // Polymorphic — viewable_type + viewable_id
            // Supported models: Cover, Comparison, Song, Artist, Article
            // Records every page a logged-in user visits so we can
            // surface "recently viewed" and power the recommendation engine
            $table->morphs('viewable');

            // Explicit timestamp for when the view occurred,
            // separate from created_at which tracks when the row was inserted
            $table->timestamp('viewed_at')->nullable();
            $table->timestamps();

            $table->index(['user_id', 'viewed_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_history');
    }
};
