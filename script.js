function romanNumeralConverter(num) {
    const symbols = [
        ['M', 1000], ['D', 500], ['C', 100],
        ['L', 50], ['X', 10], ['V', 5], ['I', 1]
    ];
    const valueMap = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'],
        [1, 'I']
    ];
    let result = '';
    for (let [value, symbol] of valueMap) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

// Example usage:
console.log(romanNumeralConverter(14));  // Output: XIV
console.log(romanNumeralConverter(798)); // Output: DCCXCVIII