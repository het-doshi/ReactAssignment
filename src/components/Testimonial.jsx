import shield from "../assets/shield.png";
export default function Testimonial() {
  return (
    <section className=" w-full px-4 py-12 tablet:py-16 desktop:py-20 
      bg-gradient-to-r from-[#ff4a2e] via-[#ff005c] to-[#ffb199]">

      <div className="max-w-4xl mx-auto text-center text-white">
        <h3 className="text-lg tablet:text-xl desktop:text-2xl font-semibold mb-6">
          Kaleb Lechtenberg
        </h3>

        <p className=" text-base tablet:text-lg desktop:text-xl leading-relaxed mb-10 px-2">
          “Working with this freelancer has been great. His attention to detail
          is unparalleled and finished all work ahead of schedule. Will gladly
          send more work and I do not hesitate to recommend him to you on your
          project also.”
        </p>

        <div className="flex justify-center">
          <img
            src={shield}
            alt="Client badge"
            className=" marker:w-10 tablet:w-12 desktop:w-14 mx-auto"
          />
        </div>

      </div>
    </section>
  );
}
