<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');

            // Polymorphic — commentable_type + commentable_id
            // Supported models: Cover, Comparison, Song, Article
            // commentable_type stores the fully qualified model class e.g. App\Models\Cover
            // commentable_id stores the model's primary key
            $table->morphs('commentable');

            // Self-referencing FK for threaded replies
            // null  = top-level comment
            // set   = reply to another comment (one level recommended in UI, unlimited in DB)
            $table->foreignId('parent_id')
                  ->nullable()
                  ->constrained('comments', 'id')
                  ->onDelete('cascade');

            $table->text('content');
            $table->timestamps();
            $table->softDeletes();

            $table->index('created_at');
            $table->index('parent_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
