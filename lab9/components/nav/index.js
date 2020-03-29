import Link from "next/link";
import styles from "./navbar.module.css";

class Nav extends React.Component {
  render() {
    return (
      <div className={styles.navbar}>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/name">
          <a>Search by Name</a>
        </Link>

        <Link href="/id">
          <a>Search by ID</a>
        </Link>

        <Link href="/type">
          <a>Search by Type</a>
        </Link>
      </div>
    );
  }
}

export default Nav;
