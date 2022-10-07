import React, {useState} from 'react'

/* this is the basic structure of the list: enter field and button */
function ListForm(props) {
    const[input, setInput] = useState('')

    /*so it doesn't refresh everytime */
    const handleSubmit = refresh => {
      refresh.preventDefault();

      /*
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
      */
    
      setInput('')
    }

  const handleChange= change => {
      setInput(change.target.value)
    }
  

  return (
    <form className='listForm' onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Add a link!' 
          value={input}
          name="text" 
          className=''todoInput
          onChange={handleChange}
        />
        <button className='addButton'>Add</button>
    </form>
  )

}
export default ListForm