// Task-1:
// Count how many times a string has the letter a
let name = "Mahbuba Ety";
let arr = name.split("a");
console.log(arr);
console.log(arr.length - 1)


// Task-2:
// Count how many times a string has the letter a or A
let name2 = "Ayesha Shahadat";
let arr2 = name2.toLowerCase().split("a");
console.log(arr2)
console.log(arr2.length - 1)

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
let sentence = "Na juda honge we, kabhi happy kabhi sad";
console.log(sentence.includes("a", "e", "i", "o", "u"));


// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let sentence2 = "Alexa play /'Xhaina meye tumi/' ";
if (sentence2.includes("x")) {
    sentence2 = sentence2.replace("x", "y");
    // console.log(sentence2);
    if (sentence2.includes("X", "Y")) {
        sentence2 = sentence2.replace("X", "Y");
        console.log(sentence2);
    }
} else {
    console.log("ekti harno biggopti, X or x ke khuje pawa jacchena.");
}

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


// Task-5:
// Capitalize Every first Letter of each word in a String
let sentence3 = "Javascript is tricky but fun";
let count = sentence3.split(" ");
for (let i = 0; i < count.length; i++){
    // console.log(sentence3[i]);
    count[i] = count[i][0].toUpperCase() + count[i].substring(1);
    console.log(count[i]);
    result = count.join(" ");
    
}
console.log(result);
