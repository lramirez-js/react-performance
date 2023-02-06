import { isEqual } from 'lodash'
import { memo } from 'react'

const Li = memo(({ children }) => {
  console.log(`rendering ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual)

const MyList = ({ data }) => {
  console.log('rendering list (chilren)')
  return (
    <ul>
      {data.map(x =>
        <Li key={x.name + x.lastname}>
          {`${x.name} ${x.lastname}`}
        </Li>
      )}
    </ul>
  )
}

export default memo(MyList)
