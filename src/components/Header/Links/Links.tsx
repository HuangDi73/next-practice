import { ILink } from "@/types";
import styles from "./Links.module.css";
import NavLink from "./NavLink/NavLink";

const links: ILink[] = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
