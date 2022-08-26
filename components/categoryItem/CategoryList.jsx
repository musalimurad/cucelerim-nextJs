import styles from "./_categoryList.module.scss";
import Link from "next/link";
import * as Icon from "react-bootstrap-icons";
import downArrow from '../../assets/image/eva_arrow.png'
import rightArrow from '../../assets/image/eva_arrow-right.png'
import { useState } from "react";
import Image from "next/image";
const CategoryList = (props) => {
  const [isActive, setActive] = useState(false)
  // const [isActive, setActive] = useState(false)

  return (
    <div className={styles.categoryList}>
      <div className={styles.categories}>
        <div className={styles.categoryListHead}>
          <h1>Kateqoriyalar</h1>
        </div>
        <div className={styles.catListItem}>
          <ul>
            <li>
              <Link href="/">
                <a>Oyuncaq</a>
              </Link>
            </li>
            <li>
                <a onClick={()=> isActive? setActive(false) : setActive(true)} className={isActive? `${styles.active} d-flex align-items-center justify-content-between` : "d-flex align-items-center justify-content-between"} >Geyim{isActive? <Image src={downArrow}/> : <Image src={rightArrow}/>} </a> 
              <ul className={isActive? styles.activeMenu  : styles.altCategory}>
                <li className={styles.childLi}>
                  <a className={styles.childLink}>Kisi Geyim</a>
                </li>
                <li className={styles.childLi}>
                  <a className={styles.childLink}>Qadin Geyim</a>
                </li>
              </ul>
            </li>
            <li>
            <a onClick={()=> isActive? setActive(false) : setActive(true)} className={isActive? `${styles.active} d-flex align-items-center justify-content-between` : "d-flex align-items-center justify-content-between"} >Mebel{isActive? <Image src={downArrow}/> : <Image src={rightArrow}/>} </a> 
          <ul className={isActive? styles.activeMenu  : styles.altCategory}>
            <li className={styles.childLi}>
              <a className={styles.childLink}>Usaq Mebel</a>
            </li>
            <li className={styles.childLi}>
              <a className={styles.childLink}>Yataq mebel</a>
            </li>
          </ul>
        </li>
            <li>
              <a>Mağazalar</a>
            </li>
            <li>
              <a>Sağlamlıq</a>
            </li>
            <li>
              <a>Təhsil</a>
            </li>
            <li>
              <a>İş axtaranlar</a>
            </li>
            <li>
              <a>Əyləncə</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
