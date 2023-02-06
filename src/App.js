import { useState, useCallback, useMemo } from 'react'
import Title from './components/Title'
import MyForm from './components/Forms/MyForm'
import MyList from './components/Lists/MyList'

function App() {
  const [values, setValues] = useState([])
  const handleSubmit = useCallback((newValues) => {
    setValues(data => ([
      ...data,
      newValues
    ]))
  }, [])

  const iterator = 500000
  console.time('memo')
  const memoized = useMemo(() => {
    let total = 0
    for( let i = 0; i < iterator; i++) {
      total = total * iterator
    }
    
    return total
  }, [iterator])
  console.timeEnd('memo')

  return (
    <div>
      <Title>My title</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={values} />
    </div>
  );
}

export default App;
