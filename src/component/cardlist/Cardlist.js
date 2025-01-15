import React from 'react'
import styles from './cardlist.module.css'
import { Link } from 'react-router-dom'

export default function Cardlist() {
    
  return (
    <div>
        <ul>
            <li>
                <Link to="">
                    <p className={styles.cardImg}><img src="" alt=""/></p>

                </Link>
            </li>
        </ul>
    </div>
  )
}
