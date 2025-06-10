export function initScrollAnimations() {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.classList.add(index % 2 === 0 ? "fade-in" : "slide-in-left");
    observer.observe(section);
  });

  const animateElements = [
    { selector: ".about-highlights .highlight-item", animation: "fade-in", delay: true },
    { selector: ".timeline-item", animation: "slide-in-right", delay: true },
    { selector: ".skills-category", animation: "fade-in", delay: true },
    { selector: ".education-card", animation: "slide-in-right", delay: true },
  ];

  animateElements.forEach(({ selector, animation, delay }) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      element.classList.add(animation);
      if (delay) {
        (element as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      }
      observer.observe(element);
    });
  });

  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    item.classList.add("fade-in");
    (item as HTMLElement).style.transitionDelay = `${(index % 5) * 0.05}s`;
    observer.observe(item);
  });
}
