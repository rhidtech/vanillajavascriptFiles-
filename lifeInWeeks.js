function lifeInWeeks(Age) {
var yearsRemaining = 90 - Age;
    days = yearsRemaining * 365;
    weeks = yearsRemaining * 52;
    months = yearsRemaining * 12;

console.log("You have "+days+ " days,"+weeks+ " weeks, and "+months+" months remaining");
}
lifeInWeeks(12);
