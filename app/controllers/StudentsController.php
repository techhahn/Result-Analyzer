<?php

class StudentsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /students
	 *
	 * @return Response
	 */
	public function index()
	{
		return Student::all();
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /students/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /students
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make(Input::all(), Student::$rules);

		if($validator->passes()) {
			$student = new Student();
			$student->roll_no = Input::get('rollno');
			$student->PNR_no = Input::get('pnr');
			$student->admissionyear = Input::get('admissionyear');
			$student->name = Input::get('name');
			$student->email = Input::get('email');
			$student->campus_id = Input::get('campus_id');
			$student->course_id = Input::get('course_id');
			$student->year = Input::get('class');
			$student->save();
			return $student;
		}
		else {
			return Response::make($validator->messages(), 403); 
		}

	}

	/**
	 * Display the specified resource.
	 * GET /students/{id}
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
	 * GET /students/{id}/edit
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
	 * PUT /students/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /students/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}