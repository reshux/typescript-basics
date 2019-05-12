// Enumerations give us readable, elegant code
enum DaysOfTheWeek {
  Mon = 1, // We can even specify where we start counting
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun
}

// Instead of assigning a string value to variable
// I go by typing. day is a DaysOfTheWeek, specifically Monday.
let day: DaysOfTheWeek;
day = DaysOfTheWeek.Mon;
