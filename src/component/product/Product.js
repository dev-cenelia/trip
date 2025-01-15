import React, { useEffect, useState } from 'react'
import './product.css'
import axios from 'axios'

export default function Product() {
    const [products, setProducts] = useState([]);
    const [saleCheck, setSaleCheck] = useState(false);

    const changeData = () => {
        setSaleCheck((prev)=>!prev)
    }

    useEffect(()=>{
        axios.get(`./data/products${saleCheck ===true ? "_sale" : ""}.json`).then(response=>{
            console.log('data', response.data);
            setProducts(response.data);
        })
    },[saleCheck])
    
    

  return (
    <>
        <div>
            <div className="salecheck_wrap" style={{ width: "360px", height: "30px", margin: "0px auto", padding: "14px" }}>
                세일상품 <input type="checkbox" onClick={changeData}/>
            </div>
            {
                products.map((item)=>{
                    return (
                        <div className="product" key={item.id}>

                        <p className="product_img">
                            <img src={item.image} alt="" />
                        </p>
                        <p className="product_name">
                            {item.name}
                        </p>
                        <p className="product_text">
                            {item.text}
                        </p>
                        <p className="product_price">
                            {item.price} <span>원</span>
                        </p>
                    </div>
                    )
                })

            }
            
        </div>
    </>
  )
}
