import React from 'react'
import Button from '../navbar/Button'

const MailInput = () => {
  return (
    <div className="flex mt-10 w-[50%]">
        <input type="email" className="w-full px-4 py-2 text-black outline-none" placeholder="Your Email..." />
        <Button secondary label="Subscribe" />
    </div>
  )
}

export default MailInput