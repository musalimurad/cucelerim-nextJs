import styles from "./_categoryItem.module.scss";
import Link from "next/link";
import PropTypes from "prop-types";

const CategoryItem = ({ title, bg, txtColor, href }) => {
  return (
    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <Link href={href}>
        <a style={{ textDecoration: "none" }}>
          <div
            style={{ backgroundColor: `${bg}`, color: `${txtColor}` }}
            className={styles.categoryItem}
          >
            <h5>{title}</h5>
          </div>
        </a>
      </Link>
    </div>
  );
};

CategoryItem.propTypes = {
  bg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
};

export default CategoryItem;
