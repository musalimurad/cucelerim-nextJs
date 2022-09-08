import Head from "next/head";
import Link from "next/link";
import styles from "../styles/login.module.scss";
import Recaptcha from "react-recaptcha";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import * as Icon from "react-bootstrap-icons";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const register = () => {


  const handleSubscribe = () => {
    if (isVerified) {
      alert("You have successfully subscribed!");
    } else {
      alert("Please verify that you are a human!");
    }
  };
  const recaptchaLoaded = () => {
    console.log("capcha successfully loaded");
  };

  const verifyCallback = (response) => {
    if (response) {
      setisVerified(true);
    }
  };
  return (
    <div>
      <Head>
        <title>Register Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://www.google.com/recaptcha/api.js?
        onload=onloadCallback
        &render=explicit
        &hl={{app.request.locale|default(defaultLang) }}"
          async
          defer
        ></script>
      </Head>
      <main>
        <section className={styles.loginPage}>
          <div className="container">
            <div className={styles.loginHeadText}>
              <h1>Qeydiyyat</h1>
            </div>
            <div className={styles.loginForm}>
              <div className={styles.differentAccount}>
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-5 col-xl-5 col-xxl-5">
                    <button
                      onClick={signIn}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Icon.Google className={styles.googleIco} />{" "}
                      <span>Google ilə daxil ol</span>
                    </button>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <button className="d-flex align-items-center justify-content-center">
                      <Icon.Facebook className={styles.fbIco} />{" "}
                      <span className={styles.fbText}>
                        Facebook ilə daxil ol
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <form>
                <div className="row align-items-center justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                    <div className={styles.loginInp}>
                      <input type="text" placeholder="Ad" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className={styles.loginInp}>
                      <input type="text" placeholder="Soyad" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                    <div className={styles.loginInp}>
                      <input type="email" placeholder="E-mail" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                    <div className={styles.loginInp}>
                      <input type="password" placeholder="Şifrə" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className={styles.loginInp}>
                      <input type="password" placeholder="Şifrənin təkrarı " />
                    </div>
                  </div>
                </div>
                <div className=" m-auto col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                  <div className="googleSecurity d-flex align-items-center justify-content-center my-3">
                    <Recaptcha
                      sitekey="6LewiMchAAAAAOamYRvR1zAW2cegpxu9Fl996YCK"
                      render="explicit"
                      theme="default"
                      onloadCallback={recaptchaLoaded}
                      verifyCallback={verifyCallback}
                    />
                  </div>
                  <div className={styles.fullNameInpS}>
                    <input
                      onClick={handleSubscribe}
                      className={styles.submitIco}
                      type="submit"
                      value="Qeydiyyatdan keçin"
                    />
                  </div>
                </div>
                <div
                  className={`${styles.isRegister} text-center my-3`}
                >
                    <p>Saytda qeydiyyatdan keçmisinizsə</p>
                    <Link href="/login">
                      <a>Daxil olun</a>
                    </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default register;
