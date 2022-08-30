import styles from "./_shopItem.module.scss";
import Image from "next/image";
import wishIco from "../../public/assets/image/colorHeart.png";
import * as Icon from "react-bootstrap-icons";
import Link from "next/link";
import PropTypes from "prop-types";

const ShopItem = ({title, link, advertCount, phone, location, locationLink, photo}) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
      <div className={styles.shopItem}>
        <div className={styles.shopItemContent}>
          <div className={styles.headText}>
            <div className="d-flex justify-content-between ">
              <div className={`${styles.leftContent} `}>
                <figure className="d-flex align-items-center">
                  <Image width={100} height={100} src={photo} />
                  <figcaption>
                    <Link href={link}>
                      <a>
                        <h4>{title}</h4>
                      </a>
                    </Link>
                    <p>{advertCount} Elan</p>
                    <figcaption>
                      <Link href={`tel:${phone}`}>
                        <a
                          className={`${styles.contactField} d-flex align-items-center`}
                        >
                          <Icon.TelephoneFill
                            className={styles.contactFieldIco}
                          />
                          {phone}
                        </a>
                      </Link>
                      <Link  href={locationLink}>
                        <a
                        target="_blank" className={`${styles.contactField} d-flex align-items-center`}
                        >
                          <Icon.GeoAltFill className={styles.contactFieldIco} />{" "}
                          {location}
                        </a>
                      </Link>
                    </figcaption>
                  </figcaption>
                </figure>
              </div>
              <div className={styles.rightContent}>
                <Image className={styles.wishIco} src={wishIco} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ShopItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  advertCount: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  locationLink: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired
}

export default ShopItem;
