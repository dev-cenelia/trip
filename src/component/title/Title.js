import React, { useState } from 'react'
import styles from './title.module.css'

export default function Title({defaultTitle, updatedTitle}) {
    const [title, setTitle] = useState(defaultTitle);
    const changeTitle = () => {
        setTitle(prevTitle => (prevTitle === defaultTitle ? updatedTitle : defaultTitle));
      };
  return (
    <div className={styles.titleWrap}>
        <button className={styles.helloComent} onClick={changeTitle}>
            {title}
        </button>
    </div>
  )
}
