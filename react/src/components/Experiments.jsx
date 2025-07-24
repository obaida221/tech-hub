import { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';

const POSTS_PER_PAGE = 10;

function Post({ post }) {
  return (
    <div className="card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setError(null);
    const fetchPosts = async () => {
      try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`);
      setTotal(Number(res.headers.get('x-total-count')) || 100);
      const data = await res.json();
      setPosts(data);
      } catch {
      setError('Failed to fetch posts');
      }
    };
    fetchPosts();
  }, [page]);

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <>
      <section className="sectionMain">
        <h2>Posts</h2>
        {error && <p className="error">{error}</p>}
        <div className="cards">
          {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
        <div className="pagination">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
          <span className="pageInfo">Page {page} of {totalPages}</span>
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
        </div>
      </section>
    </>
  );
} 