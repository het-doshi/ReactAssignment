import graphic from "../assets/still-life-graphic2.png";
import Instagram from "../assets/socials/Instagram.png";
import Figma from "../assets/socials/Figma.png";
import LinkedIn from "../assets/socials/LinkedIn.png";
import Twitter from "../assets/socials/Twitter.png";
import Telegram from "../assets/socials/Telegram.png";
import Medium from "../assets/socials/Medium.png";
import download from "../assets/download.png";
export default function Intro() {
  return (
    <>
      <section className="flex justify-center items-start bg-black">
        <div className="grid desktop:grid-cols-12 grid-cols-8   grid-rows-10 items-start py-4  w-full max-w-7xl">
          

          <div className=" col-start-1  self-start col-span-8 row-start-1 tablet:row-start-1 justify-center tablet:row-span-3 row-span-1 flex">
            <h2 className=" font-Poppins self-start font-extrabold text-white desktop:text-[158px] tablet:text-[120px] text-[40px] leading-none">
              PRODUCT
            </h2>
          </div>

          <div className=" col-start-1 col-span-8 tablet:row-start-4 row-start-2 tablet:row-span-3 row-span-1 flex justify-center self-start ">
            <h2 className=" font-Poppins font-extrabold text-white desktop:text-[155px] tablet:text-[120px] text-[40px] leading-none">
              DESIGNER
            </h2>
          </div>

          <div className=" col-start-1 col-span-8 tablet:row-start-7 row-start-3  tablet:row-span-2 row-span-1 flex justify-center self-start">
            <h2
              className=" font-Poppins  font-extrabold  desktop:text-[81px] leading-none bg-gradient-to-r
               from-[#f97a8f] via-[#fcb364] to-[#fddc43] tablet:text-[71px] text-[40px]
               bg-clip-text text-transparent"
            >
              CRISTIAN MUNOZ
            </h2>
          </div>

          <div className="col-start-1 col-span-8 tablet:row-start-9 row-start-5 row-span-1 flex items-center self-end justify-center gap-8">
            <img src={Instagram} className="h-8 w-8" />
            <img src={Figma} className="h-8 w-8" />
            <img src={LinkedIn} className="h-8 w-8" />
            <img src={Twitter} className="h-8 w-8" />
            <img src={Telegram} className="h-8 w-8" />
            <img src={Medium} className="h-8 w-8" />
          </div>

          <div className="col-start-1 col-span-8 tablet:row-start-10 row-start-7 self-end row-span-1 flex items-baseline justify-center desktop:justify-start">
            <button className="flex items-end gap-3 self-end bg-[#292929] text-white px-10 py-2 desktop:px-72 desktop:py-2.5 rounded-md text-sm">
              Download Curriculum Vitae
              <img src={download} alt="download" className="w-4 h-4" />
            </button>
          </div>

          <img
            src={graphic}
            alt="Intro graphic"
            className=" col-start-9 col-span-4 row-start-1 row-span-11 w-full h-full hidden desktop:flex object-cover"
          />
        </div>
      </section>
    </>
  );
}
