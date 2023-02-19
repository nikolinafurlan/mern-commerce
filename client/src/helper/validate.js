import toast from 'react-hot-toast';
/** validate login page username */
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}

/** validate login page username */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error('Password not match...!');
  }

  return errors;
}

/** validate register form */
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);
  return errors;
}

/** validate profile */
export async function profileValidation(values) {
  const errors = emailVerify({}, values);
  return errors;
}
/** ************************************************* */

/** validate username */
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error('Username required...!');
  } else if (values.username.includes('')) {
    error.username = toast.error('Invalid username...!');
  }

  return error;
}

/** validate password */
function passwordVerify(errors = {}, values) {
  /* eslint-disable no-useless-escape */
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error('Password Required...!');
  } else if (values.password.includes(' ')) {
    errors.password = toast.error('Wrong Password...!');
  } else if (values.password.length < 8) {
    errors.password = toast.error('Password must be at least 8 characters');
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error('Password must have special character');
  }

  return errors;
}

/** validate email */
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error('Email Required...!');
  } else if (values.email.includes(' ')) {
    error.email = toast.error('Wrong Email...!');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error('Invalid email address...!');
  }

  return error;
}
