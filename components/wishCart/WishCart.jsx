import AdvertCard from "../advertSection/AdvertCard";
import styles from "./_wishCart.module.scss";
import cardImg from "../../public/assets/image/Mask Group.png";
import diamond from "../../public/assets/image/diamond 1.png";
import crystal from "../../public/assets/image/jam_crown-f.png";
import * as Icon from "react-bootstrap-icons";
import {connect} from 'react-redux'
import { useRouter } from "next/router";

const WishCart = ({cart}) => {
  const { locale } = useRouter();
  return (
    <div className={styles.wishCart}>
      <div className="container">
        <div className={styles.headText}>
          <h1>Seçilmişlər</h1>
        </div>
        <div className="row align-items-center">
        {cart !=""? cart.filter((p) => p.locale === locale).map((item, key)=>{
            return(
               <>
               <AdvertCard
                key={key}
                id={item.id}
               photoUrl={cardImg}
               title={item.productName}
               price={item.price}
               ticket={item.sellStatus}
               iconOne={diamond}
               iconTwo={crystal}
               date={item.dateAndCity}
               href="/ProductDetail"
               isAddWish = {true}
               isOffer = {false}
             />
               </>
            )
        }) : (<h4 style = {{marginTop:"70px"}} className="alert alert-danger" role="alert">Seçilmiş məhsul yoxdur</h4>)}
       
         
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
    return {
      cart: state.cart.cart,
      
    }
  }

export default connect(mapStateToProps)(WishCart);
