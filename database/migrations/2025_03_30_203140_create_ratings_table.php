<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');

            // Polymorphic — ratable_type + ratable_id
            // Supported models: Cover, Comparison, Song
            // Score range (1–5 or 1–10) is enforced at the application layer,
            // not the DB, to allow flexibility if the scale changes
            $table->morphs('ratable');

            $table->unsignedTinyInteger('score');
            $table->timestamps();

            // A user can only submit one rating per item
            $table->unique(['user_id', 'ratable_type', 'ratable_id'], 'idx_user_rating');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ratings');
    }
};
