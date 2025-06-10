import data from "../public/data/data.json"

const Hero = () => {
  const { name, title, location, avatarInitials } = data.hero;
  const email = data.contact.email;

  return (
    <section id="home" className="hero bg-cover relative"
      style={{background:`url('/images/plane.jpg')`,
            backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 backdrop-brightness-[30%]"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="avatar-placeholder">
          {avatarInitials}
        </div>
        <h1 className="hero-name">{name}</h1>
        <p className="hero-title">{title}</p>
        <p className="">📍 {location}</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2 text-white bg-primary rounded-md hover:bg-primary-hover transition"
          >
            Contact Me
          </a>
          <a
            href={`mailto:${email}`}
            className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
