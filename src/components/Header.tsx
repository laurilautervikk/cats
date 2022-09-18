import react from "react";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps): JSX.Element {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}
