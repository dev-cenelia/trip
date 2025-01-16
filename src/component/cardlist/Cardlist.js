import React, { useEffect, useState } from 'react'
import styles from './cardlist.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Cardlist() {
  const [ cardContents, setCardContents ] = useState([]);
  useEffect(()=>{
    axios.get('./data/sapporo/sapporo_trip.json').then(res=>{
      console.log("데이터",res.data)
      setCardContents(res.data);
    });
  },[])
    
  return (
    <div className={styles.cardWrap}>
        <ul className={styles.cardList}>                
            {
              cardContents.map((item)=>(
                <li className={styles.cardItem} key={item.id}>
                  <div>
                      <p className={styles.cardImg}><img src={item.image_url} alt=""/></p>
                      <div className={styles.cardInfo}>
                        <div className={styles.cardInfoTxt}>
                          <p className={styles.contName}>{item.name}
                            <span className={styles.contRating}>{item.rating}</span>
                          </p>
                          <p className={styles.contDesc}>{item.description}</p>
                          <p className={styles.contLocation}>{item.location}</p>
                        </div>
                      
                        <div className={styles.actionBtn}><Link to={item.google_url} className={styles.contMap}>지도보기</Link></div>
                      </div>
                  </div> 
                </li>
              ))
            }
        </ul>
    </div>
  )
}
