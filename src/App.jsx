import { Route, Routes, Outlet } from 'react-router-dom';

import Dashboard from '@pages/Dashboard/index.jsx';
import NotFound from '@pages/NotFound/index.jsx';
import Pump from '@pages/Pump/index.jsx';
import Header from '@components/Header/index.jsx';
import SideBar from '@components/SideBar/index.jsx';
import { useState } from 'react';

const Layout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleOpenSideBar = () => {
    setOpenSideBar((prevState) => !prevState);
  };
  return (
    <>
      <Header toggleOpenSideBar={toggleOpenSideBar} />
      <SideBar open={openSideBar} toggleOpen={toggleOpenSideBar} />
      <Outlet />
    </>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path={'pump'} element={<Pump />} />
      </Route>

      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
}
export default App;