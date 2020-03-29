import Head from "next/head";
import Nav from "../components/nav";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Pokemon Search - Home</title>
        </Head>
        <Nav />
      </div>
    );
  }
}
export default Home;
