import { useContext } from "react";
import MyContext from "./ThemeContext";

const Card = () => {
    const {mall , setMall} = useContext(MyContext);

    return(
   <div>
    <h1>Card {mall} </h1>
    <button onClick={() => setMall(mall + 9)}>Parkriya De</button>
   </div>
    )
}

export default Card