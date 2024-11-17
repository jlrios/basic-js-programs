function checkLeapYear() {
    let year = document.getElementById("fyear").value;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                document.getElementById("leapYear").innerHTML = "<p>The year: " + year + " is a leap year.</p>";
            } else {
                document.getElementById("leapYear").innerHTML = "<p>The year: " + year + " is an ordinary year.</p>";
            }
        } else {
            document.getElementById("leapYear").innerHTML = "<p>The year: " + year + " is a leap year.</p>";
        }
    } else {
        document.getElementById("leapYear").innerHTML = "<p>The year: " + year + " is an ordinary year.</p>";
    } 
}