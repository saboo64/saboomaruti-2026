import React from 'react';

import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';
import OrangeCNG from '../../assets/banners/orange.webp';
import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { CgSpinner } from 'react-icons/cg';
// import { Helmet } from "react-helmet";
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import SeoMeta from '../../components/SEo/SeoMeta';
import { CNGvehicleSeo } from '../../constants/SEOData';

function SpressoCNG() {
  return (
    <>
      <SeoMeta {...CNGvehicleSeo.SpressoCNG} />

      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/spresso/s-presso_banner.jpg'
        className='w-full max-w-full lg:mt-16'
        alt='1'
      />
      <div className='container py-6 pt-6 mx-auto lg:px-0 md:px-3'>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
          <div className='justify-between px-6 space-y-3'>
            <p className='text-4xl font-bold uppercase'>S-PRESSO S-CNG</p>
            <p className='font-bold text-green-900'>
              5.91 lakh <sup>*</sup>
              <p className='font-light text-green-900'>ex-show room price</p>
            </p>

            <p className='text-s'>
              Equipped with the revolutionary S-CNG technology, S-PRESSO S-CNG
              is here for you to live it up and drive green! Producing 50 kW @
              5500 rpm of maximum power and 90 Nm @ 3500 rpm of maximum torque,
              the S-PRESSO S-CNG is spirited to drive. It comes with a CNG tank
              capacity of 55L (water equivalent) and delivers an impressive
              mileage of 31.2 km/kg.
            </p>
            <br></br>
            <p className='text-s'>
              The car has a factory-fitted S-CNG kit which has been integrated
              from the ground up on the factory floor. The CNG setup has a
              leak-proof design and the pipeline structure for CNG flow is made
              up of stainless steel pipes that are corrosion-resistant. To
              ensure optimal performance, S-CNG technology in S-PRESSO has dual
              interdependent ECUs and an Intelligent Injection System – this
              ensures great drivability, smoother pickup, and optimum
              performance.
            </p>
            <br></br>
            <div className='flex flex-row'>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/spresso/factory.webp'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/spresso/performence.webp'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/spresso/safetye.webp'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
            </div>
          </div>
          <div className='object-contain object-left pt-5 h-70 w-100 pl-9'>
            <img className='object-left' src={OrangeCNG} alt='vehicle_banner' />{' '}
          </div>
        </div>
      </div>
      {/* insert form here */}

      {/* <SpressoCarEnquiry /> */}
      <CarEnquiryDown title='S-PRESSO CNG' carName='S-PRESSO CNG' />
      <div className='container py-6 pt-6 mx-auto lg:px-0 md:px-3'>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
          <div className='justify-between px-6 space-y-3'>
            <p className='text-4xl font-bold uppercase'>
              S-PRESSO S-CNG features
            </p>
            <p className='font-bold text-green-900'>
              <div className='object-fill'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/spresso/s-presso.jpg'
                  alt='s-presso-logo'
                />
              </div>{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <Accordian />
      </div>
    </>
  );
}

// const SpressoCarEnquiry = ({ title, carName }) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [model, setModel] = useState('Spresso CNG');
//   // const [method, setMethod] = useState();
//   const [loading, setLoading] = useState(false);
//   const [outlet, setOutlet] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   // Inside your component function
//   // const [showToast, setShowToast] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!name || !phone) {
//       toast.error('Please fill in all required fields.');
//       return;
//     }
//     setLoading(true);
//     try {
//       await axios
//         .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
//           name: name,
//           phone: phone,
//           // email: email,
//           model: model,
//           outlet: outlet,
//         })
//         .then((res) => {
//           toast.success('Enquiry sent successfully');
//         })
//         .catch((err) => {
//           setLoading(false);
//           toast.error('Something went wrong!');
//           console.log(err);
//         });
//     } catch (error) {
//       // toast.error("Something went wrong!");
//       setLoading(false);
//     }

//     try {
//       await axios
//         .post('https://arena-backend-git-main-arenas-projects.vercel.app/onRoadPrice', {
//           name: name,
//           phone: phone,
//           // email: email,
//           model: model,
//           outlet: outlet,
//         })
//         .then((res) => {
//           toast.success('Enquiry sent successfully');
//         })
//         .catch((err) => {
//           setLoading(false);
//           toast.error('Something went wrong!');
//           console.log(err);
//         });
//     } catch (error) {
//       // toast.error("Something went wrong!");
//       setLoading(false);
//     }

//     // Second API call
//     await axios
//       .get(
//         `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
//    Our Sales consultant will contact you shortly.

//    Regards
//    RKS Motor Pvt. Ltd.
//    98488 98488
//    www.saboomaruti.in
//    www.saboonexa.in&type=1&template_id=1407168967467983613`
//       )
//       .then((res) => {
//         console.log('SMS API Response:', res.data);
//         setSubmitted(true);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error sending SMS:', err);
//         setSubmitted(true);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     if (submitted) {
//       document.getElementById('arenaCarEnq2').submit();
//     }
//   }, [submitted]);

//   const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
//   if (phone !== '' && phone.length === 10) {
//     if (!pattern.test(phone)) {
//       toast.error('Enter valid phone number', {
//         theme: 'colored',
//       });
//     }
//   }

//   return (
//     <div className='py-12 mt-12 bg-blue-800'>
//       <div className='container px-5 mx-auto space-y-5 lg:px-0'>
//         <h3 className='text-xl font-normal text-white normal-case'>
//           Get Spresso CNG On-Road price in Hyderabad
//         </h3>
//         <form
//           id='arenaCarEnq2'
//           action={
//             pattern.test(phone) && phone.length === 10
//               ? 'https://crm.zoho.in/crm/WebToLeadForm'
//               : '#'
//           }
//           name='WebToLeads54158000083979838'
//           method={'POST'}
//           acceptCharset='UTF-8'
//         >
//           <input
//             type='text'
//             className='hidden'
//             name='xnQsjsdp'
//             value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
//           />
//           <input type='hidden' name='zc_gad' id='zc_gad' value='' />
//           <input
//             type='text'
//             className='hidden'
//             name='xmIwtLD'
//             value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
//           />
//           <input
//             type='text'
//             className='hidden'
//             name='actionType'
//             value='TGVhZHM='
//           />
//           <input
//             type='text'
//             className='hidden'
//             name='returnURL'
//             value='https://www.saboomaruti.in/thank-you-for-contact-us'
//           />
//           <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>
//             <div>
//               <input
//                 className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
//                 placeholder='Name'
//                 id='Last_Name'
//                 name='Last Name'
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <input
//                 className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
//                 placeholder='Enter your phone number'
//                 minlength='10'
//                 maxlength='10'
//                 id='Phone'
//                 name='Phone'
//                 value={phone}
//                 required
//                 minLength='10'
//                 maxLength='10'
//                 onChange={(e) =>
//                   setPhone(
//                     e.target.value.replace(/[^1-9 ]/g, '') &&
//                       e.target.value.replace(/ /g, '')
//                   )
//                 }
//               />
//               {phone.length > 7 && phone.length < 10 ? (
//                 <small className='text-red-500'>
//                   Phone number must be 10 digits
//                 </small>
//               ) : !pattern.test(phone) && phone.length === 10 ? (
//                 <small className='text-red-500'>Phone number is invalid</small>
//               ) : (
//                 ''
//               )}
//             </div>
//             <div>
//               <select
//                 id='LEADCF6'
//                 name='LEADCF6'
//                 onChange={(e) => setModel(e.target.value)}
//                 className='block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//                 defaultValue='Spresso CNG'
//               >
//                 <option disabled>Select Model</option>

//                 <option value='Spresso CNG'>Spresso CNG</option>
//               </select>
//             </div>
//             <div>
//               <select
//                 id='LEADCF23'
//                 name='LEADCF23'
//                 onChange={(e) => {
//                   const selectedValue = e.target.value;

//                   // Check if the selected option is not "Select Outlet"
//                   if (selectedValue !== 'Select Outlet') {
//                     // Perform the backend call or set the model state here
//                     setOutlet(selectedValue);
//                   }
//                 }}
//                 defaultValue='Select Outlet'
//                 className='block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
//               >
//                 <option disabled>Select Outlet</option>
//                 <option value='Somajiguda'>Somajiguda</option>
//                 <option value='Malakpet'>Malakpet</option>
//                 <option value='Secunderabad'>Secunderabad</option>
//                 <option value='Kushaiguda'>Kushaiguda</option>
//                 <option value='Kompally'>Kompally</option>
//                 <option value='Shamirpet'>Shamirpet</option>
//                 <option value='Narsingi'>Narsingi</option>
//                 <option value='Kodangal'>Kodangal</option>
//               </select>
//             </div>
//           </div>
//           {/* <div className='flex items-center my-3 space-x-1'>
//           <input id='comments' name='comments' type='checkbox' required />
//           <label htmlFor='comments' className='font-medium text-gray-200'>
//             I Agree
//           </label>
//         </div>
//         <p className='mb-2 text-gray-200'>
//           <span className='font-semibold'>Disclaimer :</span> I agree that
//           by clicking the ‘Submit’ button below, I am explicitly soliciting
//           a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
//           Representatives on my ‘Mobile’
//         </p> */}
//           <button
//             type='submit'
//             onClick={handleSubmit}
//             className='inline-flex justify-center h-10 px-4 py-2 mt-4 mb-2 mr-3 text-sm font-medium text-white bg-red-800 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
//           >
//             {loading ? (
//               <div className='flex items-center justify-center'>
//                 <CgSpinner className='h-5 mr-2 text-white animate-spin' />
//                 Loading
//               </div>
//             ) : (
//               'SUBMIT'
//             )}
//           </button>
//           <div className='flex items-start py-1 '>
//             <div className='ml-2 text-sm'>
//               <label
//                 htmlFor='disclaimer'
//                 className='italic font-medium text-gray-700'
//               >
//                 <span className='font-bold text-white'>Disclaimer</span>
//                 <span className='text-white font-extralight'>
//                   : By clicking 'SUBMIT', you agree to our
//                 </span>
//                 <a
//                   href='/maruti-car-terms-and-conditions'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='px-2 text-sm font-bold text-red-700 '
//                 >
//                   Terms and Conditions
//                 </a>
//               </label>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

function Accordian() {
  return (
    <>
      <Tab.Group>
        <div className='flex items-center justify-end'>
          <Tab.List className='p-5 space-x-1'>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-blue-800 text-gray-200 px-4 py-2 rounded shadow'
                  : 'bg-gray-300 text-black hover:bg-blue-700 hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
              }
            >
              Features
            </Tab>

            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-blue-800 text-gray-200 px-4 py-2 rounded shadow'
                  : 'bg-gray-300 text-black hover:bg-blue-700 hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
              }
            >
              Specifications
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* exterior */}
            <Tab.Panel>
              <div className='flex items-center justify-between bg-gray-100'>
                <p className='flex-1 px-5 py-3 border'>Features</p>
                <p className='flex-1 px-5 py-3 border'>LXI CNG</p>
                <p className='flex-1 px-5 py-3 border'>VXI CNG</p>
                <p className='flex-1 px-5 py-3 border'>LXI (O) CNG</p>
                <p className='flex-1 px-5 py-3 border'>VXI (O) CNG</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Exterior</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Combination LED lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          High Mounted LED Stop Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured Door Handles
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured ORVMs
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Side Turn Indicators on ORVMs
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheels</p>
                        <p className='flex-1 px-5 py-3 border'>Steel</p>
                        <p className='flex-1 px-5 py-3 border'>Alloy</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheel Cover</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Door Outer - Weather Strip
                        </p>
                        <p className='flex-1 px-5 py-3 border'>Black</p>
                        <p className='flex-1 px-5 py-3 border'>Chrome</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>INTERIOR</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Leather Wrapped Steering Wheel
                        </p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Modern wood accent with Natural gloss finish
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Dual - Tone Interiors
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Multi - Information Display
                        </p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Outside Temperature Display
                        </p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Low - Fuel Warning Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Urban Sating Chrome Accents on Console, Gear Lever &
                          Steering Wheel
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Door Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Tachometer</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Door Arm rest with Fabric
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Co. Driver Side Sunvisor with Vanity Mirror
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Driver Side Sunvisor with Vanity Miror
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        COMFORT AND CONVENIENCE
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Engine Push Start-Stop Button with Smart Key
                        </p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear AC Vent</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Seat Center Armrest with Cup Holder
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Remote Keyless entry system
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Manual Air Conditioner with Heater
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Automatic Climate Control
                        </p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Pollen Filter
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Accessory Socket
                        </p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Accessory Socket Mobile Pocket
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Central Locking
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Electromagnetic Trunk Opening
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Gear Shift Indicator
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Power Windows (Front + Rear)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Electrically Adjustable ORVMs
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Electrically Foldable ORVMS
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Driver Side Auto Down Power Window
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Driver Side Auto Up Power Window
                        </p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Tilt Steering
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Height Adjustable Driver Seat
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Adjustable Front Sear Headrests
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Luggage room Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Bottle Holde on all Doors
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        SAFETY AND SECURITY{' '}
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Suzuki HEARTECT Body
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          ABS with EBD and Brake Assist
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Dual Airbags</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Reverse Parking Sensors
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Anti - Theft Security System
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Fog Lamps
                        </p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Defogger
                        </p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          ISOFix Child Sear Anchorages
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Seat Belt with PreTensioner
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Pinch Gaurd Power Window (Driver)
                        </p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Engine Immobilizer
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Speed - Sensitive Door Locking
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Night and Day Adjustable IRVM
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>^Speed Alert</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Driver & Co - Driver Seat Belt Reminder
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Key - Left Warning Lamp & Buzzer
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Fog Lamp Garnish (Chrome)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Door Ajar Warning Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        AUDIO & ENTERTAINMENT
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          SmartPlay Dock
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Bluetooth</p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Speakers</p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          USB connectivity/AUX
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'> - </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        INSTRUMENT CLUSTER
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'></Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <div className='flex items-center justify-between bg-gray-100'>
                <p className='flex-1 px-5 py-3 border'>Specifications</p>
                <p className='flex-1 px-5 py-3 border'>LXI CNG</p>
                <p className='flex-1 px-5 py-3 border'>LXI (O) CNG</p>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Dimensions</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Length
                        </p>
                        <p className='flex-1 px-5 py-3 border'>3455 mm</p>
                        <p className='flex-1 px-5 py-3 border'>3455 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Width
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1490 mm (Without side molding)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1490 mm (Without side molding)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Width
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1515 mm (With side molding)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1515 mm (With side molding)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Overall Height
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1475 mm (Unladen)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1475 mm (Unladen)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheelbase</p>
                        <p className='flex-1 px-5 py-3 border'>2360 mm</p>
                        <p className='flex-1 px-5 py-3 border'>2360 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Turning Radius
                        </p>
                        <p className='flex-1 px-5 py-3 border'>4.6 m</p>
                        <p className='flex-1 px-5 py-3 border'>4.6 m</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Tread (Front)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1295 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1295 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Tread (Rear)</p>
                        <p className='flex-1 px-5 py-3 border'>1290 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1290 mm</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Weight</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Kerb Weight</p>
                        <p className='flex-1 px-5 py-3 border'>845 kg</p>
                        <p className='flex-1 px-5 py-3 border'>850 kg</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Gross Vehicle Weight
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1185 kg</p>
                        <p className='flex-1 px-5 py-3 border'>1185 kg</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Engine</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Engine Type</p>
                        <p className='flex-1 px-5 py-3 border'>F8D</p>
                        <p className='flex-1 px-5 py-3 border'>F8D</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Swept Volume</p>
                        <p className='flex-1 px-5 py-3 border'>796 CC</p>
                        <p className='flex-1 px-5 py-3 border'>796 CC</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Number of Cylinders
                        </p>
                        <p className='flex-1 px-5 py-3 border'>3</p>
                        <p className='flex-1 px-5 py-3 border'>3</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Power (CNG)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          30.1 kW @ 6000 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          30.1 kW @ 6000 rpm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Power (Petrol)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          35.3 kW @ 6000 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          35.3 kW @ 6000 rpm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Torque (CNG)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          60 Nm @3500 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          60 Nm @3500 rpm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Maximum Torque (Petrol)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          69 Nm @3500 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          69 Nm @3500 rpm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          No. of Valves
                        </p>
                        <p className='flex-1 px-5 py-3 border'>12</p>
                        <p className='flex-1 px-5 py-3 border'>12</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Transmission</p>
                        <p className='flex-1 px-5 py-3 border'>5 Speed MT</p>
                        <p className='flex-1 px-5 py-3 border'>5 Speed MT</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>
                        Suspension System
                      </span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Front</p>
                        <p className='flex-1 px-5 py-3 border'>
                          MacPherson strut
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          MacPherson strut
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 border'>
                          3-Link Rigid Axle Suspension
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          3-Link Rigid Axle Suspension
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Capacity</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seating Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 border'>4</p>
                        <p className='flex-1 px-5 py-3 border'>4</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Tank Capacity (CNG)
                        </p>
                        <p className='flex-1 px-5 py-3 border '>
                          60L (Water Equivalent Filling Capacity)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          60L (Water Equivalent Filling Capacity)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Tank Capacity (Petrol)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>35 L</p>
                        <p className='flex-1 px-5 py-3 border'>35 L</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Tyres</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Tyre Size</p>
                        <p className='flex-1 px-5 py-3 border'>
                          145/80 R12 (Tubeless)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          145/80 R12 (Tubeless)
                        </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Brakes</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Front</p>
                        <p className='flex-1 px-5 py-3 border'>Disc</p>
                        <p className='flex-1 px-5 py-3 border'>Disc</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
                        <p className='flex-1 px-5 py-3 border'>Drum</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
      <br></br>
      <div className='px-5 text-xs'>
        <p>
          <sup>*</sup>Black glass on the vehicles is due to lighting effect.
        </p>
        <p>
          <sup>*</sup>
          <sup>*</sup>Car models and accessories shown may vary from actual
          product. Images are used for illustration purpose only.
        </p>
        <p>
          <sup>*</sup>Test results are Rule 115 of CMVR, 1989.
        </p>
        <p>
          <sup>*</sup>Prices shown above are ex showroom Delhi.
        </p>
      </div>
      <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
        <div className='px-6 my-auto space-y-3 text-left'>
          <p className='text-4xl font-bold uppercase'>S-PRESSO S-CNG FAQ'S</p>
        </div>
        <div className='object-contain object-right h-50 w-100 pt-14'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base font-bold uppercase'>
                    1. WHAT IS THE FUEL-EFFICIENCY OF MARUTI SUZUKI S-PRESSO
                    S-CNG?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>

                  <p className='indent-8'>
                    In S-PRESSO S-CNG, the Dual Interdependent ECUs seamlessly
                    communicate with the intelligent injection system that helps
                    in getting optimum air-fuel ratio during combustion. This
                    ensures consistent performance across different terrains and
                    driving conditions.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base font-bold uppercase'>
                    2. HOW IS S-PRESSO WITH S-CNG TECHNOLOGY ABLE TO DELIVER
                    SUCH GOOD PERFORMANCE?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    In S-PRESSO S-CNG, the Dual Interdependent ECUs seamlessly
                    communicate with the intelligent injection system that helps
                    in getting optimum air-fuel ratio during combustion. This
                    ensures consistent performance across different terrains and
                    driving conditions.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base font-bold uppercase'>
                    3. IS THE CNG KIT IN S-PRESSO S-CNG TESTED FOR SAFETY?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    Offering enhanced performance and improved safety, S-PRESSO
                    is extensively tested with the CNG setup in place. The
                    sturdy pipe-line structure made of stainless steel and
                    integrated wiring harness means safety is well-taken care of
                    in this car.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base font-bold uppercase'>
                    4. CAN I GET MY S-PRESSO CNG TUNED FROM OUTSIDE?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className='pb-2 text-sm tracking-normal'>
                  <br></br>
                  <p className='indent-8'>
                    If you want to get your S-PRESSO CNG tuned for consistent
                    performance, always prefer visiting the nearest Maruti
                    Suzuki Arena workshop for the same.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

export default SpressoCNG;
