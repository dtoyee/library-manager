import { useEffect, useState } from 'react'
import axios from 'axios'
import './css/style.css'
import Container from './components/container'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    let fetchMessage = axios.get("http://localhost:8000/test")
    fetchMessage.then(data => {
      setMessage(data.data.message)
    })
  }, [])
  return (
    <Container />
  );
}

export default App;
