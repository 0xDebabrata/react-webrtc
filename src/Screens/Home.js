import React from 'react'
import {
  useHistory
} from 'react-router-dom'
import '../Style/Home.css'

const Home = () => {

  const history = useHistory()

  const handleClick = page => {
    history.push(`/${page}`)
  }

  return (
    <div className="container">
      <button onClick={e => handleClick("send")}>Create room</button><br />
      <button onClick={e => handleClick("receive")}>Join room</button>
    </div>    
  )
}

export default Home
