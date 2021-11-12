import A from './A';
import style from '../styles/Navbar.module.css';
import { Form, FormControl} from 'react-bootstrap';
import Link from 'next/link';
import Btn from './Btn';
import { useState } from 'react';
import { Button, Fade } from 'react-bootstrap';

export default function Navbar ({src}) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav>
                <div className=""></div>
                <div className="container pt-3 pb-3">
                    <div className="row">
                        <div className="col-12 col-sm-5 order-sm-1 mb-3 mb-sm-0  col-lg-4 d-flex justify-content-sm-start justify-content-center align-items-center">
                        <Link href="/" >
                            <a className={style.img}>
                                <img src={src} alt='logo' className={'w-100'}/>
                            </a>
                        </Link>
                        </div>
                        <div className="col-12 order-sm-3 order-lg-2 col-lg-4 d-flex justify-content-center align-items-center">
                            <div className={style.text}>
                                <p className="color-purple mb-0 text-center ">
                                Электродвигатели, механические и электрические устройства
                                управления движением и продукция для производства электроэнергии
                                </p>
                            </div>
                        </div>
                        <div className="col-12 mb-3 mb-sm-0 col-sm-7 order-sm-2 order-lg-3 col-lg-4 d-flex justify-content-center justify-content-sm-end align-items-center">
                            <div className="d-flex flex-column">
                                    <div className="mb-2">
                                        <span className=" mr-2"><i className="fa fa-phone color-orange"></i></span>
                                        <a href="tel:74997044434" className="color-purple ">
                                            <span> +7(499)704-44-34</span>
                                        </a>
                                    </div>
                                    <div>
                                        <span className="mr-2"><i className="fa fa-envelope-o color-orange"></i></span>
                                        <a href="mailto:info@exd-motoren.ru" className="color-purple">
                                        <span> info@exd-motoren.ru</span>

                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-purple pt-3 pb-3">
                    <div className="container">
                        <div className={style.desktop}>
                        <ul className="d-flex justify-content-between mb-0 pl-0">
                            <li>
                                <A href={'/'} text={'Главная'} style={'color-orange link-text'}/>
                            </li>
                            <li>
                                <A href={'/partners'} text={'Оборудование'} style={'color-orange link-text active-link'}/>
                            </li>
                            <li>
                                <A href={'/docs'} text={'Документация'} style={'color-orange link-text'}/>
                            </li>
                            <li>
                                <A href={'http://localhost:8000'} text={'Новости'}  style={'color-orange link-text'}/>
                            </li>
                            <li>
                                <A href={'/contact'} text={'Контакты'} style={'color-orange link-text'} />
                            </li>
                        </ul>
                        </div>
                        <div className={style.mobile}>
                            <nav className="d-flex justify-content-end">
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-fade-text"
                                    aria-expanded={open}
                                    className="btn-menu d-flex flex-column"
                                >
                                   <span className="line mb-1"> </span>
                                   <span className="line mb-1"> </span> 
                                   <span className="line "> </span>                               
                                </Button>
                            </nav>
                           
                            <Fade in={open}>
                                <div id="example-fade-text">
                                    <ul className="d-flex flex-column mb-0 pl-0 mt-2" >
                                    <li className="text-center mb-2">
                                        <A href={'/'} text={'Главная'} style={'color-orange link-text'}/>
                                    </li>
                                    <li className="text-center mb-2">
                                        <A href={'/partners'} text={'Оборудование'} style={'color-orange link-text'}/>
                                    </li>
                                    <li className="text-center mb-2">
                                        <A href={'/docs'} text={'Документация'} style={'color-orange link-text'}/>
                                    </li>
                                    <li className="text-center mb-2">
                                        <A href={'http://localhost:8000'} text={'Новости'}  style={'color-orange link-text'}/>
                                    
                                    </li>
                                    <li className="text-center mb-2">
                                        <A href={'/contact'} text={'Контакты'} style={'color-orange link-text'} />
                                    </li>
                                </ul> 
                                    </div>
                               
                                </Fade>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </>
    )
    
}

  