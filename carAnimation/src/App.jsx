import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import carimg from './assets/car.png'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Box from './box'

gsap.registerPlugin(ScrollTrigger,useGSAP);

function App() {
  const car = useRef()
  const container = useRef()
  const box = useRef()
  const box1 = useRef()
  const box2 = useRef()
  const box3 = useRef()
  const box4 = useRef()
  
  useGSAP(()=>{
    const tl = gsap.timeline({
    scrollTrigger:{
      trigger: container.current,
      start: "top top",
      end: "+=1800",
      scrub: 1,
      pin: true,
    }
  })  
    tl.to(car.current,{
      x: () => container.current.offsetWidth * 0.90,
      duration:3,
    })
    tl.to(box.current,{
      width: "98%",
      duration:3,
    },"<")
    tl.from(".txt",{
      opacity:0,
      stagger: 0.1,
      duration:0.1
    },"<")
    tl.from(box1.current,{
      opacity:0,
    },"<23%")
    tl.from(box2.current,{
      opacity:0,
    },"<37%")
    tl.from(box3.current,{
      opacity:0,
    },"<57%")
    tl.from(box4.current,{
      opacity:0,
    },"<67%")
  },{scope:container})

  

  return (
    <>
      <main ref={container} className="bg-[#d1d1d1] h-screen w-full flex flex-col justify-center">
        <div className="h-[35vh] w-full flex items-center gap-[2vw] justify-end pr-[23vh]">
            <Box box={box1} per="58%" txt="Increase in pick up point use" boxcolor="#def54f"/>
            <Box box={box3} per="27%" txt="Increase in pick up point use" colour="#fff" boxcolor="#333"/>
        </div>
        <div className="relative w-full h-[30vh] bg-[#1e1e1e] flex items-center justify-evenly">
          <div ref={box} className="absolute z-4 top-0 left-0 bg-[#45db7d] h-[30vh] w-[5%] flex"></div>
          <div className="absolute top-0 z-5 w-full h-[30vh] flex ">
            <div className=" w-[60%] flex justify-center items-center">
          <span className="txt text-[9vw]"><b>W</b></span>
          <span className="txt text-[9vw]"><b>E</b></span>
          <span className="txt text-[9vw]"><b>L</b></span>
          <span className="txt text-[9vw]"><b>C</b></span>
          <span className="txt text-[9vw]"><b>O</b></span>
          <span className="txt text-[9vw]"><b>M</b></span>
          <span className="txt text-[9vw]"><b>E</b></span>
          </div>
          <div className=" w-[50%] flex justify-start items-center">
          <span className="txt text-[9vw]"><b>I</b></span>
          <span className="txt text-[9vw]"><b>T</b></span>
          <span className="txt text-[9vw]"><b>Z</b></span>
          <span className="txt text-[9vw]"><b>F</b></span>
          <span className="txt text-[9vw]"><b>I</b></span>
          <span className="txt text-[9vw]"><b>Z</b></span>
          <span className="txt text-[9vw]"><b>Z</b></span>
          </div>
            </div>
          <div className="absolute top-0 z-6 overflow-hidden flex justify-start w-full h-[30vh]">
            <img ref={car} src={carimg} alt="car" />
          </div>
        </div>
        
        <div className="h-[35vh] w-full flex items-center gap-[2vw] justify-end pr-[28vh]">
          <Box box={box2} per="23%" txt="Decreased in customer phone calls" boxcolor="#6ac9ff"/>
          <Box box={box4} per="40%" txt="Decreased in customer phone calls" boxcolor="#fa7328"/>
        </div>
      </main>
    </>
  )
}

export default App
