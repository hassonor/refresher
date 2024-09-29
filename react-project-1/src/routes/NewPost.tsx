import styles from './NewPost.module.css';
import {FC} from "react";
import Modal from "../components/Modal.tsx";
import {Form, Link, redirect} from "react-router-dom";
import {IPost} from "../interfaces/post.interface.ts";

const NewPost: FC = () => {
    return (
        <Modal>
            <Form method='post' className={styles.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3}/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required/>
                </p>
                <p className={styles.actions}>
                    <Link to=".." type="button">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;


export async function action({request}: { request: Request }) {
    const formData = await request.formData();
    const postData: IPost = {
        author: formData.get('author') as string,
        body: formData.get('body') as string,
    };

    try {
        await fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }

    return redirect('/');
}