import styles from "./_header.module.scss";
import Image from "next/image";
import Logo from "../../public/assets/image/logo.png";
import NavLi from "./NavLi";
import Link from "next/link";
import { useRouter } from "next/router";
import fakeApi from "../../translate/fakeApi.json";
import * as Icon from "react-bootstrap-icons";
import searchIco from "../../public/assets/image/fe_search.png";
import adminIco from "../../public/assets/image/ant-design_user-outlined.png";
import wishListIco from "../../public/assets/image/clarity_heart-solid.png";
import fb from "../../public/assets/image/bx_bxl-facebook.png";
import ig from "../../public/assets/image/akar-icons_instagram-fill.png";
import tg from "../../public/assets/image/bx_bxl-telegram.png";
import { useEffect, useState } from "react";
import SearchModal from "../search/SearchModal";

const Header = () => {
  const { locale, locales, asPath } = useRouter();
  const [isActiveSearch, setActiveSearch] = useState(false);

  useEffect(() => {
    let navIco = document.querySelector(`.${styles.listIco}`);
    let closeIco = document.querySelector(`.${styles.closeIco}`);
    let responsiveNav = document.querySelector(`.${styles.responsiveNav}`);
    navIco.onclick = () => {
      responsiveNav.classList.add(`${styles.activeNav}`);
    };
    closeIco.onclick = () => {
      responsiveNav.classList.remove(`${styles.activeNav}`);
    };
  });
  return (
    <div>
    <header className={styles.header}>
      <div className="myContainer">
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.navIco}>
            <Icon.List className={styles.listIco} />
          </div>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image className={styles.img} src={Logo} />
              </a>
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className="d-flex">
              {fakeApi.header
                .filter((p) => p.locale === locale)
                .map((fakeApi, i) => {
                  return (
                    <NavLi key={i} href={fakeApi.link} liText={fakeApi.title} />
                  );
                })}
            </ul>
          </nav>
          <div className={styles.search}>
            <Image
              onClick={() => setActiveSearch(true)}
              src={searchIco}
              className={styles.searchIco}
            />
          </div>
        </div>
      </div>
      <div className={styles.responsiveNav}>
        <div className={styles.navHead}>
          <div className="d-flex align-items-center justify-content-between">
            <div className={styles.left}>
              <Icon.XLg className={styles.closeIco} />
            </div>
            <div className={styles.right}>
              <div className="d-flex align-items-center">
                <div className={styles.admin}>
                  <Link href="/myAccount">
                    <a>
                      <Image src={adminIco} />
                    </a>
                  </Link>
                </div>
                <div className={styles.wishList}>
                  <Link href="">
                    <a>
                      <Image src={wishListIco} />
                      <div className={styles.wishCount}>
                        <span>2</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navContent}>
          <ul>
            {fakeApi.header
              .filter((p) => p.locale === locale)
              .map((fakeApi, i) => {
                return (
                  <NavLi key={i} href={fakeApi.link} liText={fakeApi.title} />
                );
              })}
          </ul>
          <div className={styles.social}>
            <div className="d-flex align-items-center">
              <a href="">
                <Image src={fb} />
              </a>
              <a href="">
                <Image src={ig} />
              </a>
              <a href="">
                <Image src={tg} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    {isActiveSearch ? (
      <SearchModal
        icon={
          <Icon.XLg onClick={() => setActiveSearch(false)} className={styles.closeIco} />
        }
      />
    ) : null}
    </div>
  );
};

export default Header;
