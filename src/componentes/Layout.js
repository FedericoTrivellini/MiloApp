import Header from './compartidos/Header/Header';
import Main from './compartidos/Main/Main';
import Footer from './compartidos/Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
      <>
        <Header></Header>
        <Main>
          <Outlet></Outlet>
        </Main>
        <Footer></Footer>
      </>
    );
}

export default Layout;