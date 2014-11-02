<?php

class CampusController extends \BaseController {
	/**
	 * Display a listing of the resource.
	 * GET /campus
	 *
	 * @return Response
	 */
	public function index()
	{
		return Campus::all();
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /campus/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /campus
	 *
	 * @return Response
	 */
	public function store()
	{
		$validator = Validator::make(Input::all(), Campus::$rules);

		if($validator->passes()) {
			$campus = new Campus();
			$campus->title = Input::get('title');
			$campus->description = Input::get('description');
			$campus->save();
			return $campus;
		}
		else {
			return Response::make($validator->messages(), 403); 
		}
	}

	/**
	 * Display the specified resource.
	 * GET /campus/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return Campus::with('courses')->find($id);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /campus/{id}/edit
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
	 * PUT /campus/{id}
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
	 * DELETE /campus/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$campus = Campus::find($id);

		if($campus) {
			$campus->delete();
			return Response::make('Deleted', 200);
		}
		return Response::make('Not Found', 404);
	}

}