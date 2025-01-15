import React, { useEffect, useState } from 'react';
import './product.css';
import axios from 'axios';

export default function Product2() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('./data/products.json')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    const changeData = () => {
        const product_name = prompt("변경할 상품 이름을 선택하세요.");
        if (!product_name) return alert("변경할 상품 이름을 입력해주세요.");

        const name = prompt("새로운 상품 이름을 입력하세요.");
        const text = prompt("변경할 상품 내용을 입력하세요.");
        const price = prompt("변경할 상품 가격을 입력하세요.");

        if (!name || !text || isNaN(price)) {
            return alert("모든 입력값을 올바르게 입력해주세요.");
        }

        setProducts((prev) =>
            prev.map((item) =>
                item.name === product_name
                    ? { ...item, name, text, price: Number(price) }
                    : item
            )
        );
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "58px", alignItems: "center" }}>
            {products.map((item) => (
                <div className="product" key={item.id} style={{ border: "1px solid #ddd", padding: "10px", width: "300px" }}>
                    <p className="product_img">
                        <img src={item.image} alt={item.name || '상품 이미지'} style={{ width: "100%" }} />
                    </p>
                    <p className="product_name" style={{ fontWeight: "bold" }}>{item.name}</p>
                    <p className="product_text">{item.text}</p>
                    <p className="product_price">
                        {item.price} <span>원</span>
                    </p>
                </div>
            ))}
            <div id="button_wrap" style={{ width: "300px", height: "auto", margin: "0px auto", textAlign: "center" }}>
                <button onClick={changeData} style={{ padding: "10px 20px", cursor: "pointer" }}>상품 정보 변경</button>
            </div>
        </div>
    );
}
