/* eslint-disable react/prop-types */
export const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>
        <div className='main-content'>{children} </div>
      </main>
      <footer></footer>
    </>
  );
};
