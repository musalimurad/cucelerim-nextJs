import Link from 'next/link';
import styles from './_advertPerson.module.scss'
import wp from '../../public/assets/image/wp.png'
import tel from '../../public/assets/image/call.png'
import Image from 'next/image'

const AdvertPerson = () => {
    return ( 
        <div className={styles.advertPerson}>
         <div className={`${styles.adv} align-items-center`}>
          <div className={styles.personName}>
           <h6>Ceyhun Hüseynov</h6>
           <Link href="/"><a>İstifadəçinin bütün elanları</a></Link>
          </div>
          <div className={styles.personContact}>
          <a className='d-flex align-items-center' href='tel:(+994)555555555'><Image className={styles.contactImg} src={tel}/> (+994 55) 555-55-55</a>
          <a className='d-flex align-items-center'   href="https://api.whatsapp.com/send?phone=0554055596"><Image className={styles.contactImg} src={wp}/>  (+994 55) 555-55-55</a>
         </div>
         </div>
        </div>
     );
}
 
export default AdvertPerson;