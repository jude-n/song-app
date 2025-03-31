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
        Schema::create('comparison_analysis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('comparison_id')->constrained('comparisons', 'id');
            $table->float('tempo_original');
            $table->float('tempo_cover');
            $table->string('key_original');
            $table->string('key_cover');
            $table->float('instrumentation_difference');
            $table->float('vocal_style_difference');
            $table->float('transformation_level');
            $table->json('additional_data');
            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->unique('comparison_id', 'idx_comparison');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comparison_analysis');
    }
};
