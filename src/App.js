import axios from "axios";
import { useEffect, useState } from "react";
import ElementoP from "./Components/ElementoP";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => { 
    axios.get('http://localhost:8000/objeto')
      .then(response => {
        setPost(response.data)
        console.log(1)
      })
      .catch(e => { 
        console.log(e)
      })
  },[])
    
  return (
    <div >
      <h1>Saludos</h1>
      {post ?
        post.map((elemento) => { 
          return (
          <ElementoP texto={elemento} />
          );
        }) 
        : <></>
      }
    </div>
   
  );
}

export default App;
