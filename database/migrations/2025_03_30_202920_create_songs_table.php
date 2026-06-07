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
            $table->unsignedSmallInteger('release_year');                        // required — e.g. 1971
            $table->unsignedTinyInteger('release_month');                         // required — 1–12
            $table->date('release_date')->nullable()->index('idx_release_date'); // set only when exact day is known
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
