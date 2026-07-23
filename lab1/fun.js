const toWords =(digit)=>{
    const words =["zero ","one","two","three","four","five","six","seven","eight","nine"];
    return words[digit];
}

console.log(toWords(5));
console.log(toWords(0));
console.log(toWords(8));