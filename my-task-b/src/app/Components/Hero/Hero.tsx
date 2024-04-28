import Boxes from "./Boxes";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
    const startDate = '2024-04-20T00:00:00';
    const endDate = '2024-05-01T14:55:00';

    return (
        <>         
            <div className="relative z-0">  
                <img src='./assets/hero.png' width={1920} height={587} className="mx-auto w-full lg:w-auto mt-0 pt-0" alt='hero img'/>
            </div>
            <div className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-8">
                <h1 className="text-center text-4xl text-white font-bold font-custom-font mt-7 pt-7">Арабска приказка в Йордания</h1>
                <div className="text-center mt-3">
                    <p className="inline-block border-2 border-white text-slate-200 px-4 py-1 mb-10 font-custom-font">11-15 март</p>
                </div>
                <CountdownTimer startDate={startDate} endDate={endDate} />
                <button className="text-center mt-5 pt-5">
                    <div className="inline-block rounded-full bg-red-600 text-white text-sm font-bold font-custom-font px-6 py-2">Резервирайте сега</div>
                </button>
                <div className="text-center mt-3 mb-8 pb-8">
                    <p className="font-custom-font text-slate-200">от 1149,00лв.</p>
                </div>
                <Boxes/>
            </div>
        </>
    )
}

export default Hero;