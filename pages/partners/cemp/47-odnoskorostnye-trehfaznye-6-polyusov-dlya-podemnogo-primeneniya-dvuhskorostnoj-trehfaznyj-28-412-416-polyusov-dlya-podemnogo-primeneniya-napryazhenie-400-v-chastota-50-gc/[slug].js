import { useRouter } from 'next/router'
import Head from '../../../../components/Header';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
const Type = ({item}) => {
    const router = useRouter()
    const { id } = router.query
    console.log(item)
    let param = item.params;
    const newArray = param.split(';');
    console.log(newArray)
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
    const newAr10 = newArray[10].split(':');
    const newAr11 = newArray[11].split(':');
    const newAr12 = newArray[12].split(':');
    const newAr13 = newArray[13].split(':');
    const newAr14 = newArray[14].split(':');
    const newAr15 = newArray[15].split(':');
    return (
    <>
            <Head />
            <Navbar src={'../../../../Logovic.svg'}/>
            <main className="container mb-5">
                <div className="fone-img d-flex align-items-center justify-content-center mt-3 mb-3 mt-lg-5 mb-lg-5">
                    <img src={'/fone/prodotti.jpg'} alt={'img'} className="w-100"/>
                </div>
                <section>
                <div className="row">
                    <div className="col-12 col-lg-9 m-auto">
                            <h2>
                            ХАРАКТЕРИСТИКИ ПРОДУКЦИИ {item.name}
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
                                </tr><tr>
                                <td><strong>{newAr10[0]}</strong></td>
                                <td>{newAr10[1]}</td>
                                </tr><tr>
                                <td><strong>{newAr11[0]}</strong></td>
                                <td>{newAr11[1]}</td>
                                </tr><tr>
                                <td><strong>{newAr12[0]}</strong></td>
                                <td>{newAr12[1]}</td>
                                </tr><tr>
                                <td><strong>{newAr13[0]}</strong></td>
                                <td>{newAr13[1]}</td>
                                </tr><tr>
                                <td><strong>{newAr14[0]}</strong></td>
                                <td>{newAr14[1]}</td>
                                </tr>
                                <tr>
                                <td><strong>{newAr15[0]}</strong></td>
                                <td>{newAr15[1]}</td>
                                </tr>
                            </tbody>
                        </table>  
                            </div>
                    </div>
                </div>
                </section>
            </main>
            <Footer src={'../../../../logofooter.svg'}/>
        </>
  )
}

export default Type
export const getServerSideProps = async ({params}) => {
    const res = await fetch(
      `http://admin.exd-motors.ru/partners/cemp/categorycemp/47-odnoskorostnye-trehfaznye-6-polyusov-dlya-podemnogo-primeneniya-dvuhskorostnoj-trehfaznyj-28-412-416-polyusov-dlya-podemnogo-primeneniya-napryazhenie-400-v-chastota-50-gc/typeseven/${params.slug}`
    );
    const item = await res.json();
  
    return {
      props: {
        item,
      },
    };
  };
  