import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const PortfolioDropdown = () => (
    <div className="bg-purple-600 rounded-xl p-3 w-64 space-y-2 shadow-xl">
      <div className="flex items-center gap-3 p-3 rounded-lg border border-white">
        <div className="w-10 h-10 bg-white rounded-md"></div>
        <div className="flex-1">
          <p className="text-sm font-medium text-white flex justify-between">
            Portfolio A <span>↗</span>
          </p>
          <p className="text-xs text-white/80">Focus on insights</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-3 rounded-lg border border-white">
        <div className="w-10 h-10 bg-white rounded-md"></div>
        <div className="flex-1">
          <p className="text-sm font-medium text-white flex justify-between">
            Portfolio B <span>↗</span>
          </p>
          <p className="text-xs text-white/80">Focus on insights</p>
        </div>
      </div>
    </div>
  );

  return (
    <header className="w-full bg-black">
      <nav className="max-w-[1728px] mx-auto px-6 h-[70px] desktop:h-[120px] flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <img src={logo} alt="logo" />
          Web
        </div>

        {/* Desktop Menu */}
        <ul className="hidden tablet:flex items-center gap-6 desktop:gap-10 text-sm text-white">
          <li>Home</li>

          <li className="relative">
            <button
              onClick={() => setPortfolioOpen(!portfolioOpen)}
              className="flex items-center gap-1"
            >
              Portfolio
              <span
                className={`transition-transform ${
                  portfolioOpen ? "rotate-180" : ""
                }`}
              >
                v
              </span>
            </button>

            {portfolioOpen && (
              <div className="absolute top-10 left-0 z-50">
                <PortfolioDropdown />
              </div>
            )}
          </li>

          <li>Skills</li>
          <li>About Me</li>
        </ul>

        <button className="hidden tablet:block bg-purple-600 text-white px-4 py-2 desktop:px-5 desktop:py-2.5 rounded-md text-sm">
          Contact Me
        </button>

        {/* Mobile Hamburger */}
        <button
          className="tablet:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="tablet:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col gap-4 px-6 py-4 text-white text-sm">
            <li>Home</li>

            <li>
              <button
                onClick={() => setPortfolioOpen(!portfolioOpen)}
                className="flex justify-between items-center w-full"
              >
                Portfolio
                <span
                  className={`transition-transform ${
                    portfolioOpen ? "rotate-180" : ""
                  }`}
                >
                  v
                </span>
              </button>

              {portfolioOpen && (
                <div className="mt-3">
                  <PortfolioDropdown />
                </div>
              )}
            </li>

            <li>Skills</li>
            <li>About Me</li>

            <button className="bg-purple-600 px-4 py-2 rounded-md mt-2 w-fit">
              Contact Me
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}
