import Link from "next/link";
import styles from "./_blogItem.module.scss";

const BlogItemHead = ({color , title, link}) => {
    return ( 
        <div className={styles.sectionHead}>
        <div className="d-flex align-items-center justify-content-between">
         <div className={styles.left}>
         <h1 style={{color:`${color}`, fontSize:"32px", fontWeight:"600"}}>{title}</h1>
         </div>
         <div className={styles.right}>
         <Link  href={link}><a style={{border:`1px solid ${color}`, color:`${color}`}}>Daha çox</a></Link>
         </div>
        </div>
        </div>
     );
}
 
export default BlogItemHead;