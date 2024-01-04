/* eslint-disable react/prop-types */
import { Header } from '../components/common/Header';

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className='main-content'>{children} </div>
      </main>
      <footer></footer>
    </>
  );
};
