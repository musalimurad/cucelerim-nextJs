import styles from "./_blogItem.module.scss";
import * as Icon from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const BlogItemDetail = ({ img, title, view, desc, time }) => {
  return (
    <div>
  
      <div className={styles.sliderImg}>
        <Image
          className={styles.img}
          height={350}
          width="500"
          objectFit="cover"
          src={img}
        />
      </div>
      <div className={styles.sliderText}>
        <div className="d-flex justify-content-between align-items-center">
          <h6>{title}</h6>
          <p className={styles.watch}>
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
              <Link href="/">
                <a>
                  Ətraflı <Icon.ArrowRight />
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
};

export default BlogItemDetail;
