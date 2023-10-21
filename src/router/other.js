import Register from "./../client/components/register/register.jsx";
import ForgotPassword from "./../client/components/forgot-password";
import Home from "./../client/components/home/index";
import Home9 from "./../client/components/home/home9";
import Home2 from "./../client/components/home/home2";
import Home3 from "./../client/components/home/home3";
import Home11 from "./../client/components/home/home11";
import Home12 from "./../client/components/home/home12";
import Home13 from "./../client/components/home/home13";
import Home14 from "./../client/components/home/home14";
import HomeSlider1 from "./../client/components/home/homeslider1";
import HomeSlider2 from "./../client/components/home/homeslider2";
import Home10 from "./../client/components/home/home10";
import Home7 from "./../client/components/home/home7";

//blog
import BlogList from "./../client/components/blog/bloglist";
import BlogGrid from "./../client/components/blog/bloggrid";
import BlogDetails from "./../client/components/blog/blogdetails";
//pages
import VideoCall from "./../client/components/pages/videocall";
import VoiceCall from "./../client/components/pages/voicecall";
import SearchDoctor from "./../client/components/pages/searchdoctor/search-doctor1";
import Components from "./../client/components/pages/component";
import Calendar from "./../client/components/pages/calender";
import Invoice from "./../client/components/pages/invoices/invoices";
import InvoiceView from "./../client/components/pages/invoices/view";
import DoctorGrid from "./../client/components/patients/doctorgrid";
import DoctorProfile from "./../client/components/patients/doctorprofile";
import DoctorChat from "./../client/components/doctors/chat";
import PatientChat from "./../client/components/patients/chat";
import MyPatient from "./../client/components/doctors/mypatient";
import Booking from "./../client/components/patients/booking/booking1";
import Booking2 from "./../client/components/patients/booking/booking2";

import Checkout from "./../client/components/patients/checkout";
import BookingSuccess from "./../client/components/patients/booking-success";
import Dashboard from "./../client/components/patients/dashboard";
import PatientDependent from "./../client/components/patients/dependent";
import PatientAccounts from "./../client/components/patients/accounts";
import Orders from "./../client/components/patients/orders";
import MedicalRecords from "./../client/components/patients/medicalrecords";
import MedicalDetails from "./../client/components/patients/medicaldetails";
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
import Registerstepone from "./../client/components/doctors/register/registerstepone";
import Registersteptwo from "./../client/components/doctors/register/registersteptwo";
import Registerstepthree from "./../client/components/doctors/register/registerstepthree";
import Terms from "./../client/components/pages/terms";
import Policy from "./../client/components/pages/policy";
import Aboutus from "./../client/components/pages/aboutus/aboutus";
import Contactus from "./../client/components/pages/contactus/contactus";
import Patientregisterstepone from "./../client/components/register/patientregisterstepone";
import Patientregistersteptwo from "./../client/components/register/patientregistersteptwo";
import Patientregisterstepthree from "./../client/components/register/patientregisterstepthree";
import Patientregisterstepfour from "./../client/components/register/patientregisterstepfour";
import Patientregisterstepfive from "./../client/components/register/patientregisterstepfive";
//pharmacy
import Pharmacy from "./../client/components/Pharmacy/pharmacy";
import pharmacydetail from "./../client/components/Pharmacy/pharmactdetail";
import PharmacySearch from "./../client/components/Pharmacy/pharmacysearch";
import Cart from "./../client/components/Pharmacy/cart";
import Product from "./../client/components/Pharmacy/product";
import ProductDescription from "./../client/components/Pharmacy/productdescription";
import ProductCheckout from "./../client/components/Pharmacy/productcheckout";
import PayoutSuccess from "./../client/components/Pharmacy/payoutsuccess";
import BlankPage from "./../client/components/pages/starter page/index.jsx";
import Pharmacyregister from "./../client/components/Pharmacy/pharmacyregister";
import Pharmacyregisterstepone from "./../client/components/Pharmacy/pharmacyregisterstepone";
import Pharmacyregistersteptwo from "./../client/components/Pharmacy/pharmacyregistersteptwo";
import Pharmacyregisterstepthree from "./../client/components/Pharmacy/pharmacyregisterstepthree";
import Doctorblog from "./../client/components/blog/doctorblog/doctorblog";
import Doctoraddblog from "./../client/components/blog/doctorblog/doctoraddblog";
import Doctorpendingblog from "./../client/components/blog/doctorblog/doctorpendingblog";
import Doctoreditblog from "./../client/components/blog/doctorblog/doctoreditblog";
import EditPrescription from "./../client/components/doctors/patientprofile/edit-prescription";
import EditBilling from "./../client/components/doctors/editbilling/index";
import MapList from "./../client/components/patients/map-list/index";
import OnboardingEmail from "./../client/components/pages/doctoronboarding/onboardingemail";
import OnboardingPersonalize from "./../client/components/pages/doctoronboarding/onboardingpersonalize";
import OnboardingIdentity from "./../client/components/pages/doctoronboarding/onboardingidentity";
import OnboardingPayments from "./../client/components/pages/doctoronboarding/onboardingpayments";
import OnboardingPreferences from "./../client/components/pages/doctoronboarding/onboardingpreferences";
import Onboardingverification from "./../client/components/pages/doctoronboarding/onboardingverification";
import PatientOnboardingEmail from "./../client/components/pages/patientonboarding/Email";
import PatientOnboardingPersonalize from "./../client/components/pages/patientonboarding/Personalize";
import PatientOnboardingDetails from "./../client/components/pages/patientonboarding/Details";
import PatientFamilyDetails from "./../client/components/pages/patientonboarding/FamilyDetails";
import DependantDetails from "./../client/components/pages/patientonboarding/DependantDetails";
import OtherDetails from "./../client/components/pages/patientonboarding/OtherDetails";
import OnboardingEmailOtp from "./../client/components/pages/doctoronboarding/onboardingemail-otp";
import Onboardingphone from "./../client/components/pages/doctoronboarding/onboardingphone";
import Onboardingphoneotp from "./../client/components/pages/doctoronboarding/onboardingphoneotp";
import Onboardingpassword from "./../client/components/pages/doctoronboarding/onboardingpassword";
import PatientEmailOtp from "./../client/components/pages/patientonboarding/PatientEmailOtp";
import PatientPhone from "./../client/components/pages/patientonboarding/Patientphone";
import patientphoneotp from "./../client/components/pages/patientonboarding/patientphoneotp";
import patientpassword from "./../client/components/pages/patientonboarding/patientpassword";
import PhoneOtp from "./../client/components/pages/patientonboarding/phoneotp";
import Producthealthcare from "./../client/components/pages/producthealthcare/index";
import Generalhome from "./../client/components/home/general/generalhome.jsx";
import Comingsoon from "./../client/components/pages/coming soon/index.jsx";
import Maintenance from "./../client/components/pages/maintanence/index.jsx";
import PricingPlan from "./../client/components/pages/pricing plan/index.jsx";
import Error404 from "./../client/components/pages/error/Error404.jsx";
import Error500 from "./../client/components/pages/error/Error500.jsx";
import LoginEmail from "./../client/components/pages/authentication/login-email.jsx";
import LoginPhone from "./../client/components/pages/authentication/login-phone.jsx";
import LoginEmailOtp from "./../client/components/pages/authentication/login-email-otp.jsx";
import LoginPhoneOtp from "./../client/components/pages/authentication/login-phone-otp.jsx";
import ForgotPassword2 from "./../client/components/pages/authentication/forgot-password2.jsx";
import PatientSignup from "./../client/components/pages/authentication/patient-signup.jsx";
import Signup from "./../client/components/pages/authentication/signup.jsx";
import SuccessSignup from "./../client/components/pages/authentication/success-signup.jsx";
import DoctorSignup from "./../client/components/pages/authentication/doctor-signup.jsx";
import Home4 from "./../client/components/home/home4.jsx";
import Faq from "./../client/components/pages/faq/index.jsx";
import EmailOtp from "./../client/components/pages/authentication/email-otp.jsx";
import MobileOtp from "./../client/components/pages/authentication/phone-otp.jsx";
import AvailableTiming from "./../client/components/doctors/availabletiming/index.jsx";
import Accounts from "./../client/components/doctors/account/index.jsx";
import Cardiohome from "./../client/components/home/cardiology/cardiohome.jsx";
import Paediatrichome from "./../client/components/home/paediatric/paediatrichome.jsx";
import Home6 from "./../client/components/home/home6.jsx";
import CosmeticsHome from "./../client/components/home/home11";
import Consultation from "./../client/components/home/consultation.jsx";
import Payment from "./../client/components/home/payment.jsx";
import Bookingsuccess from "./../client/components/home/bookingsuccess.jsx";
import Patientdetails from "./../client/components/home/patientdetails.jsx";
import Loginemail from "./../client/components/home/loginemail.jsx";
import SearchDoctorSpecialist from "./../client/components/pages/searchdoctor/search-doctor-specialist.jsx";

const templateRoute = [
  {
    path: "/patient/doctor-grid",
    component: DoctorGrid,
  },
  {
    path: "/pages/video-call",
    component: VideoCall,
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
    path: "/register",
    component: Register,
  },
  {
    path: "/pages/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/pages/forgot-password2",
    component: ForgotPassword2,
  },
  {
    path: "/pages/login-email",
    component: LoginEmail,
  },
  {
    path: "/pages/login-phone",
    component: LoginPhone,
  },
  {
    path: "/pages/email-otp",
    component: LoginEmailOtp,
  },
  {
    path: "/pages/phone-otp",
    component: LoginPhoneOtp,
  },
  {
    path: "/pages/eotp",
    component: EmailOtp,
  },
  {
    path: "/pages/motp",
    component: MobileOtp,
  },
  {
    path: "/pages/patient-signup",
    component: PatientSignup,
  },
  {
    path: "/pages/doctor-signup",
    component: DoctorSignup,
  },
  {
    path: "/success-signup",
    component: SuccessSignup,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/loginemail",
    component: Loginemail,
  },
  {
    path: "/patientdetails",
    component: Patientdetails,
  },
  {
    path: "/bookingsuccess",
    component: Bookingsuccess,
  },
  {
    path: "/payment",
    component: Payment,
  },
  {
    path: "/consultation",
    component: Consultation,
  },
  {
    path: "/pages/patient-phone-otp",
    component: PhoneOtp,
  },
  {
    path: "/pages/product-healthcare",
    component: Producthealthcare,
  },
  {
    path: "/pages/patient-password",
    component: patientpassword,
  },
  {
    path: "/pages/patient-phone-otp",
    component: patientphoneotp,
  },
  {
    path: "/pages/patient-phone",
    component: PatientPhone,
  },
  {
    path: "/pages/patient-email-otp",
    component: PatientEmailOtp,
  },
  {
    path: "/pages/onboarding-password",
    component: Onboardingpassword,
  },
  {
    path: "/pages/onboarding-phone-otp",
    component: Onboardingphoneotp,
  },
  {
    path: "/pages/onboarding-phone",
    component: Onboardingphone,
  },
  {
    path: "/pages/onboarding-email-otp",
    component: OnboardingEmailOtp,
  },
  {
    path: "/pages/patient-other-details",
    component: OtherDetails,
  },
  {
    path: "/pages/patient-dependant-details",
    component: DependantDetails,
  },
  {
    path: "/pages/patient-family-details",
    component: PatientFamilyDetails,
  },
  {
    path: "/pages/patient-details",
    component: PatientOnboardingDetails,
  },
  {
    path: "/pages/patient-personalize",
    component: PatientOnboardingPersonalize,
  },
  {
    path: "/pages/patient-email",
    component: PatientOnboardingEmail,
  },
  {
    path: "/pages/onboarding-verification",
    component: Onboardingverification,
  },
  {
    path: "/pages/onboarding-preferences",
    component: OnboardingPreferences,
  },
  {
    path: "/pages/onboarding-personalize",
    component: OnboardingPersonalize,
  },
  {
    path: "/pages/onboarding-payments",
    component: OnboardingPayments,
  },
  {
    path: "/pages/onboarding-identity",
    component: OnboardingIdentity,
  },
  {
    path: "/pages/onboarding-email",
    component: OnboardingEmail,
  },
  {
    path: "/patient/map-list",
    component: MapList,
  },
  {
    path: "/editbilling",
    component: EditBilling,
  },
  {
    path: "/editprescription",
    component: EditPrescription,
  },
  {
    path: "/Pharmacy/pharmacy-registerstep-3",
    component: Pharmacyregisterstepthree,
  },
  {
    path: "/Pharmacy/pharmacy-registerstep-2",
    component: Pharmacyregistersteptwo,
  },
  {
    path: "/Pharmacy/pharmacy-registerstep-1",
    component: Pharmacyregisterstepone,
  },
  {
    path: "/Pharmacy/pharmacy-register",
    component: Pharmacyregister,
  },
  {
    path: "/Pharmacy/payment-success",
    component: PayoutSuccess,
  },
  {
    path: "/Pharmacy/product-checkout",
    component: ProductCheckout,
  },
  {
    path: "/Pharmacy/cart",
    component: Cart,
  },
  {
    path: "/Pharmacy/product-description",
    component: ProductDescription,
  },
  {
    path: "/Pharmacy/product-all",
    component: Product,
  },
  {
    path: "/Pharmacy/pharmacy-search",
    component: PharmacySearch,
  },
  {
    path: "/Pharmacy/Pharmacy-details",
    component: pharmacydetail,
  },
  {
    path: "/Pharmacy/Pharmacy-index",
    component: Pharmacy,
  },
  {
    path: "/pages/privacy-policy",
    component: Policy,
  },
  {
    path: "/pages/terms",
    component: Terms,
  },
  {
    path: "/index",
    component: Generalhome,
  },
  {
    path: "/homeslider1",
    component: HomeSlider1,
  },
  {
    path: "/home2",
    component: Home2,
  },
  {
    path: "/home3",
    component: Home3,
  },
  {
    path: "/homeslider2",
    component: HomeSlider2,
  },
  {
    path: "/cardiohome",
    component: Cardiohome,
  },
  {
    path: "/paediatrichome",
    component: Paediatrichome,
  },
  {
    path: "/home6",
    component: Home6,
  },
  {
    path: "/home7",
    component: Home7,
  },
  {
    path: "/home4",
    component: Home4,
  },
  {
    path: "/home9",
    component: Home9,
  },
  {
    path: "/index10",
    component: Home10,
  },
  {
    path: "/home11",
    component: Home11,
  },
  {
    path: "/cosmeticshome",
    component: CosmeticsHome,
  },
  {
    path: "/home12",
    component: Home12,
  },
  {
    path: "/home13",
    component: Home13,
  },
  {
    path: "/home14",
    component: Home14,
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
    path: "/doctor-blog",
    component: Doctorblog,
  },
  {
    path: "/blog/doctor-add-blog",
    component: Doctoraddblog,
  },
  {
    path: "/blog/doctor-pending-blog",
    component: Doctorpendingblog,
  },
  {
    path: "/blog/doctor-edit-blog",
    component: Doctoreditblog,
  },
  {
    path: "/patient/search-doctor1",
    component: SearchDoctor,
  },
  {
    path: "/patient/search-doctor-specialist/:specialistID",
    component: SearchDoctorSpecialist,
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
    path: "/pages/calendar",
    component: Calendar,
  },
  {
    path: "/pages/invoice",
    component: Invoice,
  },
  {
    path: "/doctor/invoice",
    component: Invoice,
  },
  {
    path: "/pages/invoice-view",
    component: InvoiceView,
  },
  {
    path: "/pages/aboutus",
    component: Aboutus,
  },
  {
    path: "/pages/contactus",
    component: Contactus,
  },
  {
    path: "/pages/comingsoon",
    component: Comingsoon,
  },
  {
    path: "/pages/maintenance",
    component: Maintenance,
  },
  {
    path: "/pages/pricing-plan",
    component: PricingPlan,
  },
  {
    path: "/pages/error-404",
    component: Error404,
  },
  {
    path: "/pages/error-500",
    component: Error500,
  },
  {
    path: "/pages/faq",
    component: Faq,
  },
  {
    path: "/patient/patientregisterstep-1",
    component: Patientregisterstepone,
  },
  {
    path: "/patient/patientregisterstep-2",
    component: Patientregistersteptwo,
  },
  {
    path: "/patient/patientregisterstep-3",
    component: Patientregisterstepthree,
  },
  {
    path: "/patient/patientregisterstep-4",
    component: Patientregisterstepfour,
  },
  {
    path: "/patient/patientregisterstep-5",
    component: Patientregisterstepfive,
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
    path: "/patient/booking1",
    component: Booking,
  },
  {
    path: "/patient/booking2",
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
    path: "/patient/dashboard",
    component: Dashboard,
  },
  {
    path: "/patient/dependent",
    component: PatientDependent,
  },
  {
    path: "/patient/accounts",
    component: PatientAccounts,
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
    path: "/patient/medicaldetails",
    component: MedicalDetails,
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
    path: "/doctor/social-media",
    component: SocialMedia,
  },
  {
    path: "/doctor/schedule-timing",
    component: ScheduleTiming,
  },
  {
    path: "/doctor/available-timing",
    component: AvailableTiming,
  },
  {
    path: "/doctor/account",
    component: Accounts,
  },
  {
    path: "/doctor/doctor-change-password",
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
    path: "/registerstepone",
    component: Registerstepone,
  },
  {
    path: "/register-step-2",
    component: Registersteptwo,
  },
  {
    path: "/register-step- 3",
    component: Registerstepthree,
  },
];

export default templateRoute;
