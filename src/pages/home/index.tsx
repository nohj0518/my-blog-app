import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostsPage from "../posts";

export default function Home() {
  return (
    <div>
      <Header />

      <PostsPage />
      <Footer />
    </div>
  );
}
