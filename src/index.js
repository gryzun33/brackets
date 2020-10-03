module.exports = function check(str, bracketsConfig) {

    let arr = str.split('');
    let current;
    let len;
    

    label: while (arr.length >= 2) {
        len = arr.length;

        for (let i = 0; i < bracketsConfig.length; i++) {
            for (let j = 0; j < arr.length - 1 ; j++) {
    
                current = [arr[j], arr[j+1]];
                if (bracketsConfig[i].toString() === current.toString()) {
                    arr.splice(j, 2);
                    if (arr.length < 2) break label; 
                       
                }
            }
        }

        if (arr.length === len) {
            return false;
        }
    }

    if (arr.length === 0) {
            return true;
        } else {
            return false;
        }


    

};





// let arr = str.split('');
// let current1, current2, current3;
// let l = arr.length; 


// while (arr.length >= 2 ){
//     console .log (`l start= ${arr.length} `);
//     l  = arr.length; 
//     for (let i = 0; i < bracketsConfig.length; i++) {
      
//          console.log(`arr = ${arr}`); 
//     current1 = [arr[0], arr[1]];
//     current2 = [arr[arr.length-2], arr[arr.length-1]];
//     current3 = [arr[0], arr[arr.length-1]];
    
   
//     console.log (`current1 = ${current1}`);
//     console.log (`current2 = ${current2}`);
//     console.log (`current3 = ${current3}`);
//     console.log (`config = ${bracketsConfig[i]}`);  
//      if (bracketsConfig[i].toString() === current1.toString()) {
//          arr.shift();
//          arr.shift();
//          if(arr.length < 2) break ;
//          i--; 
//          console.log(`arr = ${arr}`); 
//      } else if (bracketsConfig[i].toString(i) === current2.toString()) {
//          arr.pop();
//          arr.pop();
//          if(arr.length < 2) break ;
//           i--;
//      } else if (bracketsConfig[i].toString() === current3.toString()) {
//          arr.shift();
//          arr.pop();
//          if(arr.length < 2) break ;
//          i--;
//      } 
           
    
//  };
//   console.log(`arrafter = ${arr}`);
//   console .log (`l end= ${arr.length} `);
 
// if (arr.length === l) {
//     return false;
// }
    
// }

// if (arr.length === 0) {
//     return true;
// } else {
//     return false;
// }
