import Navbar from '../components/Navbar'
import Head from '../components/Header'
import Footer from '../components/Footer';
import Form from '../components/Form';

export default function about() {
    return (
        <>
            <Head name={'О компании'}/>
            <Navbar src={'Logovic.svg'}/>
            <main className="container">
                <section className="fone-img d-flex align-items-center justify-content-center mt-3 mb-3 mt-lg-5 mb-lg-5">
                    <img src={'/about/01.jpg'} alt={'img'} className="w-100 "/> 
                </section>
                <section className="mb-5 mt-5">
                    <div className="mb-5 ">
                        <h2 className="color-purple text-uppercase font-weight-bold font-italic">О компании</h2>
                    </div>
                        <p>
                        Компания Regal основана в 1954 году. Это одна из первых в Италии компаний, предложивших производство огнестойких двигателей.  Как и положено успешной компании, Cemp предлагали все более новые и технологичные решения, которые были по достоинству оценены профессионалами производственной сферы. Появились огнестойкие двигатели с тормозом, электрические насосы для печатных машин, огнестойкие двигатели для газов группы II C и для горнодобывающей промышленности. Однако в 1998 году компанию ждала новая история, ознаменовавшая этот период  временем роста и развития. Присоединившись к большой группе частных инвесторов ,  уже в 2000 году Cemp присоединили компанию Atav, которая теперь называется Cemp France. Французская компания, специализируется на небольших алюминиевых огнестойких двигателях. В 2007 году Cemp приобрели ABG Group и спустя несколько лет стали большим объединенным предприятием.
                        </p>
                </section>
                <section className="row mb-5">
                    <div className="col-12 col-lg-7 mb-5 ">
                        <Form />
                    </div>
                    <div className="col-12 col-lg-5 ">
                        <div className="mb-lg-0">
                                <span  className="color-purple font-weight-bold  mb-3 d-block">EXD-MOTOREN</span>
                                <div className="mb-4">  
                                    <span className="color-purple ">Адрес: <span>Россия</span>, <span>600000</span>,</span>
                                    <span className="color-purple">г. Владимир</span>, 
                                    <span className="color-purple">ул.Большая Нижегородская, д.77</span>
                                </div>
                                <div className="d-flex flex-column flex-sm-row justify-content-between mt-3">
                                    <div>
                                        <span className="color-purple mr-2"><i className="color-purple fa fa-phone"></i></span>
                                        <a href="tel:74997044434" className="color-purple">
                                            <span> +7(499)704-44-34</span>
                                        </a>
                                    </div>
                                    <div>
                                        <span className="color-purple mr-2"><i className="color-purple fa fa-envelope-o"></i></span>
                                        <a href="mailto:info@motoren.ru" className="color-purple">
                                        <span > info@motoren.ru</span>

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
