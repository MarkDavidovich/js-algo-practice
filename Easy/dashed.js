/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(str) {
  let vowels = "aeiouAEIOU";
  let dashedStr = "";
  let char = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      char = str[i];
      if (str[i] === vowels[j]) {
        char = "-" + str[i] + "-";
        break;
      }
    }
    dashedStr += char;
  }
  return dashedStr;
}

exports.solution = dashed;
