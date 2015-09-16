// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
	if(obj === null) {
		return 'null';
	} else if(typeof(obj) === 'string') {    //strings need quotes inside of the returned string
		return '"' + obj + '"';
	} else if(Array.isArray(obj)) {    //arrays we can iterate through and run stringify on each of their values in case they are nested.
		var str = "";
		for(var i = 0; i < obj.length; i++) {
			str = str.concat(stringifyJSON(obj[i]) + ',');
		}
		str = str.slice(0,str.length - 1);    //remove extra comma at the end
		return '[' + str + ']';
	} else if(typeof(obj) === 'object') {    //objects also need to be iterated through but can't be done indexically
		var objStr = "";
		for(var attr in obj){
			//functions have a toString and therefore are their own case
			if(obj[attr] !== undefined && typeof(obj[attr]) !== 'function'){
				objStr = objStr.concat(stringifyJSON(attr) + ':' + stringifyJSON(obj[attr]) + ',');
			}
		}
		objStr = objStr.slice(0,objStr.length-1);      //remove extra comma at the end
		return '{' + objStr + '}';
	} else {      //anything else is likely a value and will have a toString function to convey its value
		return obj.toString();
	}
};
