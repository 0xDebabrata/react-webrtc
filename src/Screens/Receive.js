import React from 'react'

const Receive = () => {

  const remoteConn = new RTCPeerConnection()

  remoteConn.onicecandidate = e => {
    console.log("ANSWER: ", JSON.stringify(remoteConn.localDescription))
  }

  remoteConn.ondatachannel = e => {
    remoteConn.dataChannel = e.channel
    remoteConn.dataChannel.onmessage = e => {
      console.log(e.data)
    }
    remoteConn.dataChannel.onopen = e => {
      console.log("Data channel open.")
    }
  }

  const enterRoom = () => {
    const offer = document.getElementById("remoteOffer").value
    remoteConn.setRemoteDescription(JSON.parse(offer)).then(() => console.log("Set remote desc."))
    remoteConn.createAnswer()
      .then(ans => remoteConn.setLocalDescription(ans))
      .then(() => console.log("Answer created"))
  }

  return (
    <div>
      <input id="remoteOffer" type="textarea" placeholder="Enter offer" /><br />
      <button onClick={enterRoom}>Enter</button>
    </div>
  )
}

export default Receive
