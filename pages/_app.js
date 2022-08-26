import '../styles/globals.scss'
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import StaticBar from '../components/staticBar/StaticBar';
import Footer from '../components/footer/Footer';
import { Provider } from 'react-redux';
import store from '../redux/store/store'

function MyApp({ Component, pageProps }) {
  return(
    <div>
    <Provider store={store}>
    <Header />
    <StaticBar />
    
    <Component {...pageProps} />
    </Provider>
  
  <Footer/>
  
   
    </div>
  ) 
}

export default MyApp