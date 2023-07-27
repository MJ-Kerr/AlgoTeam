// // given two sorted arrays that may have duplicate values, merge them and remove any duplicates
// //          arrA1
// var arr1 = [1, 3, 3, 5, 8, 10,];
// //          arrB1
// var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

// var arrA = [1, 3, 4, 5];
// var arrB = [1, 3, 3, 5, 8, 10,];

// // 1. DRIVER
// // 2. PRESENTER
// // 3. NAVIGATOR
// function mergeDedupe(arr1, arr2) { }

// // try out some other tests
// mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
// mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// //   arrA1 -> 
// //     [1, 3, 3, 5, 8, 10]
// //   arrB1
// //     [1, 3, 4, 5]

// function mergeDedupe(arr1, arr2) {
//     const mergedArr = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] === arr2[j]) {
//             arr2[j]++
//         }
//         else if (arr1[i] < arr2[j]) {
//             mergedArr.push(arr1[i]);
//             i++;
//         } else {
//             mergedArr.push(arr2[j]);
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         mergedArr.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         mergedArr.push(arr2[j]);
//         j++;
//     }
//     return mergedArr;
// }
// console.log(mergeDedupe(arr1, arr2));

// function mergeDedupe(arrA, arrB) {
//     let arrA1 = 0;
//     let arrB1 = 0;
//     let arrComb = [];
//     while (arrA[arrA1] != undefined && arrB[arrB1] != undefined) {
//         if (arrA[arrA1] == arrB[arrB1]) {
//             if (arrComb.includes(arrA[arrA1])) {
//                 arrA1++;
//                 arrB1++;
//                 continue
//             } else {
//                 arrComb.push(arrA[arrA1]);
//                 arrA1++;
//                 arrB1++;
//             }
//         } else if (arrA[arrA1] < arrB[arrB1]) {
//             if (arrComb.includes(arrA[arrA1])) {
//                 arrA1++;
//                 continue
//             } else {
//                 arrComb.push(arrA[arrA1]);
//                 arrA1++;
//             }
//         } else {  // arrB[arrB1] > arrA[arrA1]
//             if (arrComb.includes(arrB[arrB1])) {
//                 arrB1++;
//                 continue
//             } else {
//                 arrComb.push(arrB[arrB1]);
//                 arrB1++;
//             }
//         }
//     }
//     if (arrA[arrA1] != undefined) {
//         while (arrA1 < arrA.length) {
//             if (arrComb.includes(arrA[arrA1])) {
//                 arrA1++;
//                 continue
//             } else {
//                 arrComb.push(arrA[arrA1]);
//                 arrA1++;
//             }
//         }
//     } else {  // arrB[arrB1] != undefined
//         while (arrB1 < arrB.length) {
//             if (arrComb.includes(arrB[arrB1])) {
//                 arrB1++;
//                 continue
//             } else {
//                 arrComb.push(arrA[arrB1]);
//                 arrB1++;
//             }
//         }
//     }
//     console.log(arrComb);
//     return arrComb
// }
// mergeDedupe(arrA, arrB);
// ``

// function findCommonElements(arrA2, arrB2) {
//     const commonElements = [];
//     let i = 0;
//     let j = 0;

//     while (i < arrA1.length && j < arrB2.length) {
//         if (arrA2[i] === arrB2[j]) {
//             if (commonElements.length === 0 || commonElements[commonElements.length - 1] !== arrA2[i]) {
//                 commonElements.push(arrA2[i]);
//             }
//             i++;
//             j++;
//         } else if (arrA2[i] < arrB2[j]) {
//             i++;
//         } else {
//             j++;
//         }
//     }

//     return commonElements;
// }

// const arrA1 = [0, 1, 2, 2, 2, 7];
// //             b
// const arrB1 = [2, 2, 6, 6, 7];
// const expected1 = [2, 7];

// const arrA2 = [0, 1, 2, 2, 2, 7];
// const arrB2 = [2, 2];
// const expected2 = [2];

// const arrA3 = [0, 1, 2, 2, 2, 7];
// const arrB3 = [10];
// const expected3 = [];

// // const commonElements = findCommonElements(arrA3, arrB3);
// // console.log(commonElements);
// const commonElements = findCommonElements(arrA1, arrB1);
// console.log(commonElements);
// // const commonElements = findCommonElements(arrA2, arrB2);
// // console.log(commonElements);






