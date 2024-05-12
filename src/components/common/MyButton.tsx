export function MyButton({
                      children,
                      className,
                      onClick,
                    }: {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={`group bg-red-600 rounded-3xl hover:bg-gray-200 hover:px-6 duration-300 ease-out hover:shadow-red-800 hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}