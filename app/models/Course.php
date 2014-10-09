<?php

class Course extends \Eloquent {
	protected $fillable = [];
	protected $table = 'courses';

    public function campus()
    {
        return $this->belongsTo('Campus');
    }

	public static $rules = array(
		'title' => 'required',
		'description' => 'required'
		);
}