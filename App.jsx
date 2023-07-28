import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PurchaseOrder from "./pages/purchaseorder/PurchaseOrder";
import ProductDatabase from "./pages/Productdatabse/ProductDatabase";
import Formula from "./pages/formula/Formula";
import IncomingStock from "./pages/incomingstock/IncomingStock";
// import Register from "./components/Register/Register"
import TotalInventory from "./pages/totalinventory/TotalInventory";
import QcIncoming from "./pages/Qc/QcIncoming";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

// import { AuthProvider } from "./utils/AuthContext";




function App() {
  return (
    <>

      <Router>
    {/* <AuthProvider> */}
        <Routes>
        <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={
          <SideBar>
            <Dashboard/>
          </SideBar>} />
          <Route path="/QcIncoming" element={
            <SideBar>
              <QcIncoming />
            </SideBar>
          } />
          <Route path="/Account/purchase-order" element={
          <SideBar>
            <PurchaseOrder />
          </SideBar>} />
          <Route path="/Account/product-databse" element={
          <SideBar>
            <ProductDatabase />
          </SideBar>} />
          <Route path="/production/formula" element={
          <SideBar>
            <Formula />
          </SideBar>} />
          <Route path="/production/incoming-stock" element={
          <SideBar>
            <IncomingStock />
          </SideBar>} />
          <Route path="/total-inventory" element={
          <SideBar>
            <TotalInventory />
          </SideBar>} />

          <Route path="*" element={<> not found</>} />
          </Route>
          
          
        </Routes>
        {/* </AuthProvider> */}
      </Router >
    </>

  );
}

export default App;
