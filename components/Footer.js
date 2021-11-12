import A from './A'
import style from '../styles/Footer.module.css'
import Link from 'next/link';
export default function Footer({src}) {
    return (
        <>
            <footer className="">
                <div className="shadow-lg bg-gray">
                    <div className="container">
                        <div className="row pt-3 pb-3">
                            <div className="col-10 col-sm-8 col-md-6 col-lg-4 d-flex justify-content-start ">
                            <Link href='/' >
                                <a className={style.logo}>
                                <img src={src} alt='logo footer' className={'w-100'}/>
                                </a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-purple">
                    <div className="container ">
                    <div className="row pt-5 pb-4" >
                        <div className="col-12 col-md-4 col-lg-5 col-xl-6">
                        <ul className="d-flex flex-column mb-0 pl-0" >
                                <li className="mb-2 ">
                                    <A href={'/'} text={'Главная'} style={'color-orange link-text'}/>
                                </li>
                                <li className="mb-2 ">
                                    <A href={'/partners'} text={'Оборудование'} style={'color-orange link-text'}/>
                                </li>
                                <li className=" mb-2 ">
                                    <A href={'/docs'} text={'Документация'} style={'color-orange link-text'}/>
                                </li>
                                <li className=" mb-2 ">
                                    <A href={'http://localhost:8000/news/'} text={'Новости'}  style={'color-orange link-text'}/>
                                
                                </li>
                                <li className=" mb-2 ">
                                    <A href={'/contact'} text={'Контакты'} style={'color-orange link-text'} />
                                </li>
                            </ul> 
                        </div>
                        <div className="col-12 col-md-8 mt-5 col-lg-7 col-xl-6 mt-md-0">
                            <div  className="mb-lg-0">
                                <span  className="color-orange mb-3 d-block">ООО 	&quot;ВИК-ЭНЕРГО &quot; </span>
                                <div  className="mb-4">
                                    <span className="color-orange">Адрес: <span>Россия</span>, <span >600000</span>,</span>
                                    <span  className="color-orange">г. Владимир</span>, 
                                    <span className="color-orange">ул.Пушкарская, д.46</span>
                                </div>
                                <div className="d-flex flex-column flex-sm-row justify-content-between mt-3">
                                    <div>
                                        <span className="color-orange mr-2"><i className="fa fa-phone"></i></span>
                                        <a href="tel:74997044434" className="color-orange link-text">
                                            <span> +7(499)704-44-34</span>
                                        </a>
                                    </div>
                                    <div>
                                        <span className="color-orange mr-2"><i className="fa fa-envelope-o"></i></span>
                                        <a href="mailto:info@exd-motoren.ru" className="color-orange link-text">
                                        <span> info@exd-motoren.ru</span>

                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex flex-column flex-sm-row justify-content-between mt-3">
                                    <A href={'/politics'} text={'Политика конфиденциальности'} style={'link-text color-orange mr-3'}/>
                                    <A href={'/delivery'} text={'Условия доставки'} style={'link-text color-orange '}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    
                </div>
            </footer>
        </>
    )
}
