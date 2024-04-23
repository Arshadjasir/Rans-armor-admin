import React from 'react'
import "./Card_template.css"
import { Para } from '../Para/Para'

export const Card_template = ({Img,text,onclick}) => {
  return (
      <div className="box" onClick={onclick}>
        <div className="img">
          <img src={Img} alt="insta" height="auto" width="fit-content" />
        </div>
        <div className="text1">
          <Para Para={text} />   
        </div>
      </div>
  )
  }