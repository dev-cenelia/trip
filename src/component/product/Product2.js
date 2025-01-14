import React, { useEffect, useState } from 'react'
import './product.css'
import axios from 'axios'

export default function Product2() {
    const [ product, setProduct ] = useState([]);
    useEffect(()=>{
        axios.get('./data/products.json').then((res)=>{
            setProduct(res.data);
        })
        .catch((err)=>{
            console.log('error',err);  
        })        
    }, [])
    // console.log('product',product);

    useEffect(()=>{
        console.log('재랜더링 product',product);
    },[product]);

  return (
    <div style={{display:"flex", flexDirection:"column", marginTop:"58px"}}>
        {
            product.map((item)=>{
                return(
                    <div className='product' key={item.title}>
                        <p className='product_img'>
                            <img src={item.image} alt=""/>
                        </p>
                        <p className='product_name'>
                            {item.name}
                        </p>
                        <p className='product_text'>
                            {item.text}
                        </p>
                        <p className='product_price'>
                            {item.price} <span>원</span>
                        </p>
                    </div>
                )

            })

        }

    </div>
  )
}
