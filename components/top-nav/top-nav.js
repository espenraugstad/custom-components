class TopNav extends HTMLElement {
  constructor() {
    super();

    // All menu items
    const menuItems = [
      {
        name: "Home",
        src: "index.html",
      },
      {
        name: "About",
        src: "about.html",
      },
      {
        name: "Projects",
        src: "#",
      },
      {
        name: "Contact",
        src: "#",
      },
    ];

    // Shadow root
    this.attachShadow({ mode: "open" });

    // Get the current page
    let currentPage = this.getAttribute("current-page");
    console.log(currentPage);

    // Create the main nav element
    const navEl = document.createElement("nav");

    // Create the ul element
    let menuList = document.createElement("ul");

    // For each page, except current page, create an li element
    for (const item of menuItems) {
      if (item.name !== currentPage) {
        const li = document.createElement("li");
        li.innerHTML = `<a href=${item.src}>${item.name}</a>`;
        menuList.appendChild(li);
      }
    }

    navEl.append(menuList);

    // Attach to shadowroot
    this.shadowRoot.append(navEl);

    // Style
    const linkEl = document.createElement("link");
    linkEl.setAttribute("rel", "stylesheet");
    linkEl.setAttribute("href", "./components/top-nav/top-nav.css");
    this.shadowRoot.append(linkEl);
  }
}

customElements.define("top-nav", TopNav);
