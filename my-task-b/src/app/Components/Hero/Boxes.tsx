import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faLocationDot, faCalendar } from '@fortawesome/free-solid-svg-icons';

const Boxes = () => {

    return (
        <div className='flex justify-center absolute bottom-0' style={{ bottom: '-12%' }}>
            <div className="bg-red-bg text-center py-3 px-10 mr-2">
                <div className="text-white">
                <FontAwesomeIcon className="fa-1xl" icon={faBed} />
                </div>
                <p className='text-white text-xs'>8 нощувки</p>
            </div>
            <div className="bg-red-bg text-center py-3 px-10 mr-2">
                <div className="text-white">
                <FontAwesomeIcon className="fa-1xl" icon={faPlane} />
                </div>
                <p className='text-white text-xs'>Самолет</p>
            </div>
            <div className="bg-red-bg text-center py-3 px-10 mr-2">
                <div className="text-white">
                <FontAwesomeIcon className="fa-1xl" icon={faLocationDot} />
                </div>
                <p className='text-white text-xs'>Австрия</p>
            </div>
            <div className="bg-red-bg text-center py-3 px-10">
                <div className="text-white">
                <FontAwesomeIcon className="fa-1xl" icon={faCalendar} />
                </div>
                <p className='text-white text-xs'>11-15 Март</p>
            </div>
        </div>
    )

}

export default Boxes;