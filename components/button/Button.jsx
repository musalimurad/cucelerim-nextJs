import PropTypes from "prop-types";
import styles from './button.module.scss'

const OutlineButton = ({buttonContent, buttonBorder}) => {
    return ( 
        <button className={styles.button} style={{padding:"7px 30px", border:`${buttonBorder}`, marginTop:"30px", marginRight:"20px", borderRadius:"8px"}}>{buttonContent}</button>
     );
}


OutlineButton.propTypes = {
    buttonContent: PropTypes.string.isRequired,
    buttonBorder: PropTypes.string.isRequired
}

export default OutlineButton;
 
