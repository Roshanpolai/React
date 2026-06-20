import { useContext } from "react";
import { UserContext } from "../Context/UserContext.js";

function ProductDetails() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}

export default ProductDetails;