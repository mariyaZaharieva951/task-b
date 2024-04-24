
const Gallery = () => {

    return (
        <div className="ml-10 pl-5">
        <div className="flex gap-2">
          <div className="w-2/3">
            <img src="./assets/g1.png" alt="Image 4" className="w-full h-auto" />
          </div>
          <div>
            <img src="./assets/g2.png" alt="Image 5" className="w-full h-auto" />
          </div>
          <div>
            <img src="./assets/g3.png" alt="Image 6" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <img src="./assets/g4.png" alt="Image 4" className="w-full h-auto" />
          </div>
          <div>
            <img src="./assets/g5.png" alt="Image 5" className="w-full h-auto" />
          </div>
          <div className="w-2/3">
            <img src="./assets/g6.png" alt="Image 6" className="w-full h-auto" />
          </div>
        </div>
      </div>
    )

}

export default Gallery;