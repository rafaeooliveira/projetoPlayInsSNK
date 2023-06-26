import { Fragment } from "react";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Tools from "./components/tools/Tools";
import NavigationMenu from "./components/tools/NavigationMenu";

export default function App() {

  return (
      <Fragment>
        <NavigationMenu/>
        <Header/>
        <Main/>
        <Footer/>
        <Tools/>
      </Fragment>
  )
}

