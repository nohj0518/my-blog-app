import Router from "./components/Router";
import { useEffect, useState } from "react";
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "components/Loader";

function App() {
  const auth = getAuth(app);
  /**
   * 로그인 후에도 웹 새로고침시 auth 를 인식하지 못해서 라우터가 로그인 페이지를 아주 잠깐 띄웠다가
   * auth 를 인식 후에 새로고침 완료 되는 이슈가 있었다.
   * 이를 해결하기 위해서 auth 체크하기 전에(=> initialization 하기 전에)는 loader 를 띄우도록 했다.
   * auth의 currentUser 가 있으면 authenticated 로 변경시킨다.
   *  */

  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);
  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated}></Router> : <Loader />}
    </>
  );
}

export default App;
