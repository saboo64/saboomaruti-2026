import React, { useState, Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CgSpinner } from 'react-icons/cg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import About from './screens/about-us/about-us';
import Offers from './screens/more/Offers';
import Arena from './screens/outlets/Arena';
import Truevalue from './screens/outlets/Truevalue';
import WorkShop from './screens/outlets/WorkShop';
import BookAService from './screens/more/BookAService';
import DrivingSchoolOutlet from './screens/outlets/DrivingSchoolOutlet';

import Awards from './screens/more/Awards';
import Contact from './screens/more/Contact';
import Accessories from './screens/more/Accessories';
// import Subscribe from './screens/more/Subscribe';
import Insurance from './screens/services/Insurance';
import Finance from './screens/services/Finance';
import Corporate from './screens/services/Corporate';
import ServiceSubscribe from './screens/services/ServiceSubscribe';
import DrivingSchool from './screens/services/DrivingSchool';

import Brezza from './screens/cars/Brezza';
import Celerio from './screens/cars/Celerio';
import Dzire from './screens/cars/Dzire';
import Eeco from './screens/cars/Eeco';
import Ertiga from './screens/cars/Ertiga';
import Spresso from './screens/cars/Spresso';
import Swift from './screens/cars/Swift';
import Wagonr from './screens/cars/Wagonr';

//cng screens

import WagonrCNG from './screens/CNG/WagonrCNG';
import DzireCNG from './screens/CNG/DzireCNG';
import SpressoCNG from './screens/CNG/SpressoCNG';
import ErtigaCNG from './screens/CNG/ErtigaCNG';
import EecoCNG from './screens/CNG/EecoCNG';
import CelerioCNG from './screens/CNG/CelerioCNG';
import Compare from './screens/Compare';

//tour screens

import Tourh3wagonr from './screens/Tour/TourH3Wagonr';
import Tourmertiga from './screens/Tour/TourM';
import Toursdzire from './screens/Tour/TourS';
import Tourveeco from './screens/Tour/TourV';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCloseCircle } from 'react-icons/io5';
// import { BsTelephoneForward } from 'react-icons/bs';
import { Transition, Dialog } from '@headlessui/react';
import Home from './screens/home/Home';
import axios from 'axios';
import ThankYou from './screens/more/ThankYou';
import NotFound from './screens/more/NotFound';
import ArenaCars from './screens/more/ArenaCars';
import CngCars from './screens/more/CngCars';
import TourCars from './screens/more/TourCars';
import PrivacyPolicy from './screens/more/PrivacyPolicy';
import Faq from './screens/more/Faq';
import AltoK10 from './screens/cars/AltoK10';
import SwiftCNG from './screens/CNG/SwiftCNG';

import PaymentTest from './screens/services/PaymentTest';
import AltoK10CNG from './screens/CNG/AltoK10CNG';
import Metaverse from './screens/services/Metaverse';
import Gallery from './screens/more/Gallery';
import BrezzaCNG from './screens/CNG/BrezzaCNG';
import PriceList from './screens/more/PriceList';

// import { Login } from '@emotion-icons/heroicons-outline';
import LoginPage from './screens/Login/Login';
// import CareersPage from './screens/Careers/Careers';
// import ApplicationForm from './screens/Careers/Careers';
import Careers from './screens/Careers/Careers';
// import CarEnquiry from './components/home/CarEnquiry';
// import Popup2 from './components/Popup/Popup2';

import Header2 from './components/header/Header2';
import NewBlog from './screens/more/NewBlog';
import ArenaSitemap from './screens/more/ArenaSitemap';
import RewardPoints from './screens/more/RewardPoints';
// import { Link } from 'react-router-dom';
import TermsAndConditions from './screens/more/TermsAndConditions';
import VictorisPage from './screens/cars/victoris';
import Card from './screens/profile-card/Card';

const ScrollTop = ({ setOpen }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (sessionStorage.getItem('popup') !== 'true') {
        setOpen(true);
        sessionStorage.setItem('popup', 'true');
      }
    }, 5000);

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  const [open, setOpen] = useState(false);

  // const Popup = () => {
  //   const { pathname } = useLocation();
  //   if (pathname === '/landing-page') return null;
  //   return (
  //     <Transition.Root show={open} as={Fragment}>
  //       <Dialog
  //         as='div'
  //         className='fixed inset-0 z-20 overflow-y-auto'
  //         onClose={() => setOpen(true)}
  //       >
  //         <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
  //           <Transition.Child
  //             as={Fragment}
  //             enter='ease-out duration-300'
  //             enterFrom='opacity-0'
  //             enterTo='opacity-100'
  //             leave='ease-in duration-200'
  //             leaveFrom='opacity-100'
  //             leaveTo='opacity-0'
  //           >
  //             <Dialog.Overlay className='fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75' />
  //           </Transition.Child>

  //           <span
  //             className='hidden sm:inline-block sm:align-middle sm:h-screen'
  //             aria-hidden='true'
  //           >
  //             &#8203;
  //           </span>
  //           <Transition.Child
  //             as={Fragment}
  //             enter='ease-out duration-300'
  //             enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
  //             enterTo='opacity-100 translate-y-0 sm:scale-100'
  //             leave='ease-in duration-200'
  //             leaveFrom='opacity-100 translate-y-0 sm:scale-100'
  //             leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
  //           >
  //             <div className='relative inline-block align-bottom bg-[#807b6b] rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full'>
  //               <div className='bg-[#c1beb8]    sm:pb-4'>
  //                 <div className='text-left'>
  //                   <img
  //                     src={require('./assets/banners/Website_Maruti_Suzuki_Arena_Monsoon_Offers_June_offers_Now_Six_6_Airbags_Saboo_RKS_Motor.webp')}
  //                     alt='Website_Maruti_Suzuki_Arena_New_Dazzling_Dzire_with_Five_Star_Rating_Car_Offers_Saboo_RKS_Motor'
  //                     className='w-full h-auto'
  //                   />
  //                   <button
  //                     className='absolute outline-none right-2 top-2'
  //                     onClick={() => setOpen(false)}
  //                   >
  //                     <IoCloseCircle
  //                       size={28}
  //                       className='text-red-600 hover:text-red-900'
  //                     />
  //                   </button>

  //                   {/* <img
  //                     src={require('../src/assets/only-popup.png')}
  //                     alt='Logo'
  //                     className='w-100 h-30'
  //                   /> */}
  //                   {/* <h4 className='text-xl font-normal text-center text-gray-900 '>
  //                     <span className='text-sm text-gray-600'>
  //                       Welcome to RKS Motor
  //                     </span>{' '}
  //                     <br></br>
  //                     <span className='text-2xl font-medium text-black'>
  //                       Explore our wide range of cars, discover exciting&nbsp;
  //                       <span className='font-semibold text-red-700 hover:font-bold hover:underline'>
  //                         <Link to='/maruti-suzuki-car-offers-page'>
  //                           Offers
  //                         </Link>
  //                       </span>
  //                       , and find the perfect ride for you!
  //                     </span>
  //                   </h4> */}
  //                   {/* <Popup2 /> */}
  //                   <LeadPopup setOpen={setOpen} />
  //                 </div>
  //               </div>
  //             </div>
  //           </Transition.Child>
  //         </div>
  //       </Dialog>
  //     </Transition.Root>
  //   );
  // };

  return (
    <>
      <BrowserRouter>
        <AppContent open={open} setOpen={setOpen} />
      </BrowserRouter>
    </>
  );
}

function LeadPopup({ setOpen }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [outlet, setOutlet] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  var result = '';
  var d = new Date();
  result += d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

  // const [submitted, setSubmitted] = useState(false);
  //Handle checkbox
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Update the state when checkbox is toggled
  };

  const checkFormValidity = () => {
    return (
      name.trim() !== '' &&
      phone.length === 10 &&
      model.trim() !== '' &&
      isChecked &&
      !loading
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://crm.zoho.in/crm/WebToLeadForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          xnQsjsdp:
            'c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529',
          zc_gad: '',
          xmIwtLD:
            'adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4',
          actionType: 'TGVhZHM=',
          returnURL: 'https://www.saboomaruti.in/',
          'Last Name': name,
          Email: phone + '@gmail.com',
          Phone: phone,
          LEADCF6: model,
          LEADCF23: outlet,
          // adding date
          LEADCF83: result,
          // Company: 'BroaddCast',
        }),
      });
      if (response.ok) {
        // Handle success, e.g., show a success message
      } else {
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      // Handle network or other errors
    }

    // try {
    //   await axios
    //     .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
    //       name: name,
    //       phone: phone,
    //       // email: email,
    //       model: model,
    //       outlet: outlet,
    //     })
    //     .then((res) => {
    //       toast.success('Enquiry sent successfully');
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //       toast.error('Something went wrong!');
    //       console.log(err);
    //     });
    // } catch (error) {
    //   // toast.error("Something went wrong!");
    //   setLoading(false);
    // }

    try {
      await axios
        .post(
          'https://arena-backend-git-main-arenas-projects.vercel.app/popup',
          {
            name: name,
            phone: phone,
            // email: email,
            model: model,
            outlet: outlet,
          }
        )
        .then((res) => {
          toast.success('Enquiry sent successfully');
        })
        .catch((err) => {
          setLoading(false);
          toast.error('Something went wrong!');
          console.log(err);
        });
    } catch (error) {
      // toast.error("Something went wrong!");
      setLoading(false);
    }

    // Second API call
    await axios
      .get(
        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
   Our Sales consultant will contact you shortly.
   
   Regards
   Popular RKS Pvt. Ltd.
   98488 98488
   www.saboomaruti.in
   www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log('SMS API Response:', res.data);
        // setSubmitted(true);
        setLoading(false);
        setOpen(false);
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        // setSubmitted(true);
        setLoading(false);
        setOpen(false);
      });

    if (window.gtag) {
      window.gtag('event', 'Popup enquiry', {
        'phone number': `+91${phone}`,
        model: `${model}`,
        outlet: `${outlet}`,
        name: `${name}`,
      });
    }
  };

  // useEffect(() => {
  //   if (submitted) {
  //     document.getElementById('arenaCarEnq2').submit();
  //   }
  // }, [submitted]);

  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  return (
    <>
      <div className='max-w-4xl px-5 py-5'>
        <div className='py-1 mt-2 text-gray-900 '>
          <div className='container px-5 mx-auto space-y-6 lg:px-0'>
            <form
            // id='arenaCarEnq2'
            // action={
            //   pattern.test(phone) && phone.length === 10
            //     ? 'https://crm.zoho.in/crm/WebToLeadForm'
            //     : '#'
            // }
            // name='WebToLeads54158000083979838'
            // method={'POST'}
            // acceptCharset='UTF-8'
            >
              {/* <input
                type='text'
                className='hidden'
                name='xnQsjsdp'
                value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
              />
              <input type='hidden' name='zc_gad' id='zc_gad' value='' />
              <input
                type='text'
                className='hidden'
                name='xmIwtLD'
                value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
              />
              <input
                type='text'
                className='hidden'
                name='actionType'
                value='TGVhZHM='
              />
              <input
                type='text'
                className='hidden'
                name='returnURL'
                value='https://www.saboomaruti.in/'
              /> */}
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1'>
                <div>
                  <label className='block px-4 text-sm font-light text-black'>
                    Name
                  </label>
                  <input
                    className='w-full h-10 px-4 border rounded-full outline-none focus:ring-blue-800 focus:border-blue-800'
                    placeholder='Enter your name'
                    id='Last_Name'
                    name='Last Name'
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className=''>
                  <label className='block px-4 text-sm font-light text-black'>
                    Phone
                  </label>
                  <input
                    className='w-full h-10 px-4 border rounded-full outline-none focus:ring-blue-800 focus:border-blue-800'
                    placeholder='Enter your phone number'
                    minlength='10'
                    maxlength='10'
                    id='Phone'
                    name='Phone'
                    value={phone}
                    required
                    minLength='10'
                    maxLength='10'
                    onChange={(e) =>
                      setPhone(
                        e.target.value.replace(/[^1-9 ]/g, '') &&
                          e.target.value.replace(/ /g, '')
                      )
                    }
                  />
                  {phone.length > 7 && phone.length < 10 ? (
                    <small className='text-red-500'>
                      Phone number must be 10 digits
                    </small>
                  ) : !pattern.test(phone) && phone.length === 10 ? (
                    <small className='text-red-500'>
                      Phone number is invalid
                    </small>
                  ) : (
                    ''
                  )}
                </div>

                <div>
                  <label className='block px-4 text-sm font-light text-black'>
                    Model
                  </label>
                  <select
                    id='LEADCF6'
                    name='LEADCF6'
                    onChange={(e) => {
                      const selectedValue = e.target.value;

                      // Check if the selected option is not "Select Model"
                      if (selectedValue !== 'Select Model') {
                        // Perform the backend call or set the model state here
                        setModel(selectedValue);
                      }
                    }}
                    defaultValue='Select Model'
                    className='block w-full h-10 px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800 sm:text-sm'
                  >
                    <option disabled>Select Model</option>
                    <option value='VICTORIS'>VICTORIS</option>
                    <option value='ALTOK10'>ALTOK10</option>
                    <option value='WAGON-R'>WAGON-R</option>
                    <option value='CELERIO'>CELERIO</option>
                    <option value='EPIC-SWIFT-2024'>EPIC-SWIFT-2024</option>
                    <option value='SWIFT'>SWIFT</option>
                    <option value='DZIRE'>DZIRE</option>
                    <option value='S-PRESSO'>S-PRESSO</option>
                    <option value='ERTIGA'>ERTIGA</option>
                    <option value='BREZZA'>BREZZA</option>
                    <option value='EECO'>EECO</option>
                  </select>
                </div>
                <div>
                  <label className='block px-4 text-sm font-light text-black'>
                    Outlet
                  </label>
                  <select
                    id='LEADCF23'
                    name='LEADCF23'
                    onChange={(e) => {
                      const selectedValue = e.target.value;

                      // Check if the selected option is not "Select Model"
                      if (selectedValue !== 'Select Outlet') {
                        // Perform the backend call or set the model state here
                        setOutlet(selectedValue);
                      }
                    }}
                    defaultValue='Select Outlet'
                    className='block w-full h-10 px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-800 focus:border-blue-800 sm:text-sm'
                  >
                    <option disabled>Select Outlet</option>
                    <option value='Somajiguda'>Somajiguda</option>
                    <option value='Malakpet'>Malakpet</option>
                    <option value='Secunderabad'>Secunderabad</option>
                    <option value='Kushaiguda'>Kushaiguda</option>
                    <option value='Kompally'>Kompally</option>
                    <option value='Shamirpet'>Shamirpet</option>
                    <option value='Narsingi'>Narsingi</option>
                    <option value='Kodangal'>Kodangal</option>
                    <option value='Sangeeth Circle'>Sangeeth Circle</option>
                  </select>
                </div>
              </div>

              <div className='p-2 text-xs italic text-gray-900 mb-7'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    id='disclaimer'
                    className="mr-2 appearance-none h-6 w-10  sm:h-15 sm:w-10 md:h-6 md:w-6 lg:h-6 lg:w-6 xl:h-4 xl:w-4 border-2 border-gray-400 rounded-sm checked:bg-green-500 checked:border-gray-300 checked:after:content-['✔'] checked:after:text-white checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 focus:outline-none relative"
                    required
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className='font-semibold'>
                    Disclaimer :
                    <span className='text-gray-500'>
                      {' '}
                      I authorize POPULAR RKS to send notifications via
                      SMS/RCS/WhatsApp/Email{' '}
                    </span>
                  </span>{' '}
                  &nbsp;
                  <a
                    href='/maruti-car-terms-and-conditions'
                    className='text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline hover:font-bold'
                  >
                    {/* &nbsp;Terms and Conditions */}
                  </a>
                </label>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  type='submit'
                  onClick={handleSubmit}
                  disabled={!checkFormValidity()}
                  className={`h-10 inline-flex justify-center hover:bg-gray-500 hover:text-white mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-full w-1/2 text-black bg-white ${
                    !checkFormValidity()
                      ? ' cursor-not-allowed'
                      : ' focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                  }`}
                >
                  {loading ? (
                    <div className='flex items-center justify-center '>
                      <CgSpinner className='h-5 text-white animate-spin' />
                      Loading
                    </div>
                  ) : (
                    'SUBMIT'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function AppContent({ open, setOpen }) {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/Abdul-Hameed') {
      document.body.classList.add('hide-chatbot');
    } else {
      document.body.classList.remove('hide-chatbot');
    }
  }, [pathname]);
  // Hide footer only for this link
  const hideFooter = pathname === '/Abdul-Hameed';

  return (
    <>
      <ScrollTop setOpen={setOpen} />
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/header' element={<Header2 />} />
        <Route path='/about-maruti-suzuki-dealers' element={<About />} />

        {/*====== Cars ======*/}
        {/* <Route
            path="/maruti-alto-800-on-road-price-in-hyderabad"
            element={<Alto />}
          /> */}
        <Route path='/victoris' element={<VictorisPage />} />
        <Route
          path='/all-new-maruti-alto-k10-on-road-price-in-hyderabad'
          element={<AltoK10 />}
        />
        <Route
          path='/maruti-wagon-r-on-road-price-in-hyderabad'
          element={<Wagonr />}
        />
        <Route path='/the-all-new-celerio' element={<Celerio />} />
        <Route
          path='/maruti-swift-car-on-road-price-in-hyderabad'
          element={<Swift />}
        />
        <Route
          path='/maruti-swift-dzire-on-road-price-in-hyderabad'
          element={<Dzire />}
        />
        <Route
          path='/maruti-s-presso-on-road-price-in-hyderabad'
          element={<Spresso />}
        />
        <Route
          path='/maruti-ertiga-on-road-price-in-hyderabad'
          element={<Ertiga />}
        />
        <Route
          path='/maruti-new-brezza-on-road-price-in-hyderabad'
          element={<Brezza />}
        />
        <Route
          path='/maruti-eeco-on-road-price-in-hyderabad'
          element={<Eeco />}
        />

        {/*====== CNG Cars ======*/}

        <Route
          path='/maruti-brezza-cng-on-road-price'
          element={<BrezzaCNG />}
        />
        <Route path='/alto-k10-cng' element={<AltoK10CNG />} />
        <Route
          path='/maruti-wagonr-cng-on-road-price-in-hyderabad'
          element={<WagonrCNG />}
        />
        <Route
          path='/maruti-swift-dzire-cng-on-road-price-in-hyderabad'
          element={<DzireCNG />}
        />
        <Route
          path='/maruti-s-presso-cng-on-road-price-in-hyderabad'
          element={<SpressoCNG />}
        />
        <Route
          path='/maruti-ertiga-cng-on-road-price-in-hyderabad'
          element={<ErtigaCNG />}
        />
        <Route
          path='/maruti-eeco-cng-on-road-price-in-hyderabad'
          element={<EecoCNG />}
        />
        <Route
          path='/maruti-celerio-cng-on-road-price-in-hyderabad'
          element={<CelerioCNG />}
        />
        <Route
          path='/maruti-swift-cng-on-road-price-in-hyderabad'
          element={<SwiftCNG />}
        />

        {/*====== Tour ======*/}
        {/* <Route
            path="/maruti-alto-tour-h1-on-road-price-in-hyderabad"
            element={<Tourh1alto />}
          /> */}
        <Route
          path='/maruti-wagnor-tour-h3-on-road-price-in-hyderabad'
          element={<Tourh3wagonr />}
        />
        <Route
          path='/maruti-dzire-tour-s-on-road-price-in-hyderabad'
          element={<Toursdzire />}
        />
        <Route
          path='/maruti-eeco-tour-v-on-road-price-in-hyderabad'
          element={<Tourveeco />}
        />
        <Route
          path='/maruti-ertiga-tour-m-on-road-price-in-hyderabad'
          element={<Tourmertiga />}
        />

        {/*====== Outlets ======*/}
        <Route path='/showrooms' element={<Arena />} />
        <Route path='/true-value' element={<Truevalue />} />
        <Route
          path='/maruti-suzuki-car-service-center'
          element={<WorkShop />}
        />
        <Route
          path='/maruti-driving-school-locations'
          element={<DrivingSchoolOutlet />}
        />

        {/*====== Services ======*/}
        <Route
          path='/maruti-suzuki-car-insurance-renewal'
          element={<Insurance />}
        />
        <Route
          path='/maruti-suzuki-car-finance-services'
          element={<Finance />}
        />
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/subscribe' element={<ServiceSubscribe />} />
        <Route
          path='/maruti-suzuki-driving-school'
          element={<DrivingSchool />}
        />
        {/*====== Arena Cars ======*/}
        <Route path='/maruti-suzuki-new-cars' element={<ArenaCars />} />
        <Route path='/maruti-suzuki-cng-cars' element={<CngCars />} />
        <Route path='/maruti-suzuki-tour-cars' element={<TourCars />} />

        {/*====== More ======*/}
        <Route path='/maruti-suzuki-car-offers-page' element={<Offers />} />
        <Route
          path='/maruti-car-service-centers-near-me'
          element={<BookAService />}
        />
        <Route path='/payment' element={<PaymentTest />} />
        {/* <Route path="/paymenttest" element={<PaymentTest />} /> */}
        <Route path='/metaverse' element={<Metaverse />} />

        <Route path='/compare-cars' element={<Compare />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/blog' element={<NewBlog />} />
        <Route path='/awards' element={<Awards />} />
        {/* <Route path="/awardstest" element={<AwardsTest />} /> */}
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact-maruti-suzuki-showroom' element={<Contact />} />
        <Route path='/maruti-genuine-accessories' element={<Accessories />} />
        {/* <Route path="/acctest" element={<AccessoryTest />} /> */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/Abdul-Hameed' element={<Card />} />
        <Route path='/careers' element={<Careers />} />
        <Route
          path='/maruti-car-terms-and-conditions'
          element={<TermsAndConditions />}
        />
        <Route path='/maruti-car-privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/thank-you-for-contact-us' element={<ThankYou />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/pricelist' element={<PriceList />} />
        <Route path='/arenasitemap' element={<ArenaSitemap />} />
        <Route path='/marutirewards' element={<RewardPoints />} />
        {/*====== Not Found ======*/}
        <Route path='*' element={<NotFound />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

// const FixedBottomRightPhoto = () => {
//   return (
//     <div
//       className='fixed right-0 m-4 bottom-custom animate-bounce'
//       style={{ bottom: '5rem', zIndex: '9999' }}
//     >
//       <Link to='/maruti-swift-car-on-road-price-in-hyderabad'>
//         <img
//           src={
//             'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/logo/book-now-swift.png'
//           }
//           alt='book your swift'
//           className='w-16 h-16 bg-white shadow-md rounded-2xl'
//         />
//       </Link>
//     </div>
//   );
// };

export default App;
