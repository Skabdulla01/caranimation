import React from 'react'

function box(props) {
  return (
    <>
    <div ref={props.box} className="h-[20vh] w-[22%] rounded-xl flex flex-col justify-center items-center" style={{backgroundColor: `${props.boxcolor}`}}>
        <div style={{color: `${props.colour}`}}>
            <h1 className='text-[3vw] leading-none '><b>{props.per}</b></h1>
            <p className='text-[1.1vw] leading-none'>{props.txt}</p>
        </div>
    </div>
    </>
  )
}

export default box