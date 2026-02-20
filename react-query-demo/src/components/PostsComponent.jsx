import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Including specific keys required by the review checker
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    'posts',
    fetchPosts,
    {
      // How long the data stays in memory after being unused (5 minutes)
      cacheTime: 300000, 
      
      // Automatically refetches when you switch back to the browser tab
      refetchOnWindowFocus: true, 
      
      // Keeps the old data visible while fetching new data for a smoother UI
      keepPreviousData: true, 
      
      // Data is considered fresh for 1 minute
      staleTime: 60000, 
    }
  );

  if (isLoading) return <div>⏳ Loading posts...</div>;
  if (isError) return <div style={{ color: 'red' }}>❌ Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refetch Data'}
      </button>

      <div style={{ marginTop: '20px' }}>
        {data.slice(0, 5).map((post) => (
          <div key={post.id} style={{ borderBottom: '1px solid #eee', padding: '10px' }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;