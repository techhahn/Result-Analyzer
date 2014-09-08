<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('layouts.main');
});

Route::group(array('prefix'=>'/api'),function(){
	Route::post('login/auth','AdminController@login');
	Route::get('logout/auth','AdminController@logout');
	Route::get('user/auth','AdminController@user');
});

// Route::get('admin', array('as' => 'login', 'uses' => 'AdminController@adminLogin'));
