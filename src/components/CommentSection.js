import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentSection;
