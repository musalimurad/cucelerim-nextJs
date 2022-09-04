import styles from "./_categoryList.module.scss";
import Link from "next/link";
import * as Icon from "react-bootstrap-icons";
import downArrow from "../../public/assets/image/eva_arrow.png";
import rightArrow from "../../public/assets/image/eva_arrow-right.png";
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
const CategoryList = () => {
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    let liItems = document.querySelectorAll(
      "._categoryList_catListItem__gDtyh ul li a"
    );
    let liItemsContent = document.querySelectorAll(
      "._categoryList_catListItem__gDtyh ul li ul"
    );
    console.log(liItemsContent);
    let arrowIcons = document.querySelectorAll("._categoryList_arrow__wNLjD");
    console.log(arrowIcons);
    for (let i = 0; i < liItems.length - 1; i++) {
      liItems[i].onclick = (e) => {
        e.preventDefault();
        setActive(true);
        liItems[i].classList.toggle(`${styles.active}`);
        liItemsContent[i].classList.toggle(`${styles.activeMenu}`);
      };
    }
  });

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
              <a
                className={`d-flex align-items-center justify-content-between`}
              >
                Geyim{<Image className={styles.arrow} src={rightArrow} />}{" "}
              </a>
              <ul className={styles.altCategory}>
                <li className={styles.childLi}>
                  <a className={styles.childLink}>Kisi Geyim</a>
                </li>
                <li className={styles.childLi}>
                  <a className={styles.childLink}>Qadin Geyim</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className={`d-flex align-items-center justify-content-between`}
              >
                Mebel{<Image className={styles.arrow} src={rightArrow} />}{" "}
              </a>
              <ul className={styles.altCategory}>
                <li className={styles.childLi}>
                  <a className={styles.childLink}>Usaq Mebel</a>
                </li>
                <li className={styles.childLi}>
                  <a className={styles.childLink}>Yataq mebel</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/Shop">
                <a>Mağazalar</a>
              </Link>
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
