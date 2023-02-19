import React from 'react';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

export default function Recovery() {
  const formik = useFormik({
    initialValues: {
      password: 'admin@123',
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-3xl font-bold text-center">Recovery</h4>
            <span className="py-4 text-xl text-gray-500">
              Enter OTP to recover your password.{' '}
            </span>
          </div>
          <form className="pt-20" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OTP sent to your email address.
                </span>
                <input
                  className={styles.textbox}
                  type="password"
                  placeholder="OTP"
                />
              </div>

              <button className={styles.btn} type="submit">
                Sign up!
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't get OTP? <button className="text-red-500">Resend </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
