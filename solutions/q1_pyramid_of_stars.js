/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (ht) => {
    var pyramids="";
    if(ht > 0) {        
	    for (var i = 0; i < ht; i++) {        
            for (var j = 0; j <= (ht-i-1); j++) {
                pyramids = pyramids + " ";
            }
            for (var k = 0; k <= i; k++) {
                pyramids = pyramids + "* ";
            }
            pyramids = pyramids+" \n";
        } 

    }
    console.log(pyramids);
    
    return pyramids; 
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;


