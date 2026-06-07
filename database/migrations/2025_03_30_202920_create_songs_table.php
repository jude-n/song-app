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
        Schema::create('songs', function (Blueprint $table) {
            $table->id();
            $table->string('title')->index('idx_title');
            $table->string('slug')->unique();
            $table->foreignId('artist_id')->constrained('artists', 'id')->onDelete('cascade');
            $table->foreignId('album_id')->nullable()->constrained('albums', 'id')->nullOnDelete();
            $table->integer('view_count')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->date('release_date')->index('idx_release_date');
            $table->integer('duration')->nullable(); // in seconds
            $table->boolean('is_original')->default(true);
            $table->text('lyrics')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('songs');
    }
};
