'use strict';

function choose_even(collection) {
	let result=[];
	for (let index=0;index<collection.length;index++){
		if(collection[index]%2===0){
			result.push(collection[index])
		}
	    
	}
	return result;
}

module.exports = choose_even;


// return collection.filter(element=>element%2===0);
