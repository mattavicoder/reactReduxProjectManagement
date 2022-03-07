import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import AOS from "aos";

AOS.init();

type Props = {
  children?: React.ReactNode;
};

type ContextProps = {
  sideNavBarVisible: boolean;
  setAction?: () => void;
};

export const SideNavBarContext = React.createContext<ContextProps>({
  sideNavBarVisible: false,
});

const Layout = ({ children }: Props) => {
  const toggleSideNavBar = (): void => {
    setSideNavBarVisible(!sideNavBarVisible);
  };

  const [sideNavBarVisible, setSideNavBarVisible] = useState(false);

  return (
    <SideNavBarContext.Provider
      value={{
        sideNavBarVisible: sideNavBarVisible,
        setAction: toggleSideNavBar,
      }}
    >
      <div className={`relative`}>
        <Header />
        <div className="">{children}</div>
        <Footer />
      </div>

      {sideNavBarVisible && (
        <div
          className={`fixed w-full top-0 left-0 right-0 h-full hidden md:block`}
        >
          <div className="flex">
            <div className="w-48 h-screen bg-theme z-10">
              <div data-aos="fade-left">
                <SideBar />
              </div>
            </div>
            <div
              onClick={() => toggleSideNavBar()}
              className="fixed w-full h-full bg-black opacity-30"
            >
              asd
            </div>
          </div>
        </div>
      )}
    </SideNavBarContext.Provider>
  );
};

export default Layout;
