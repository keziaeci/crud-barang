<?php

use App\Http\Controllers\BarangController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::controller(BarangController::class)->group(function () {
    Route::get('/dashboard', [BarangController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
    Route::delete('/delete/{barang:id}', [BarangController::class, 'destroy'])->name('delete');
    Route::get('/edit/{barang:id}', [BarangController::class, 'edit'])->name('edit');
    Route::get('/create', [BarangController::class, 'create'])->name('create');
    Route::post('/store', [BarangController::class, 'store'])->name('store');
});


// ]); //ini punya sp njir haous aj

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Route::get('/barang', [BarangController::class, 'index'])->name('barang'); //kek ini, trus nanti ke pass data ne dari kontroler

require __DIR__ . '/auth.php';
// rusak okeoekoeke
//bentar nyoba

//function () {
    // return Inertia::render('Dashboard',[
    //  render barang controller here
        // rak ngene, kudu ng contorller tak hapus ya
        // jgn dihapus jir knp harus dikasi kontroler kek yang barang,
        // oke coba cik
        //bikin baru wae
        //route e 
        // koe iso buka folder kan, edit ae 
        //folder ap jir

        // yo directory file iki,, atur ae aku cmn view nnti
        //berarti ga disini? emang nek aku ngubah ng punyaku, disini keubah? 
        //  jajal ng resouces, ono file test.jsx gak, bagian pages
        //ono
        // brarti iki file directory ku, dudu gonanmu
        //wait hm