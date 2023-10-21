import Dashboard from "./../pharmacyadmin/components/dashboard";
import Products from "./../pharmacyadmin/components/Products/product";
import AddProduct from "./../pharmacyadmin/components/Products/addproduct";
import EditProduct from "./../pharmacyadmin/components/Products/editproduct";
import OutStock from "./../pharmacyadmin/components/Products/outstock";
import Expired from "./../pharmacyadmin/components/Products/expired";
import Categories from "./../pharmacyadmin/components/categories";
import Purchase from "./../pharmacyadmin/components/purchase/purchase";
import Order from "./../pharmacyadmin/components/purchase/order";
import AddPurchase from "./../pharmacyadmin/components/purchase/addpurchase";
import EditPurchase from "./../pharmacyadmin/components/purchase/editpurchase";
import Sales from "./../pharmacyadmin/components/Sales";
import Supplier from "./../pharmacyadmin/components/supplier/supplier";
import AddSupplier from "./../pharmacyadmin/components/supplier/addsupplier";
import EditSupplier from "./../pharmacyadmin/components/supplier/editsupplier";
import TransactionList from "./../pharmacyadmin/components/transaction/transaction-list";
import Invoice from "./../pharmacyadmin/components/transaction/invoice";
import InvoiceReport from "./../pharmacyadmin/components/report/invoicelist";
import Settings from "./../pharmacyadmin/components/settings";
import Profile from "./../pharmacyadmin/components/profile";
import ProductList from "./../pharmacyadmin/components/productlist/index.jsx";
import ReportInvoice from "./../pharmacyadmin/components/report/ReportInvoice.jsx";
import LatestCustomer from "./../pharmacyadmin/components/dashboard/LastestCustomer.jsx";
import PharmacyLogin from "./../pharmacyadmin/components/login/index.jsx";
import ParmacyForgotPassword from "./../pharmacyadmin/components/forgotPassword/index.jsx";
import ParmacyRegsiter from "./../pharmacyadmin/components/register/index..jsx";

const parmachyRoute = [
  {
    path: "/pharmacyadmin",
    component: Dashboard,
  },
  {
    path: "/pharmacyadmin/register",
    component: ParmacyRegsiter,
  },
  {
    path: "/pharmacyadmin/forgotPassword",
    component: ParmacyForgotPassword,
  },
  {
    path: "/pharmacyadmin/pharmacyLogin",
    component: PharmacyLogin,
  },
  {
    path: "/pharmacyadmin/categories",
    component: Categories,
  },
  {
    path: "/pharmacyadmin/products",
    component: Products,
  },
  {
    path: "/pharmacyadmin/add-product",
    component: AddProduct,
  },
  {
    path: "/pharmacyadmin/edit-product",
    component: EditProduct,
  },
  {
    path: "/pharmacyadmin/outstock",
    component: OutStock,
  },
  {
    path: "/pharmacyadmin/expired",
    component: Expired,
  },
  {
    path: "/pharmacyadmin/purchase",
    component: Purchase,
  },
  {
    path: "/pharmacyadmin/order",
    component: Order,
  },
  {
    path: "/pharmacyadmin/add-purchase",
    component: AddPurchase,
  },
  {
    path: "/pharmacyadmin/edit-purchase",
    component: EditPurchase,
  },
  {
    path: "/pharmacyadmin/sales",
    component: Sales,
  },
  {
    path: "/pharmacyadmin/supplier",
    component: Supplier,
  },
  {
    path: "/pharmacyadmin/add-supplier",
    component: AddSupplier,
  },
  {
    path: "/pharmacyadmin/edit-supplier",
    component: EditSupplier,
  },
  {
    path: "/pharmacyadmin/transactions-list",
    component: TransactionList,
  },
  {
    path: "/pharmacyadmin/invoice",
    component: Invoice,
  },
  {
    path: "/pharmacyadmin/invoice-report",
    component: InvoiceReport,
  },
  {
    path: "/pharmacyadmin/ReportInvoice",
    component: ReportInvoice,
  },
  {
    path: "/pharmacyadmin/profile",
    component: Profile,
  },
  {
    path: "/pharmacyadmin/settings",
    component: Settings,
  },
  {
    path: "/pharmacyadmin/product-list",
    component: ProductList,
  },
  {
    path: "/pharmacyadmin/LatestCustomer",
    component: LatestCustomer,
  },
];

export default parmachyRoute;
