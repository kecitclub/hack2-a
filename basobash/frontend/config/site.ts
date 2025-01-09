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
  },
};
