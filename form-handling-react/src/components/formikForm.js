import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Must be 6+ chars').required('Password is required'),
});

const FormikForm = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #646cff' }}>
      <h2>Step 3: Formik & Yup Form</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Formik Data:', values);
          alert('Registration Successful (Formik)!');
        }}
      >
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <Field name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '12px' }} />
          </div>

          <div>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '12px' }} />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '12px' }} />
          </div>

          <button type="submit">Register with Formik</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;