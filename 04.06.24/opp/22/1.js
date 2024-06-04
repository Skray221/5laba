class Validator {
  isEmail(str) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
  }

  isDomain(str) {
    const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return domainRegex.test(str);
  }

  isNumber(str) {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(str);
  }
}

let validator = new Validator();

console.log(validator.isEmail("example@example.com"));
console.log(validator.isEmail("example.com"));

console.log(validator.isDomain("example.com"));
console.log(validator.isDomain("example"));

console.log(validator.isNumber("12345"));
console.log(validator.isNumber("12a45"));