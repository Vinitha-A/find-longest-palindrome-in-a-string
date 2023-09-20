/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let chars = s.charAt(0);
    let arraychars = s.split('');
    let stringop = [];
    // console.log(arraychars);
    // console.log(s.indexOf(chars));


    let resultArray = [];
    // outer loop to run n times [n = size of string]
    for(let i = 0; i < s.length; i++){
        // pushing first char of string as substring
        // as we know that each char will be substring itself too.
        resultArray.push(s[i]);
        // inner loop to run n - 1 times;
        for(let j = i + 1; j <=s.length; j++){
                let teststr = s.substring(i,j);
            // get last substring and append the new next char
            if(teststr == teststr.split('').reverse().join(''))
            resultArray.push(
             s.substring(i,j));
            
        }
    }

let maxlength = resultArray[0].length , maxitem = resultArray[0];
    for(let x of resultArray)
    {
        if(x.length > maxlength ){
            maxlength = x.length;
            maxitem = x;
        }
    }

    return maxitem;

    
}

