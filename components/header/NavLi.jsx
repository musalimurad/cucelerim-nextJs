import styles from './_navLi.module.scss'
import Link from 'next/link'

const NavLi = (props) => {
    return ( 
       <li className={styles.li}>
       <Link href={props.href}><a>{props.liText}</a></Link>
       </li>
     );
}
 
export default NavLi;