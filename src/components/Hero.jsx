import React from 'react'

const Hero = () => {
  return (
    <div className='h-[88.5vh] w-screen flex px-[7%] py-20 font-[china]'>
        <div className='h-full w-[38%]'>
            <h1 className='font-[poppins] text-6xl font-extrabold'>Navigating the digital landscape for success</h1>
            <p className='mt-10 text-lg tracking-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, mollitia omnis odio excepturi nostrum aspernatur enim officiis tenetur ab. Possimus, consequatur labore. Totam ea provident ipsam ullam obcaecati quos soluta! udit</p>
            <button className='border-2 border-black px-8 py-3 rounded-lg text-white bg-black mt-10 font-[china]'>Book a consultation</button>
        </div>
        <div className='h-full w-[60%] relative'>
            <div className='w-[77%] h-full right-0 absolute'>
            <img src="https://img.freepik.com/premium-vector/marketing-illustration_878233-772.jpg?w=740" alt="" className='h-full w-full' />
            </div>
        </div>
    </div>
  )
}

export default Hero