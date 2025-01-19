import React from 'react'
import 'remixicon/fonts/remixicon.css'
import {tl} from "./Navbar"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero2 = () => {
    useGSAP(()=>{
        gsap.from('.images img',{
            opacity:0,
            y:50,
            duration:0.5,
            stagger:0.2,
            scrollTrigger:{
                trigger:'.images img',
                start:'top 90%',
                end: 'top 0',
                scrub:2,
            }
        })
        gsap.from('.services h1 , .services p',{
            opacity:0,
            x:-100,
            duration:1,
            stagger:0.2,
            scrollTrigger:{
                trigger:'.services',
                start:'top 90%',
                scrub:2,
                end: "top 0"
            }
        })
        gsap.from('.boxes .box-left',{
            x:-800,
            stagger:0.5,
            scrollTrigger:{
                trigger:'.services',
                start:'top 90%',
                end: 'top 0',
                scrub:2
            }
        })
        gsap.from('.boxes .box-right',{
            x:800,
            stagger:0.5,
            scrollTrigger:{
                trigger:'.services',
                start:'top 90%',
                end: 'top 0',
                scrub:2
            }
        })
    })
  return (
    <div className='h-full mx-[7%]'>
        <div className='images flex justify-between items-center'>
            <img className='aspect-[3/2] w-[11%] object-contain mix-blend-color-burn' src="data:image/png;base64,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" alt="" />
            <img className='aspect-[3/2] w-[11%] object-contain mix-blend-color-burn' src="data:image/png;base64,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" alt="" />
            <img className='aspect-[3/2] w-[11%] object-contain mix-blend-color-burn' src="data:image/png;base64,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" alt="" />
            <img className='aspect-[3/2] w-[11%] object-contain mix-blend-color-burn' src="data:image/png;base64,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" alt="" />
            <img className='aspect-[3/2] w-[11%] object-contain'  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbAAAAB1CAMAAAAYwkSrAAAAdVBMVEX///8AAAAlJSXe3t5ZWVlqampCQkLDw8O4uLjl5eXw8PD29vZRUVHMzMyxsbGbm5uSkpKBgYFlZWWlpaVFRUWLi4t6enrT09OqqqogICD5+fnIyMg9PT2YmJhzc3MuLi5eXl4UFBSGhoZLS0s3NzcWFhYqKipIJLv2AAAJFElEQVR4nO2da0PiPBCFi4Bc5KYIReUmuvv/f+K73NucM5NJ5WVxnfPRTJuQx5aQk0yyu1qoZsYFkfckqA63kzWHq1sJV580gtu0E65+tDSiI3QJURMubkDMEmKe6b1esSVNxFCrvfKmODCLLMByYw0zjMsZsDZvigOzyAIswxqG7F4rCLsjGGq1Hm+KA7PIBGwCQXfkVuRBHFJgtQfaFAdmkQkY6aU6RuFX3ZYMAzamTXFgFpmAkV6fQMwDtqNJL2U9SStxYEQ2YEOsA2LGGJNnHBhvoAOzyAasg3XkYcwLhOy+6CiwBWuKA7PIBix7jjakj83YfVVRYC+sDgdmkREY+YkVRDxhxO4HMgXGxiwOzCQjMDKiaMUClrsCDgzHLA7MJiOwrAFx5SlBMizZf8txYDhmcWA2WYGRNpbK36F4tS8QgMGYxYHZZAVGJnaLU4JvWDzYlwjApliFA7PICiwSuMZGHEoEYOSd6MAsMgMj1ZynBLtYeHyEJGAtqMGBWWQGRqbsZ6eyERYeB+4SsCeooCqwvv3Tgsjg9i1+FQEmeHxM1wL2CJHnDsUmfB6LJGD4TvwbwMiroRowbkBQXQuYYmOSJpxGJCIwsDFvBBi+q0HfA5hiY/aw6HSVCAxsTAdmUQIwtDEPU4Jkavj8VSsCq3WD+zswixKAiTYmkiy0QAY2C+7vwCxKAEYMlP2UIDag0NUysM/g9g7MohRggo1Jml8YUMjAwmY6MItSgAk2JnplxSG7AiywMR2YRSnAsjkETynGonmiAAuWXjkwi5KAURtzo9evAAtsTAdmURIwOpGDfyv9wtKAlW1MB2ZREjDyC3lJqi99ZA1YeXrKgVmUBoy0VB9yRIDlaqQDI0oDRt5/qLIdoQKbqpEOjCgRGIajylNOKrCaGunAiBKBGRzA4HodWEuLdGBEicAM78TAT9KBNbVIB0aUCmyq9v9WwQU6sKJT68AsSgVGbMyywq1+EWDarKMDI0oFFn0nRl0usTYHZlEyMGJ+FQVrayLACp/UgVmUDCyyzgx6LwZsLEc6MKJkYDoB3EcUAzaXIx0YUTowYmOehdkFYsDOjXVgFqUDI/6X1u4osIUY6cCI0oFln3Lnk6xEUWAvYqQDI6oAjNiYR1k2EYHERd1GYKRSsy4G7AaXap9EPuRBbOtyHNhEijQCmwyIZmxTrumzVAM2o40If5TudHVgbKHvXixhShyYuDHpS7tXePKWUBcDxkUf/usDE9vL3gsGYLkQ+f2B0cf8+sCk6aklizUAmwqRDoyoEjDBxqQvAAOwmhDpwIgqAeM25orGAgZc3HjoIwdmUSVg/J04oKGA4QlTsDR5pAMjqgaM2pg8FDA0SIN5zhwHRlQNGLMxSSKHrQBDjzyfbRrpwIiqAcvejY2jwLDOHo10YESXAyZEEmBCBgkHZlE1YGyYaH/ChAwSDsyiasDY5BRL0JZxYDhmmbNIB0ZUCRi3xHgsA8YzSDgwiyoB4wtxuM3BgPEMEg7MogvOJfJxPQVGE+E7MIsuOVtPgykwmkHiHwR2I/bKh9A8mqWJAqOJ8KsCmw6JFjYf+mLAFrQRt2Fgiqtw6DlTHBjLIPGtlwgk1Hl1YGQX+kEmA3MHjECvw1k7vgiHqAIwrO8ods4UB0YySEzgTw6MKB2Y8o1rOrZlDwyXXr34E2ZROjBiQGrNFoCRDBIgB0Z02c0QYYK2TAQmL706y4ERJQPDTLIFkbMxJWCG3zIOjOjCG/qwZgmYYbe0AyNKBTbQ+9iwe+UILJ5BwoERpQLDg0lLMuwPOwKLZ5BwYESJwKJTeTDdKQKLvxMdGFEiMHIwaVlgY8rAohkkHBhRGjByZE6o8BIZWDSDhAMjSgNGDiYNFU7FysCi70QHRpQGLDLk2Cq0MRVgkQwSDowpCVj0JbZVcI0CLDaCcWBEScAsyffCD6wAi+1scWBEKcDIhO1U2tlwkgZMzSDhwKhSgJEhRz1qvmrA1AwSDowqBdgviP3NhnplG1MDplo1DowqARg5C30Wv4EKTMkgUXNgVAnA+Fno6tmYWQSYnEFiKwdGZAcmHUyKfy7ZmCow3cZ0YER2YGRIt5vpxSnBUkfrwFQb8+cAo+sXub5yyuz+ADDya7pYvw5MnZ76OcDmH43l42YxG7T7eb37oOVBMgOTz0LHgqKNGQFGvhhPSgfW7eSt9ngxWT71Vu9wohzRjQBD/X5+Wm4WQ2yMGZh8FjpOCf4uXBcBprXeCGwxGE+mzY/P97CArDAJdbPADlrD1VZg5JMdDyYVz8bcKQJMeyd+9aT0fwAYHk9uBaachU53NmRiYQBMsTEd2BeA4b3OyXqFszH3igFTHAAHVh2Ydha6dDbmXjFgyjvRgVUHpp2FLpyNeVAUmGxjOrDKwMgztCkU07MxD4oCkxE4sMrA1LPQ6cc+7caMAiPneR/kwCoDwzt9lMobUH6yMePARBvTgVUFpp+FzgOORXFgoo3pwKoCI7vQgwgMOBKNAxNtTAdWEVjkLHT9NgZgko3pwCoCi5yFLjTi8BEMwKTdmDcLjGzhuSlgeB/sdIw52JgGYGTMstOVgb3ffX70Gj1DFoluvag8r+cpFs//Doz8P+F/IU/QltmACTbmFYBleafT1Q2oi6vbag/G48Vmumw27lf62sxKwMiYAFvBE7RlNmDCHouvApuT629Sr91OPd9iHE2WT437wg/TNcTGgZEuGsFtZBvTAkywMZOB/Zp/NB9H49net03rtNvS60Mn77cGY8xUjl0VAiP+B1uCINmYJmD8tW4Btmo0Hxfj9lu9k7Au4jtrgmnKgwjsSDo9LNmYJmB8yl4A9vK8fhz9eYrq3at+9dyQ/jx+b1ubvXG/7abypBMbctCsbZKNaQNGbUwGzBXooRPsUsap2Xd+pWBj2oBRG5OfDeJS1V2uw1EipnbYSbAxbcCK78S75+Vk3O53vvWo4S+rW3+bDafr/QZMqSPvAdjWxjQCm9ReGtPRoF93TJdVJxenbriNaQTmur7IlGCLAPuI38l1HeHCjyYCW23iN3JdR/XRMnTOzsDu1o/jln9D3aA6/cGoeTycu5WtetNhO/8h0xDfWQ/11myzXv4H8BupLOjwwcsAAAAASUVORK5CYII=" alt="" />
            <img className='aspect-[3/2] w-[11%] object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8ZGXmaVH0hCxrfZtXaVDcM9J2DRC38JMrA&s" alt="" />
        </div>
        <div className='services mt-20'>
            <div className='flex items-center gap-10 font-[china] font-extrabold'>
                <h1 className='text-[23px] font-semibold bg-[#C3F97F] w-fit p-1'>Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quidem?</p>
            </div>
            <div className='boxes flex justify-evenly gap-[5%] flex-wrap font-[china]'>
                <div className='box-left flex justify-center items-center h-[250px] w-[47.5%] [box-shadow:-0px_8px_0px_black] flex-shrink-0 mt-16 border-2 border-black rounded-[30px]'>
                    <div className='h-fit w-[50%] mt-7 mb-7 ml-7'>
                        <h2 className='p-1 bg-[#C3F97F] w-[60%] text-2xl text-wrap rounded-md'>Search engine optimization</h2>
                        <div className='mt-14 flex items-center gap-2'>
                        <i class="ri-arrow-up-circle-fill text-[40px] rotate-45"></i>
                        <h2 className='text-[17px] font-bold'>Learn more</h2>
                        </div>
                    </div>
                    <img src="https://encoders.studio/wp-content/uploads/2024/04/Search-engine12-1024x1024.png" alt="" className='mr-7 h-[225px] w-[45%]' />
                </div>
                <div className='box-right bg-black flex justify-center items-center h-[250px] w-[47.5%] [box-shadow:-0px_8px_0px_black] flex-shrink-0 mt-16 border-2 border-black rounded-[30px]'>
                    <div className='h-fit w-[50%] mt-7 mb-7 ml-7'>
                        <h2 className='p-1 bg-white w-[60%] text-2xl text-wrap rounded-md'>Per pay click advertising</h2>
                        <div className='mt-14 flex items-center gap-2 text-white'>
                        <i class="ri-arrow-up-circle-fill text-[40px] rotate-45"></i>
                        <h2 className='text-[17px] font-bold'>Learn more</h2>
                        </div>
                    </div>
                    <img src="https://encoders.studio/wp-content/uploads/2024/04/Pay-per-click12-1024x1024.png" alt="" className='mr-7 h-[225px] w-[45%]' />
                </div>
                <div className='box-left bg-black flex justify-center items-center h-[250px] w-[47.5%] [box-shadow:-0px_8px_0px_black] flex-shrink-0 mt-16 border-2 border-black rounded-[30px]'>
                    <div className='h-fit w-[50%] mt-7 mb-7 ml-7'>
                        <h2 className='p-1 bg-white w-[60%] text-2xl text-wrap rounded-md'>Social media marketing</h2>
                        <div className='mt-14 flex items-center gap-2 text-white'>
                        <i class="ri-arrow-up-circle-fill text-[40px] rotate-45"></i>
                        <h2 className='text-[17px] font-bold'>Learn more</h2>
                        </div>
                    </div>
                    <img src="https://encoders.studio/wp-content/uploads/2024/04/Social-Media12-1024x1024.png" alt="" className='mr-7 h-[225px] w-[45%]' />
                </div>
                <div className='box-right flex justify-center items-center h-[250px] w-[47.5%] [box-shadow:-0px_8px_0px_black] flex-shrink-0 mt-16 border-2 border-black rounded-[30px]'>
                    <div className='h-fit w-[50%] mt-7 mb-7 ml-7'>
                        <h2 className='p-1 bg-[#C3F97F] w-[60%] text-2xl text-wrap rounded-md'>E-mail marketing</h2>
                        <div className='mt-14 flex items-center gap-2'>
                        <i class="ri-arrow-up-circle-fill text-[40px] rotate-45"></i>
                        <h2 className='text-[17px] font-bold'>Learn more</h2>
                        </div>
                    </div>
                    <img src="https://encoders.studio/wp-content/uploads/2024/04/Custom-Web12-1024x1024.png" alt="" className='mr-7 h-[225px] w-[45%]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero2