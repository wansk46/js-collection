'use strict';

function grouping_count(collection) {
	let result={};
	let count=0;
	for (let index=0;index<collection.length;index++){
		if(result[collection[index]]==null){
			result[collection[index]]=1;
		}
		else{
			result[collection[index]]++;
		}
	}
	return result;
}

// function grouping_count(collection) {

//   let count = {};

//   //implement here
//   collection.forEach(element => {
//     if (count[element] != null) {
//       count[element] += 1;
//     } else {
//       count[element] = 1;
//     }
//   });
//   return count;
// }

module.exports = grouping_count;
