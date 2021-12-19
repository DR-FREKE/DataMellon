import "./App.css";
import Layout from "./components/Layout/Layout";
import IndexRoute from "./routes/indexRoute";

const App = () => {
  return (
    <>
      <Layout>
        <IndexRoute />
      </Layout>
    </>
  );
};

export default App;
