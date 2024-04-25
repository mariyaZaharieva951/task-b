const Promo = () => {

    return (
        <div className="max-w-lg ml-auto mt-10 font-custom-font text-sm">
            <h2 className="text-lg font-bold mb-4">Промо пакети</h2>
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3 bg-gray-bg">
                    <p className="text-gray-tx pl-2">Настаняване</p>
                </div>
                <div className="col-span-1 bg-gray-bg">
                    <p className="text-gray-tx pl-2">Цена</p>
                </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-4 pl-2">
                <div className="col-span-3 ">
                    <p className="">1 човек в двойна стая</p>
                </div>
                <div className="col-span-1">
                    <p className="font-bold pl-2">1 149 лв</p>
                </div>
                <div className="col-span-3 ">
                    <p className="">Трети възрастен</p>
                </div>
                <div className="col-span-1">
                    <p className="font-bold pl-2">1 100 лв</p>
                </div>
                <div className="col-span-3 ">
                    <p className="">Единична стая</p>
                </div>
                <div className="col-span-1">
                    <p className="font-bold pl-2">1 548 лв</p>
                </div>
                <div className="col-span-3 ">
                    <p className="">Дете 2-5.99 г. в стая с 2-ма възрастни</p>
                </div>
                <div className="col-span-1">
                    <p className="font-bold pl-2">560 лв</p>
                </div>
                <div className="col-span-3 ">
                    <p className="">Дете 6-11.99 г. в стая с 2-ма възрастни</p>
                </div>
                <div className="col-span-1">
                    <p className="font-bold pl-2">728лв.</p>
                </div>
                

                
            </div>
        </div>
    )

}

export default Promo;