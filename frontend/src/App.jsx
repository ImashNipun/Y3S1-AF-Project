import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Service from "./components/Main/Service";
import AllRecipes from "./components/Recipe/AllRecipes";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AllRecipe from "./components/Admin/Recipe/AllRecipe";
import AddRecipe from "./components/Admin/Recipe/AddRecipe";
import DisplaySingleRecipe from "./components/Admin/Recipe/DisplaySingleRecipe";
import UpdateRecipe from "./components/Admin/Recipe/UpdateRecipe";


//--------------IT21028878-------------------

//Donor
import Donorsignup from "./components/Donor/Auth/Donorsignup";
import Login from "./components/Donor/Auth/Login";

//Admin
import Alldonors from "./components/Admin/Donor/Alldonors";
import {Alldonations} from "./components/Admin/Donor/Alldonations";
import { AcceptedDonations } from "./components/Admin/Donor/AcceptedDonations";
import NotAcceptDonations from "./components/Admin/Donor/NotAcceptDonations"

//Donations
import DonationList from "./components/Donor/Donations/DonationList";

//Profile
import DonorDonations from "./components/Donor/Profile/DonorDonations";
import DonorProfile from "./components/Donor/Profile/DonorProfile";
import DonorEditProfile from "./components/Donor/Profile/DonorEditProfile";
import CreateDonations from "./components/Donor/Profile/CreateDonations";
import DonorRequests from "./components/Donor/Profile/DonorRequests";
//---------------------------------------------------------------------------



import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index />
        <Route path="/services" element={<Service />} />
        <Route path="/recipe" element={<AllRecipes />} />
        <Route path="/create/donations" element={<CreateDonations />} />

        <Route path="/donor/profile" element={<DonorProfile />}>
          <Route index element={<DonorDonations />} />  
          <Route path="/donor/profile/edit" element={<DonorEditProfile />} />
          <Route path="/donor/profile/request" element={<DonorRequests />} />
        </Route>

      </Route>

      <Route path="/admin" element={<AdminDashboard />}>
        <Route index />
        <Route path="/admin/recipe" element={<AllRecipe />} />
        <Route path="/admin/recipe/add-recipe" element={<AddRecipe />} />
        <Route path="/admin/recipe/single-recipe/:rid" element={<DisplaySingleRecipe />} />
        <Route path="/admin/recipe/update-recipe/:rid" element={<UpdateRecipe />} />

        <Route path="/admin/alldonors" element={<Alldonors />} />

        <Route path="/admin/alldonations" element={<Alldonations />}>
          <Route index element={<NotAcceptDonations/>}/>
          <Route path="/admin/alldonations/accepted" element={<AcceptedDonations/>}/>
        </Route>
      </Route>

      {/* IT21028878 */}
      <Route path="/signup-donor" element={<Donorsignup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/donationList" element={<DonationList />} />
    </Routes>
  );
}

export default App;

