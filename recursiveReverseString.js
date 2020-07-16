function reverseString(string) {
  //If the string is empty return empty string call the reverseString function
  if (string === "") return "";
  else return reverseString(string.substr(1)) + string.charAt(0);
}

reverseString("racecar");
