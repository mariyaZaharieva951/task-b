import Hotel from "./Hotel";

const Hotels = () => {

    return (
        <>
        <div className="max-w-lg ml-auto mt-10 font-custom-font text-sm">
            <h2 className="text-lg font-bold mb-3">Хотели</h2>
            <Hotel/>
            <Hotel/>
        </div>
        
        </>
    )

}

export default Hotels;