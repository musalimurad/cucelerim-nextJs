import Head from "next/head";
import Image from "next/image";
import styles from "../styles/_jobSeeker.module.scss";
import doctorImg from "../public/assets/image/doctor.jpg";
import OutlineButton from "../components/button/Button";
import Link from "next/link";

const JobSeeker = () => {
  return (
    <div>
      <Head>
        <title>Job Seeker Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.jobSeeker}>
          <div className="myContainer">
            <div className={`${styles.headText}`}>
              <ul className="d-flex align-items-center ">
                <li>
                  <Link href="/">
                    <a>Ana səhifə /</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Geyim /</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ProductDetail">
                    <a>Körpə /</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ProductDetail">
                    <a className={styles.activePage}>Uşaq dəsti</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.jobSeekerDetail}>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className={styles.topDetail}>
                  <div className={styles.fullName}>
                    <h2>Müəllimə (Riyaziyyat)</h2>
                    <h5>Aygün Kərimova</h5>
                  </div>
                  <div className={styles.info}>
                   <div className="row align-items-center">
                    
                   </div>
                  </div>
                </div>
                <div className={styles.bottomDetail}>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JobSeeker;
