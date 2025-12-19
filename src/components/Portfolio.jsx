import portfolioImg from "../assets/portfolio.png";

export default function Portfolio() {
  const projects = Array.from({ length: 8 });

  return (
    <section className="bg-black px-4 py-12">
      <div className="max-w-[1728px] tablet:mx-12 mx-6 desktop:mx-20">
        {/* Section Heading */}
        <h2 className="text-white text-2xl font-poppins font-semibold mb-8">
          PORTFOLIO
        </h2>

        {/* Portfolio Grid */}
        <div
          className="
            grid gap-6
            grid-cols-1
            tablet:grid-cols-2
            desktop:grid-cols-4
          "
        >
          {projects.map((_, index) => (
            <article
              key={index}
              className="
                bg-[#0e0e0e]
                border border-white
                rounded-xl
                p-4
                flex flex-col
                desktop:w-13/14
                tablet:w- 6/8
              "
            >
              {/* Image */}
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={portfolioImg}
                  alt="Chaintech Product"
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold mb-2">
                Chaintech Product
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded-full bg-[#1a1a1a] text-gray-300">
                  UX Design
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#1a1a1a] text-gray-300">
                  Angular
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#1a1a1a] text-gray-300">
                  JavaScript
                </span>
              </div>

              {/* CTA */}
              <button
                className="
                  mt-auto
                  text-sm
                  text-gray-400
                  hover:text-white
                  transition-colors
                "
              >
                View Product Detail →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
