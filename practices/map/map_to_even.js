'use strict';

function map_to_even(collection){
	return map(collection,times2);
}


function times2(ele){
	return ele*2;
}

function map(collection,fn){
	for (let index=0;index<collection.length;index++){
		collection[index]=fn(collection[index]);
	}
	return collection
}

module.exports = map_to_even;


