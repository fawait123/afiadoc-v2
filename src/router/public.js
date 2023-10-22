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
    path: "/doctors",
    component: SearchDoctor2,
  },
  {
    path: "/doctors/map",
    component: DoctorList,
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
