import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Something went wrong!!!</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
}

export default Error;
