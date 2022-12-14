import Head from "next/head";
import AdvertCard from "../components/advertSection/AdvertCard";
import CategoryList from "../components/categoryItem/CategoryList";
import styles from "../styles/product.module.scss";
import cardImg from "../public/assets/image/MaskGroup.png";
import diamond from "../public/assets/image/diamond1.png";
import crystal from "../public/assets/image/jam_crown-f.png";
import * as Icon from "react-bootstrap-icons";
import AllFilter from "../components/filter/AllFilter";

const Product = () => {
  return (
    <div>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
        <div className={styles.myContainer}>
          <div className="row">
            <div className=" col-xl-2 col-xxl-2">
              <div className={styles.categoryListProduct}>
                <CategoryList />
              </div>
            </div>
            <div className=" col-xl-10 col-xxl-10">
              <div className={styles.allProductList}>
                <div className={styles.headTextProduct}>
                  <h1>Oyuncaqlar</h1>
                </div>
                <AllFilter />
                <div className="productsItems">
                  <div className="row align-items-center">
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                    <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                      <AdvertCard
                        photoUrl={cardImg}
                        title="Uşaq geyimi Kombinezon LC Waikiki"
                        price="30 Azn"
                        ticket="Mağaza"
                        iconOne={diamond}
                        iconTwo={crystal}
                        date="Bakı, 08-08-2021"
                        href="/ProductDetail"
                        isAddWish={false}
                        isOffer={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
