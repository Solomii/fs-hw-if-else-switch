/*
користувач вводить число, яке є номером дня місяця [1-31] ви виводите назву дня тижня. при умові, що місяць починається з понеділка.
 */

// \n1,8,15,22,29-Monday\n2,9,16,23,30-Tuesday\n3,10,17,24,31-Wednesday\n4,11,18,25-Thursday\n5,12,19,26-Friday\n6,13,20,27-Saturday\n7,14,21,28-Sunday

const userInputNumberOfDay = prompt("enter the number of the day of the week:");
const numberDay = Number(userInputNumberOfDay);

if (
    userInputNumberOfDay === null ||
    userInputNumberOfDay === "" ||
    Number.isNaN(numberDay) ||
    numberDay <= 1 ||
    numberDay >= 31
) {
    console.log("error");
} else if (
    numberDay === 1 ||
    numberDay === 8 ||
    numberDay === 15 ||
    numberDay === 22 ||
    numberDay === 29
) {
    console.log("Monday");
} else if (
    numberDay === 2 ||
    numberDay === 9 ||
    numberDay === 16 ||
    numberDay === 23 ||
    numberDay === 30
) {
    console.log("Tuesday");
} else if (
    numberDay === 3 ||
    numberDay === 10 ||
    numberDay === 17 ||
    numberDay === 24 ||
    numberDay === 31
) {
    console.log("Wednesday");
} else if (
    numberDay === 4 ||
    numberDay === 11 ||
    numberDay === 18 ||
    numberDay === 25
) {
    console.log("Thursday");
} else if (
    numberDay === 5 ||
    numberDay === 12 ||
    numberDay === 19 ||
    numberDay === 26
) {
    console.log("Friday");
} else if (
    numberDay === 6 ||
    numberDay === 13 ||
    numberDay === 20 ||
    numberDay === 27
) {
    console.log("Saturday");
} else {
    console.log("Sunday");
}


//Switch//

const inputNumberOfDay = prompt("enter the number of the day of the week:");

switch (inputNumberOfDay) {
    case "1":
    case "8":
    case "15":
    case "22":
    case "29":
        console.log("Monday");
        break;
    case "2":
    case "9":
    case "16":
    case "23":
    case "30":
        console.log("Tuesday");
        break;
    case "3":
    case "10":
    case "17":
    case "24":
    case "31":
        console.log("Wednesday");
        break;
    case "4":
    case "11":
    case "18":
    case "25":
        console.log("Thursday");
        break;
    case "5":
    case "12":
    case "19":
    case "26":
        console.log("Friday");
        break;
    case "6":
    case "13":
    case "20":
    case "27":
        console.log("Saturday");
        break;
    case "7":
    case "14":
    case "21":
    case "28":
        console.log("Sunday");
        break;
    default:
        console.log("error");
        break;
}
