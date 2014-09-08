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
		return sessionStorage.setItem(key, value);
	}

	function get(key) {
		return sessionStorage.getItem(key);
	}

	function destroy(key) {
		return sessionStorage.removeItem(key);
	}

	return {
		set: set,
		get: get,
		destroy: destroy
	}
}