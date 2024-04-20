import React from 'react'

const PriceCard = (props: any) => {
  return (
    <div className='flex flex-col w-4/5 items-center bg-neutral-50/90 rounded-2xl border-2 p-5'>
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