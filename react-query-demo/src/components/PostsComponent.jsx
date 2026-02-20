import React from 'react';
import { useQuery } from 'react-query';

// Data fetching function
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const PostsComponent = () => {
  // useQuery hook manages the entire lifecycle
  const { 
    data, 
    error, 
    isLoading, 
    isError, 
    refetch, 
    isFetching 
  } = useQuery('posts', fetchPosts, {
    // Optional: Keep data "fresh" for 1 minute before background refetching
    staleTime: 60000, 
  });

  // Handle Loading State
  if (isLoading) return <div>⏳ Loading posts...</div>;

  // Handle Error State
  if (isError) return <div style={{ color: 'red' }}>❌ Error: {error.message}</div>;

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refreshing...' : 'Refetch Data'}
        </button>
        {isFetching && <span style={{ marginLeft: '10px' }}>Updating in background...</span>}
      </div>

      <div style={{ display: 'grid', gap: '15px' }}>
        {data.slice(0, 5).map((post) => (
          <div key={post.id} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsComponent;