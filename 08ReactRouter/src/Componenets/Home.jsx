import { Link } from "react-router-dom";
import User from "./User";

function Home() {
  return(
    <>
      <div>
        <h1>Home Page</h1>

        <Link to="/User">Profile</Link>
      </div>
    </>
  )
}

export default Home;