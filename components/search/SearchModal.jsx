import styles from "./_searchModal.module.scss";
import * as Icon from "react-bootstrap-icons";

const SearchModal = ({ icon }) => {

  return (
    <div className={styles.searchModal}>
      <div className="container">
        <div className={styles.closeContent}>
         {icon}
        </div>

        <div className={styles.searchForm}>
          <form className="row align-items-center justify-content-center">
            <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Saytda axtar"
                required
              />
            </div>
            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <Icon.Search className={styles.searchBtn} />
            </div>
          </form>
          <div className={styles.overlay}></div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
