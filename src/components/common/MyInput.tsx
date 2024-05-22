'use client'
type props = {
  name: string
  type: string
  placeholder?: string
  required?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function MyInput(
  {
    name,
    placeholder,
    type,
    required,
    onChange
  }: props) {

  return(
    <div className="flex flex-col gap-y-1 justify-between w-full items-center">
      <input
        name={name}
        type={type}
        required={required}
        className="px-3 text-black w-full h-10 rounded-xl placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-0 caret-red-500 outline-none"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={(e) => {
          e.target.classList.add('invalid:border-red-700', 'invalid:border-2', 'peer')
        }}
      />
      <p className={`self-start text-red-700 text-xs invisible peer-invalid:visible`} >Niepoprawnie wypełnione pole.</p>
    </div>
  );
}