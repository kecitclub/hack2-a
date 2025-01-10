

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Basobas",
  description: "null",
  navItems: [
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Register",
      href: "/register",
    },
    {
      label: "Profile",
      href: "/dashboard"
    },
    {
      label: "About Us",
      href: "/aboutus"
    },
    {
      label: "Contact",
      href: "/contact"
    },
    {
      label: "FAQ",
      href: "/faq"
    }
  ],
  navMenuItems: [
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Register",
      href: "/register",
    },
  ],
  links: {
    find: "/find",
    list: "/list",
    contact: "/aboutus",
    aboutus: "/contact"
  },
};
