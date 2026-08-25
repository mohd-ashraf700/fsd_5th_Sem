function sum (a , b){
    return a + b;
}

function sumWithMess(clbk , msg){
   const result = clbk(23 , 57);
   const fresult = "hi " + msg + " your score is " + result;
   console.log(fresult)
}

sumWithMess(sum , "mr priyank");