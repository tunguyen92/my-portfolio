import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="about" className="text-red-500">
        About
      </Link>
      <Link to="contact">Contact</Link>
    </div>
  );
};

export default Home;
