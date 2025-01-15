import React, { useState } from 'react'
import './product.css'

export default function Product3() {
    const initData = [
        {
            "image": " ./images/m3_multiple.png",
            "name": "루메나 M3 멀티플 LED",
            "text": "세상에 없던 랜턴",
            "price": "59,000",
            "id": "001"
        }
    ]
    const [ products, setProducts ] = useState(initData);
    const addProduct = () => {
        let image = prompt("추가할 상품의 이미지경로를 입력하세요.")
        let name = prompt("추가할 상품의 이름를 입력하세요.")
        let text = prompt("추가할 상품의 내용를 입력하세요.")
        let price = prompt("추가할 상품의 가격를 입력하세요.")

        setProducts((prev)=>([...prev, {image, name, text, price}]))
    } 

    const deleteProduct = () => { 
        let name = prompt("삭제할 상품의 이름를 입력하세요.")
        setProducts((prev)=>(prev.filter((item)=> (item.name !== name))))
    }
    
    const changeData = () =>{
        let name_product = prompt("변경할 상품명을 선택하세요.")
        let name = prompt("변경할 상품명을 입력하세요.")
        let text = prompt("변경할 상품내용을 입력하세요.")
        let price = prompt("변경할 상품가격을 입력하세요.")
        setProducts((prev)=>(prev.map((item=>{
            if(item.name===name_product) {
                return{...item, name, text, price}
            }else{
                return {...item}
            }
        }))))
    }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "58px", alignItems: "center" }}>
    {
      products.map((item) => {
        return (
          <div className='product' key={item.id}>
            <p className='product_img'>
              <img src={item.image} alt="" />
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

    <div className='button_wrap' style={{ width: "300px", height: "auto", margin: "0px auto" }}>
      <button onClick={changeData}>상품정보변경</button> <button onClick={addProduct}>상품추가</button> <button onClick={deleteProduct}>상품삭제</button>
    </div>

  </div>
  )
}
