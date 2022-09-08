import Head from "next/head";
import styles from "../styles/_addCV.module.scss";

const addCV = () => {
  return (
    <div>
      <Head>
        <title>Add CV Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.addCvPage}>
          <div className="myContainer">
            <div className={styles.cvHead}>
              <h2>CV yerləşdir</h2>
            </div>
            <form>
              <div className="row align-items-center justify-content-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                          <label>Ad, Soyad</label>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                              <input type="text" placeholder="Ad" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                              <input type="text" placeholder="Soyad" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                              <input type="text" placeholder="Ata adı" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                          <label>Vəzifə</label>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                              <input type="text" placeholder="Ad" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                          <label>Təhsil</label>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                          <label>Bacarıqlar</label>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                          <label>İş keçmişiniz</label>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                              <textarea name="" id=""></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <label>Əlaqə</label>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                        <div className="row align-items-center">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <input type="tel" placeholder="Telefon" />
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <input type="email" placeholder="E-mail" />
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default addCV;