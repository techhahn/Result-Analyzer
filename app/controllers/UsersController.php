<?php

class UsersController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /users
	 *
	 * @return Response
	 */

	public function __construct() {
		$this->beforeFilter('ngAuth');
	}

	public function index()
	{

	}

	/**
	 * Show the form for creating a new resource.
	 * GET /users/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /users
	 *
	 * @return Response
	 */
	public function store()
	{
		$name = Input::get('name');
		$email = Input::get('email');

		$validator = Validator::make(
		    array(
		        'name' => $name,
		        'email' => $email
		    ),
		    array(
		        'name' => 'required',
		        'email' => 'required|email|unique:users'
		    )
		);

		if($validator->passes()) {

			$password = $rand = substr(md5(microtime()),rand(0,26),8);

			$user = new User();
			$user->name = $name;
			$user->email = $email;
			$user->password = Hash::make($password);
			$user->save();

			$secret =md5($user->created_at.$user->email);

			$data = array('password' => $password, 'secret' => $secret, 'id' => $user->id);
			if($user) {
				Mail::send('emails.welcome', $data, function($message)
				{
					$em = Input::get('email');
					$nm = Input::get('name');
				    $message->to($em, $nm)->subject('Account Confirmation');
				});
				return $user;
			}
			else {
				return Response::make('Failed to create new user, please try again', 501);
			}
		}
		else{
			return Response::make($validator->messages(), 403);
		}
	}

	/**
	 * Display the specified resource.
	 * GET /users/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /users/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /users/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$rules = array(
			'oldpass' => 'passcheck|required',
			'newpass' => 'required|min:8'
			);

		$input = array(
			'oldpass' => Input::get('oldPassword'),
			'newpass' => Input::get('newPassword')
			);

		Validator::extend('passcheck', function($attribute, $value, $parameters) {
		    return Hash::check($value, Auth::user()->password); // Works for any form!
		});

		$messages = array(
		    'passcheck' => 'Your old password was incorrect',
		);

		$validator = Validator::make($input, $rules, $messages);

		if ($validator->passes()) {
			$user = User::find(Auth::user()->id);
			$user->password = Hash::make(Input::get('newPassword'));
			$user->save();
			return Response::make('Sucessfully changed password', 200);
		} 
		else {
			return Response::make($validator->messages(), 403);
		}
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /users/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}