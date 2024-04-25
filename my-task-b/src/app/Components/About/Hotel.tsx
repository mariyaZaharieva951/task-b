const Hotel = () => {
  return (
    <div className="max-w-lg ml-auto font-custom-font text-sm border-b">
        <div className="flex gap-1">
            <img className="size-[5%] " src='./assets/hotel.png'/>
            <h2 className="text-lg font-bold mb-4">Grand Halic 4****</h2>
        </div>
      
      <div>
        <p className="mb-2">
          Grand Hotel Halic предлага удобно местоположение в централния район
          Beyoglu и изглед към залива Златния рог. На пешеходно разстояние се
          намират площад „Таксим“ и кулата Галата. На място има закрит плувен
          басейн и СПА център.
        </p>
        <p className="mb-2">
          Хотелът предлага добре обзаведени стаи за гости и суити с кът за
          сядане и плоскоекранен телевизор със сателитни канали. Всяко помещение
          за настаняване има отопление и климатик, както и безплатен WiFi
          достъп.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-1" style={{ height: "116px" }}>
        <div className="col-span-1 flex justify-center">
          <img
            src="./assets/h1.png"
            alt="Image 1"
            className="w-full h-auto"
            style={{ height: "50%" }}
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <img
            src="./assets/h2.png"
            alt="Image 2"
            className="w-full h-auto"
            style={{ height: "50%" }}
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <img
            src="./assets/h3.png"
            alt="Image 3"
            className="w-full h-auto"
            style={{ height: "50%" }}
          />
        </div>
        <div className="col-span-1 flex justify-center">
          <img
            src="./assets/h4.png"
            alt="Image 4"
            className="w-full h-auto"
            style={{ height: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
