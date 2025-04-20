<?php

use App\Http\Controllers\LibraryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('welcome');
//})->name('home');

Route::get('/', function () {
    return Inertia::render('song-app/home');
})->name('home');
Route::get('/discover', function () {
    return Inertia::render('song-app/discovery-search');
})->name('discover');

Route::resource('library', LibraryController::class);


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
