import styles from "./Post.module.css";
import {Link} from "react-router-dom";
import {FC} from "react";

interface PostProps {
    author: string;
    body: string;
    id: string;
}

const Post: FC<PostProps> = ({id, author, body}) => {
    return (
        <li className={styles.post}>
            <Link to={id}>
                <p className={styles.author}>{author}</p>
                <p className={styles.text}>{body}</p>
            </Link>
        </li>
    );
};

export default Post;