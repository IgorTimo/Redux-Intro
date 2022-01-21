import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { commentDelete, commentUpdate } from "./redux/actions";

const SingleComment = (props) => {
  const { text, id } = props.data;
  const [commentText, setCommentText] = useState("");
  const dispuch = useDispatch();

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleUpdate = (event) => {
    event.preventDefault();
    dispuch(commentUpdate(commentText, id));
  };

  const handleDelete = (event) => {
    event.preventDefault();
    console.log("Delete ", commentText);
    dispuch(commentDelete(id));
  }

  const handleInput = (event) => {
    setCommentText(event.target.value);

    
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick = {handleDelete} className="comments-item-delete">&times;</div>
      <input type="text" defaultValue={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
