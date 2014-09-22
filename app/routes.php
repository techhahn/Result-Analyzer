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

Route::get('test', function() {
	return Auth::user()->id;
});

Route::get('verify/{id}/{secret}', function($id, $secret){
	$user = User::find($id);
	if ($user) {
		$oldSecret = md5($user->created_at.$user->email);

		if ($oldSecret == $secret) {
			$user->confirmed = 1;
			$user->save();
			return View::make('emails.verified');
		}
			return 'Verification failed! no match in our database.';
	}
	return 'Verification failed!';
	
});

Route::resource('user', 'UsersController');

Route::group(array('prefix'=>'/api'),function(){
	Route::post('login/auth','AdminController@login');
	Route::get('logout/auth','AdminController@logout');
	Route::get('user/auth', array('uses' => 'AdminController@user', 'before' => 'ngAuth'));
	Route::get('loggedIn/auth','AdminController@loggedIn');
});

// Route::get('admin', array('as' => 'login', 'uses' => 'AdminController@adminLogin'));
