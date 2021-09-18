import NavBar from "components/Navbar";
import Footer from "components/Footer";
import DataTable from "components/Datatable";
import BarChart from "components/Barchart";
import DonutChart from "components/Donutchart";

function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1> {/**py: padding vertical */}

        <div className="row px-3">{/*} px: Padding horizontal */}
          <div className="col-sm-6" >{/*col-sm-6: espaço de grade de 6 unidades */}
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6" >{/*col-sm-6: espaço de grade de 6 unidades */}
            <h5 className="text-center text-secondary">Todas Vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>

  );
}

export default Dashboard;