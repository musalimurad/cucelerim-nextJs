import { Field, Form, Formik, FormikProps } from "formik";
import styles from "./_filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filterContent}>
        <Formik
          initialValues={{
            color: "",
            price: "",
            age: "",
            arrangement:"",
            usageStatus:"",
            comeTo:"",
            gender:"",
            lang: "",
          }}
        
        >
          <Form className={styles.form}>
            <Field className={styles.select} as="select" name="color">
              <option defaultValue="color"  hidden >
                Rəng
              </option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Field className={styles.select} as="select" name="price">
              <option defaultValue="price"  hidden >
                Qiymət
              </option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Field className={styles.select} as="select" name="age">
            <option defaultValue="age"  hidden >Yaş</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Field className={styles.select} as="select" name="arrangement">
            <option defaultValue="arrangement"  hidden >Sıralama</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Field className={styles.select} as="select" name="usageStatus">
            <option defaultValue="usageStatus"  hidden >Vəziyyəti</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Field className={styles.select} as="select" name="comeTo">
            <option defaultValue="comeTo"  hidden >Çatdırılma</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Field className={styles.select} as="select" name="gender">
            <option defaultValue="gender"  hidden >Cins</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Field className={styles.select} as="select" name="lang">
            <option defaultValue="lang"  hidden >Dil</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Filter;
