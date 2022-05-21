import { Formik, Form, Field, ErrorMessage } from 'formik'

const initialValues = {
  username: '',
  password: '',
}

const validateForm = () => ({})

const handleSubmit = (values) => {
  console.log(values)
}

const SimpleForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type='username' name='username' />
        <ErrorMessage name='username' />
        <Field type='password' name='password' />
        <ErrorMessage name='password' />
        <button type='submit'>Login</button>
      </Form>
    </Formik>
  )
}

function App() {
  return <SimpleForm />
}

export default App
