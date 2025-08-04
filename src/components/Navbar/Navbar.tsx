import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Briefcase, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  const navItems = [
    {
      name: "Home",
      link: "/home",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Mail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
