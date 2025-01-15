import React from 'react'
import styles from './header.module.css'
import { Link } from 'react-router'


export default function Header() {
  return (
    <header className={styles.headerWrap}>
        <div className={styles.headerInner}>
            <Link to="/" className={styles.logo}><img src='./img/logo.png'/></Link>
            <ul className={styles.gnbList}>
                <li><Link to="/practice">연습</Link></li>
                <li><Link to="/food">음식</Link></li>
                <li><Link to="/trip">관광</Link></li>
                <li><Link to="/resort">숙소</Link></li>
                <li><Link to="/fclt">편의시설</Link></li>
            </ul>
        </div>
    </header>
  )
}
