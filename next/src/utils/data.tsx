
interface INavLink {
  name:string
  path: string
}

export const navLinks: Array<INavLink> = [
  { name: "Home", 
   path: "/" 
  },
  // {
  //   name: "About Us",
  //   path: "/about",
  // },
  // {
  //   name: "Services",
  //   path: "/services",
  // },
  {
    name: "Blog",
    path: "/#blog",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];