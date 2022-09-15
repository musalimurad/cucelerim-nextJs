import Head from "next/head";
import styles from "../styles/_about.module.scss";
import Image from "next/image";
import aboutImgOne from "../public/assets/image/Rectangle.png";
const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.aboutContent}>
          <div className="container">
            <div className={styles.about}>
              <div className="row justify-content-center align-items-center g-2">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className={styles.headText}>
                    <h1>Haqqımızda</h1>
                  </div>
                  <div className={styles.aboutText}>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur. Magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className={styles.aboutImgBox}>
                    <Image
                      objectFit="cover"
                      height={500}
                      width={500}
                      src={aboutImgOne}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.about}>
              <div className="row justify-content-center align-items-center g-2">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className={styles.aboutText}>
                    <div className={styles.aboutImgBox}>
                      <Image
                        objectFit="cover"
                        height={500}
                        width={500}
                        src={aboutImgOne}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <div className={styles.aboutText}>
                <ul>
                <li>
                  <strong>Ad və Soyad</strong>
                  <p>Admin admin</p>
                </li>
                <li>
                  <strong>Ad və Soyad</strong>
                  <p>Admin admin</p>
                </li>
                <li>
                  <strong>Ad və Soyad</strong>
                  <p>Admin admin</p>
                </li>
                <li>
                  <strong>Ad və Soyad</strong>
                  <p>Admin admin</p>
                </li>
              </ul>  
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
