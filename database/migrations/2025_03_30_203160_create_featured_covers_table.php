<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('featured_covers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cover_id')->constrained('covers', 'id')->onDelete('cascade');
            $table->date('featured_date')->unique(); // one cover per day
            $table->text('blurb')->nullable();       // editorial note on why it's featured
            $table->foreignId('curated_by')->nullable()->constrained('users', 'id')->nullOnDelete();
            $table->timestamps();

            $table->index('featured_date');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('featured_covers');
    }
};
