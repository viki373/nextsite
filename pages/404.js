import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Head from '../components/Header'
export default function Error() {
    return (
        <>
            <Head />
            <Navbar src={'../../Logovic.svg'}/>
            <div className="container">
                <h1>404 Страница не найдена</h1>
            </div> 
            <Footer src={'../../logofooter.svg'}/>
        </>
    )
}
