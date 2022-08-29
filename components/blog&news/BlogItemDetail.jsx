import styles from "./_blogItem.module.scss";
import * as Icon from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const BlogItemDetail = ({ img, title, view, desc, time, href }) => {
  return (
    <div className={styles.BlogItemDetail}>
  
      <div className={styles.sliderImg}>
        <Image
          className={styles.img}
          height={350}
          width="500"
          layout="responsive"
          objectFit="cover"
          src={img}
        />
      </div>
      <div className={styles.sliderText}>
        <div className="d-flex justify-content-between align-items-center">
          <h6>{title}</h6>
          <p className={`${styles.watch} d-flex align-items-center`}>
            <Icon.Eye className={styles.eye} /> {view}
          </p>
        </div>
        <div className={styles.detailtext}>
          <p>{desc}</p>
        </div>
        <div className={styles.bottom}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="left">
              <p>{time}</p>
            </div>
            <div className="right">
              <Link  href={href}>
                <a className="d-flex align-items-center">
                  Ətraflı <Icon.ArrowRight className={styles.rightArrow} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
BlogItemDetail.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  view: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default BlogItemDetail;
