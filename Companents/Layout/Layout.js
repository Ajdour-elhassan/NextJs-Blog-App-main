import { Fragment } from "react";
import MainNavigation from "./Main-Navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main> {props.children} </main>
    </Fragment>
  );
}

export default Layout;
