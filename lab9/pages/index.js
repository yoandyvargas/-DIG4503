import Head from "next/head";
import Nav from "../components/nav";
import styles from "../components/styles/pages.module.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Pokemon Search - Home</title>
        </Head>
        <Nav />
        <div className={styles.home}>
          <h1>Welcome to Pokedex!</h1>
          <div className={styles.result}></div>
        </div>
      </div>
    );
  }
}
export default Home;
