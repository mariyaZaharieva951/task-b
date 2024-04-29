'use client'
import { useEffect, useState } from 'react';


function remainingTime(startDate: string,endDate: string) {
    //const currentTime = new Date().getTime();
    const startTime = new Date(startDate).getTime();
    const endTime = new Date(endDate).getTime();
    const timeRemaining = endTime - startTime;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

  return {
    days,
    hours,
    minutes
  };
}

export default function CountdownTimer({ startDate, endDate }: { startDate: string, endDate: string }) {
  const [time, setTime] = useState(remainingTime(startDate,endDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(remainingTime(startDate,endDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startDate,endDate]);

  return (
    <div className="flex justify-center text-white font-custom-font gap-10">
      <div className='flex flex-col items-center mx-7'>
            <div className='text-4xl'>{time.days}</div>
            <div className='text-sm'>дни</div> 
        </div>
        <span className="block border-2 border-white"></span>
        <div className='flex flex-col items-center mx-7'>
            <div className='text-4xl'>{time.hours}</div> 
            <div className='text-sm'>часове</div> 
        </div>
        <span className="block border-2 border-white"></span>
        <div className='flex flex-col items-center mx-7'>
            <div className='text-4xl'>{time.minutes}</div> 
            <div className='text-sm'>минути</div>
        </div>
    </div>

  );
}