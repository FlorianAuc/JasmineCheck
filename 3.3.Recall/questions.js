let selectElementsStartingWithA = (array) => {
  array.shift();
  array.splice(1, 1);
  return array;
};

let selectElementsStartingWithVowel = (array) => {
  array.splice(0, 2);
  array.splice(1, 1);
  return array;
};

let removeNullElements = (array) => {
  array.splice(2, 2);
  return array;
};

let removeNullAndFalseElements = (array) => {
  array.splice(2, 3);
  return array;
};

let reverseWordsInArray = (array) => {
  let a = array.join();
  let b = a.split("").reverse().join("");
  let c = b.split(",");
  let d = c.reverse();
  return d;
};
let everyPossiblePair = (array) => {
  let arr1 = [];
  for (let i = 0; i < array.length; i++) {
    let arr2 = [];
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
      } else {
        arr2.push(array[j]);
      }
      arr2.sort();
    }

    arr1.push(arr2);
  }

  arr1.sort();
  return arr1;
};

let allElementsExceptFirstThree = (array) => {
  array.splice(0, 3);
  return array;
};

let addElementToBeginning = (array, element) => {
  array.unshift(element);
  return array;
};

let sortByLastLetter = (array) => {
  return array.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

let getFirstHalf = (string) => {
  let half = Math.round(string.length / 2);
  return string.substring(0, half);
};

let makeNegative = (number) => {
  if (number === Math.abs(number)) {
    number = -number;
  } else {
    number = number;
  }
  return number;
};

let numberOfPalindromes = (array) => {
  let counter = 0;
  array.forEach((element) => {
    let a = element.split("").reverse().join("");
    if (a === element) {
      counter++;
    }
  });
  return counter;
};

let shortestWord = (array) => {
  let arr = [];
  array.forEach((element) => {
    let length = element.length;
    arr.push(length);
  });

  arr.sort();
  let nb = arr[0];

  let final_arr = [];
  array.forEach((element) => {
    if (element.length === nb) {
      final_arr.push(element);
    }
  });

  let word = final_arr.join();

  return word;
};

let longestWord = (array) => {
  let arr = [];
  array.forEach((element) => {
    let length = element.length;
    arr.push(length);
  });

  arr.sort();
  let nb = arr[arr.length - 1];

  let final_arr = [];
  array.forEach((element) => {
    if (element.length === nb) {
      final_arr.push(element);
    }
  });

  let word = final_arr.join();

  return word;
};

let sumNumbers = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });

  return sum;
};

let repeatElements = (array) => {
  for (let i = 0; i < 3; i++) {
    array.push(array[i]);
  }
  return array;
};

let stringToNumber = (string) => {
  return Number(string);
};

let calculateAverage = (array) => {
  let sum = 0;
  for (let elem of array) {
    sum = sum + elem;
  }
  return sum / array.length;
};

let getElementsUntilGreaterThanFive = (array) => {
  let result = [];
  for (let i = 0; i < 6; i++) {
    result.push(array[i]);
  }
  return result;
};

let convertArrayToObject = (array) => {
  var object = {};
  for (let i = 0; i < array.length; i += 2) object[array[i]] = array[i + 1];
  return object;
};

let getAllLetters = (array) => {
  let letters = "";
  for (let elem of array) {
    letters = letters + elem;
  }
  return [...new Set(letters.split(""))].sort();
};

let swapKeysAndValues = (object) => {
  let obj = {};
  Object.keys(object).forEach((key) => {
    obj[object[key]] = key;
  });
  return obj;
};

let sumKeysAndValues = (object) => {
  let sum = 0;
  Object.keys(object).forEach((key) => {
    sum = sum + Number(object[key]) + Number(key);
  });
  return sum;
};

let removeCapitals = (string) => {
  return string.replace(/[A-Z]/g, "");
};

let roundUp = (number) => {
  return Math.ceil(number);
};

let formatDateNicely = (date) => {
  let day = date.getUTCDate().toString();
  let month = (date.getUTCMonth() + 1).toString();
  let year = date.getUTCFullYear().toString();

  if (day.length == 1) {
    day = "0" + day;
  }

  if (month.length == 1) {
    month = "0" + month;
  }

  return `${day}/${month}/${year}`;
};

let getDomainName = (string) => {
  return string.replace(".com", "").split("@")[1];
};

let titleize = (string) => {
  return "Write your method here";
}


let checkForSpecialCharacters = (string) => {
	let characters  = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

	if (string.match(characters)) {
		return true;
	} else {
		return false;
	}
};

let squareRoot = (number) => {
  return Math.sqrt(number);
};

let factorial = (number) => {
  return "Write your method here";
};

let findAnagrams = (string) => {
  return "Write your method here";
};

let convertToCelsius = (number) => {
  return "Write your method here";
};

let letterPosition = (array) => {
  return "Write your method here";
};
