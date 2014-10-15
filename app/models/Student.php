<?php

class Student extends \Eloquent {
	protected $fillable = [];

	protected $table = 'students';

	public function campus()
    {
        return $this->belongsTo('Campus');
    }

	public static $rules = array(
		'rollno' => 'required|max:7',
		'pnr' => 'required|max:15',
		'admissionyear' => 'required|max:4',
		'name' => 'required',
		'email' => 'required|email',
		'campus_id' => 'required',
		'course_id' => 'required',
		'class' => 'required|max:1'
	);
}