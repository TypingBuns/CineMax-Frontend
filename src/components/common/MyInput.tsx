
type props = {
  placeholder: string
};

export default function MyInput({placeholder}: props) {
  return(
    <p className="flex justify-between w-full items-center">
      <input className="px-3 text-black w-full h-10 rounded-xl placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-0" placeholder={placeholder}/>
    </p>
  );
}