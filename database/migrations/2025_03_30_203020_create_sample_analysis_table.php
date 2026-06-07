<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('sample_analysis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('relationship_id')->constrained('sample_relationships', 'id')->onDelete('cascade');

            // All analysis fields are nullable — data may be partial or added incrementally
            $table->float('tempo_change')->nullable();         // Percentage change in tempo
            $table->integer('pitch_shift')->nullable();        // Semitones shifted
            $table->float('transformation_level')->nullable(); // Scale 0–100 of how transformed the sample is
            $table->integer('chop_complexity')->nullable();    // Complexity of sample chopping (1–10)
            $table->text('additional_effects')->nullable();    // Description of effects applied
            $table->json('additional_data')->nullable();       // Catch-all for future analysis fields

            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sample_analysis');
    }
};
