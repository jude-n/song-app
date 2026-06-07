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
        Schema::create('albums', function (Blueprint $table) {
            $table->id();
            $table->string('title')->index('idx_album_title');
            $table->foreignId('artist_id')->constrained('artists', 'id')->onDelete('cascade');
            $table->date('release_date')->index('idx_release_date');
            $table->string('cover_image_url');
            $table->integer('view_count')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->string('external_url');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('albums');
    }
};
