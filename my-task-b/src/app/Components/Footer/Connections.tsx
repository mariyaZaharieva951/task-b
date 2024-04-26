import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Connections = () => {

    return (
        <div className="max-w-full  font-custom-font bg-gray-dark text-white mt-0.5">
            <div className=" max-w-5xl m-auto grid grid-cols-4 place-content-center place-items-center py-7">
            <div className="col-span-1 text-[10px] w-[70%] pb-4">
                <div>
                    <img className="pb-5 ml-5" src="./assets/logo.png"/>
                </div>
                <div className="grid grid-cols-2 place-items-center gap-2 pb-3">
                    <img className="col-span-1 w-[60%]" src="./assets/f1.png"/>
                    <p className="col-span-1 text-[8px]">Лиценз, удостоверяващ регистрация №052376</p>
                </div>
                <div className="grid grid-cols-2 place-items-center gap-2 pb-7">
                    <img className="col-span-1 w-[50%]" src="./assets/f2.png"/>
                    <p className="col-span-1 text-[8px]">Застраховка Отговорник на туроператора</p>
                </div>
                <div>
                    <p className='text-[10px] pl-7 text-gray-400'>All rights reserved. © 2020 Mistral</p>
                </div>
            </div>
            <div className="col-span-1 text-[10px] w-[50%]">
                <h4 className="font-bold mt-5 mb-5">Контакти</h4>
                <p className="mb-1">1111 София, България, ул. Христо Белчев 34</p>
                <p className="mb-1">+359 884 47 30 34// мобилен</p>
                <p className="mb-1">+359 2 980 44 59//офис</p>
                <p className="mb-1">+359 2 980 41 05//офис</p>
                <p className="mb-1">mistral@mistralbg.com</p>
                <p className="mb-1">Понеделник - Петък 10.00ч. - 18.00ч.</p>
            </div>
            <div className="col-span-1 text-[10px] mb-11">
                <h4 className="font-bold mt-5 mb-4">Бързи връзки</h4>
                <div className="grid grid-cols-2">
                <div className="col-span-1 w-[50%] mb-11">
                    <p className="mb-1">За нас</p>
                    <p className="mb-1">Документи</p>
                    <p className="mb-1">Начин на плащане</p>
                </div>
                <div className="col-span-1">
                    <p className="mb-1">Общи условия</p>
                    <p className="mb-1">Лични данни</p>
                    <p className="mb-1">Контакти</p>
                </div>
                </div>

            </div>
            <div className="col-span-1 text-[10px] w-[50%] mb-4">
                <div className='mb-7'>
                    <p>120к ни харесват в</p>
                    <FontAwesomeIcon className="text-4xl ml-8 mt-3" icon={faFacebook} />
                </div>
                <div>
                    <p>60к ни харесват в</p>
                    <FontAwesomeIcon className="text-4xl ml-8 mt-3" icon={faInstagram} />
                </div>
            </div>
            </div>
           
        </div>
    )

}

export default Connections;