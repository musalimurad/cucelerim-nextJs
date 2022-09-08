import { useEffect } from "react";
import { Button } from "../button/Button";
import Search from "../search/Search";
import Filter from "./Filter";
import styles from "./_filter.module.scss";

const AllFilter = () => {
  useEffect(() => {
    let filterBtnBox = document.querySelector(`.${styles.filterButtonBox}`);
    let filterBtn = filterBtnBox.firstChild

    filterBtn.onclick = () => {
        let filterContent = document.querySelector(`.${styles.allFilterContent}`);
        filterContent.classList.toggle(`${styles.activeFilterList}`)
    };
  });

  return (
    <div className={styles.filterList}>
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
          <Search />
        </div>
        <div className={`${styles.filterButtonBox} col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3`}>
          <Button
          
            buttonText={"Ətraflı axtarış"}
            background="#fff"
          />
        </div>
        <div className={styles.allFilterContent}>
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default AllFilter;
