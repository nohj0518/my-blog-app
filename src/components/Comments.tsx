import { useContext, useState } from "react";
import { PostProps } from "./PostList";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "firebaseApp";
import AuthContext from "pages/context/AuthContext";
import { toast } from "react-toastify";

const mockComments = [
  {
    id: 1,
    email: "dddldldl@dldld.com",
    content: "정말 멋진 글이었습니다.",
    createdAt: "2024-10-02",
  },
];

interface CommentsProps {
  post: PostProps;
}

export default function Comments({ post }: CommentsProps) {
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "comment") {
      setComment(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (post && post?.id) {
        const postRef = doc(db, "posts", post.id);
        if (user?.uid) {
          const commentObj = {
            content: comment,
            uid: user.uid,
            email: user.email,
            createdAt: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          };

          await updateDoc(postRef, {
            comments: arrayUnion(commentObj),
            updateAt: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          });
        }
      }
      toast.success("댓글을 생성했습니다.");
      setComment("");
    } catch (e: any) {
      toast.error(e?.code);
    }
  };
  return (
    <>
      <div className="comments">
        <form onSubmit={onSubmit} className="comments__form">
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
