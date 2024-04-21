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
      className={`bg-red-600 rounded-3xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}