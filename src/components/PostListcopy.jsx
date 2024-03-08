import React, { useEffect,useState } from 'react';
import axios from 'axios'
import Post from './Post';
const PostListcopy = () => {

    const [posts, setPosts] = useState([]);

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setPosts(response.data))
            .catch((error) => console.log(error))
    }
    
    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <h1 className='test-center'>All Post</h1>
            
            <table className='table table-bordered'>
                <thread className='thread-dark'>
                    <tr>
                        <th>Title1</th>
                        <th>Body</th>
                    </tr>
                </thread>
                <tbody>
                    {
                        posts.map(post => (
                            <Post data={post} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default PostListcopy;