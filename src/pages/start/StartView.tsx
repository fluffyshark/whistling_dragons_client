import React from 'react'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'

type Props = {}

const StartView = (props: Props) => {
  return (
    <div className='startView'>
      <SectionOne />
      <SectionTwo />
    </div>
  )
}

export default StartView