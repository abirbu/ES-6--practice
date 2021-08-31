function add (num1, num2) {
    return num1+num2;
}

const total = add(15, 20);
console.log(total);

//যদি দ্বিতীয় ভ্যাল্যউ না দেয়া হয়, সেক্ষেত্রে আমরা যদি চাই যে ডিফল্ট একটা ভ্যালু দেয়া থাকবে সেক্ষেত্রে
function multiply(num1=1, num2=1) {
    return num1*num2;
}
//অর্থাৎ যেকোন একটা ভ্যালুনা দিলে ডিফল্ট ভাবে সেটা ১ হবে
const mul = multiply(10,);
console.log(mul);
//যদি সেট না করে দিতাম তাহলে সেটা NaN দেখাইতো