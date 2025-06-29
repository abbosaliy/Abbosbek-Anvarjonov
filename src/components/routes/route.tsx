import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Root() {
  return (
    <div className="flex flex-col items-center">
      <div className="container flex  flex-col gap-10">
        <Header></Header>
        <main className="flex items-center flex-col">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Root;
