<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateStudentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('students', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('roll_no', 6);
			$table->string('PNR_no', 15);
			$table->string('admissionyear', 4);
			$table->string('name');
			$table->string('email');
			$table->integer('campus_id');
			$table->integer('course_id');
			$table->tinyInteger('year');
			$table->timestamps();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('students');
	}

}
