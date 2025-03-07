import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const Section2 = () => {
    useGSAP(()=>{
        gsap.from('.bar',{
            y:-100,
            opacity:0,
            duration:2,
            delay:1,
            scrollTrigger:{
                trigger: '.bar',
                start:'top 70%',
                end:'top 50%',
                scrub:1
            }
        })
    })

  return (
    <div className='bar mx-[7%] h-full mt-20 font-[china] font-extrabold'>
        <div className='bg-[#F3F3F3] w-full h-[350px] rounded-3xl flex'>
            <div className=' w-[50%] m-10 flex-col items-center justify-center pt-10'>
                <h1 className='text-[30px]'>Let's make this thing happen</h1>
                <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, fuga voluptate? Sequi ducimus delectus voluptate assumenda laborum. Quia voluptates doloribus itaque! Vitae libero accusantium esse vel? Corporis quae et numquam.</p>
                <button className='text-white bg-black p-3 mt-5 rounded-lg '>Get your free proposal</button>
            </div>
            <div className=' w-[50%] flex relative'>
                <div className='absolute right-20'>
                    <img src="https://cdn.prod.website-files.com/65c3aad23a5a1cc719c8993d/65c49bc025cb62f5bad7f7cf_Illustration.svg" alt="" className='h-[350px]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2