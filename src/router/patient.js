import LoginContainer from "./../client/components/login/login.jsx";
import Register from "./../client/components/register/register.jsx";
import ForgotPassword from "./../client/components/forgot-password";
import Home from "./../client/components/home";
import BlogList from "./../client/components/blog/bloglist";
import BlogGrid from "./../client/components/blog/bloggrid";
import BlogDetails from "./../client/components/blog/blogdetails";
import Components from "./../client/components/pages/component";
import BlankPage from "./../client/components/pages/blankpage";
import VideoCall from "./../client/components/pages/videocall";
import VoiceCall from "./../client/components/pages/voicecall";
import SearchDoctor from "./../client/components/pages/searchdoctor";
import Calendar from "./../client/components/pages/calender";
import Invoice from "./../client/components/pages/invoices/invoices";
import InvoiceView from "./../client/components/pages/invoices/view";
import DoctorGrid from "./../client/components/patients/doctorgrid";
import DoctorList from "./../client/components/patients/doctorlist";
import DoctorProfile from "./../client/components/patients/doctorprofile";
import DoctorChat from "./../client/components/doctors/chat";
import PatientChat from "./../client/components/patients/chat";
import MyPatient from "./../client/components/doctors/mypatient";
import Booking from "./../client/components/patients/booking";
import Checkout from "./../client/components/patients/checkout";
import BookingSuccess from "./../client/components/patients/booking-success";
import Dashboard from "./../client/components/patients/dashboard";
import Favourties from "./../client/components/patients/dashboard/favourties";
import Profile from "./../client/components/patients/dashboard/profile";
import Password from "./../client/components/patients/dashboard/password";
import DoctorDashboard from "./../client/components/doctors/dashboard";
import SocialMedia from "./../client/components/doctors/socialmedia";
import ScheduleTiming from "./../client/components/doctors/scheduletimings";
import DoctorPassword from "./../client/components/doctors/password";
import Appointments from "./../client/components/doctors/appointments";
import PatientProfile from "./../client/components/doctors/patientprofile";
import AddPescription from "./../client/components/doctors/addpescription";
import AddBilling from "./../client/components/doctors/addbilling";
import ProfileSetting from "./../client/components/doctors/profilesetting";
import Review from "./../client/components/doctors/reviews";
import DoctorRegister from "./../client/components/doctors/register";
import Terms from "./../client/components/pages/terms";
import Policy from "./../client/components/pages/policy";
import Booking2 from "./../client/components/patients/booking/booking2.jsx";
import PatientDependent from "./../client/components/patients/dependent";

const patientRoute = [
  {
    path: "/patient/dashboard",
    component: Dashboard,
  },
  {
    path: "/patient/only",
    component: PatientDependent,
  },
  // template
  {
    path: "/patient/doctor-grid",
    component: DoctorGrid,
  },
  {
    path: "/patient/doctor-list",
    component: DoctorList,
  },
  {
    path: "/pages/video-call",
    component: VideoCall,
  },
  {
    path: "/pages/component",
    component: Components,
  },
  {
    path: "/pages/blank-page",
    component: BlankPage,
  },
  {
    path: "/pages/voice-call",
    component: VoiceCall,
  },
  {
    path: "/doctor/chat-doctor",
    component: DoctorChat,
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
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/blog/blog-list",
    component: BlogList,
  },
  {
    path: "/blog/blog-grid",
    component: BlogGrid,
  },
  {
    path: "/blog/blog-details",
    component: BlogDetails,
  },
  {
    path: "/patient/search-doctor",
    component: SearchDoctor,
  },
  {
    path: "/pages/calendar",
    component: Calendar,
  },
  {
    path: "/pages/invoice",
    component: Invoice,
  },
  {
    path: "/doctor/invoice-view",
    component: InvoiceView,
  },
  {
    path: "/patient/doctor-profile",
    component: DoctorProfile,
  },
  {
    path: "/doctor/my-patients",
    component: MyPatient,
  },
  {
    path: "/patient/booking/booking1",
    component: Booking,
  },
  {
    path: "/patient/booking/booking2",
    component: Booking2,
  },
  {
    path: "/patient/patient-chat",
    component: PatientChat,
  },
  {
    path: "/patient/checkout",
    component: Checkout,
  },
  {
    path: "/patient/booking-success",
    component: BookingSuccess,
  },
  {
    path: "/patient/favourites",
    component: Favourties,
  },
  {
    path: "/patient/profile",
    component: Profile,
  },
  {
    path: "/patient/change-password",
    component: Password,
  },
  {
    path: "/doctor/doctor-dashboard",
    component: DoctorDashboard,
  },
  {
    path: "/social-media",
    component: SocialMedia,
  },
  {
    path: "/doctor/schedule-timing",
    component: ScheduleTiming,
  },
  {
    path: "/doctor-change-passwword",
    component: DoctorPassword,
  },
  {
    path: "/doctor/appointments",
    component: Appointments,
  },
  {
    path: "/doctor/patient-profile",
    component: PatientProfile,
  },
  {
    path: "/add-prescription",
    component: AddPescription,
  },
  {
    path: "/add-billing",
    component: AddBilling,
  },
  {
    path: "/doctor/profile-setting",
    component: ProfileSetting,
  },
  {
    path: "/doctor/review",
    component: Review,
  },
  {
    path: "/doctor/doctor-register",
    component: DoctorRegister,
  },
  {
    path: "/terms",
    component: Terms,
  },
  {
    path: "/privacy-policy",
    component: Policy,
  },
];

export default patientRoute;
