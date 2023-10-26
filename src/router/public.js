import Generalhome from "../client/components/home/general/generalhome";
import LoginContainer from "../client/components/login/login";
import SearchDoctor2 from "../client/components/pages/searchdoctor/search-doctor2";
import DoctorList from "../client/components/patients/doctorlist";
import PatientDependent from "./../client/components/patients/dependent";
import Dashboard from "./../client/components/patients/dashboard";
import Orders from "./../client/components/patients/orders";
import MedicalRecords from "./../client/components/patients/medicalrecords";
import DoctorDashboard from "./../client/components/doctors/dashboard";
import Booking from "../client/components/doctors/booking";
import Register from "./../client/components/register/register.jsx";
import DoctorRegister from "../client/components/register/doctorregister";
import Favourties from "./../client/components/patients/dashboard/favourties";
import Booking2 from "../client/components/patients/booking/booking2";
import DoctorProfile from "./../client/components/patients/doctorprofile";

const publicRoutes = [
  // route public
  {
    path: "/",
    component: Generalhome,
  },
  {
    path: "/login",
    component: LoginContainer,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/doctor-register",
    component: DoctorRegister,
  },
  {
    path: "/doctors",
    component: SearchDoctor2,
  },
  {
    path: "/doctors/map",
    component: DoctorList,
  },
  {
    path: "/booking/:doctorID",
    component: Booking2,
  },
  {
    path: "/doctor/:doctorID",
    component: DoctorProfile,
  },
  // route patient
  {
    path: "/patient/doctors",
    component: SearchDoctor2,
  },
  {
    path: "/patient/dependent",
    component: PatientDependent,
  },
  {
    path: "/patient/dashboard",
    component: Dashboard,
  },
  {
    path: "/patient/orders",
    component: Orders,
  },
  {
    path: "/patient/medicalrecords",
    component: MedicalRecords,
  },
  {
    path: "/patient/favourites",
    component: Favourties,
  },
  // doctor route
  {
    path: "/doctor/dashboard",
    component: DoctorDashboard,
  },
  {
    path: "/doctor/appointment/list",
    component: Booking,
  },
];

export default publicRoutes;
