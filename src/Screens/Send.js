import React, { useEffect } from 'react';
import '../Style/Send.css'

const Send = () => {
  
  const config = {
    iceServers: [
      {
        urls: [
          'stun:stun1.l.google.com:19302',
          'stun:stun2.l.google.com:19302',
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  }

  const localConn = new RTCPeerConnection(config)
  const dataChannel = localConn.createDataChannel("chat")
  dataChannel.onmessage = e => {
    console.log("New message: ", e.data)
  }
  dataChannel.onopen = e => {
    console.log("Connection open.")
  }

  localConn.onicecandidate = e => {
    console.log("OFFER: ", JSON.stringify(localConn.localDescription))
  }

  // Set remote description
  const setRemoteDesc = () => {
    const answer = document.getElementById("answer").value
    console.log("ANSWER: ", answer)
    localConn.setRemoteDescription(JSON.parse(answer))
      .then(() => console.log("Connected successfully"))
  }

  useEffect(() => {
    const createOffer = async () => {
      const offer = await localConn.createOffer()
      const p = document.getElementById("offer")
      localConn.setLocalDescription(offer).then(() => {
        p.innerText = "1. Check console for offer."
      })
    }
      createOffer()
  })

  return (
    <div className="display">
      <h1>Offer</h1>
      <p id="offer"></p>
      <div>
        <textarea id="answer" rows="10" cols="50" placeholder="Enter answer" /><br />
        <button onClick={setRemoteDesc}>Connect</button>
      </div>
    </div>
  )
}

export default Send
