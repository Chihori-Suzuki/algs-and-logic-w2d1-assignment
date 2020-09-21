// Write a fucntion that takes an array of integers (positive or negative or both) and return 
// the sum of the absolute value of each element.

const getAbsSum = function(arr) {
    let ans = 0;
    for (i = 0; arr.length ; i++){
        if(arr[i] < 0){
            arr[i] *= -1 ;
        }
        ans += arr[i];
    };
    return ans;
}


console.log(getAbsSum([2, -1, 4, 8, 10]));
// ➞ 25

// getAbsSum([-3, -4, -10, -2, -3]) 
// ➞ 22

// getAbsSum([2, 4, 6, 8, 10]) 
// ➞ 30

// getAbsSum([-1]) 
//➞ 1