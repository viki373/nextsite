import Navbar from '../../../components/Navbar'
import Head from '../../../components/Header'
import Footer from '../../../components/Footer';

export default function Index ({product, cat}) {
    console.log(product);
    return (
        <>
            <Head name={'VEM'}/>
            <Navbar src={'../../../Logovic.svg'}/>
            <main className="container mb-5">
                <div className="fone-img mt-3 mb-3 mt-lg-5 mb-lg-5 d-flex justify-content-center align-items-center">
                    <img src={product.fone} alt={'img'} className="w-100 "/>
                </div>
            <section className="mb-5 mt-5">
                <div className="mb-5 ">
                    <h2 className="color-purple text-uppercase font-weight-bold font-italic">О компании</h2>
                </div>
                    <p>
                    VEM это крупный международный поставщик электротехнического оборудования, который начал свою деятельность в 1886 году с производства электрических двигателей и достиг на данный момент уровня широко известного разработчика комплексных приводных решений для множества областей применения. Для них характерен исключительно инновационный подход к делу, использование эффективного сочетания богатого опыта работы в данном направлении и применение самых передовых технологий позволяет создать высококонкурентный и востребованный продукт.
                  </p>
                <p>VEM располагает четырьмя высокотехнологичными производственными площадками расположенными на территории Германии, а именно:</p>
                <ul className="common">
                  <li>VEM Sachsenwerk GmbH (г. Дрезден) - одно из старейших подразделений компании основанное в 1903 году и специализирующееся на выпуске электромашин среднего и высокого напряжения, верхний предел мощности модельной линейки достигает 42 МВт. Также здесь выполняются специализированные заказы по требованиям индивидуальных проектов заказчика различной степени сложности. Для тестирования продукции установлено самые современные испытательные стенды, что гарантирует качество и соблюдение самых высоких требований и стандартов.</li>   
                  <li>VEM transresch GmbH (г. Дрезден) - самое новое подразделение группы предприятий VEM, работа которого направлена на производство преобразователей тока и электроприводных систем. Их высококвалифицированные инженеры занимаются также проектными разработками для функционирования и обслуживания приводов определенных комплексов автоматизации и технологически сложных приложений.</li>
                  <li>VEM motors GmbH (г. Вернигерод) - один из самых крупных поставщиков промышленных электродвигателей в Германии, диапазон предложений номинальных характеристик от 7,5 до 1000 кВт, стандартные и специализированные серии. Низковольтные моторы имеют высокие классы энергоэффективности, изготовлены по современным стандартам качества с использованием прогрессивных технологий. Представлены практичные и компактные дизайны, конструкция позволяет модифицировать двигатель к самым разнообразным областям применения.</li>
                  <li>VEM motors Thurm GmbH (г. Цвикау) - специализируются на выпуске компактных электродвигателей мощностью от 0,06 до 7,5 кВт малых высот (от 56 до 132 мм), высокая эффективность работы и оптимальная экономия ресурсов потребляемых приводом.</li>
                </ul>
                
                    <p>Стандартные модели электродвигателей поддерживаются в наличии, доступны также всевозможные расширения и индивидуальное проектирование.</p>
            </section>
            <section>
              <div className="row">
                  <div className="col-10 m-auto" >
                      <div className="row">
                          <div className="col-12 mb-5 ">
                            <h2 className="color-purple text-uppercase font-weight-bold font-italic">Продукция VEM</h2>
                          </div>
                          {cat.map((item, catry) => {
                            const path = 'vem/'
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
            <Footer src={'../../../logofooter.svg'}/>
        </>
    )
}
export const getServerSideProps = async () => {
  const res = await fetch(
    `http://admin.exd-motors.ru/partners/vem`
  );
  const product = await res.json();
  const rest = await fetch(
    `http://admin.exd-motors.ru/partners/vem/categoryvem/`
  );
  const cat = await rest.json();
  return {
    props: {
      product, cat
    },
  };
};
