import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from '../Input'
import { memo } from 'react'

const MyForm = ({ onSubmit }) => {
  console.log('rendering my form')
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values)
    resetForm()
  }

  const getValidationSchema = () => (Yup.object({
      name: Yup.string().required('Required'),
      lastname: Yup.string().required('Required'),
    })
  )

  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={() => getValidationSchema()}
    >
      <Form>
        <Input name="name" label="Name" />
        <Input name="lastname" label="Lastname" />
        <button type='submit'>Send</button>
      </Form>
    </Formik>
  )
}

export default memo(MyForm)
