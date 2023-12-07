var guestList = ["stephen", "paul", "dimeji", "nimo", "asuquo"];
var guestName = prompt("what is your name?");
if (guestList.includes(guestName)) {
    alert(guestName +". you are welcome!");
} else {
    alert(guestName +". you are not welcome!");
}
