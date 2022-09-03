import Link from "next/link";
import AdvertCard from "../advertSection/AdvertCard";
import styles from "./_cv&advert.module.scss";
import cardImg from "../../public/assets/image/MaskGroup.png";
import diamond from "../../public/assets/image/diamond1.png";
import crystal from "../../public/assets/image/jam_crown-f.png";
import * as Icon from "react-bootstrap-icons";

const MyCV = () => {
  return (
    <div>
      <div
        className={`${styles.addHead} row align-items-center justify-content-center`}
      >
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <Link href="">
            <a className={styles.advertLink}>Elan yerləşdir</a>
          </Link>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <Link href="">
            <a className={styles.cvLink}>CV yerləşdir</a>
          </Link>
        </div>
      </div>
      <div className={`${styles.addContent} row align-items-center`}>
        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 ">
          <AdvertCard
            photoUrl={cardImg}
            title="Uşaq geyimi Kombinezon LC Waikiki"
            price="30 Azn"
            ticket="Mağaza"
            iconOne={diamond}
            iconTwo={crystal}
            date="Bakı, 08-08-2021"
            href="/ProductDetail"
            isAddWish={false}
            isOffer={false}
          />
          <div className="d-flex align-items-center">
            <Link href="">
              <a className={styles.cardEditBtn}>
                <Icon.Pen />
              </a>
            </Link>
            <Link href="">
              <a className={styles.cardDeleteBtn}>
                <Icon.Trash />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 ">
          <AdvertCard
            photoUrl={cardImg}
            title="Uşaq geyimi Kombinezon LC Waikiki"
            price="30 Azn"
            ticket="Mağaza"
            iconOne={diamond}
            iconTwo={crystal}
            date="Bakı, 08-08-2021"
            href="/ProductDetail"
            isAddWish={false}
            isOffer={false}
          />
          <div className="d-flex align-items-center">
            <Link href="">
              <a className={styles.cardEditBtn}>
                <Icon.Pen />
              </a>
            </Link>
            <Link href="">
              <a className={styles.cardDeleteBtn}>
                <Icon.Trash />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 ">
          <AdvertCard
            photoUrl={cardImg}
            title="Uşaq geyimi Kombinezon LC Waikiki"
            price="30 Azn"
            ticket="Mağaza"
            iconOne={diamond}
            iconTwo={crystal}
            date="Bakı, 08-08-2021"
            href="/ProductDetail"
            isAddWish={false}
            isOffer={false}
          />
          <div className="d-flex align-items-center">
            <Link href="">
              <a className={styles.cardEditBtn}>
                <Icon.Pen />
              </a>
            </Link>
            <Link href="">
              <a className={styles.cardDeleteBtn}>
                <Icon.Trash />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCV;
