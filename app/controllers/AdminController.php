<?php

class AdminController extends \BaseController {

	public function login() {
		$email = Input::get('email');
		$password = Input::get('password');

		if(Auth::attempt(array('email' => $email, 'password' => $password, 'confirmed' => 1), true)) {
			return Auth::user();
		}
		else {
			return Response::json(array('message' => 'Error Username or Password'), 500);
		}

	}

	public function logout() {
		Auth::logout();
		if(!Auth::check()) {
			return "Logout Sucessfully";
		}
	}

	public function user() {
		return Response::json(Auth::user());
	}

	public function loggedIn() {
		return Auth::check()? 1 : 0;
	}
}