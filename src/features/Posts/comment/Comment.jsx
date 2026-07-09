import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Comment.module.css";
import { User } from "../../../contexts/userContext";

export default function Comment(props) {
  const { user } = User();

  //if comment owner
  if (props.comment.authorId === user.id) {
    return (
      <div className={styles.comment}>
        {props.comment.content} - comment author
      </div>
    );
  }
  //else
  else {
    return <p className={styles.comment}>{props.comment.content}</p>;
  }
}
