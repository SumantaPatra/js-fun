// const arr = [1,2,3,[4,5,6],7]

// const flattenArr = arr.flat(1);

// console.log(flattenArr)

// const arr1 = [1,2,3];

// const spreadArr = [...arr1]


function flattenArr(arr, depth = 1) {
    if (depth <= 0 || !Array.isArray(arr)) return arr;

    const result = [];

    for (const el of arr) {
        if (Array.isArray(el))
            result.push(...flattenArr(el, depth - 1))
        else
            result.push(el)
    }

    return result;

}

const arr = [1, 2, 3, [[4, 5]]];

console.log(flattenArr(arr, 1))





