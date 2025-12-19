import Dawn from "../assets/Dawn.png";
export default function StatsCard() {
  return (
    <section className="flex justify-center bg-black py-8 px-4">
      <div
        className="
          w-full max-w-[1728px]
          grid tablet:grid-rows-1  desktop:grid-cols-5 tablet:grid-cols-3 gap-8
          mx-10
          items-center text-center
          p-6 sm:p-8
          bg-[rgba(200,254,199,0.02)]
          rounded-[16px]
          shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          backdrop-blur-[0.5px]
          border border-[rgba(200,254,199,0.93)]
        "
      >
        {/* Stat 1 */}
        <div>
          <h3 className="text-[#CFFFD9] font-Poppins font-extrabold text-5xl desktop:text-[60px] tablet:text-[40px]">
            90%
          </h3>
          <p className="mt-3 text-[#CFFFD9] font-Poppins text-2xl">
            Job Success <br /> Score on Upwork
          </p>
        </div>
        <img src={Dawn} className="mx-20 hidden desktop:block" alt="Dawn.png" />
        
        {/* Stat 2 */}
        <div>
          <h3 className="text-[#CFFFD9] font-Poppins font-extrabold text-5xl sm:text-6xl dektop:text-[70px] tablet:text-[40px]">
            &gt;25.000
          </h3>
          <p className="mt-3 text-[#CFFFD9] font-Poppins text-center text-2xl">
            Duplicates on Figma <br /> Community
          </p>
        </div>
        <img src={Dawn} className="mx-20 hidden desktop:block" alt="Dawn.png" />
        
        {/* Stat 3 */}
        <div>
          <h3 className="text-[#CFFFD9] font-extrabold text-5xl sm:text-6xl desktop:text-[60px] tablet:text-[40px]">
          &gt;2K
          </h3>
          <p className="mt-3 text-[#CFFFD9] text-2xl">
            In Finished <br /> Works
          </p>
        </div>
      </div>
    </section>
  );
}
