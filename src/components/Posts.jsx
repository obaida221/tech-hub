import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const POSTS_PER_PAGE = 10;

function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <Card
      elevation={2}
      sx={{
        background: '#fff8dc',
        borderRadius: 2,
        mb: 2,
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        p: 2,
        maxWidth: 600,
        mx: 'auto',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px) scale(1.02)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          {post.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#555' }}>
          {post.body}
        </Typography>
        <button
          style={{
            marginTop: 12,
            padding: '8px 16px',
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={() => navigate(`/posts/${post.id}`)}
        >
          View Post
        </button>
      </CardContent>
    </Card>
  );
}

function PostDetail({ id }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch post');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!post) return null;

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Card elevation={3} sx={{ background: '#fff8dc', borderRadius: 2, p: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            {post.title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default function Posts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!id) {
      setError(null);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`, {
          params: {
            _page: page,
            _limit: POSTS_PER_PAGE,
          },
        })
        .then((res) => {
          setTotal(Number(res.headers['x-total-count']) || 100);
          setPosts(res.data);
        })
        .catch(() => {
          setError('Failed to fetch posts');
        });
    }
  }, [page, id]);

  if (id) {
    return <PostDetail id={id} />;
  }

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Posts
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={8} key={post.id} display="flex" justifyContent="center">
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Box>
    </Container>
  );
}
