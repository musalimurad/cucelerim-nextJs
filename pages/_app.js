import '../styles/globals.scss'
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import StaticBar from '../components/staticBar/StaticBar';
import Footer from '../components/footer/Footer';
import { Provider } from 'react-redux';
import store from '../redux/store/store'
import { SessionProvider } from "next-auth/react"

function App({ Component, pageProps:{session, ...pageProps} }) {
  return(
    <div>
    <SessionProvider session={pageProps.session}>
    <Provider store={store}>
    <Header />
    <StaticBar />
    <Component {...pageProps} />
    <Footer/>
    </Provider>
    </SessionProvider>
    </div>
  ) 
}

export default App
