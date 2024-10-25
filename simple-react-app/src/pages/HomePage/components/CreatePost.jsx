import { useState } from 'react';

import { Form, Input } from '@/components/forms';
import Button from '@/components/buttons/Button';
import { Modal } from '@/components';
import useForm from '@/hooks/useForm';
import { createPost } from '@/services/postService';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

export default function CreatePost({ setPosts }) {
  const [open, setOpen] = useState(false);
  const { form, updateForm, clearForm } = useForm({
    title: '',
    body: '',
    userId: 0,
  });

  const createNewPost = async () => {
    const { title, body, userId } = form;

    if (!title.trim() || !body.trim() || !userId) {
      toast.error('Please complete all form fields');
      return;
    }
    const numberId = Number(userId);

    try {
      const newPost = await createPost({ ...form, userId: numberId });
      if (!newPost) return;

      setPosts((prevPosts) => {
        return [newPost, ...prevPosts];
      });

      toast.success('Post create successfully');
      clearForm();
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error('Failed to create post.');
    }
  };

  return (
    <>
      <Button className="w-[200px] p-3" onClick={() => setOpen(true)}>
        Create
      </Button>
      <Modal open={open} close={() => setOpen(false)}>
        <Form>
          <div className="flex flex-col gap-5">
            <h1 className="text-center font-semibold text-2xl">
              Create New Post
            </h1>
            <Input
              id="create-post-title"
              name="create-post-title"
              placeholder="Post title"
              value={form.title}
              onChange={updateForm('title')}
            />
            <Input
              id="create-post-body"
              name="create-post-body"
              placeholder="Post body"
              value={form.body}
              onChange={updateForm('body')}
            />
            <Input
              id="create-post-userId"
              name="create-post-userId"
              placeholder="Post userId"
              type="number"
              value={form.userId}
              onChange={updateForm('userId')}
            />
            <Button
              type="submit"
              disabled={!form.body}
              className="p-2 mt-3"
              onClick={createNewPost}
            >
              Create post
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}

CreatePost.propTypes = {
  setPosts: PropTypes.any.isRequired,
};
