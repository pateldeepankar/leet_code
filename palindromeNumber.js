
function findPalindromeNumber(number){
    let num = number
    let rev =0;
    
    while(num!==0){
        const digit= num%10
        rev = rev*10+digit
        num = Math.floor(num/10);
    }
    if(number==rev){
        return true;
    }
    else{
        return false
    }
}
console.log(findPalindromeNumber(121));