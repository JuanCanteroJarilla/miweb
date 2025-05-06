export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full" style={{ backgroundColor: "rgba(159, 255, 203, 0.5)" }}>
      <div className="navigation flex items-center justify-between h-full px-4">
        <div style={{ marginLeft: "16vw" }}>
          <img src="/images/logo.png" alt="Logo" className="h-14" />
        </div>
        <ul className="flex">
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#about">
              About
            </a>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#projects">
              Projects
            </a>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
