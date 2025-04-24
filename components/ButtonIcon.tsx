interface ButtonIconProps {
  title: string;
  type?: "edit" | "delete";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ButtonIcon({
  title,
  type = "edit",
  children,
  onClick,
}: ButtonIconProps) {
  const bgColor =
    type === "edit"
      ? "bg-green-300 hover:bg-green-400"
      : "bg-red-300 hover:bg-red-400";

  return (
    <button
      title={title}
      className={`${bgColor} cursor-pointer rounded-full p-2 shadow-sm hover:bg-current-50 transition-colors duration-200`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
