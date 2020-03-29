import Head from "next/head";
import Nav from "../components/nav";
import TypeSearch from "../components/TypeSearch";
import styles from "../components/styles/pages.module.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Pokemon Search - Type Search</title>
        </Head>
        <Nav />
        <div className={styles.home}>
          <div className={styles.result}>
            <div className={styles.type}>
              <TypeSearch />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
