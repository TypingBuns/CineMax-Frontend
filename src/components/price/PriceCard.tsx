import React from 'react'

const PriceCard = (props: any) => {
  return (
    <div className='flex flex-col items-center bg-neutral-50/90 rounded-2xl p-5 px-8 drop-shadow-2xl'>
        <h1 className='border-b-2 border-custombgColor'>{props.payment}</h1>
        <h1 className='mb-3'>{props.dates}</h1>
        <div className='flex flex-col space-y-3 font-bold'>
            <div className='mask flex w-[18vh] h-[6vh] bg-custombgColor/80 rounded-xl text-white justify-center items-center'>
                <p>{props.price1} PLN</p>
            </div>
            <div className='mask flex w-[18vh] h-[6vh] bg-custombgColor/80 rounded-xl text-white justify-center items-center'>
                <p>{props.price2} PLN</p>
            </div>
            <div className='mask flex w-[18vh] h-[6vh] bg-custombgColor/80 rounded-xl text-white justify-center items-center'>
                <p>{props.price3} PLN</p>
            </div>
        </div>
        
    </div>
  )
}

export default PriceCard