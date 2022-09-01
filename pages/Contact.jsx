import Head from "next/head";
import styles from "../styles/contact.module.scss";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.contactPage}>
          <div className="myContainer">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
                <div className={styles.contactPageInfo}>
                  <div className={styles.contactHead}>
                    <h3>Əlaqə</h3>
                  </div>
                  <div className={styles.contactDetail}>
                    <small>Telefon</small>
                    <p>0553110509</p>
                    <small>E-mail</small>
                    <p>info@cucelerim.az</p>
                    <small>Ünvan</small>
                    <p>Azadliq pr. 192E</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
                <div className={styles.contactForm}>
                  <div className={styles.headText}>
                    <h4>Sualınız var?</h4>
                  </div>
                  <form>
                    <div className="row align-items-center">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className={styles.fullNameInp}>
                          <input type="text" placeholder="Ad, soyad" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className={styles.fullNameInp}>
                          <input type="email" placeholder="E-mail" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div className={styles.fullNameInp}>
                        <input type="email" placeholder="E-mail" />
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className={styles.fullNameInp}>
                     <textarea rows="10" cols="20" placeholder="Mesajınız"></textarea>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  <div className={styles.fullNameInpS}>
                  <input className={styles.submitIco} type="submit" value="Göndər" />
                  </div>
                </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
