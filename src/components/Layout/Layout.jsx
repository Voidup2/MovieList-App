import "./Layout.css";
import Secondlout from "./Secondlout.jsx";

function Layout({ children }) {
  return (
  <Secondlout>
    <div className="layout">{children}</div>;
  </Secondlout>
  );
}

export default Layout;
