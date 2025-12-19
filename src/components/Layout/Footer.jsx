import footerImg from "../../assets/graphic-studio1.png";
import logo from "../../assets/logo.png";
import pattern from "../../assets/designFrame.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">

      <img className="tablet:w-44 tablet:h-52 w-28 h-40 relative left-10 tablet:left-28 desktop:left-36 top-20 tablet:top-16 z-50" src={footerImg} alt="" />
      
      <div className="max-w-[1728px] mx-auto px-4 tablet:px-6 pt-10">
        <div
          className=" relative bg-purple-500 rounded-2xl px-4 py-5 bottom-24 desktop:mx-24 tablet:mx-14 h-40 top-25 
          tablet:px-6 desktop:px flex flex-col tablet:flex-row items-center gap-4 overflow-hidden"
        >

          <img
            src={pattern}
            alt="pattern"
            className=" absolute right-1 top-1 w-14 h-14 tablet:w-16 tablet:h-16 desktop:w-24 desktop:h-24"
          />

          <img src={pattern} alt="pattern"
            className=" absolute left-1 bottom-1 w-14 h-14 tablet:w-20 tablet:h-20 desktop:w-24 desktop:h-24 rotate-180"
          />

          <p
            className=" text-xs tablet:text-sm tablet:text-base desktop:bottom-10 tablet:bottom-8  tablet:left-56 tablet:right-24 right-16 bottom-2 desktop:text-base leading-relaxed text-center tablet:text-left absolute left-[150px] max-w-4xl"
          >
            <span className="block mb-2 font-semibold">
              Thanks for visiting my website
            </span>
            If you have any questions, feel free to write to me on any of my
            social networks. I will surely answer you.
          </p>
        </div>
      </div>

      
      <div className="max-w-[1728px] mx-auto px-4 tablet:px-6 relative bottom-8 pb-6">
        <div className="flex flex-col tablet:flex-row items-center justify-between gap-6">
          

          <div className="flex items-center gap-2 text-xl font-semibold">
            <img src={logo} alt="logo" className="w-6 h-6" />
            Web
          </div>


          <ul className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">Portfolio</li>
            <li className="cursor-pointer hover:text-white">Skills</li>
            <li className="cursor-pointer hover:text-white">About Me</li>
          </ul>
        </div>

        <div className="mt-6 border-t border-white/20"></div>
      </div>
    </footer>
  );
}
