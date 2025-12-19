import graph from "../assets/graph.png";

export default function Skills() {
  const skills = [
    {
      title: "UX Design",
      percent: "97%",
      description:
        "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    },
    {
      title: "UI Design",
      percent: "97%",
      description:
        "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    },
    {
      title: "UX Design",
      percent: "97%",
      description:
        "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    },
    {
      title: "UX Design",
      percent: "97%",
      description:
        "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
    },
  ];

  return (
    <section className="bg-black px-4 py-12">
      <div className="max-w-[1728px] mx-auto tablet:mx-12 desktop:mx-20">
        <h2 className="text-white text-2xl font-semibold mb-8">
          SKILLS
        </h2>

        <div className=" grid gap-6 grid-cols-1 desktop:grid-cols-2">
          {skills.map((skill, index) => (
            <article
              key={index}
              className=" flex flex-col tablet:flex-row gap-6 border border-white rounded-md p-6"
            >
              <div className="shrink-0 flex justify-center tablet:justify-start">
                <img
                  src={graph}
                  alt={`${skill.title} graph`}
                  className="w-32 h-32"
                />
              </div>

              <div className="text-center tablet:text-left">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {skill.title}
                </h3>

                <p className="text-white text-base leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
