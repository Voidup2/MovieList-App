import Footer from "../footer/Footer";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
