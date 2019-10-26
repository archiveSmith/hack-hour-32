/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    //binary string
    //converts binary to decimal
    if(binary===undefined || binary.length===0){
        return;
    }

    let result=0;
    for(let i=0;i<binary.length;i++){
        //the twos match the decimal
        let el=binary[i];
        if(el==1){ //2^3 is 8
            
            result+=Math.pow(2,i);
        }
        else if(el==0){
            continue;
        }
      
    }
    return result;
}


function decToBin(dec){
    let result="";
    if(dec===undefined || dec.length===0){
        return;
    }

    //get g, the largest factor of 2 exponent that goes into the number(cap)
    let g=0;
    let cop=dec;
    for(let i=0;cop>1;i++){
        g=i;
        cop/=2;
    }//g is the number of positions 

    //
    for(let w=g;w>=0;w--){
        let potential=Math.pow(2,w);
        if(dec-potential>0){
            dec-=potential;
            result+="1";
        }
        else{
            result+="0";
        }
    }


    return result;
}

function decToHex(dec){
 


}

// console.log(binToDec('11')); // -> 3
// console.log(binToDec('100'));
// console.log(binToDec('101'));
// console.log(binToDec('0101'));


console.log(decToBin('10'));
module.exports = binToDec;
