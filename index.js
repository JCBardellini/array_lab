// let oddNumbers = [1, 3, 5, 7, 9,  10, 11, 13, 15, 17, 19, 20];

// // write a function that will check if this array is ONLY odd numbers.
// // Bonus: replace any even numbers with odd numbers


// const returnIsOnlyOdd = (array, itemToReplace) => {
//     let evenNumberPresent = false;
//     array.forEach((thing, index) => {
//         if (thing % 2 === 0) {
//             array.splice(index, 1, itemToReplace)
//             evenNumberPresent = true;
//         }
//     });
//         if (evenNumberPresent) {
//             return false;
//         } else {
//             return true;
//         }
// }

// console.log(oddNumbers)

const fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194];
// 2.  Write a function that will Calculate the average temperature of this array. 
// Also find the highest temperature and log it. 

// add the sum
// total #sum / by amount of arrays 
const calculateAvgTempAndHighestTemp = (array) => {
    let sumOfArray = 0;
    let highestTemp = 0;
    let avgTemp = 0;
    for (let i=0 ; i <array.length; i++){
        sumOfArray += array[i]
}
array.foreach( (item) => {
    if (highestTemp <= item){
        highestTemp = item
    }
})
console.log(highestTemp)
console.log(sumOfArray)
avgTemp = sumOfArray / array.length // find the avg temp
console.log(avgTemp)
}

calculateAvgTempAndHighestTemp(fahrenheitTemps)

const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// 3. Write a function that will search this array for your favorite fruit. If your favorite fruit isn't found, add it!

 

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];

// 4. write a function that will shorten each string to just it's first 3 characters ("January" turns into  "Jan")


 

// const mixedData = [42, 'hello', true, 3.14, 'world', false, null, undefined, 'goodbye', 7];

// 5. Make a new array called onlyStrings. Loop through mixed Data and push only things that are string data type to this new array. 