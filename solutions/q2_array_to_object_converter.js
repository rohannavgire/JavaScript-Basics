/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (objArray, key) => {	
	if (Array.isArray(objArray))	{
		return objArray.reduce(function(obj, item) {
			obj[item[key]]=item;
			return obj;
			//console.log(typeof(obj));								
		}, {});
	}
	else
		return null;
};	




/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

//const object=convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}, {id: 3, value: 'pqr'}], 'id');
//console.log(object);

module.exports = convert;
