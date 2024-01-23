import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/">Fast React Pizza compagny </Link>
      <p>Piea piza pizza </p>
    </header>
  );
}

export default Header;
