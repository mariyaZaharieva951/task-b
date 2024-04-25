const Gallery = () => {
  return (
    <div className="max-w-lg ml-auto mt-10 font-custom-font">
      <h2 className="text-lg font-bold mb-4">Галерия</h2>
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-2">
          <img src="./assets/g1.png" alt="Image 1" className="w-64 h-32" />
        </div>
        <div className="col-span-1">
          <img src="./assets/g2.png" alt="Image 2" className="w-32 h-32" />
        </div>
        <div className="col-span-1">
          <img src="./assets/g3.png" alt="Image 3" className="w-32 h-32" />
        </div>
        <div className="col-span-1">
          <img src="./assets/g4.png" alt="Image 4" className="w-32 h-32" />
        </div>
        <div className="col-span-1">
          <img src="./assets/g5.png" alt="Image 5" className="w-32 h-32" />
        </div>
        <div className="col-span-2">
          <img src="./assets/g6.png" alt="Image 6" className="w-64 h-32" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
