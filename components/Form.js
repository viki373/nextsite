import Btn from './Btn';
export default function Form() {
    return (
        <>
            <div className="modal-body modal-lg shadow-lg">
                <form className="pt-3" method="POST" name="form" >
                    <div className="text-center mb-4 mb-xl-5">
                        <h2 className="color-purple text-center text-uppercase font-italic font-weight-bold">Форма обратной связи</h2>
                    </div>
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
                        <p className="pt-3 form-subhed text-dark"><span>*</span> - поля, обязательные для заполнения.</p>
                    <div className="row align-items-start">
                        <div className="col-3 col-sm-2 ">
                            <input type="checkbox" id="check" className="input" checked/>
                            <label className="form-checkbox pt-1 ml-2" htmlFor="check"></label>
                        </div>
                            <p className=" col-9 col-sm-10 common">Нажимая на кнопку, вы даете согласие на обработку данных и соглашаетесь с <a href="/politika-konfidenczialnosti" className="">политикой конфиденциальности</a>.</p>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Btn style={'form-btn btn text-uppercase font-weight-bold'} text={'ОТПРАВИТЬ СООБЩЕНИЕ'} />
                        </div>
                </form>
            </div>
        </>
    )
}
