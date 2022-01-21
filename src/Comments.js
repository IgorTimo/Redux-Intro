import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import uniqid from "uniqid";
import { commentCreate, commentsLoad } from "./redux/actions";

const Comments = (props) => {
  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
    return state.commentsReducer.comments;
  });
  const dispach = useDispatch();

  useEffect(() => {
      dispach(commentsLoad())
  }, []);

  const handleInput = (event) => {
    setTextComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uniqid();
    dispach(commentCreate(textComment, id));
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((comment) => (
          <SingleComment key={comment.id} data={comment} />
        ))}
    </div>
  );
};

export default Comments;
