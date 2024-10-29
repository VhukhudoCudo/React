import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import useFetch from './useFetch';
import Users from './Users' 

const App = () => {

  const postsUrl = "https://jsonplaceholder.typicode.com/posts"
  const todosUrl = "https://jsonplaceholder.typicode.com/todos"

  //initial state
  const [requested, setRequested] = useState(postsUrl)
  const data = useFetch(requested);

  //works like componentDidMount() as it prevents unecessary re-renders
  //make app run more efficient
  // useEffect(() => {
  //   fetch(requested)
  //     .then(response => response.json())
  //     .then(data => setData(data))//data arry is then populated with data from the collection 
  // }, []);
  //[] :data gets rendered this first time 


  return (
    <div>
      {/* displays the data from the post collection*/}
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>

      {/* displays the data from the Todos collection*/}
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested: {requested}
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;