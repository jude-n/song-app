<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Phase 3 — granular analytics beyond simple view_count counters.
        // view_count on each model (covers, songs, comparisons) handles
        // fast "total views" reads. This table enables deeper analysis:
        // unique visitors, views over time, peak traffic, per-country breakdowns.
        Schema::create('page_views', function (Blueprint $table) {
            $table->id();

            // Polymorphic — viewable_type + viewable_id
            // Supported models: Cover, Comparison, Song, Artist, Article
            // Mirrors user_history but captures guest views too (user_id nullable)
            $table->morphs('viewable');

            // null for unauthenticated visitors
            $table->foreignId('user_id')->nullable()->constrained('users', 'id')->nullOnDelete();

            $table->string('ip_address', 45)->nullable(); // supports IPv6
            $table->string('country_code', 2)->nullable(); // resolved from IP, e.g. 'GH', 'US'
            $table->string('user_agent')->nullable();
            $table->timestamp('viewed_at');

            $table->index(['viewable_type', 'viewable_id', 'viewed_at'], 'idx_viewable_time');
            $table->index('viewed_at');
            $table->index('user_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('page_views');
    }
};
