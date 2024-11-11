"use client";

import { ILink } from "@/types";
import styles from "./NavLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  item: ILink;
};

const NavLink = ({ item: { title, path } }: Props) => {
  const pathName = usePathname();

  return (
    <div className={`${styles.container} ${pathName == path && styles.active}`}>
      <Link href={path}>{title}</Link>
    </div>
  );
};

export default NavLink;
