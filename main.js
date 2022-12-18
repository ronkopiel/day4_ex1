// ex A
let someName = "Ron";
console.log(someName);
someName = "Kopiel";
alert(someName);

// ex B
let x, y;
x = Math.random();
y = x*3;
let calc = `${x}*3 =${y}`;
console.log(calc);

// ex C

const favoriteNumber = 2;
let favoriteString = favoriteNumber.toString();
console.log(favoriteString);

// ex D
const halfOfFavNum = favoriteNumber/2;
let michaelsFavorite = 13;
michaelsFavorite -= favoriteNumber;
michaelsFavorite *= 26;

//ex E
let noOfchild ,partnerName, geoLocation, jobTitle , sentance;
noOfchild = Math.random();
partnerName = "emma stone";
geoLocation = "tokyo";
jobTitle = "galactic president";
sentance = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${noOfchild} kids.`
alert(sentance);

//ex F
const birthYear = 1994;
let testYear = 2022;
let bigAge = testYear - birthYear;
testYear--;
let smallAge = testYear - birthYear;
testYear++;
let ageGap = `I will be either ${bigAge} or ${smallAge} in ${testYear}`;
alert(ageGap);