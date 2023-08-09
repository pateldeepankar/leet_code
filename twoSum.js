let nums = [2,7,6,5,6,7];
function twoSumTarget(num,target){
    for(let i =0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if(num[i]+num[j]===target){
                return [i,j];
            }
        }
    }
}
console.log(twoSumTarget(nums,11));