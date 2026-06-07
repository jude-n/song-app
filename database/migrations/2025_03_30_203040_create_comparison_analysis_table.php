<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('comparison_analysis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('comparison_id')->constrained('comparisons', 'id')->onDelete('cascade');

            // All analysis fields are nullable — data may be partial or added incrementally
            $table->float('tempo_original')->nullable();
            $table->float('tempo_cover')->nullable();
            $table->string('key_original')->nullable();
            $table->string('key_cover')->nullable();
            $table->float('instrumentation_difference')->nullable(); // Scale 0–100
            $table->float('vocal_style_difference')->nullable();     // Scale 0–100
            $table->float('transformation_level')->nullable();       // Scale 0–100 overall
            $table->json('additional_data')->nullable();             // Catch-all for future fields

            $table->timestamps();
            $table->softDeletes();

            // One analysis record per comparison
            $table->unique('comparison_id', 'idx_comparison');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('comparison_analysis');
    }
};
