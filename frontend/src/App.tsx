import NavBar from "components/navbar";
import Footer from "components/footer";
import DataTable from "components/datatable";
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <div className = "container">
        <h1 >Olá mundo</h1>
      </div>
      <DataTable></DataTable>
      <Footer></Footer>
    </Fragment>    
  );
}

export default App;
