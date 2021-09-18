import NavBar from "components/navbar";
import Footer from "components/footer";
import { Link } from "react-router-dom";



function Home() {
  return (
    <>
      <NavBar />
      <br />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Sales Dashboard</h1>
          <p className="lead">Control Client Dashboard</p>
          <br />
          <hr />
          <p>Dashboard seed comes from Spring boot Postgress tools</p>
          <Link className="btn btn-success btn-lg" to="/dashboard">
            Access Dashboard
          </Link>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>


  );
}

export default Home;