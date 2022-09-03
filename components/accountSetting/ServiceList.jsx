import Link from "next/link";
import { useEffect } from "react";
import styles from "./_serviceList.module.scss";

const ServiceList = ({ listDetailProp }) => {
  useEffect(() => {
    let list = document.querySelectorAll(`.${styles.serviceList} ul li`);
    let listDetail = document.querySelectorAll(listDetailProp);
    list[0].classList.add(`${styles.activeList}`)
    for (let x = 0; x < listDetail.length; x++) {
      listDetail[x].classList.add("d-none");
    }
    listDetail[0].classList.remove("d-none")
    for (let i = 0; i < list.length-1; i++) {
      list[i].onclick = (e) => {
        e.preventDefault();
        for (let x = 0; x < listDetail.length; x++) {
          listDetail[x].classList.add("d-none");
        }
        for (let j = 0; j < list.length; j++) {
          list[j].classList.remove(`${styles.activeList}`);
        }
        list[i].classList.add(`${styles.activeList}`);
        listDetail[i].classList.remove("d-none");
      };
    }
  });
  return (
    <div className={styles.serviceList}>
      <div className={styles.accountUsername}>
        <h6>Vüsal Məmmədov</h6>
      </div>
      <div className={styles.accountChoose}>
        <ul>
          <li>
            <Link href="">
              <a>Tənzimləmələr</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                Elanlarım <span>(2)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                CV <span>(2)</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Bəyəndiklərim</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Şifrəni yenilə</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Çıxış</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceList;
