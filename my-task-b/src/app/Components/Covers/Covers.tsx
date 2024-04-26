import Offer from "./Offer";


const Covers = () => {
  return (
    <div className="max-w-[65%] m-auto font-custom-font my-10 py-5">
      <h2 className="text-lg font-bold mb-2">Още предложения</h2>

      <div className="grid grid-cols-4">
        <div className="col-span-1 mr-5">
          <img src="./assets/cl1.png" alt="Image 1" className="w-full h-auto" />
          <Offer/>
        </div>
        <div className="col-span-1 mr-5">
          <img src="./assets/cl2.png" alt="Image 1" className="w-full h-auto" />
          <Offer/>
        </div>
        <div className="col-span-1 mr-5">
          <img src="./assets/cl3.png" alt="Image 1" className="w-full h-auto" />
          <Offer/>
        </div>
        <div className="col-span-1 mr-5">
          <img src="./assets/cl4.png" alt="Image 1" className="w-full h-auto" />
          <Offer/>
        </div>
      </div>
    </div>
  );
};

export default Covers;
