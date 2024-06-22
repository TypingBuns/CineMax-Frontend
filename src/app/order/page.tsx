'use client'
import {MyButton} from "@/components/common/MyButton";
import {useRouter} from "next/navigation";


const Order = () => {
  const router = useRouter();
  return(
    <div className={'flex justify-center items-center h-[92vh]'}>
      <div className={'flex flex-col justify-center items-center rounded-2xl bg-gray-200 w-[30%] py-12 px-16 gap-6'}>
        <p className={'text-black text-center'}>Zarezerwowano miejsca.<br/> Potwierdzenie rezerwacji wysłano na adres email.</p>
        <MyButton
          className="px-4 py-2 font-medium"
          type={'submit'}
          onClick={() => router.replace('/')}
        >
          <p className="group-hover:text-red-700 group-hover:font-bold font-medium duration-100">Powróć do strony głównej</p>
        </MyButton>
      </div>
    </div>
  )
}

export default Order;