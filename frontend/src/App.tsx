import NavBar from "components/navbar";
import Footer from "components/footer";
import DataTable from "components/datatable";
import BarChart from "components/barchart";
import DonutChart from "components/donutchart";
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
      </div>
      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
          <BarChart></BarChart>
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Todas Vendas</h5>
          <DonutChart></DonutChart>
        </div>
        <div className="row px-3">
          <h2 className="text-primary py-3">Todas as Vendas</h2>
        </div>
      </div>
      <DataTable></DataTable>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
