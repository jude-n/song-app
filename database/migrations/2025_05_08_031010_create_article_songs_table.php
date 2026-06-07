<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('article_references', function (Blueprint $table) {
            $table->id();
            $table->foreignId('article_id')->constrained('articles', 'id')->onDelete('cascade');

            // Polymorphic — referenceable_type + referenceable_id
            // Supported models: Song, Cover, Comparison, Artist
            // Links an article to any content it discusses, enabling
            // "related articles" to appear on song, cover and artist pages
            $table->morphs('referenceable');

            $table->timestamps();

            // An article can only reference the same item once
            $table->unique(['article_id', 'referenceable_type', 'referenceable_id'], 'idx_article_reference');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('article_references');
    }
};
