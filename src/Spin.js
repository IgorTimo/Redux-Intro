import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

const Spin = (props) => {
  const spinner = useSelector(state => state.appReducer.loading);

  return (
    <div className="loader-styles">
      <Loader
        type="TailSpin"
        heigth="100"
        width="100"
        color="red"
        visible={spinner}
      />
    </div>
  );
};

export default Spin;
