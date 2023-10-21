import Generalhome from "../client/components/home/general/generalhome";
import LoginContainer from "../client/components/login/login";
import SearchDoctor2 from "../client/components/pages/searchdoctor/search-doctor2";
import DoctorList from "../client/components/patients/doctorlist";

const publicRoutes = [
  {
    path: "/",
    component: Generalhome,
  },
  {
    path: "/login",
    component: LoginContainer,
  },
  {
    path: "/patient/doctors",
    component: SearchDoctor2,
  },
  {
    path: "/patient/doctor/map",
    component: DoctorList,
  },
];

export default publicRoutes;
