import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center ">
      <h1 className="mb-4  px-4 text-xl font-semibold  text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <p className="text-yellow-500 py-8">
          Straight out of the oven, straight to you.
        </p>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continuer ordering ,{username}
        </Button>
      )}
     
    </div>
  );
}

export default Home;
