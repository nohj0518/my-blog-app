export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title"></div>
          <div className="posts__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">현주</div>
            <div className="post__date">2024.09.29 일요일</div>
          </div>
          <div className="posts__title">게시글 1</div>
          <div className="post__utils-box">
            <div className="post__edit">수정</div>
            <div className="post__delete">삭제</div>
          </div>
          <div className="post__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </>
  );
}
