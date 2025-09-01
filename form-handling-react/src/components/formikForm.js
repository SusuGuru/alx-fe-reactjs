import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  username: '',
  email: '',
  password: ''
};

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required')
});

function FormikForm() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Formik form submitted:', values);
    setSubmitting(false);
    resetForm();
    // You can send values to your mock API here
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
