import AdvertCard from "../advertSection/AdvertCard";
import styles from "./_cv&advert.module.scss";
import cardImg from "../../public/assets/image/MaskGroup.png";
import diamond from "../../public/assets/image/diamond1.png";
import crystal from "../../public/assets/image/jam_crown-f.png";
import WishCart from "../wishCart/WishCart";

const MyFavorite = () => {
  return (
    <div>
    
      <div className={`${styles.addContent} row align-items-center`}>
        <WishCart/>
      </div>
    </div>
  );
};

export default MyFavorite;
