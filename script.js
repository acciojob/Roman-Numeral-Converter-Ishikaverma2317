function convertToRoman(num) {
    if (num === 0) return ""; // Romans did not represent zero

    const romanMap = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];

    let result = "";

    for (let [symbol, value] of romanMap) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// --- Do NOT change anything below ---
// Input handling for judge
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const n = parseInt(input, 10);
console.log(convertToRoman(n));
