<?php

class ExamsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /exams
	 *
	 * @return Response
	 */
	public function index()
	{
		$exams = Exam::with('course')->get(['id', 'name', 'type', 'course_id', 'class', 'campus_id', 'created_at']);

		foreach ($exams as $value) {
			$value['campus'] = Campus::find($value['campus_id'])->title;
		}
		return $exams;
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /exams/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /exams
	 *
	 * @return Response
	 */
	public function store()
	{
		$exam = new Exam();
		$exam->subjects = serialize(Input::get('subjects'));
		$exam->name = Input::get('name');
		$exam->class = Input::get('class');
		$exam->type = Input::get('type');
		$exam->campus_id = Input::get('campus_id');
		$exam->course_id = Input::get('course_id');
		$exam->save();

		$exam['course'] = Course::find($exam['course_id'])->title;
		$exam['campus'] = Campus::find($exam['campus_id'])->title;
		
		return $exam;
	}

	/**
	 * Display the specified resource.
	 * GET /exams/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$exam = Exam::find($id);

		if ($exam) {
			$exam['subjects'] = unserialize($exam['subjects']);
			
			$exam['course'] = Course::find($exam['course_id'])->title;
			$exam['campus'] = Campus::find($exam['campus_id'])->title;
			$exam['students_count'] = Student::wherecourse_id($exam['course_id'])->count();
		
			return $exam;
		}

		return [];
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /exams/{id}/edit
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
	 * PUT /exams/{id}
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
	 * DELETE /exams/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}