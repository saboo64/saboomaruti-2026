import { Fragment, useState } from 'react';
import { Dialog, Tab, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import './mobile.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const navigation = {
  pages: [
    { name: "Home", to: "/" },
    { name: "About Popular RKS", to: "/about-maruti-suzuki-dealers" },
    { name: "Offers", to: "/maruti-suzuki-car-offers-page" },
  ],
  vehicles: [
    { name: "Arena ", to: "/maruti-suzuki-new-cars" },
    { name: "CNG ", to: "/maruti-suzuki-cng-cars" },
    { name: "Tour ", to: "/maruti-suzuki-tour-cars" },
  ],
  servicepages: [
    {
      name: "Insurance",
      to: "/maruti-suzuki-car-insurance-renewal",
    },
    {
      name: "Finance",
      to: "/maruti-suzuki-car-finance-services",
    },
    {
      name: "Corporate",
      to: "/corporate",
    },
    {
      name: "Payment",
      to: "/payment",
    },

    {
      name: "Learn Driving",
      to: "/maruti-suzuki-driving-school",
    },
  ],

  outlets: [
    {
      name: "Arena",
      to: "/showrooms",
    },
    {
      name: "Truevalue",
      to: "/true-value",
    },
    {
      name: "Workshop",
      to: "/maruti-suzuki-car-service-center",
    },
    {
      name: "Driving School",
      to: "/maruti-driving-school-locations",
    },
  ],
  more: [
    {
      name: "Careers",
      to: "/careers",
    },
    {
      name: "Gallery",
      to: "/gallery",
    },
    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "Awards",
      to: "/awards",
    },
    {
      name: "Contact Us",
      to: "/contact-maruti-suzuki-showroom",
    },
    {
      name: "Accessories",
      to: "/maruti-genuine-accessories",
    },
  ],
};

function MobileHeader() {
  const [tabs, setTabs] = useState(1);
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const fixedNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const location = window.location.pathname;
  window.addEventListener('scroll', fixedNavbar);



  useEffect(() => {
    if (location === '/maruti-suzuki-car-offers-page') {
      setTabs(4);
    }
  }, [location]);

  return (
    <>
    <div className="main_header">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="flex items-center justify-center p-2">
                {/* Logo for larger screens (hidden on smaller screens) */}
                <img
                  src={require("../../assets/pvsl_logo.png")}
                  alt="Logo"
                  className="hidden h-auto max-w-full sm:block"
                />
                {/* Logo for smaller screens (hidden on larger screens) */}
                <img
                  src={require("../../assets/pvsl_logo.png")}
                  alt="Logo"
                  className="h-10 max-w-full sm:hidden"
                />
              </div>
              {/* Links */}
              <Tab.Group
                as="div"
                className="mt-2"
                onClick={() => setOpen(false)}
              ></Tab.Group>

              <div
                className="px-4 py-6 space-y-6 border-t border-gray-200"
                onClick={() => setOpen(false)}
              >
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root text-xl">
                    <Link
                      to={page.to}
                      className="block p-2 -m-2 font-normal text-gray-700"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div
                className="px-4 py-6 space-y-6 border-t border-gray-200"
                onClick={() => setOpen(false)}
              >
                <div className="text-2xl font-bold text-blue-900">Vehicles</div>
                {navigation.vehicles.map((page) => (
                  <div key={page.name} className="flow-root text-xl">
                    <Link
                      to={page.to}
                      className="block p-2 -m-2 font-normal text-gray-700"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className="px-4 py-6 space-y-6 border-t border-gray-200"
                onClick={() => setOpen(false)}
              >
                <div className="text-2xl font-bold text-blue-900">Services</div>
                {navigation.servicepages.map((page) => (
                  <div key={page.name} className="flow-root text-xl">
                    <Link
                      to={page.to}
                      className="block p-2 -m-2 font-normal text-gray-700"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className="px-4 py-6 space-y-6 border-t border-gray-200"
                onClick={() => setOpen(false)}
              >
                <div className="text-2xl font-bold text-blue-900">Outlets</div>
                {navigation.outlets.map((page) => (
                  <div key={page.name} className="flow-root text-xl">
                    <Link
                      to={page.to}
                      className="block p-2 -m-2 font-normal text-gray-700"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className="px-4 py-6 space-y-6 border-t border-gray-200"
                onClick={() => setOpen(false)}
              >
                <div className="text-2xl font-bold text-blue-900">More</div>
                {navigation.more.map((page) => (
                  <div key={page.name} className="flow-root text-xl">
                    <Link
                      to={page.to}
                      className="block p-2 -m-2 font-normal text-gray-700"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div
                className="px-4 py-6 space-y-6 border-t border-gray-200"
                onClick={() => setOpen(false)}
              >
                <div className="text-2xl font-bold text-blue-900">
                  View Showroom in 3D
                </div>

                <div className="flow-root text-xl">
                  <a
                    href="https://www.spatial.io/s/Saboo-Arena-Showroom-62f498277e22f400016f8be8?share=2230171934612064401"
                    className="block p-2 -m-2 font-normal text-gray-700"
                  >
                    Metaverse
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      {/* Desktop, Tab Menu */}
      <div
        className={
          navbar
            ? "fixed top-0 z-20 w-full px-0 shadow-2xl drop-shadow-2xl"
            : ""
        }
      >
        <header className="relative bg-gradient-to-r from-blue-800 to-cyan-500">
          <nav aria-label="Top" className="container mx-auto ">
            <div className="border-gray-200">
              <div className="flex items-center justify-between h-16 px-5">
                {/* Logo */}
                {/* <div className="flex ml-2 mr-auto lg:ml-0"> */}
                <Link to="/">
                  <img
                    className="w-auto h-12 mx-auto"
                    src={require("../../assets/pvsl_logo.png")}
                    alt="logo"
                  />
                </Link>
                {/* </div> */}

                <button
                  type="button"
                  className="p-2 text-gray-200 rounded-md lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* bottom menu */}
      {/* <div className="fixed bottom-0 z-50 flex items-center w-full p-4 border-t border-gray-300 shadow-md drop-shadow-md bottom_footer_mobile">
        <div className="nav-bar">
          <Link to="/" className="text-white">
            <div
              className={`link ${tabs === 1 ? "active" : ""} `}
              onClick={() => setTabs(1)}
            >
              <FaHome className="icon_foot" />
              <p>Home</p>
            </div>
          </Link>

          <a href="tel:9848898488" to="/" className="text-white">
            <div
              className={`link ${tabs === 2 ? "active" : ""} `}
              onClick={() => setTabs(2)}
            >
              <FaPhoneAlt className="icon_foot" />
              <p>Call</p>
            </div>
          </a>

          <Link to="/" className="text-white">
            <div
              className={`link ${tabs === 3 ? "active" : ""} `}
              onClick={() => setTabs(3)}
            >
              <FaCar className="icon_foot" />
              <p>Book</p>
            </div>
          </Link>

          <Link to="/maruti-suzuki-car-offers-page" className="text-white">
            <div
              className={`link ${
                tabs === 4 ? "active" : ""
              } `}
            >
              <FaPercentage className="icon_foot" />
              <p>Offers</p>
            </div>
          </Link>

          <a href="#" className="text-white">
            <div
              className={`link ${tabs === 5 ? "active" : ""} `}
              onClick={handleMenu}
            >
              <FaBars className="icon_foot" />
              <p>Menu</p>
            </div>
          </a>
        </div>
      </div> */}
    </div></>
  );
}

export default MobileHeader;
