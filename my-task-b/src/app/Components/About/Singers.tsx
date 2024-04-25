const Singers = () => {
  return (
    <div className="max-w-lg ml-auto mt-10 font-custom-font">
      <h2 className="text-lg font-bold mb-2">Изпълнители</h2>
      <div>
        <div className="grid grid-cols-4 gap-1">
          
          <div className="col-span-1">
            <img src="./assets/s1.png" alt="Image 1" className="w-29 h-34" />
            <p className="text-xs text-center mt-1">Fat Joe</p>
          </div>
          <div className="col-span-1">
            <img src="./assets/s2.png" alt="Image 2" className="w-29 h-34" />
            <p className="text-xs text-center mt-1">Eminem</p>
          </div>
          <div className="col-span-1">
            <img src="./assets/s3.png" alt="Image 3" className="w-29 h-34" />
            <p className="text-xs text-center mt-1">50 Cent</p>
          </div>
          <div className="col-span-1">
            <img src="./assets/s4.png" alt="Image 4" className="w-29 h-34" />
            <p className="text-xs text-center mt-1">Jay-Z</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Singers;
