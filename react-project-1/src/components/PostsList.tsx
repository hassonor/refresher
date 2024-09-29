import styles from "./PostsList.module.css";
import Post from "./Post.tsx";

import {IPost} from "../interfaces/post.interface.ts";
import {useLoaderData} from "react-router-dom";


const PostsList = () => {
    const posts = useLoaderData() as IPost[];
    return (
        <>
            {posts.length > 0 && (
                <ul className={styles.posts}>
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id as string} author={post.author} body={post.body}/>
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostsList;