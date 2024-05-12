
type props = {
  type: string
  placeholder: string
  required: boolean
};

export default function MyInput({placeholder, type, required}: props) {
  return(
    <p className="flex justify-between w-full items-center">
      <input
        type={type}
        required={required}
        className="px-3 text-black w-full h-10 rounded-xl placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-0 caret-red-500 outline-none"
        placeholder={placeholder}
        onBlur={(e) => {
          e.target.classList.add('invalid:border-red-700', 'invalid:border-2')
        }}
      />
    </p>
  );
}