import React from 'react'
import Cardlist from '../component/cardlist/Cardlist'

export default function Trip() {
  const tripWrap ={
    width:"1280px",
    height:"auto",
    margin:"0 auto",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    gap:'16px',
    marginTop:"100px"
  }
  return (
    <div style={tripWrap}>
      <Cardlist/>
    </div>
  )
}
