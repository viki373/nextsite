import Navbar from '../components/Navbar'
import Head from '../components/Header'
import Footer from '../components/Footer';

export default function Delivery() {
    return (
        <>
        <Head name={'Условия доставки'}/>
        <Navbar src={'Logovic.svg'}/>
        <main className="container">
            <section className="fone-img d-flex align-items-center justify-content-center mt-3 mb-3 mt-lg-5 mb-lg-5">
                <img src={'/fone/magazzino.jpg'} alt={'img'} className="w-100 "/>
            </section>
            <div className="mb-5 ">
                <h2 className="color-purple text-uppercase font-weight-bold font-italic">Условия доставки</h2>
            </div>

            <div className="row mt-3 mt-xl-5 mb-3 mb-xl-5 common">
                <div className="col-12 mb-5">
                        <h2 className="text-center font-weight-bold text-uppercase color-purple ">Оплата</h2>
                </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-2 ">
                                <div className="payment_img text-center">
                                    <img src={'/bill.svg'} height={150} width={150}  alt="bill" />
                                </div>
                            </div>
                            <div className="col-12 col-md-10 mt-3">
                                <ul>
                                    <li className=" mb-3 mb-xl-4">Сотрудничаем с юридическими лицами и физическими лицами</li>
                                    <li >Удобные способы безналичной оплаты</li>
                                </ul>
                            </div>
                        </div>
                </div>
                    <div className="col-12 mt-5">
                        <h3 className="font-weight-bold color-purple mb-3">Для юридических лиц</h3>
                        <ul>
                            <li className="  mb-3 mb-xl-4">Безналичная оплата на расчетный счет поставщика (оплачивается бухгалтерией на основании выставленного счета)</li>
                            <li className=" mb-3 mb-xl-4">Все документы для оплаты отправляются Вам на электронную почту персональным менеджером</li>
                            <li>
                                <div className="contact__line-bottom">
                                <p className="pl-3">Гарантируем прозрачность наших действий по сопровождению сделки, предоставляем необходимые документы для бухгалтерии: счет, договор или контракт, спецификации, универсальный передаточный документ (УПД), акт сверки, товарно-транспортная накладная (ТТН) </p>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
                <div className="row mt-3 mt-xl-5 mb-3 mb-xl-5 common">
                <div className="col-12 mb-3 mb-xl-5">
                    <h2 className="text-center font-weight-bold text-uppercase color-purple">Доставка</h2>
                </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-3 col-xl-2">
                                <div className="delivery_img text-center">
                                    <img src={'/frontal-truck.svg'} height={150} width={150} alt="frontal" />
                                </div>
                            </div>
                            <div className="col-12 col-md-9 col-xl-8 mt-3">
                                <p>Компания  имеет обширную складскую сеть. Мы предлагаем Вам ознакомиться с возможными способами доставки оплаченного товара в Ваш адрес.</p>
                            </div>
                        </div>
                </div>
                    <div className="col-12 mt-5">
                        <h3 className="font-weight-bold color-purple mb-3">Самовывоз</h3>
                        <ul>
                            <li className=" mb-3 mb-xl-4">Для того, чтобы самостоятельно забрать продукцию со склада, получателю необходимо иметь при себе доверенность и паспорт.</li>
                            <li className=" mb-3 mb-xl-4">Для отгрузки в страны Таможенного союза получателю также необходим бланк CMR (оформляется нашим сотрудником).</li>
                            <li className=" mb-3 mb-xl-4">Режим работы складов (по местному времени МСК): пн.–пт.: с 9:00 до 17:00.</li>
                            <li>
                                <div className="contact__line-bottom">
                                    <p className="pl-3">Необходимо заблаговременно отправить по электронной почте доверенность логисту компании для подготовки документов на отгрузку. </p>
                                </div>
                            </li>
                        </ul>
                </div>
                    <div className="col-12 mt-5">
                        <h3 className="font-weight-bold color-purple  mb-3">Доставка до транспортной компании</h3>
                        <ul>
                            <li className="  mb-3 mb-xl-4">Мы самостоятельно подберём оптимальный способ доставки.</li>
                            <li className=" mb-3 mb-xl-4">Расходы на доставку до ТС мы берём на себя.</li>
                            <li className=" mb-3 mb-xl-4">Стоимость доставки в другой регион рассчитывается индивидуально, в зависимости от массы и габаритов груза.</li>
                            <li >Для получения груза необходимо предоставить доверенность и паспорт.</li>
                        </ul>
                </div>
                    <div className="col-12 mt-5">
                            <h3 className="font-weight-bold color-purple mb-3">Транспортными компаниями</h3>
                            <ul>
                                <li className="mb-3 mb-xl-4">Доставку груза до вашего адреса осуществляем с помощью наших надежных и проверенных транспортных партнеров.</li>
                                <li>
                                    <ul>
                                        <li className="  mb-2 mb-xl-3">ПЭК</li>
                                        <li className="  mb-2 mb-xl-3">Деловые Линии</li>
                                        <li className="  mb-2 mb-xl-3">DPD</li>
                                        <li className="  mb-2 mb-xl-3">РЖД - Логистика</li>
                                        <li className="  mb-2 mb-xl-3">Если у Вас имеется свой транспортный партнер, сообщите нам. Мы организуем доставку груза через него.</li>
                                    </ul>
                                </li>
                                <li className=" mb-3 mb-xl-4"> 
                                    <div>
                                        <p className="pl-3">Особая доставка: <i className="pl-2 pr-2 fa fa-train" aria-hidden="true"></i> ЖД-траспортом, <i className="pl-2 pr-2 fa fa-plane" aria-hidden="true"></i> Авиа-траспортом,<i className="pl-2 pr-2 fa fa-ship" aria-hidden="true"></i>  Доставка через порт.  
                                        </p>
                                    </div>
                                </li>
                                <li className="mb-3 mb-xl-4">Для получения груза необходими доверенность и паспорт.</li>
                                <li>
                                    <div >
                                        <p className="pl-3"> 
                                            Для получения продукции необходимо предоставить транспортной компании доверенность, оформленную именно на транспортную компанию.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 mt-5">
                            <h3 className="font-weight-bold color-purple mb-3">Доставка в страны Таможенного союза</h3>
                            <ul>
                                <li className=" mb-3 mb-xl-4">Наша компания осуществляет доставку продукции в Казахстан, Беларусь, Армению и Киргизию. Сроки доставки - от 5 дней.</li>
                                <li>Возможны следующие варианты:
                                    <ul className="mt-3">
                                        <li className=" mb-2 mb-xl-3">Самовывоз</li>
                                        <li className=" mb-2 mb-xl-3">Наша доставка</li>
                                        <li className=" mb-2 mb-xl-3">Транспортными компаниями</li>
                                    </ul>
                                </li>
                                <li className=" mb-3 mb-xl-4">Отличительной особенностью доставки в страны Таможенного союза является необходимость заполнения Международной транспортной накладной (CMR), которую сотрудники нашей логистической службы оформят за Вас.</li>
                                <li className=" mb-3 mb-xl-4"> 
                                    <div className="contact__line-bottom">
                                        <p className="pl-3">О каждом этапе доставки (документальное оформление, формирование заказа, отгрузка) Вы будете проинформированы сотрудником отдела логистики нашей компании.  
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                  </div>
            
        </main>
        <Footer src={'logofooter.svg'}/>
    </>
    )
}
