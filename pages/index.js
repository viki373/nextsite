import Head from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/Form';
import A from '../components/A';
import SliderCard from '../components/SliderCard';
import SliderI from '../components/SliderI';


export default function Home({products, item, slid, part}) {
  return (
    < >  
      <Head name={"ВИК-ЭНЕРГО"}/>
      <Navbar src={'Logovic.svg'} data={item}/>
      <SliderI data={slid}/>
      <main className="container mt-6 mb-5">
        <div className="row mb-5">
          <div className="col-10 m-auto"> 
            <h2 className="color-purple text-uppercase font-weight-bold font-italic mb-5">Взрывозащищенное оборудование</h2>
          </div>
          <div className="col-10 m-auto">
            <SliderCard cardData={part} />
            
          </div>
        </div>
      <section>
              <div className="row">
                  <div className="col-10 m-auto" >
                      <div className="row">
                          <div className="col-12 mb-5 ">
                            <h2 className="color-purple text-uppercase font-weight-bold font-italic">Оборудование</h2>
                          </div>
                          {products.map((item, ind) => {
                            const path = '/partners/cemp/'
                            return (
                              <div key={ind} className="col-12 col-md-6 col-lg-4 d-flex flex-wrap justify-content-between mb-4 ">
                                <a href={path + item.slug_url} className="card shadow d-flex flex-column bg-white  text-center">
                                    <span className="card-img d-flex justify-content-center align-items-center">
                                        <img src={item.img} className="w-75"  alt={item.name} />
                                    </span>
                                    <span className="p-4 bg-purple text-white h-100">
                                      {item.name} 
                                    </span>
                                  </a>
                              </div>
                            );
                          })}

                      </div>
                  </div>
              </div>
          </section>
          <section className="container mt-5 pb-5">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="mb-3">
                  <A style={'text-center btn text-uppercase font-weight-bold form-btn d-block'} href={'/docs'} text={'Документация'}/>
                </div>
                <p>Здесь вы можете скачать наши руководства, декларации, сертификаты, каталоги и брошюры.</p>
              </div>
              <div className="col-12 col-lg-8"><Form /></div>
            </div>
                          
          </section>
      </main>
      <Footer src={'logofooter.svg'}/>
    </>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch(
    `http://admin.exd-motors.ru/partners/cemp/categorycemp/`
  );
  const products = await res.json();

  const rest = await fetch(`http://admin.exd-motors.ru/slider/`);
  const slid = await rest.json();
  const restt = await fetch(`http://admin.exd-motors.ru/partners/`);
  const part = await restt.json();
  return {
    props: {
      products, slid, part
    },
  };
};
