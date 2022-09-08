import styles from "./_advertItem.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";



const AdvertItem = ({ titleText, textColor, buttonText, cardItem }) => {
  
  return (
    <div className={styles.advertItem}>
      <div className={styles.advertHead}>
        <div className=" d-flex align-items-center justify-content-between">
          <div className={styles.title}>
            <h2 style={{ color: `${textColor}` }}>{titleText}</h2>
          </div>
          <div className={styles.moreBtn}>
            <Link href="/">
              <a
                style={{
                  color: `${textColor}`,
                  border: `1px solid ${textColor}`,
                }}
              >
                {buttonText}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.advertContent}>
          <div className="row align-items-center">
          {cardItem}
          </div>
      </div>
    </div>
  );
};

AdvertItem.propTypes = {
  titleText: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default AdvertItem;
