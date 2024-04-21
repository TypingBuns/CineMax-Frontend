
type props = {
  label: string
  placeholder: string
};

export default function MyInput({label, placeholder}: props) {
  return(
    <p className="flex justify-between w-full items-center">
      <label className="">
        {label}
      </label>
      <input className="px-3 text-black min-w-[70%] h-10 rounded-l placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-0" placeholder={placeholder}/>
    </p>
  );
}