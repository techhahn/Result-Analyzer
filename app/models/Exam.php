<?php

class Exam extends \Eloquent {
	protected $fillable = [];

	protected $table = 'exams';

	public function course()
    {
        return $this->belongsTo('Course');
    }


}