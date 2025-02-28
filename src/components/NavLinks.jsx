const navLinks = [
  {
    page: "About",
    url: "#about",
  },
  {
    page: "Use Cases",
    url: "#use-cases",
  },
  {
    page: "Events",
    url: "#events",
  },
  {
    page: "Web Apps",
    url: "#web-apps",
  },
  {
    page: "Usage Video",
    url: "#usage-video",
  },
  {
    page: "Gallery",
    url: "#gallery",
  },
  {
    page: "Clients Testimonials",
    url: "#testimonials",
  },
  {
    page: "FAQ",
    url: "#faq",
  },
  {
    page: "Contact Us",
    url: "#contact",
  },
];

const NavLinks = () => {
  return (
    <div>
      {navLinks.map(({ page, url }, index) => {
        return (
          <a
            href={url}
            key={index}
          >
            {page}
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;
