import Head from '../../../../components/Header';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import A from '../../../../components/A';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function Index({products, cat}) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <Head />
            <Navbar src={'../../../../Logovic.svg'}/>
            <main className="container mb-5">
                <div className="fone-img d-flex align-items-center justify-content-center mt-3 mb-3 mt-lg-5 mb-lg-5">
                    <img src={'/fone/prodotti.jpg'} alt={'img'} className="w-100" />
                </div>
                <section>
                
                <div className="row mt-5">
                    <div className="col-12">
                        <h2 className="text-uppercase"> {cat.name}</h2>
                    </div>
                    <div className="col-12">
                        <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Тип по кат.</th>
                                    <th scope="col"> Mощность [Вт] </th>
                                    <th scope="col">Частота [Гц] </th>
                                    <th scope="col">Запрос цены</th>
                                </tr>
                            </thead>
                            <tbody>
                            {products.map((item, indexO) => {
                                const pathpage = '44-dvuhskorostnoj-trehfaznyj-24-48-polyusov-postoyannyj-krutyashij-moment-napryazhenie-400-v-chastota-50-gc/';
                            return (
                                <tr key={indexO}>
                                    <th><A href={pathpage + item.slug} 
                                    text={item.name} style={'text-dark'}/></th>
                                    <td className="text-dark">{item.power} </td>
                                    <td className="text-dark">{item.frequency} </td>
                                    <td className="d-flex align-items-center">
                                    <div className="ml-2">
                                    <Button variant="dark" onClick={handleShow}>
                                        купить в 1 клик
                                    </Button>
                                    </div>
                                    </td>
                                </tr>    
                            );
                          })}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                </section>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title className="color-purple text-center text-uppercase font-italic font-weight-bold">Форма обратной связи</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="pt-3" method="POST" name="form" >
                    <div >
                        <input className="form-input  w-100 pt-2 pb-2 pl-3 pr-3 " name="name" type="text" placeholder="Предприятие*"/>
                    </div>
                    <div className="pt-3">
                        <input className="form-input  w-100  pt-2 pb-2 pl-3 pr-3 " name="email" type="text" placeholder="E-mail*"/>
                    </div>
                    <div className="pt-3">
                        <input className="form-input  w-100 pt-2 pb-2 pl-3 pr-3 " name="tell" type="text" placeholder="Телефон*"/>
                    </div>    
                    <div className="pt-3">
                        <textarea className="form-textarea form-input w-100  pt-2 pb-2 pl-3 pr-3 " name="dopinfo"  placeholder="Сообщение"></textarea>
                    </div> 
                        <p className="pt-3 form-subhed text-dark"><span className="">*</span> - поля, обязательные для заполнения.</p>
                    <div className="row align-items-start">
                        <div className="col-3 col-sm-2 ">
                            <input type="checkbox" id="check" className="input" checked/>
                            <label className="form-checkbox pt-1 ml-2" htmlFor="check"></label>
                        </div>
                            <p className=" col-9 col-sm-10 common">Нажимая на кнопку, вы даете согласие на обработку данных и соглашаетесь с <a href="/politika-konfidenczialnosti" >политикой конфиденциальности</a>.</p>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <Button className="form-btn btn text-uppercase font-weight-bold" onClick={handleClose}>
                    ОТПРАВИТЬ
                </Button>
                </Modal.Footer>
            </Modal>
            </main>
            <Footer src={'../../../../logofooter.svg'}/>
        </>
    )
}
export const getServerSideProps = async () => {
    const res = await fetch(
      `http://admin.exd-motors.ru/partners/cemp/categorycemp/44-dvuhskorostnoj-trehfaznyj-24-48-polyusov-postoyannyj-krutyashij-moment-napryazhenie-400-v-chastota-50-gc/typefour/`
    );
    const products = await res.json();
    const res2 = await fetch(
        `http://admin.exd-motors.ru/partners/cemp/categorycemp/44-dvuhskorostnoj-trehfaznyj-24-48-polyusov-postoyannyj-krutyashij-moment-napryazhenie-400-v-chastota-50-gc`
      );
    const cat = await res2.json();
    return {
      props: {
        products, cat
      },
    };
  };
  