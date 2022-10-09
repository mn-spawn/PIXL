import { render } from '@testing-library/react';
import React from 'react'
import TodoList from './TodoList';
import { useLocation } from 'react-router-dom'
import {data} from "./TodoList";


function ReviewState() {
  console.log({data})
    return (
      <div>
          <h1>hi</h1>
          
      </div>
    
    )
}

export default ReviewState