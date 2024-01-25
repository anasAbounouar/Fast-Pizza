import { Link } from "react-router-dom";

function Button({ children, disabled, to, type = "primary", onClick }) {
  // const className =
  //   "disabled:cursor-not-allowed inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase text-stone-800 transition-all duration-100 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2";
  const base =
    "disabled:cursor-not-allowed text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 transition-all duration-100 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2";
  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
    small: base + "px-6 py-2 md:mx-5 md:py-2.5 md:px-3 text-xs small",
    round: base + "px-2.5 py-1 md:mx-5 md:py-2 md:px-3.5 text-sm small",
    secondary:
      "secondary px-4 py-3 hover:text-stone-800 hover:bg-stone-200  focus:text-stone-800 focus:ring-stone-200 focus:ring  focus:ring-offset-2  disabled:cursor-not-allowed !bg-red  inline-block rounded-full  !border border-2 border-stone-300 font-semibold uppercase text-stone-800 transition-all duration-100  focus:outline-none ",
  };
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        <button>{children}</button>
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
