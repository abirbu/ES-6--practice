const age = 21;
//you are not able to change the variable which is decleared by const
// age = 23;
// console.log(age);

const nums = [10, 20, 30];
//you are able to change the specific indexed value but you are not able to change the whole array
nums[2] = 40;
// console.log(nums);
//but you can not change the whole array
// nums = [10, 50, 100, 500];
// console.log(nums);

//but if you use let
let x = 3;
x = 5;
// console.log(x);

//so, this is change able

//let and const can not be used in other place from { }
//ব্রাকেটের বাইরে লেট কনস্টান্ট দিয়ে ডিক্লেয়ার করা ভ্যারিএবল পুনরায় ব্যবহার করা যাবে না। 
//একটা উদাহরন দেখতে পারি
let sum = 0;
for (let i = 0; i < 10; i++) {
    const element =sum + i;
}
//element নামের এই ভ্যারিএবল টা const দিয়ে ডিক্লেয়ার করা হয়েছে {} এর ভিতরে তাই বাইরে তাকে ইউজ করা যাবে না। যদি একই জিনিস var দিয়ে করা হত তাইলে ইউজকরা যেত! 
// console.log(element);

//let - const - var