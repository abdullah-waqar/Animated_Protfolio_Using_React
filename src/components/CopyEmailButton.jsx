import { button } from 'motion/react-client'
import React, { useState } from 'react'

import { motion } from 'motion/react'
const CopyEmailButton = () => {

    const [copied , setCopied] = useState(false)

    const email = "abdullahwaqar803@gmail.com"

    const handleCopy = async () => {
        try {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        }
        catch(err)
        {
            console.log('Error')
            setCopied(false)
        }
    }

  return (
    <button onClick={handleCopy} className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'>

            { copied && <motion.p className='flex items-center justify-center gap-2'
                initial={{opacity: 0 , y:-10}}
                animate={{opacity: 1 , y:0}}
                exit={{opacity: 0 ,y:-10}}
                transition={{duration: 0.1 , ease:"easeInOut"}}
            >
                <img src="assets/copy-done.svg" className='w-5' alt='copy icon' />
                Email has copied</motion.p>}

            {!copied && <motion.p className='flex items-center justify-center gap-2'
                 initial={{opacity: 0 }}
                animate={{opacity: 1 }}
                exit={{opacity: 0 }}
                transition={{duration: 0.1 }}
            >
                    <img src="assets/copy.svg" className='w-5' alt='copy icon' />
                Copy Email Address</motion.p>}
    </button>
  )
}

export default CopyEmailButton