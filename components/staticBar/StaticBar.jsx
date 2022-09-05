import styles from "./_staticBar.module.scss";
import * as Icon from "react-bootstrap-icons";
import Link from "next/link";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import SearchModal from "../search/SearchModal";

const StaticBar = ({ cart }) => {
  const [getCartCount, setCartCount] = useState(0);
  const [isActiveSearch, setActiveSearch] = useState(false);
  useEffect(() => {
    let count = 0;

    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, getCartCount]);

  return (
    <div>
      <div className={styles.staticBar}>
        <div className={styles.desktopStaticBar}>
          <div className={styles.top}>
            <div className={styles.plusIcon}>
              <Icon.Plus className={styles.plusIco} />
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.uIco}>
              <Icon.Search
                onClick={() => setActiveSearch(true)}
                className={styles.searchIco}
              />
              <Link href="/myAccount">
                <a>
                  <Icon.Person className={styles.userIco} />
                </a>
              </Link>
              <div className={styles.wishList}>
                <span>{getCartCount}</span>
                <Link href="/WishList">
                  <a>
                    <Icon.Heart className={styles.wishIco} />
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <div>
                <Link href="/">
                  <a>
                    <Icon.Facebook className={styles.fb} />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Icon.Instagram className={styles.ig} />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <Icon.Telegram className={styles.tg} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.responsiveStaticBar}>
          <div className={styles.plusIcon}>
            <Link href="">
              <a>
                {" "}
                <Icon.Plus className={styles.plusIco} />
              </a>
            </Link>
          </div>
        </div>
      </div>
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(StaticBar);
