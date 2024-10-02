import { useState } from "react";

const mockComments = [
  {
    id: 1,
    email: "dddldldl@dldld.com",
    content: "정말 멋진 글이었습니다.",
    createdAt: "2024-10-02",
  },
];

export default function Comments() {
  const [comment, setComment] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "comment") {
      setComment(value);
    }
  };
  return (
    <>
      <div className="comments">
        <form className="comments__form">
          <div className="form__block">
            <label htmlFor="comment">댓글입력</label>
            <textarea
              name="comment"
              id="comment"
              required
              value={comment}
              onChange={onChange}
            />
          </div>
          <div className="form__block">
            <input
              type="submit"
              value="댓글입력"
              className="form__btn-submit"
            />
          </div>
        </form>
        <div className="comments__list">
          {mockComments.map((comment) => (
            <div key={comment.id} className="comment__box">
              <div className="comment__profile-box">
                <div className="comment__email">{comment.email}</div>
                <div className="comment__date">{comment.createdAt}</div>
                <div className="comment__delete">삭제</div>
              </div>
              <div className="comment__text">{comment.content}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
