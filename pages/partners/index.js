import Navbar from '../../components/Navbar'
import Head from '../../components/Header'
import Footer from '../../components/Footer';

export default function index ({product}) {
    console.log(product);
    return (
        <>
            <Head name={'Взрывозащищенное оборудование'}/>
            <Navbar src={'Logovic.svg'}/>
            <main className="container mb-5">
                <div className="fone-img mt-3 mb-3 mt-lg-5 mb-lg-5 d-flex justify-content-center align-items-center">
                    <img src={'/fone/prodotti.jpg'} alt={'img'} className="w-100 "/>
                </div>
            <section>
              <div className="row">
                  <div className="col-12 " >
                      <div className="row">
                          <div className="col-12 mb-5 ">
                            <h2 className="color-purple text-uppercase font-weight-bold font-italic">Взрывозащищенное оборудование</h2>
                          </div>
                          <div className="col-12">
                                <div className="row">
                                {product.map((item, categoryAll) => {
                                    const path = 'partners/'
                                    return (
                                        <div key={categoryAll} className="col-12 col-md-6 col-lg-4  d-flex  mb-4 ">
                                            <a href={path + item.slug_link} className="card shadow d-flex flex-column bg-white  text-center">
                                            <span className="card-img d-flex justify-content-center align-items-center">
                                                <img src={item.img} className="w-50" alt='' />
                                            </span>
                                            <span className="p-4 bg-purple text-white h-100">
                                                {item.descripton}
                                            </span>
                                        </a>
                                    </div>
                                    );
                                })}
                                </div>
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
export const getServerSideProps = async () => {
    const res = await fetch(
      `http://admin.exd-motors.ru/partners/`
    );
    const product = await res.json();
  
    return {
      props: {
        product,
      },
    };
  };
  