import { useRouter } from 'next/router'
import Head from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
const Index = ({item}) => {
    const router = useRouter()
    const { id } = router.query;
    console.log(item);
    let par = item.param;
    const newArray = par.split(';');
    const newAr = newArray[0].split(':');
    const newAr1 = newArray[1].split(':');
    const newAr2 = newArray[2].split(':');
    const newAr3 = newArray[3].split(':');
    const newAr4 = newArray[4].split(':');
    const newAr5 = newArray[5].split(':');
    const newAr6 = newArray[6].split(':');
    const newAr7 = newArray[7].split(':');
    const newAr8 = newArray[8].split(':');
    const newAr9 = newArray[9].split(':');

    return (
    <>
            <Head />
            <Navbar src={'../../../Logovic.svg'}/>
            <main className="container mb-5">
                <div className="fone-img d-flex align-items-center justify-content-center mt-3 mb-3 mt-lg-5 mb-lg-5">
                    <img src={'/fone/prodotti.jpg'} alt={'img'} className="w-100"/>
                </div>
                <section>
                <div className="row">
                    <div className="col-12 col-lg-9 m-auto">
                            <h2>
                            ХАРАКТЕРИСТИКИ ПРОДУКЦИИ 
                            </h2>
                            <div>
                            <table className="table">
                            <tbody>
                                <tr>
                                <td><strong>{newAr[0]}</strong></td>
                                <td>{newAr[1]}</td>
                                </tr>
                                <tr>
                                <td><strong>{newAr1[0]}</strong></td>
                                <td>{newAr1[1]}</td>
                                </tr>
                                <tr>
                                <td><strong>{newAr2[0]}</strong></td>
                                <td>{newAr2[1]}</td>
                                </tr>
                                <tr>
                                <td><strong>{newAr3[0]}</strong></td>
                                <td>{newAr3[1]}</td>
                                </tr>
                                <tr>
                                <td><strong>{newAr4[0]}</strong></td>
                                <td>{newAr4[1]}</td>
                                </tr>
                                <tr>
                                <td><strong>{newAr5[0]}</strong></td>
                                <td>{newAr5[1]}</td>
                                </tr>
                                <tr>
                                <td><strong>{newAr6[0]}</strong></td>
                                <td>{newAr6[1]}</td>
                                </tr>
                                <tr>
                                <td><strong>{newAr7[0]}</strong></td>
                                <td>{newAr7[1]}</td>
                                </tr>
                                <tr>
                                <td><strong>{newAr8[0]}</strong></td>
                                <td>{newAr8[1]}</td>
                                </tr><tr>
                                <td><strong>{newAr9[0]}</strong></td>
                                <td>{newAr9[1]}</td>
                                </tr>
                                
                            </tbody>
                        </table>  
                            </div>
                    </div>
                </div>
                </section>
            </main>
            <Footer src={'../../../logofooter.svg'}/>
        </>
  )
}

export default Index


export const getServerSideProps = async ({params}) => {
   
    const res = await fetch(
      `http://admin.exd-motors.ru/partners/marellimotori/categorymarelli/${params.slug}`
    );
    const item = await res.json();
    
    return {
      props: {
        item
      },
    };
  };