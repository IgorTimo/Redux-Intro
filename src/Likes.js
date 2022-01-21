import { connect } from "react-redux";
import { decrementLikes, incrementLikes } from "./redux/actions";

const Likes = (props) => {
  return (
    <div className="button-controls">
      <button onClick={props.onIncremetLikes}> ❤ {props.likes}</button>
      <button onClick={props.onDecremetLikes}>Dislike</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    likes: state.likesReducer.likes,
  };
}

function mapDispachToProps(dispach) {
  return {
    onIncremetLikes: () => dispach(incrementLikes()),
    onDecremetLikes: () => dispach(decrementLikes())
  };
}

export default connect(mapStateToProps, mapDispachToProps)(Likes);
