import { useState } from 'react'
import Title from './components/Title'
import MyForm from './components/Forms/MyForm'
import MyList from './components/Lists/MyList'

function App() {
  const [values, setValues] = useState([])
  const handleSubmit = (newValues) => {
    setValues([
      ...values,
      newValues
    ])
  }

  return (
    <div>
      <Title>My title</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={values} />
    </div>
  );
}

export default App;
