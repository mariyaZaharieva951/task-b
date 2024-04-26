const Mail = () => {

    return (
        <div className="flex justify-center gap-12 content-center font-custom-font bg-gray-dark py-10">
            <h3 className="max-w-sm text-base font-bold text-white text-wrap mr-10 pr-10">
                Отстъпки и специални предложения налични само на имейл
            </h3>
            <form className="flex flex-col gap-2 px-10 mr-10">
                <div className="flex text-[10px]">
                    <input className="text-gray-tx p-2 pr-20" placeholder="Въведете вашия имейл"></input>
                    <button className="bg-red-bg text-white pl-2 pr-7 end">Абонирай се</button>
                </div>
                <div>
                    <p className="text-[10px] text-slate-100">Всеки месец ще получаваш първи най-добрите ни оферти</p>
                </div>
            </form>
        </div>
    )

}

export default Mail;