import { Link } from "react-router-dom";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { useContext } from "react";
import ThemeContext from "pages/context/ThemeContext";
export default function Footer() {
  const context = useContext(ThemeContext);
  return (
    <footer className="footer">
      <Link to="/posts/new"> 글쓰기</Link>
      <Link to="/posts"> 게시글</Link>
      <Link to="/profile"> 프로필</Link>
      <>
        {context.theme === "light" ? (
          <BsSun className="footer__theme-btn" onClick={context.toggleMode} />
        ) : (
          <BsMoonFill
            className="footer__theme-btn"
            onClick={context.toggleMode}
          />
        )}
      </>
    </footer>
  );
}
