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
            $table->foreignId('artist_id')->constrained('artists', 'id')->onDelete('cascade');
            $table->foreignId('album_id')->constrained('albums', 'id')->onDelete('cascade');
            $table->integer('view_count')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->date('release_date')->index('idx_release_date');
            $table->integer('duration'); // in seconds
            $table->string('audio_url');
            $table->string('video_url');
            $table->string('waveform_url');
            $table->text('lyrics');
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
