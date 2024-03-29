import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
  const links = [
    { title: "HomePage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
       <NavLink key={link.title} item={link} />
      ))}
    </div>
  );
};

export default Links;
