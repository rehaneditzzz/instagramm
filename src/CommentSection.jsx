import React, { useState } from 'react';

const CommentSection = ({ comments, onNewComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      onNewComment({ id: Date.now(), name: 'User', body: newComment });
      setNewComment('');
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a comment..."
        value={newComment}
        onChange={handleCommentChange}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default CommentSection;

