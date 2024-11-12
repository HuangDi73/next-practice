"use client";

import { NavLinkProps } from "@/types";
import styles from "./NavLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item: { title, path } }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <div className={`${styles.container} ${pathName == path && styles.active}`}>
      <Link href={path}>{title}</Link>
    </div>
  );
};

export default NavLink;
