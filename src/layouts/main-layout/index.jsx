import Footer from "../../components/footer";
import Header from "../../components/header";
import Main from "../../components/main";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainLayout;
