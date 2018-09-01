const validateRequire = value => value !== '';

const validateEmail = (value) => {
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(value).toLowerCase());
};

const validateMinLength = (value, rule) => value.length >= rule;
const validateMaxLength = (value, rule) => value.length <= rule;

const validateConfirmPassword = (confirmPass, pass) => confirmPass === pass;

const Validation = (value, rules, form) => {
  let valid = true;

  for (const rule in rules) {
    if (rules.hasOwnProperty(rule)) {
      switch (rule) {
        case 'isRequired':
          valid = valid && validateRequire(value);
          break;
        case 'isEmail':
          valid = valid && validateEmail(value);
          break;
        case 'minLength':
          valid = valid && validateMinLength(value, rules[rule]);
          break;
        case 'maxLength':
          valid = valid && validateMaxLength(value, rules[rule]);
          break;
        case 'confirmPassword':
          valid = valid && validateConfirmPassword(value, form[rules.confirmPassword].value);
          break;
        default:
          valid = true;
      }
    }
  }
  return valid;
};

export default Validation;
