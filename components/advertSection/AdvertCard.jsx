import styles from "./_advertItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-bootstrap-icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartAction";

const AdvertCard = ({
  ticket,
  title,
  price,
  photoUrl,
  iconOne,
  iconTwo,
  date,
  href,
  addToCart,
  removeFromCart,
  isAddWish,
  isOffer,
  discount,
  key,
  id,
}) => {
  return (
    <div
      key={key}
      className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3 "
    >
      <div className={styles.advertCard}>
        <div className={styles.cardImg}>
          <Image
            width={840}
            height={540}
            objectFit={"cover"}
            src={photoUrl}
            className={styles.img}
          />
          <div className={styles.imgContent}>
            <div className={styles.top}>
              <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                  <div className={styles.icon}>
                    <div className={styles.wishDiv}>
                      {isAddWish === false ? (
                        <Icon.Heart
                          onClick={() => {
                            addToCart(id);
                          }}
                          className={styles.wishIco}
                        />
                      ) : (
                        <Icon.HeartFill
                          onClick={() => removeFromCart(id)}
                          className={styles.wishIco}
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.imgText}>
                    <p>{ticket}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <p>{price}</p>
            </div>
          </div>
        </div>
        <div className={styles.cardText}>
          <div className="">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <Link href={`${href}`}>
                <a>
                  {" "}
                  <h4>{title}</h4>
                </a>
              </Link>
            </div>
            {isOffer === true ? (
              <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                <p
                  style={{ color: "red", fontWeight: "600", fontSize: "18px" }}
                >
                  {discount}
                </p>
              </div>
            ) : null}
          </div>

          <div className={styles.altText}>
            <div className="d-flex align-items-center justify-content-between">
              <p>{date}</p>
              <div className={styles.altIcon}>
                <Image src={iconOne} />
                <Image src={iconTwo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AdvertCard.propTypes = {
  ticket: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photoUrl: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  iconOne: PropTypes.object.isRequired,
  iconTwo: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  isAddWish: PropTypes.bool.isRequired,
  isOffer: PropTypes.bool.isRequired,
  discount: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(AdvertCard);
