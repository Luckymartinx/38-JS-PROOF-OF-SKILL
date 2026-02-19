// Age category checker

function getAgeCategory(age) {
  if (age < 0 || age > 120) {
    return `Invalid Age`;
  } else if (age < 13) {
    return `Child`;
  } else if (age < 20) {
    return `Teenager`;
  } else {
    return `Adult`;
  }
}

console.log(getAgeCategory(-5));
console.log(getAgeCategory(12));
console.log(getAgeCategory(18));
console.log(getAgeCategory(25));
