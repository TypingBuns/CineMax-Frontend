type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button" | undefined;
};
export function MyButton(props: Props) {
  return (
    <button
      className={`group bg-red-600 rounded-3xl hover:bg-gray-200 hover:px-6 duration-300 ease-out hover:shadow-red-800 hover:shadow-lg ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
