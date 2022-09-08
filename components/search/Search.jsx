import styles from "./_search.module.scss";
import * as Icon from "react-bootstrap-icons";
const Search = () => {
  return (
    <div className={styles.search}>
      <form className="row align-items-center">
        <div className="col-12 col-sm-8 col-md-8 col-lg-7 col-xl-7 col-xxl-7">
          <div className={styles.searchInp}>
            <div className="d-flex align-items-center">
              <Icon.Search className={styles.searchIco} />
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Axtardığınız məhsul"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <div className={styles.submitBtn}>
            <input type="submit" value="Axtar" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
