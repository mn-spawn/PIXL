import React, {useState} from 'react'
import ListForm from './ListForm'

function List() {
    const[links, setLinks] = useState([])

    
  return (
    <div>
        <h1>Add your links!</h1>
        <ListForm></ListForm>
    </div>
  )
}

export default List