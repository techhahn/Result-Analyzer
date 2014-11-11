<?php

class ResultsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /results
	 *
	 * @return Response
	 */
	public function index()
	{
		return Result::all(['id']);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /results/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /results
	 *
	 * @return Response
	 */
	public function store()
	{
		$result = Input::all()
	}

	/**
	 * Display the specified resource.
	 * GET /results/{id}
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
	 * GET /results/{id}/edit
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
	 * PUT /results/{id}
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
	 * DELETE /results/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}