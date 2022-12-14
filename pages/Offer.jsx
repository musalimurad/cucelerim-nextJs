import Head from "next/head";
import AdvertCard from "../components/advertSection/AdvertCard";
import styles from "../styles/_offer.module.scss";
import cardImg from "../public/assets/image/MaskGroup.png";
import diamond from "../public/assets/image/diamond1.png";
import crystal from "../public/assets/image/jam_crown-f.png";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import AllFilter from "../components/filter/AllFilter";
const Offer = ({ products }) => {
  const { locale } = useRouter();
  return (
    <div>
      <Head>
        <title>Offer Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.productMain}>
        <div className="myContainer">
          <div className={styles.productContent}>
            <div className={styles.headTitle}>
              <div className=" d-flex justify-content-between align-items-center">
                <h1>Təkliflər</h1>
              
              </div>
             <AllFilter/>
            </div>
            <div className="productList">
              <div className="row align-items-center">
                {products
                  .filter((p) => p.locale === locale)
                  .map((fakeApi, i) => {
                    return (
                      <div
                        key={i}
                        className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3"
                      >
                        <AdvertCard
                          id={fakeApi.id}
                          key={i}
                          photoUrl={cardImg}
                          title={fakeApi.productName}
                          price={fakeApi.price}
                          ticket={fakeApi.sellStatus}
                          iconOne={diamond}
                          iconTwo={crystal}
                          date={fakeApi.dateAndCity}
                          href="/ProductDetail"
                          isAddWish={false}
                          isOffer={true}
                          discount="-20%"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
  };
};

export default connect(mapStateToProps)(Offer);
