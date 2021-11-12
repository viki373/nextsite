import Navbar from '../components/Navbar'
import Head from '../components/Header'
import Footer from '../components/Footer';
import { Tabs, Tab } from 'react-bootstrap';
import { useState } from 'react';

export default function Docs ({certificat, catalog, instructions}) {
  const [key, setKey] = useState('home', 'catalog');
  
    return (
        <>
            <Head name={'Документация'}/>
            <Navbar src={'Logovic.svg'}/>
            <main className="container mt-5 mb-5">
                <div className="mb-5 ">
                    <h2 className="color-purple text-uppercase font-weight-bold font-italic">Документация</h2>
                </div>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Сертификаты">
                        <div className="row">
                        {certificat.map((item, imdC) => {
                            return (
                              <div key={imdC} className="col-10 col-sm-6 col-md-4 col-lg-3 d-flex flex-wrap justify-content-between auto mb-4">
                                <a href={item.file} className="docs-card w-100 shadow d-flex flex-column bg-white  text-center bd-highlight" download>
                                    <span className="docs-img d-flex justify-content-center align-items-center bd-highlight d-flex ">
                                        <img src={item.photo} className="w-auto h-100 o-contain "  alt={item.title} />
                                    </span>
                                    <span className="item-text p-4 bg-purple text-white mt-auto bd-highlight">
                                      {item.title} 
                                    </span>
                                  </a>
                              </div>
                            );
                          })}
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Инструкции">
                    <div className="row">
                        {instructions.map((item, indI) => {
                            return (
                              <div key={indI} className="col-9 col-sm-6 col-md-4 col-lg-3 d-flex flex-wrap justify-content-between auto mb-4 ">
                                <a href={item.file} className="docs-card w-100 shadow d-flex flex-column bg-white text-center bd-highlight" download>
                                    <span className="docs-img d-flex justify-content-center align-items-center bd-highlight d-flex ">
                                        <img src={item.photo} className="w-100 h-100 o-contain" alt={item.title} />
                                    </span>
                                    <span className="item-text p-4 bg-purple text-white mt-auto bd-highlight">
                                      {item.title} 
                                    </span>
                                  </a>
                              </div>
                            );
                          })}
                        </div>
                    </Tab>  
                    <Tab eventKey="catalog" title="Каталоги">
                    <div className="row">
                        {catalog.map((item, indG) => {
                            return (
                              <div key={indG} className="col-10 auto col-sm-6 col-md-4 col-lg-3 d-flex flex-wrap justify-content-between mb-4 ">
                                <a href={item.file} className="docs-card w-100 shadow d-flex flex-column bg-white  text-center bd-highlight" download>
                                    <span className="docs-img d-flex justify-content-center align-items-center bd-highlight d-flex ">
                                        <img src={item.photo} className="w-auto h-100 o-contain"  alt={item.title} />
                                    </span>
                                    <span className="item-text p-4 bg-purple text-white mt-auto bd-highlight">
                                      {item.title} 
                                    </span>
                                  </a>
                              </div>
                            );
                          })}
                        </div>
                    </Tab>    
                </Tabs>
            </main>
            <Footer src={'logofooter.svg'}/>
        </>
    )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `http://admin.exd-motors.ru/certificates/`
  );
  const certificat = await res.json();

  const rest = await fetch(`http://admin.exd-motors.ru/catalogs/`);
  const catalog = await rest.json();

  const restt = await fetch(`http://admin.exd-motors.ru/instructions/`);
  const instructions = await restt.json();
  return {
    props: {
      certificat, catalog, instructions
    },
  };
};
