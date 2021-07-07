const input='a whale of a deal!';
const vowels=['a','e','i','o','u'];
const resultArray=[];
for(let i=0;i<input.length;i++){
  // console.log(i);
  for(let j=0;j<vowels.length;j++){
    // console.log(j);
    if(input[i]===vowels[j]){
    if(input[i]==='e' || input[i]==='u'){
      resultArray.push('ee');
    }else{
      resultArray.push(input[i]);
    }
    }
  }
}
console.log(resultArray.join('').toUpperCase());
