<?php

class Campus extends \Eloquent {
	protected $fillable = [];
	protected $table = 'campuses';
	
	public function courses() {
		return $this->hasMany('Course');
	}

	public static $rules = array(
		'title' => 'required',
		'description' => 'required|min:30'
		);
}