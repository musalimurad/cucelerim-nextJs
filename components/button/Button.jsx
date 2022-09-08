import PropTypes from "prop-types";
import styles from "./button.module.scss";
import * as Icon from "react-bootstrap-icons";

const OutlineButton = ({ buttonContent, buttonBorder }) => {
  return (
    <button
      className={styles.button}
      style={{
        padding: "7px 30px",
        border: `${buttonBorder}`,
        marginTop: "30px",
        marginRight: "20px",
        borderRadius: "8px",
      }}
    >
      {buttonContent}
    </button>
  );
};

export const Button = (props) => {
  return (
    <button
    
      onClick={props.onClick ? () => props.onClick() : null}
      style={{
        background: props.background,
        textAlign: "center",
        width: "100%",
        color: "#000",
        borderRadius: "8px",
        padding: "15px 20px",
        marginTop: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.08)",
      }}
    >
      {props.buttonText} <Icon.Sliders style={{ marginLeft: "10px" }} />
    </button>
  );
};

OutlineButton.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  buttonBorder: PropTypes.string.isRequired,
};

export default OutlineButton;
