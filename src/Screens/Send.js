import React, { useEffect } from 'react'

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
    console.log("SDP updated", JSON.stringify(localConn.localDescription))
  }

  useEffect(() => {
    const createOffer = async () => {
      const offer = await localConn.createOffer()
      localConn.setLocalDescription(offer).then(() => console.log('local desc set'))
    }
      createOffer()
  })

  return (
    <div>
      Hello
    </div>
  )
}

export default Send
