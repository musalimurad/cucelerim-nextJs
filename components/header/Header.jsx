import styles from "./_header.module.scss";
import Image from "next/image";
import Logo from "../../assets/image/logo.png";
import NavLi from "./NavLi";
import Link from 'next/link'
import { useRouter } from "next/router";
import fakeApi from '../../translate/fakeApi.json'

const Header = () => {

  const { locale, locales, asPath } = useRouter();
  return (
    <header className={styles.header}>
      <div className="myContainer">
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.logo}>
          <Link href="/"><a><Image className={styles.img} src={Logo} /></a></Link>
          </div>
          <nav className={styles.nav}>
            <ul className="d-flex">
             {
              fakeApi.header.filter((p)=>p.locale===locale).map((fakeApi, i)=>{
                 return <NavLi key={i} href={fakeApi.link} liText={fakeApi.title} />
              })
             }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
