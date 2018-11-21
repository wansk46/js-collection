'use strict';
function map_to_four_multiples_add_one (collection){

	return mapto(collection,times4add1);
	
};



function times4add1(element){
	return element*4+1;
}

function mapto(collection,fn){
		for (let index=0;index<collection.length;index++)
	{
		collection[index]=fn(collection[index]);
	}

	return collection
}















module.exports = map_to_four_multiples_add_one;
