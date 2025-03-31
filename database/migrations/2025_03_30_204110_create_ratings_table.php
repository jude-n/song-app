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
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('comparison_id')->constrained();
            $table->integer('score');
            $table->timestamps();

            // Unique constraint
            $table->unique(['user_id', 'comparison_id'], 'idx_user_comparison');

            // Foreign key constraints
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('comparison_id')->references('id')->on('comparisons');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ratings');
    }
};
