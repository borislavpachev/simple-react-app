import { useState, useEffect } from 'react';
import { Loading } from '@/components';
import { Input } from '@/components/forms';
import { getPosts } from '@/services/postService';
import { CreatePost, SinglePost } from './';
import toast from 'react-hot-toast';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts(searchParam)
      .then((fetchedData) => {
        if (!fetchedData) return;

        const latestPosts = fetchedData.reverse().slice(0, 20);

        setPosts(latestPosts);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Failed to get all posts.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParam]);

  const handleSearch = (e) => {
    setSearchParam(e.target.value);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col border-2 rounded-lg p-10 border-orange-500 items-start justify-center">
        <h2 className="text-5xl mb-10">Check out our latest posts</h2>
        <div className="flex flex-col md:flex-row w-full gap-3 justify-between">
          <CreatePost setPosts={setPosts} />
          <Input
            id="posts-search-bar"
            name="posts-search-bar"
            placeholder="Search User"
            type="search"
            value={searchParam}
            onChange={handleSearch}
            className="w-full md:w-1/3"
          />
        </div>

        {!posts.length ? (
          <h2 className="mt-5 text-3xl">No posts</h2>
        ) : (
          <>
            {posts.map((post, index) => {
              return <SinglePost key={index} post={post} />;
            })}
            <p className="mt-5 text-center w-full text-2xl">{`Posts: ${posts.length}`}</p>
          </>
        )}
      </div>
    </>
  );
}
