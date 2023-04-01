const Validation = (values) => {
  let regex =
    /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).{6,16}$/;
  let errors = {};
  if (!values.name) {
    errors.name = "Name Required";
  }
  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Write valid email";
  }
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 6) {
    errors.password = "Password should at least 6 character";
  } else if (!regex.test(values.password)) {
    errors.password =
      "At least 1 uppercase, 1 lowercase, 1 special character (? ! . *) ";
  }
  if (!values.passwordAgain) {
    errors.passwordAgain = "Write your password again";
  } else if (values.passwordAgain !== values.password) {
    errors.passwordAgain = "Passwords should match";
  }

  return errors;
};

export default Validation;
