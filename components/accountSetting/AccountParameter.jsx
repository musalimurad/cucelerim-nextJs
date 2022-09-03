import styles from "./_accountParameter.module.scss";

const AccountParameter = () => {
 
  return (
    <div className={styles.accountParameter}>
   
      <form>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="fullName">Ad, Soyad</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            defaultValue="Vüsal Məmmədov"
            placeholder="Ad və Soyad"
          
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="text"
            defaultValue="vusalmemmedov@gmail.com"
            placeholder="Email"
           
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="phone">Telefon</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            defaultValue="(+994 50) 987 65 43"
            placeholder="Telefon"
          />
        </div>
        <input className={styles.submitBtn} type="submit" value="Təsdiq et" />
      </form>
    </div>
  );
};

export default AccountParameter;
