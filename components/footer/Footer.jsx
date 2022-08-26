import styles from "./_footer.module.scss";
import Image from "next/image";
import Logo from "../../public/assets/image/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const { locale, locales, asPath } = useRouter();
  return (
    <footer className={styles.footer}>
      <div className="myContainer">
        <div className="d-flex flex-wrap  align-items-center">
          <div className=" col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
           <div className="d-flex align-items-center">
           <div className={styles.logo}>
              <Image src={Logo} className={styles.logoImg} />
            </div>
            <div className={styles.lang}>
              {locales.map((l, i) => {
                return (
                  <span key={i}>
                    <Link href={asPath} locale={l}>
                      {l}
                    </Link>
                  </span>
                );
              })}
            </div>
           </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className={styles.middle}>
              <div className="d-flex flex-wrap justify-content-between">
                <div className="col-12 col-sm-4 col-lg-4 col-xl-4 col-xxl-4">
                  <div className={styles.leftLink}>
                    <Link href="/">
                      <a>İstifadəçi razılaşması</a>
                    </Link>
                    <Link href="/">
                      <a>Brendlər</a>
                    </Link>
                    <Link href="/">
                      <a>Saytda reklam</a>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-sm-4 col-lg-4 col-xl-4 col-xxl-4">
                  <div className={styles.leftLink}>
                    <Link href="/">
                      <a>Ana səhifə</a>
                    </Link>
                    <Link href="/AboutUs">
                      <a>Haqqımızda</a>
                    </Link>
                    <Link href="/News">
                      <a>Xəbərlər</a>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-sm-4 col-lg-4 col-xl-4 col-xxl-4">
                  <div className={styles.leftLink}>
                    <Link href="/Blog">
                      <a>Bloq</a>
                    </Link>
                    <Link href="/Offer">
                      <a>Təkliflər</a>
                    </Link>
                    <Link href="/">
                      <a>Əlaqə</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>2022 © Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
