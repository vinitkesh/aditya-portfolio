import data from "../public/data/data.json"

const Hero = () => {
  const { name, title, location, avatarInitials } = data.hero;
  const email = data.contact.email;

  return (
    <section id="home" className="hero bg-cover relative h-screen w-full"
      // style={{background:`url('/images/plane.jpg')`,
      //       backgroundSize: 'cover'
      // }}
    >
      <div className="absolute inset-0 backdrop-brightness-[30%]"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="avatar-placeholder bg-cover"
          style={{background:`url('/images/pfp.jpeg')`,
              backgroundSize: 'cover',
        }}>
          {/* {avatarInitials bro} */}
        </div>
        <h1 className="hero-name">{name}</h1>
        <p className="hero-title">{title}</p>
        <p className="">📍 {location}</p>
        <div className="hero-buttons">
          <a
            href="#contact"
            className="btn btn--primary"
          >
            Contact Me
          </a>
          <a
            href={"./resume/v1/Aditya_Keshri_CV_A4.pdf"}
            target="_blank"
            className="btn--outline btn "
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
