import React from 'react'
import dragonloader from "../../components/assets/misc/dragonloader.png"

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='loading'>
        <img src={dragonloader} alt="" />
        <p>Loading...</p>
    </div>
  )
}

export default Loading