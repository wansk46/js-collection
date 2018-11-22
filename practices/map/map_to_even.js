'use strict';

function map_to_even(collection){
	return map(collection,times2);
}


function times2(ele){
	return ele*2;
}

function map(collection,fn){
	for (let index=0;index<collection.length;index++){
		let element = collection[index];
		element=fn(element);
	}
	return collection.map(element=>fn(element))
	
	// collection.forEach(function(element){
	// 	element=fn(element);
	// });

	// collection.forEach(element=>element=fn(element))
	
}

module.exports = map_to_even;

// collection.forEach(element => doSomeThingWithThisElement());
