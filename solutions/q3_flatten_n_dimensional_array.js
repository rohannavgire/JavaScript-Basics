/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
    if (Array.isArray(arr))	{
        return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []); 
    }
    else
        return null;  
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

//flatArr = flatten([1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]]);
//console.log(flatArr);

module.exports = flatten;
