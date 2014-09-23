<?php

class Campus extends \Eloquent {
	protected $fillable = [];
	protected $table = 'campuses';

	public static $rules = array(
		'title' => 'required',
		'description' => 'required|min:30'
		);
}