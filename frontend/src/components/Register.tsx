import React from 'react';
import { Formik, Field, ErrorMessage,Form } from 'formik';
import * as Yup from 'yup';
import { register } from '../context/api';

interface SignupFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}


const SignupForm: React.FC = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters long')
            .matches(/^(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, 'Password must contain at least one uppercase letter and one special symbol')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
            .required('Confirm password is required'),
    });

    return (
        <div className="container">
            <h1>Signup Form</h1>
            <Formik<SignupFormValues>
                initialValues={{ email: '', password: '', confirmPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    register(values)
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                name="email"
                                className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                placeholder="Enter email"
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                placeholder="Enter password"
                            />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field
                                type="password"
                                name="confirmPassword"
                                className={`form-control ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}`}
                                placeholder="Confirm password"
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Sign Up'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignupForm;
