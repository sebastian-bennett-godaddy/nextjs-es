import Link from "next/link";
import styles from "./nav.module.css";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className={styles.navItem}>
      {text}
    </Link>
  );
};

export default NavItem;
