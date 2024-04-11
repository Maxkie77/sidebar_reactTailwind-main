import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import NewBooking from "./NewBooking";

const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "icons8-dashboard-24", link: "/dashboard" },
    { title: "New Booking", src: "icons8-booking-24", link: "/newbooking" },
    { title: "Room Status", src: "icons8-room-24", link: "/roomstatus" },
    { title: "Room List ", src: "icons8-list-24", link: "/roomlist" },
    { title: "Finance", src: "icons8-bank-card-dollar-24", link: "/finance" },
    { title: "All Booking", src: "icons8-select-all-24", link: "/allbooking" },
    { title: "Feedback/Review", src: "icons8-feedback-24", link: "/feedback" },
    { title: "CMS", src: "icons8-crm-24", link: "/cms" },
    { title: "Member", src: "icons8-member-24", link: "/member" },
    { title: "Staff Activity Log", src: "icons8-log-24", link: "/staffactivitylog" },
    { title: "Logout", src: "icons8-logout-24", link: "/logout", gap: true  },
  ];

  return (
    <Router>
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-gradient-to-b from-gray-600 to-gray-800 h-screen p-5  pt-8 relative duration-300`}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./src/assets/icons8-kappa-35.png"
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Office Admin
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-8" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <Link to={Menu.link} className="flex items-center">
                  <img src={`./src/assets/${Menu.src}.png`} />
                  <span className={`${!open && "hidden"} origin-left duration-200 ml-2`}>
                    {Menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-screen flex-1 p-7">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/newbooking" element={<NewBooking />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;