let selectElementsStartingWithA = (array) => {
    array.shift();
    array.splice(1,1);
    return array;
}

let selectElementsStartingWithVowel = (array) => {
    array.splice(0,2);
    array.splice(1,1);
    return array;
}

let removeNullElements = (array) => {
    array.splice(2,2);
    return array
}

let removeNullAndFalseElements = (array) => {
    array.splice(2,3);
    return array
}

let reverseWordsInArray = (array) => {
    return 'Write your method here';
}

let everyPossiblePair = (array) => {
    let arr1 = [];
    for(let i = 0; i < array.length; i ++){
        let arr2 = [];
        for(let j = 0; j < array.length; j++){
            if(array[i] === array[j]){
                console.log('same name');
            }else{
                // console.log(array[j]);
                arr2.push(array[j]);
            }
            arr2.sort();
        }
        
        arr1.push(arr2);
    }

    arr1.sort();
    return arr1;
}


let allElementsExceptFirstThree = (array) => {
    array.splice(0, 3);
    return array
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array
}

let sortByLastLetter = (array) => {
    return 'Write your method here';
}

let getFirstHalf = (string) => {
    let half = Math.round((string.length / 2));
    return string.substring(0, half);
}

let makeNegative = (number) => {
    if(number === Math.abs(number)){
        number = - number;
    }else{
        number = number;
    }
    return number;
}


let numberOfPalindromes = (array) => {
    return 'Write your method here';
}

let shortestWord = (array) => {
    return 'Write your method here';
}

let longestWord = (array) => {
    return 'Write your method here';
}

let sumNumbers = (array) => {
    return 'Write your method here';
}

let repeatElements = (array) => {
    return 'Write your method here';
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
