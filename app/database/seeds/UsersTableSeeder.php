<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {

	public function run()
	{
		$faker = Faker::create();

		foreach(range(1, 10) as $index)
		{
			User::create([
				'email' => 'admin@gmail.com',
				'password' => Hash::make('admin'),
				'name' => 'Pritesh Panjiker',
				'confirmed' => 1
			]);
		}
	}

}