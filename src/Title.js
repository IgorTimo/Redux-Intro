import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

const Title = (props) => {
  console.log("props title >>>", props.title);
  const text = useSelector((state) => {

    return state.inputReducer.text;
  });
  
  const dispach = useDispatch();

  const handleChange = (event) => {
    dispach(inputText(event.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Title;
