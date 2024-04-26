import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

const Offer = () => {

    return (
        <div className="grid place-content-center pl-5 bg-white pb-1">
        <h3 className="text-xs font-bold py-2">
          Ски в Алпите в курорта Иглс, Австрия хотел Bon Alpina 3*
        </h3>
        <div className="grid grid-cols-2 items-center">
          <div className="cols-pan-1">
            <p className="text-xs text-red-bg font-bold">336лв</p>
            <p className="text-[10px] text-gray-tx line-through">689лв</p>
          </div>
          <div className="col-span-1 text-[10px] text-gray-tx">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBed} />
              <p>8 нощувки</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPlane} />
              <p>Самолет</p>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
              <p>Австрия</p>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Offer;