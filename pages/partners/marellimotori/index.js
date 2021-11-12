import Navbar from '../../../components/Navbar'
import Head from '../../../components/Header'
import Footer from '../../../components/Footer';

export default function Index ({product, cat}) {
    console.log(product);
    return (
        <>
            <Head name={'Marelli Motori'}/>
            <Navbar src={'../Logovic.svg'}/>
            <main className="container mb-5">
                <div className="fone-img mt-3 mb-3 mt-lg-5 mb-lg-5 d-flex justify-content-center align-items-center">
                    <img src={product.fone} alt={'img'} className="w-100 "/>
                </div>
            <section className="mb-5 mt-5">
                <div className="mb-5 ">
                    <h2 className="color-purple text-uppercase font-weight-bold font-italic">О компании</h2>
                </div>
                    <p>
                    <strong>Marelli Motori </strong> - один из крупнейших в мире производителей электродвигателей и электрогенераторов низкого, среднего и высокого напряжение для  энергетики, морского, нефтегазового и промышленного рынков. 
                    </p>
                    <p>Повышение конкурентоспособности, эффективности и продуктивности производств наших партнеров является миссией компании на протяжении 125 лет. </p>
                    <p>Стабильность и успешность компании Marelli Motori, ее дальнейшее развитие базируется на следующих принципах: </p>
                    <ul className="common ">
                        <li className="mt-3">широкий спектр инновационных продуктов для каждого сегмента рынка; </li>
                        <li className="mt-3">высокая квалификация сотрудников, обеспечивающих продажи и поддержку в глобальном масштабе (присутствие в 120 странах); </li>
                        <li className="mt-3">индивидуальный подход к решению задач с каждым клиентом; </li>
                        <li>постоянные инвестиции в НИОКР, развитие сотрудников и партнеров. </li>
                      
                    </ul>
                    <p>Успешная комбинация данных элементов позволяет создавать нестандартные инновационные продукты, которые высоко ценятся нашими клиентами. </p>
            </section>
            <section>
              <div className="row">
                  <div className="col-10 m-auto" >
                      <div className="row">
                          <div className="col-12 mb-5 ">
                            <h2 className="color-purple text-uppercase font-weight-bold font-italic">Продукция Marelli Motors</h2>
                          </div>
                          {cat.map((item, catry) => {
                            const path = 'marellimotori/'
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
    `http://admin.exd-motors.ru/partners/marellimotori`
  );
  const product = await res.json();
  const rest = await fetch(
    `http://admin.exd-motors.ru/partners/marellimotori/categorymarelli/`
  );
  const cat = await rest.json();
  return {
    props: {
      product, cat
    },
  };
};
