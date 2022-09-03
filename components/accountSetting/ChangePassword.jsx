import styles from "./_accountParameter.module.scss";

const ChangePassword = () => {
  return (
    <div className={styles.accountParameter}>
      <form autoComplete="true">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="current-password">Mövcud şifrə</label>
          <input
            id="current-password"
            name="current-password"
            type="password"
            placeholder="Mövcud şifrə"
            autoComplete="true"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="new-password">Yeni şifrə</label>
          <input
            id="new-password"
            name="new-password"
            type="password"
            placeholder="Yeni şifrə"
            autoComplete="true"
            autoFocus={true}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <label htmlFor="re-new-password">Yeni şifrə təkrarı</label>
          <input
            id="re-new-password"
            name="new-password"
            type="password"
            placeholder="Yeni şifrə təkrarı"
            autoComplete="true"
            autoFocus={true}
          />
        </div>
        <input className={styles.submitBtn} type="submit" value="Şifrəni yeniləmək" />
      </form>
    </div>
  );
};

export default ChangePassword;
