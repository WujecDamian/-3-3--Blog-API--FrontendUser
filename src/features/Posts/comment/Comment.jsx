import styles from "./Comment.module.css";
import { User } from "../../../contexts/userContext";

export default function Comment(props) {
  const { user } = User();

  //if comment owner
  if (user) {
    if (props.comment.authorId === user.id) {
      return (
        <div className={styles.comment}>
          <b>
            <i>{props.comment.author.name}</i>:
          </b>{" "}
          {props.comment.content} <i>- comment author</i>
        </div>
      );
    } else {
      return (
        <p className={styles.comment}>
          <b>
            <i>{props.comment.author.name}</i>:
          </b>{" "}
          {props.comment.content}
        </p>
      );
    }
  }
  //else
  else {
    return (
      <p className={styles.comment}>
        {" "}
        <b>
          <i>{props.comment.author.name}</i>:
        </b>{" "}
        {props.comment.content}
      </p>
    );
  }
}
