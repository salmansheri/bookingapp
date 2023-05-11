import React from 'react'
import MailInput from './MailInput'

const Mailbox = () => {
  return (
    <div className="flex flex-col  items-center justify-center h-52">
        <h1 className="text-2xl font-semibold">Save time, Save money!</h1>
        <span>Sign up and we will send the best deals to you </span>
        <MailInput />

    </div>
  )
}

export default Mailbox