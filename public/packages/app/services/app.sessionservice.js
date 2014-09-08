/**
* result Module
*
* Description
*/
angular
	.module('result')
	.factory('sessionService', sessionService)


function sessionService(){
	function set(key, value) {
		return localStorage.setItem(key, value);
	}

	function get(key) {
		return localStorage.getItem(key);
	}

	function destroy(key) {
		return localStorage.removeItem(key);
	}

	return {
		set: set,
		get: get,
		destroy: destroy
	}
}