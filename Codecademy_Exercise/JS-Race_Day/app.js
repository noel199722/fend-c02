let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistrant = true;
let runnersAge = 16;

if (earlyRegistrant === true && runnersAge > 18) {
  raceNumber += 1000;
}

if (earlyRegistrant === true && runnersAge > 18) {
  console.log(`Your race will begin at 9:30am. Your race number is ${raceNumber}. Good luck.`);
} else if (earlyRegistrant === false && runnersAge > 18) {
  console.log(`Late adults run at 11:00am. Your race number is ${raceNumber}. Good luck.`);
} else if (runnersAge <18) {
  console.log(`Youth registrants run at 12:30pm (regardless of registration). Your race number is ${raceNumber}. Good luck.`);
} else {
  console.log ('Please go the registration desk.');
}