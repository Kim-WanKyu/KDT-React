import { Formik, Field, ErrorMessage, Form } from "formik";

import './exam.css';

export default function Login() {
  return (
    <Formik
        initialValues={{email: '', password: ''}}
        validate = {(value) => {
            const errors={};
            if ( !value.email ) {
                errors.email = "Required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)
            ) {
                errors.email = "Invalid";
            }
            return errors;
        }} 
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                console.log(values);
                setSubmitting(false);
            }, 100);
        }}
    >
        {({isSubmitting}) => {
            <div className='container'>
                <div className='loginform'>
                    <form>   {/* <Form> */}
                        <h2>Login</h2>
                        <hr />
                        <div>
                            <label>Email</label>
                            <Field type='email' name='email' />
                            <ErrorMessage name="email" component='div' />
                        </div>
                        <div>
                            <label>Password</label>
                            <Field type='password' name='password' />
                            <ErrorMessage name="password" component='div' />
                        </div>
                        <p>
                            <button type="submit" disabled={isSubmitting} >Submit</button>
                        </p>
                    </form>
                </div>
            </div>
        }}
    </Formik>
  );
}
