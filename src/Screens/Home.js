import React from 'react'
import {
  useHistory
} from 'react-router-dom'



const Home = () => {

  const history = useHistory()

  const handleClick = page => {
    history.push(`/${page}`)
  }

  return (
    <div>
      <button onClick={e => handleClick("send")}>Create room</button>
      <button onClick={e => handleClick("receive")}>Join room</button>
    </div>    
  )
}

export default Home
