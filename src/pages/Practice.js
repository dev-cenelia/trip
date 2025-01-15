import React from 'react'
import Product from '../component/product/Product'
import Product2 from '../component/product/Product2'
import Product3 from '../component/product/Product3'

export default function Practice() {
  const productWrap ={
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
    <div style={productWrap}>
        <Product/>
        <Product2/>
        <Product3/>
    </div>
  )
}
