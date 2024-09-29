import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <div className="profile__box">
        <div className="flex__box-lg">
          <div className="profile__image" />
          <div>
            <div className="profile__email">nohj0518@daum.net</div>
            <div className="profile__name">현주</div>
          </div>
        </div>
        <Link to="/" className="profile__logout">
          로그아웃
        </Link>
      </div>
    </>
  );
}
