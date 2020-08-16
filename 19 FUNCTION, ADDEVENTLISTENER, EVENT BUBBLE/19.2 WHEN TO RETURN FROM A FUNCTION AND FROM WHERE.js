function evenify(num) {
    if (num % 2 == 0) {
        result = num;
    } else {
        result = num * 2;
    }
    return result;
}

var result = evenify(13);
var square = result * result;
console.log("square:", square);

function evenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenify(num);
    }
}

nums = [5, 12, 89, 45, 18, 8];

// evenify_all(nums);

friends_age = [13, 17, 19, 20, 18];

// evenify_all(friends_age);

