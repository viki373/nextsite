import Navbar from '../../../components/Navbar'
import Head from '../../../components/Header'
import Footer from '../../../components/Footer';

export default function Index ({product, cat}) {
  console.log(product);
  console.log(cat);
    return (
        <>
            <Head name={'Cemp'}/>
            <Navbar src={'../Logovic.svg'}/>
            <main className="container mb-5">
                <div className="fone-img mt-3 mb-3 mt-lg-5 mb-lg-5 d-flex justify-content-center align-items-center">
                    <img src={product.fone} alt={'img'} className="w-100 "/>
                </div>
            <section className="mb-5 mt-5">
                <div className="mb-5 ">
                    <h2 className="color-purple text-uppercase font-weight-bold font-italic">О компании {product.name}</h2>
                </div>
                    <p>
                    Компания Regal основана в 1954 году. Это одна из первых в Италии компаний, предложивших производство огнестойких двигателей.  Как и положено успешной компании, Cemp предлагали все более новые и технологичные решения, которые были по достоинству оценены профессионалами производственной сферы. Появились огнестойкие двигатели с тормозом, электрические насосы для печатных машин, огнестойкие двигатели для газов группы II C и для горнодобывающей промышленности. Однако в 1998 году компанию ждала новая история, ознаменовавшая этот период  временем роста и развития. Присоединившись к большой группе частных инвесторов ,  уже в 2000 году Cemp присоединили компанию Atav, которая теперь называется Cemp France. Французская компания, специализируется на небольших алюминиевых огнестойких двигателях. В 2007 году Cemp приобрели ABG Group и спустя несколько лет стали большим объединенным предприятием.
                    </p>
            </section>
            <section>
              <div className="row">
                  <div className="col-10 m-auto" >
                      <div className="row">
                          <div className="col-12 mb-5 ">
                            <h2 className="color-purple text-uppercase font-weight-bold font-italic">Оборудование</h2>
                          </div>
                          {cat.map((item, catry) => {
                            const path = 'cemp/'
                            return (
                              <div key={catry} className="col-12 col-md-6 col-lg-4 d-flex flex-wrap justify-content-between mb-4 ">
                                <a href={path + item.slug_url} className="card shadow d-flex flex-column bg-white  text-center">
                                    <span className="card-img d-flex justify-content-center align-items-center">
                                        <img src={item.img} className="w-75" alt={item.name}  />
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
            </main>
            <Footer src={'../logofooter.svg'}/>
        </>
    )
}
export const getServerSideProps = async () => {
  const res = await fetch(
    `http://admin.exd-motors.ru/partners/cemp`
  );
  const product = await res.json();
  const rest = await fetch(
    `http://admin.exd-motors.ru/partners/cemp/categorycemp/`
  );
  const cat = await rest.json();
  return {
    props: {
      product, cat
    },
  };
};
