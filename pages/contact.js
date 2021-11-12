import Navbar from '../components/Navbar'
import Head from '../components/Header'
import Footer from '../components/Footer';
import Form from '../components/Form';
export default function Contact () {
    return (
        <>
            <Head name={'Контакты'}/>
            <Navbar src={'Logovic.svg'}/>
            <main className="container">
                <section className="fone-img d-flex align-items-center justify-content-center mt-3 mb-3 mt-lg-5 mb-lg-5">
                    <img src={'/fone/magazzino.jpg'} alt={'img'} className="w-100 "/>
                </section>
                <section className="row mb-5">
                    <div className="col-12 col-lg-7 mb-5 ">
                        <Form />
                    </div>
                    <div className="col-12 col-lg-5 ">
                        <div className="mb-lg-0">
                                <span className="color-purple font-weight-bold  mb-3 d-block">ООО &quot;ВИК-ЭНЕРГО &quot;</span>
                                <div className="mb-4">  
                                    <span className="color-purple ">Адрес: <span>Россия</span>, <span>600000</span>,</span>
                                    <span className="color-purple">г. Владимир</span>, 
                                    <span className="color-purple">ул.Пушкарская, д.77</span>
                                </div>
                                <div className="d-flex flex-column flex-sm-row justify-content-between mt-3">
                                    <div >
                                        <span className="color-purple mr-2"><i className="color-purple fa fa-phone"></i></span>
                                        <a href="tel:74997044434" className="color-purple">
                                            <span> +7(499)704-44-34</span>
                                        </a>
                                    </div>
                                    <div>
                                        <span className="color-purple mr-2"><i className="color-purple fa fa-envelope-o"></i></span>
                                        <a href="mailto:info@motoren.ru" className="color-purple">
                                        <span> info@motoren.ru</span>

                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer src={'logofooter.svg'}/>
        </>
    )
}
