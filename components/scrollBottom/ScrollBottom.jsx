import styles from './_scrollBottom.module.scss'
import * as Icon from "react-bootstrap-icons";

const ScrollBottom = () => {
    return ( 
        <div className={styles.iconContent}>
          <Icon.Mouse className={styles.scrollIcon}/>
        </div> 
        );
}
 
export default ScrollBottom;