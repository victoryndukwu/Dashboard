import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-6 gap-px">
      <Navbar className="col-span-1 " />
      <div className="col-span-5 h-screen w-full bg-gray-100 ">{children}</div>
    </div>
  );
}

export default Layout;
