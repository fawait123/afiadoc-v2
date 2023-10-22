import Dashboard from "./../admin/components/dashboard";
import Appointments from "./../admin/components/appointments";
import Specialities from "./../admin/components/specialities";
import Doctors from "./../admin/components/doctors";
import Reviews from "./../admin/components/reviews";
import Transaction from "./../admin/components/transaction";
import Settings from "./../admin/components/settings";
import InvoiceReport from "./../admin/components/Reports/InvoiceReport/InvoiceReport";
import ProductList from "./../admin/components/productlist";
import PharmacyList from "./../admin/components/pharmacylist";
import Categories from "./../admin/components/pharmacylist/Categories";
import Blog from "./../admin/components/Blog/blog";
import BlogDetails from "./../admin/components/Blog/blogdetails";
import AddBlog from "./../admin/components/Blog/addblog";
import EditBlog from "./../admin/components/Blog/editblog";
import PendingBlog from "./../admin/components/Blog/pendingblog";
import Profile from "./../admin/components/profile/Profile";
import Login from "./../admin/components/login";
import Register from "./../admin/components/register";
import ForgotPassword from "./../admin/components/forgotpassword";
import Lockscreen from "./../admin/components/lockscreen";
import Error from "./../admin/components/error404";
import ErrorPage from "./../admin/components/error500";
import BasicInput from "./../admin/components/forms/baiscinput";
import FormInput from "./../admin/components/forminput";
import FormHorizontal from "./../admin/components/formhorizontal";
import FormVertical from "./../admin/components/formvertical";
import FormMask from "./../admin/components/formask";
import FormValidation from "./../admin/components/formvalidation";
import BlankPage from "./../admin/components/blankpage";
import Components from "./../admin/components/component";
import DataTables from "./../admin/components/datatables";
import BasicTables from "./../admin/components/basictables";
import ProductCategories from "./../admin/components/productlist/ProductCategories";

import InvoiceReportList from "./../admin/components/Reports/InvoiceReport/InvoiceReportList";
import Role from "./../admin/components/role";
import User from "./../admin/components/user";
import Specialist from "../admin/components/specialist";
import Patient from "../admin/components/patient";
import Appoinment from "../admin/components/appointment";

const adminRoute = [
  {
    path: "/admin",
    component: Dashboard,
  },
  {
    path: "/admin/doctor-list",
    component: Doctors,
  },
  {
    path: "/admin/specialist-list",
    component: Specialist,
  },
  {
    path: "/admin/patient-list",
    component: Patient,
  },
  {
    path: "/admin/role",
    component: Role,
  },
  {
    path: "/admin/user",
    component: User,
  },
  {
    path: "/admin/appointment",
    component: Appoinment,
  },
  // template
  {
    path: "/admin/login",
    component: Login,
  },
  {
    path: "/admin/register",
    component: Register,
  },
  {
    path: "/admin/forgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/admin/lockscreen",
    component: Lockscreen,
  },
  {
    path: "/admin/appointment-list",
    component: Appointments,
  },
  {
    path: "/admin/specialities",
    component: Specialities,
  },
  {
    path: "/admin/reviews",
    component: Reviews,
  },
  {
    path: "/admin/transactions-list",
    component: Transaction,
  },
  {
    path: "/admin/settings",
    component: Settings,
  },
  {
    path: "/admin/invoicerepot",
    component: InvoiceReport,
  },
  {
    path: "/admin/invoice",
    component: InvoiceReportList,
  },
  {
    path: "/admin/blog",
    component: Blog,
  },
  {
    path: "/admin/blog-details",
    component: BlogDetails,
  },
  {
    path: "/admin/add-blog",
    component: AddBlog,
  },
  {
    path: "/admin/edit-blog",
    component: EditBlog,
  },
  {
    path: "/admin/pending-blog",
    component: PendingBlog,
  },
  {
    path: "/admin/profile",
    component: Profile,
  },
  {
    path: "/admin/product-list",
    component: ProductList,
  },
  {
    path: "/admin/pharmacy-list",
    component: PharmacyList,
  },
  {
    path: "/admin/pharmacy-category",
    component: Categories,
  },
  {
    path: "/admin/404",
    component: Error,
  },
  {
    path: "/admin/500",
    component: ErrorPage,
  },
  {
    path: "/admin/blank-page",
    component: BlankPage,
  },
  {
    path: "/admin/components",
    component: Components,
  },
  {
    path: "/admin/basic-input",
    component: BasicInput,
  },
  {
    path: "/admin/form-input-group",
    component: FormInput,
  },
  {
    path: "/admin/form-horizontal",
    component: FormHorizontal,
  },
  {
    path: "/admin/form-vertical",
    component: FormVertical,
  },
  {
    path: "/admin/form-mask",
    component: FormMask,
  },
  {
    path: "/admin/form-validation",
    component: FormValidation,
  },
  {
    path: "/admin/tables-basic",
    component: BasicTables,
  },
  {
    path: "/admin/data-tables",
    component: DataTables,
  },
  {
    path: "/admin/product-category",
    component: ProductCategories,
  },
];

export default adminRoute;
