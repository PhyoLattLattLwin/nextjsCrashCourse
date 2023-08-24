import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

const Home = () => {
  const getAllTodos = async() =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return res.data;
  }

  const {data:todos, isLoading, isError, isSuccess} = useQuery({
    queryKey : ['get', 'todos'],
    queryFn : getAllTodos,
  })


  return (
    <div>
      {isLoading && "loading..."}
      {isError && "error"}
      {isSuccess && todos.map(todo => {
      return <li key={todo.id}> {todo.id} - {todo.title}</li>
    })}
    </div>
  );
};

export default Home;
