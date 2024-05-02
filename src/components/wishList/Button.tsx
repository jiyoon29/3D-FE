"use client"
import React, { MouseEventHandler } from 'react'

interface Button {
  clickHandler: MouseEventHandler,
  children:string,
}

export default function Button({ clickHandler, children}:Button) {


  return (
      <button className={'w-[12rem] h-[2.8rem] border rounded-sm  text-sm  border-transparent-navy-30 text-neutral-navy-100 hover:text-primary-main hover:border-primary-main'} onClick={clickHandler}>{children}</button> 
  )
}
