import PropTypes from 'prop-types';

export default function SinglePost({ post }) {
  return (
    <div className="my-5 w-full text-left">
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center p-5 bg-slate-700 rounded-t-lg text-xl font-semibold border-b-2 border-orange-500">
        <h4 className='uppercase'>{post.title}</h4>
        <p>User: {post.userId}</p>
      </div>
      <p className='bg-orange-500/50 text-lg px-5 py-10 italic rounded-b-lg'>{post.body}</p>
  
    </div>
  );
}

SinglePost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
};
