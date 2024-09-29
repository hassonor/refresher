import {StrictMode} from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {createRoot} from 'react-dom/client'
import './index.css'
import RootLayout from "./routes/RootLayout.tsx";
import Posts, {loader as postsLoader} from "./routes/Posts.tsx";
import PostDetails, {loader as postDetailsLoader} from "./components/PostDetails.tsx";
import NewPost, {action as newPostAction} from "./routes/NewPost.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/', element: <Posts/>,
                loader: postsLoader,
                children: [{
                    path: '/create-post', element: <NewPost/>, action: newPostAction
                },
                    {path: '/:id', element: <PostDetails/>, loader: postDetailsLoader}
                ]
            },
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>

    </StrictMode>,
)
