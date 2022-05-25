import { Link, Outlet } from "react-router-dom";

export default function Page2() {
    return (
      <div style={{ 
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        textAlign: "center"
      }}>
      <main>
        <h1>Page 2</h1>
        <nav style={{marginTop: "10vh"}}>
          <Link to="/" > Home </Link>  |  {" "}
          <Link to="/page1"> Page 1 </Link> |  {" "}
          <Link to="/page2"> Page 2 </Link> |  {" "}
          <Link to="/page3"> Page 3 </Link>
      </nav>
      <Outlet />
      </main>
      </div>
    );
  }