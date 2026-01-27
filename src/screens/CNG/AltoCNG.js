// // import React, { useState } from 'react';
// import React from "react";
// // import { useEffect } from 'react';
// import "react-image-gallery/styles/css/image-gallery.css";
// import Header from "../../components/header/Header";
// // import AltoCNG1 from "../../assets/banners/Alto800_Mojito_Green.webp";
// import { Tab } from "@headlessui/react";
// import { Disclosure } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
// // import axios from 'axios';
// // import { toast } from 'react-toastify';
// // import { CgSpinner } from 'react-icons/cg';
// import { Helmet } from "react-helmet";
// import { CarEnquiryDown } from "../Forms/CarEnquiryDown";

// function AltoCNG() {
//   return (
//     <>
//       <Helmet>
//         <title>
//           Maruti Alto 800 CNG Price in Hyderabad | Alto CNG Mileage &
//           Specifications
//         </title>
//         <meta
//           name="title"
//           content="Maruti Alto 800 CNG Price in Hyderabad | Alto CNG Mileage & Specifications"
//         />
//         <meta
//           name="description"
//           content="Maruti Suzuki Alto 800 Price in Hyderabad & Secunderabad. Alto CNG Mileage 31.6KMPL. Best price and offers on Maruti Alto 800 CNG at Saboo Maruti. Visit your nearest Saboo Maruti Showroom for best deals."
//         />
//         <meta
//           name="keywords"
//           content="alto on road price, alto offers, alto price, 2025 Discounts and festive Offers , alto service center, maruti alto on road price, maruti alto offers, maruti alto price, maruti alto service center, maruti alto service center near me, maruti suzuki alto price, maruti suzuki alto on road price, maruti suzuki alto offers,maruti suzuki alto, alto on road price, alto 2025 offers, alto 2025 price, alto on road price in hyderabad, breza offers in hyderabad, alto price in hyderabad, maruti alto 2025 price, maruti alto 2025 on road price, maruti alto 2025 offers, maruti alto 2025 price in hyderabad, maruti alto 2025 on road price in hyderabad, Maruti Suzuki alto 2025 price, Maruti Suzuki alto 2025 on road price, maruti suzuki alto 2025 offers,  vitara alto offers, Vitara alto price, vitara alto on road price, vitara alto 2025 offers, vitara alto 2025 price, vitara alto 2025 on road price, vitara alto 2025 offers"
//         />
//         <meta name="author" content="Broaddcast" />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:url"
//           content="https://www.saboomaruti.in/cng/maruti-alto-800-cng-on-road-price-in-hyderabad"
//         />
//         <meta
//           property="og:title"
//           content="Maruti Alto 800 CNG Price in Hyderabad | Alto CNG Mileage & Specifications | Saboo Maruti"
//         />
//         <meta
//           property="og:description"
//           content="Maruti Suzuki Alto 800 Price in Hyderabad & Secunderabad. Alto CNG Mileage 31.6KMPL. Best price and offers on Maruti Alto 800 CNG at Saboo Maruti. Visit your nearest Saboo Maruti Showroom for best deals."
//         />
//         <meta property="og:image" content="../img/og-tags/alto.webp" />
//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content="https://x.com/saboorksmaruti" />
//         <meta
//           property="twitter:title"
//           content="Maruti Alto 800 CNG Price in Hyderabad | Alto CNG Mileage & Specifications | Saboo Maruti"
//         />
//         <meta
//           property="twitter:description"
//           content="Maruti Suzuki Alto 800 Price in Hyderabad & Secunderabad. Alto CNG Mileage 31.6KMPL. Best price and offers on Maruti Alto 800 CNG at Saboo Maruti. Visit your nearest Saboo Maruti Showroom for best deals."
//         />
//         <meta property="twitter:image" content="../img/og-tags/alto.webp" />
//       </Helmet>
//       <Header />
//       <img
//         src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/Website%2BSaboo%2BRKS%2BMotor%2BMaruti%2BSuzuki%2BArena%2BMarch%2BHoli%2BOffer.webp"
//         className="w-full max-w-full lg:mt-16"
//         alt="1"
//       />
//       <div className="container py-6 pt-6 mx-auto md:px-3">
//         <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2">
//           <div className="justify-between px-6 space-y-3">
//             <p className="text-4xl font-bold uppercase">New Alto S-CNG</p>
//             <p className="font-bold text-green-900">
//               5.13 lakh <sup>*</sup>
//               <p className="font-light text-red-400">ex-show room price</p>
//             </p>

//             <p className="text-s">
//               The New Alto 800 S-CNG is among the line-up of
//               environment-friendly cars offered by Maruti Suzuki that come
//               equipped with the revolutionary S-CNG technology. With 30.1 kW @
//               6000 rpm of power and 60 Nm @ 3500 rpm of torque, the New Alto
//               S-CNG is peppy to drive. The car’s tank capacity allows it to hold
//               up to 60 L(Water equivalent filling capacity). The New Alto S-CNG
//               from Maruti Suzuki can provide an average mileage is 31.59 km/kg.
//             </p>
//             <br></br>
//             <p className="text-s">
//               The New Alto S-CNG features a factory-fitted S-CNG kit that has a
//               leak proof design to help ensure that safety is not compromised.
//               The use of advanced components contributes to the engine’s longer
//               lifespan. The New Alto S-CNG by Maruti Suzuki comes equipped with
//               dual interdependent ECUs and an Intelligent Injection System, with
//               which it manages to offer smoother pickup, great drivability, and
//               an overall superior performance.
//             </p>
//             <br></br>
//             <div className="flex flex-row">
//               <div className="basis-1/1">
//                 <img
//                   src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/icon1.png"
//                   className="w-full max-w-full pr-3"
//                   alt="1"
//                 />
//               </div>
//               <div className="basis-1/1">
//                 <img
//                   src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/icon2.png"
//                   className="w-full max-w-full pr-3"
//                   alt="1"
//                 />
//               </div>
//               <div className="basis-1/1">
//                 <img
//                   src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/icon3.png"
//                   className="w-full max-w-full pr-3"
//                   alt="1"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="object-contain object-right h-50 w-100 pt-14">
//             {/* <img src={AltoCNG1} alt="vehicle_banner" /> */}
//           </div>
//         </div>
//       </div>

//       {/* insert form here */}
//       {/* <AltoCNGForm /> */}

//       <CarEnquiryDown title="Alto 800 CNG" carName="Alto 800 CNG" />

//       <div className="container py-6 pt-6 mx-auto lg:px-0 md:px-3">
//         <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2">
//           <div className="justify-between px-6 space-y-3">
//             <p className="text-4xl font-bold uppercase">Alto S-CNG features</p>
//             <img
//               src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/alto+logo+for+CNG+page.png"
//               className="h-20"
//               alt="alto-logo"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto lg:-mt-10">
//         <Accordian />
//       </div>
//     </>
//   );
// }

// // const AltoCNGForm = ({ title, carName }) => {
// //   const [name, setName] = useState('');
// //   const [phone, setPhone] = useState('');
// //   const [model, setModel] = useState('Alto CNG');
// //   // const [method, setMethod] = useState();
// //   const [loading, setLoading] = useState(false);
// //   const [outlet, setOutlet] = useState('');
// //   const [submitted, setSubmitted] = useState(false);
// //   // Inside your component function
// //   // const [showToast, setShowToast] = useState(false);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     if (!name || !phone) {
// //       toast.error('Please fill in all required fields.');
// //       return;
// //     }
// //     setLoading(true);
// //     try {
// //       await axios
// //         .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
// //           name: name,
// //           phone: phone,
// //           // email: email,
// //           model: model,
// //           outlet: outlet,
// //         })
// //         .then((res) => {
// //           toast.success('Enquiry sent successfully');
// //         })
// //         .catch((err) => {
// //           setLoading(false);
// //           toast.error('Something went wrong!');
// //           console.log(err);
// //         });
// //     } catch (error) {
// //       // toast.error("Something went wrong!");
// //       setLoading(false);
// //     }

// //     try {
// //       await axios
// //         .post('https://arena-backend-git-main-arenas-projects.vercel.app/onRoadPrice', {
// //           name: name,
// //           phone: phone,
// //           // email: email,
// //           model: model,
// //           outlet: outlet,
// //         })
// //         .then((res) => {
// //           toast.success('Enquiry sent successfully');
// //         })
// //         .catch((err) => {
// //           setLoading(false);
// //           toast.error('Something went wrong!');
// //           console.log(err);
// //         });
// //     } catch (error) {
// //       // toast.error("Something went wrong!");
// //       setLoading(false);
// //     }

// //     // Second API call
// //     await axios
// //       .get(
// //         `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
// //    Our Sales consultant will contact you shortly.

// //    Regards
// //    RKS Motor Pvt. Ltd.
// //    98488 98488
// //    www.saboomaruti.in
// //    www.saboonexa.in&type=1&template_id=1407168967467983613`
// //       )
// //       .then((res) => {
// //         console.log('SMS API Response:', res.data);
// //         setSubmitted(true);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.error('Error sending SMS:', err);
// //         setSubmitted(true);
// //         setLoading(false);
// //       });
// //   };

// //   useEffect(() => {
// //     if (submitted) {
// //       document.getElementById('arenaCarEnq2').submit();
// //     }
// //   }, [submitted]);

// //   const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
// //   if (phone !== '' && phone.length === 10) {
// //     if (!pattern.test(phone)) {
// //       toast.error('Enter valid phone number', {
// //         theme: 'colored',
// //       });
// //     }
// //   }

// //   return (
// //     <div className='py-12 mt-12 bg-blue-800'>
// //       <div className='container px-5 mx-auto space-y-5 lg:px-0'>
// //         <h3 className='text-xl font-normal text-white normal-case'>
// //           Get Alto CNG On-Road price in Hyderabad
// //         </h3>
// //         <form
// //           id='arenaCarEnq2'
// //           action={
// //             pattern.test(phone) && phone.length === 10
// //               ? 'https://crm.zoho.in/crm/WebToLeadForm'
// //               : '#'
// //           }
// //           name='WebToLeads54158000083979838'
// //           method={'POST'}
// //           acceptCharset='UTF-8'
// //         >
// //           <input
// //             type='text'
// //             className='hidden'
// //             name='xnQsjsdp'
// //             value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
// //           />
// //           <input type='hidden' name='zc_gad' id='zc_gad' value='' />
// //           <input
// //             type='text'
// //             className='hidden'
// //             name='xmIwtLD'
// //             value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
// //           />
// //           <input
// //             type='text'
// //             className='hidden'
// //             name='actionType'
// //             value='TGVhZHM='
// //           />
// //           <input
// //             type='text'
// //             className='hidden'
// //             name='returnURL'
// //             value='https://www.saboomaruti.in/thank-you-for-contact-us'
// //           />
// //           <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>
// //             <div>
// //               <input
// //                 className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
// //                 placeholder='Name'
// //                 id='Last_Name'
// //                 name='Last Name'
// //                 onChange={(e) => setName(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <input
// //                 className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
// //                 placeholder='Enter your phone number'
// //                 minlength='10'
// //                 maxlength='10'
// //                 id='Phone'
// //                 name='Phone'
// //                 value={phone}
// //                 required
// //                 minLength='10'
// //                 maxLength='10'
// //                 onChange={(e) =>
// //                   setPhone(
// //                     e.target.value.replace(/[^1-9 ]/g, '') &&
// //                       e.target.value.replace(/ /g, '')
// //                   )
// //                 }
// //               />
// //               {phone.length > 7 && phone.length < 10 ? (
// //                 <small className='text-red-500'>
// //                   Phone number must be 10 digits
// //                 </small>
// //               ) : !pattern.test(phone) && phone.length === 10 ? (
// //                 <small className='text-red-500'>Phone number is invalid</small>
// //               ) : (
// //                 ''
// //               )}
// //             </div>
// //             <div>
// //               <select
// //                 id='LEADCF6'
// //                 name='LEADCF6'
// //                 onChange={(e) => setModel(e.target.value)}
// //                 className='block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
// //                 defaultValue='Alto CNG'
// //               >
// //                 <option disabled>Select Model</option>

// //                 <option value='Alto CNG'>Alto CNG</option>
// //               </select>
// //             </div>
// //             <div>
// //               <select
// //                 id='LEADCF23'
// //                 name='LEADCF23'
// //                 onChange={(e) => {
// //                   const selectedValue = e.target.value;

// //                   // Check if the selected option is not "Select Outlet"
// //                   if (selectedValue !== 'Select Outlet') {
// //                     // Perform the backend call or set the model state here
// //                     setOutlet(selectedValue);
// //                   }
// //                 }}
// //                 defaultValue='Select Outlet'
// //                 className='block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
// //               >
// //                 <option disabled>Select Outlet</option>
// //                 <option value='Somajiguda'>Somajiguda</option>
// //                 <option value='Malakpet'>Malakpet</option>
// //                 <option value='Secunderabad'>Secunderabad</option>
// //                 <option value='Kushaiguda'>Kushaiguda</option>
// //                 <option value='Kompally'>Kompally</option>
// //                 <option value='Shamirpet'>Shamirpet</option>
// //                 <option value='Narsingi'>Narsingi</option>
// //                 <option value='Kodangal'>Kodangal</option>
// //               </select>
// //             </div>
// //           </div>
// //           {/* <div className='flex items-center my-3 space-x-1'>
// //           <input id='comments' name='comments' type='checkbox' required />
// //           <label htmlFor='comments' className='font-medium text-gray-200'>
// //             I Agree
// //           </label>
// //         </div>
// //         <p className='mb-2 text-gray-200'>
// //           <span className='font-semibold'>Disclaimer :</span> I agree that
// //           by clicking the ‘Submit’ button below, I am explicitly soliciting
// //           a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
// //           Representatives on my ‘Mobile’
// //         </p> */}
// //           <button
// //             type='submit'
// //             onClick={handleSubmit}
// //             className='inline-flex justify-center h-10 px-4 py-2 mt-4 mb-2 mr-3 text-sm font-medium text-white bg-red-800 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
// //           >
// //             {loading ? (
// //               <div className='flex items-center justify-center'>
// //                 <CgSpinner className='h-5 mr-2 text-white animate-spin' />
// //                 Loading
// //               </div>
// //             ) : (
// //               'SUBMIT'
// //             )}
// //           </button>
// //           <div className='flex items-start py-1 '>
// //             <div className='ml-2 text-sm'>
// //               <label
// //                 htmlFor='disclaimer'
// //                 className='italic font-medium text-gray-700'
// //               >
// //                 <span className='font-bold text-white'>Disclaimer</span>
// //                 <span className='text-white font-extralight'>
// //                   : By clicking 'SUBMIT', you agree to our
// //                 </span>
// //                 <a
// //                   href='/maruti-car-terms-and-conditions'
// //                   target='_blank'
// //                   rel='noopener noreferrer'
// //                   className='px-2 text-sm font-bold text-red-700 '
// //                 >
// //                   Terms and Conditions
// //                 </a>
// //               </label>
// //             </div>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// function Accordian() {
//   return (
//     <>
//       <Tab.Group>
//         <div className="flex items-center justify-end">
//           <Tab.List className="p-5 space-x-1">
//             <Tab
//               className={({ selected }) =>
//                 selected
//                   ? "bg-blue-800 text-gray-200 px-4 py-2 rounded-full shadow"
//                   : "bg-gray-300 text-black hover:bg-blue-600 hover:text-gray-300 mb-3 px-4 py-2 rounded-full shadow"
//               }
//             >
//               Features
//             </Tab>

//             <Tab
//               className={({ selected }) =>
//                 selected
//                   ? "bg-blue-800 text-gray-200 px-4 py-2 rounded-full shadow"
//                   : "bg-gray-300 text-black hover:bg-blue-600 hover:text-gray-300 mb-3 px-4 py-2 rounded-full shadow"
//               }
//             >
//               Specifications
//             </Tab>
//           </Tab.List>
//         </div>
//         <div>
//           <Tab.Panels>
//             {/* exterior */}
//             <Tab.Panel>
//               <div className="flex items-center justify-between bg-gray-100">
//                 <p className="flex-1 px-5 py-3 border">Features</p>
//                 <p className="flex-1 px-5 py-3 border">LXI CNG</p>
//                 <p className="flex-1 px-5 py-3 border">LXI (O) CNG</p>
//               </div>

//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">Exterior</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Body Coloured Outside door Handles
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Body Coloured Bumpers
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Wheel Covers (Full)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">INTERIOR</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Dual-tone interiors
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           B &#38; C Pillar Upper Trims
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           C Pillar Lower Trim (Molded)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Seat Upholstery (Fabric+Vinyl)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Silver Accent Inside Door Handles
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Silver Accent on Steering Wheel
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Silver Accent on Louvers
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">COMFORT</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Air Conditioner With Heater
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Power Steering
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Front Power Windows
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Assist Grips (Co - Dr. +)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Digital Clock (In Speedometer Display)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Sun Visor (Dr.+Co Dr.)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           RR Seat Head Test - Integrated Type
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Remote Back Door Opener
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Remote Fuel Lid Opener
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">UTILITY</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Front Console Bottle Holder
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Rear Console Bottle Holder
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Front Door Trim Map Pocket (Dr.)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Front Door Trim Map Pocket (Passenger)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">SAFETY</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Headlight Leveling
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           RR Seat belt ELR Type
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           High Mounted Stop Lamp
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Immobiliser</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Front Wiper &#38; Washer (2 Speed + intermittent)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Tubeless Tyres
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Collapsible Steering Column
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Rear Door Child Lock
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Driver Side Airbag
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Passenger Airbag
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Reverse Parking Sensor
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">ABS with EBD</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Sear Belt Reminder - Dr. + Co - Dr.
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Speed Alert System
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                         <p className="flex-1 px-5 py-3 border">✔</p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//             </Tab.Panel>

//             {/* interior */}
//             <Tab.Panel>
//               <div className="flex items-center justify-between bg-gray-100">
//                 <p className="flex-1 px-5 py-3 border">Specifications</p>
//                 <p className="flex-1 px-5 py-3 border">LXI CNG</p>
//                 <p className="flex-1 px-5 py-3 border">LXI (O) CNG</p>
//               </div>

//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">Dimensions</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Overall Length
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">3455 mm</p>
//                         <p className="flex-1 px-5 py-3 border">3455 mm</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Overall Width
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           1490 mm (Without side molding)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           1490 mm (Without side molding)
//                         </p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Overall Width
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           1515 mm (With side molding)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           1515 mm (With side molding)
//                         </p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Overall Height
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           1475 mm (Unladen)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           1475 mm (Unladen)
//                         </p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Wheelbase</p>
//                         <p className="flex-1 px-5 py-3 border">2360 mm</p>
//                         <p className="flex-1 px-5 py-3 border">2360 mm</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Turning Radius
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">4.6 m</p>
//                         <p className="flex-1 px-5 py-3 border">4.6 m</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Tread (Front)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">1295 mm</p>
//                         <p className="flex-1 px-5 py-3 border">1295 mm</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Tread (Rear)</p>
//                         <p className="flex-1 px-5 py-3 border">1290 mm</p>
//                         <p className="flex-1 px-5 py-3 border">1290 mm</p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">Weight</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Kerb Weight</p>
//                         <p className="flex-1 px-5 py-3 border">845 kg</p>
//                         <p className="flex-1 px-5 py-3 border">850 kg</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Gross Vehicle Weight
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">1185 kg</p>
//                         <p className="flex-1 px-5 py-3 border">1185 kg</p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">Engine</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Engine Type</p>
//                         <p className="flex-1 px-5 py-3 border">F8D</p>
//                         <p className="flex-1 px-5 py-3 border">F8D</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Swept Volume</p>
//                         <p className="flex-1 px-5 py-3 border">796 CC</p>
//                         <p className="flex-1 px-5 py-3 border">796 CC</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Number of Cylinders
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">3</p>
//                         <p className="flex-1 px-5 py-3 border">3</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Maximum Power (CNG)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           30.1 kW @ 6000 rpm
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           30.1 kW @ 6000 rpm
//                         </p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Maximum Power (Petrol)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           35.3 kW @ 6000 rpm
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           35.3 kW @ 6000 rpm
//                         </p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Maximum Torque (CNG)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           60 Nm @3500 rpm
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           60 Nm @3500 rpm
//                         </p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Maximum Torque (Petrol)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           69 Nm @3500 rpm
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           69 Nm @3500 rpm
//                         </p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           No. of Valves
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">12</p>
//                         <p className="flex-1 px-5 py-3 border">12</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Transmission</p>
//                         <p className="flex-1 px-5 py-3 border">5 Speed MT</p>
//                         <p className="flex-1 px-5 py-3 border">5 Speed MT</p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">
//                         Suspension System
//                       </span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Front</p>
//                         <p className="flex-1 px-5 py-3 border">
//                           MacPherson strut
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           MacPherson strut
//                         </p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Rear</p>
//                         <p className="flex-1 px-5 py-3 border">
//                           3-Link Rigid Axle Suspension
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           3-Link Rigid Axle Suspension
//                         </p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">Capacity</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Seating Capacity
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">4</p>
//                         <p className="flex-1 px-5 py-3 border">4</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Fuel Tank Capacity (CNG)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border ">
//                           60L (Water Equivalent Filling Capacity)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           60L (Water Equivalent Filling Capacity)
//                         </p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">
//                           Fuel Tank Capacity (Petrol)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">35 L</p>
//                         <p className="flex-1 px-5 py-3 border">35 L</p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">Tyres</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Tyre Size</p>
//                         <p className="flex-1 px-5 py-3 border">
//                           145/80 R12 (Tubeless)
//                         </p>
//                         <p className="flex-1 px-5 py-3 border">
//                           145/80 R12 (Tubeless)
//                         </p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//               <Disclosure>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none">
//                       <span className="text-base uppercase">Brakes</span>
//                       <ChevronDownIcon
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-black font-bold`}
//                       />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Front</p>
//                         <p className="flex-1 px-5 py-3 border">Disc</p>
//                         <p className="flex-1 px-5 py-3 border">Disc</p>
//                       </div>
//                       <div className="flex items-center justify-between text-base">
//                         <p className="flex-1 px-5 py-3 border ">Rear</p>
//                         <p className="flex-1 px-5 py-3 border">Drum</p>
//                         <p className="flex-1 px-5 py-3 border">Drum</p>
//                       </div>
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//             </Tab.Panel>
//           </Tab.Panels>
//         </div>
//       </Tab.Group>
//       <br></br>
//       <div className="px-5 text-xs">
//         <p>
//           <sup>*</sup>Black glass on the vehicles is due to lighting effect.
//         </p>
//         <p>
//           <sup>*</sup>
//           <sup>*</sup>Car models and accessories shown may vary from actual
//           product. Images are used for illustration purpose only.
//         </p>
//         <p>
//           <sup>*</sup>Test results are Rule 115 of CMVR, 1989.
//         </p>
//         <p>
//           <sup>*</sup>Prices shown above are ex showroom Delhi.
//         </p>
//       </div>
//       <br></br>
//       <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2 ">
//         <div className="px-6 my-auto space-y-3 text-left ">
//           <p className="text-4xl font-bold uppercase">New Alto S-CNG</p>
//         </div>
//         <div className="object-contain object-right h-50 w-100 pt-14">
//           <Disclosure>
//             {({ open }) => (
//               <>
//                 <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none">
//                   <span className="text-base uppercase">
//                     1. WHAT ARE THE DIFFERENT MODES FOR DRIVING THE NEW ALTO
//                     S-CNG?
//                   </span>
//                 </Disclosure.Button>
//                 <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                   <p className="indent-8">
//                     There are basically three fuel modes in the New Alto S-CNG,
//                     which are listed below: Petrol Mode – In this mode, the car
//                     starts and drives on Petrol. Auto Mode – In this mode, the
//                     car starts on Petrol and then automatically switches over to
//                     CNG (This is also the mode that is recommended by the
//                     company). Forced CNG mode – In this mode, you are allowed to
//                     start the car on CNG. This is a mode that is only advised
//                     when there is no petrol in the car
//                   </p>
//                 </Disclosure.Panel>
//               </>
//             )}
//           </Disclosure>
//           <Disclosure>
//             {({ open }) => (
//               <>
//                 <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none">
//                   <span className="text-base uppercase">
//                     2. WHAT SHOULD I DO IF THE CNG MALFUNCTION WARNING LIGHT IN
//                     MY ALTO S-CNG KEEPS GLOWING WHEN I AM DRIVING?
//                   </span>
//                 </Disclosure.Button>
//                 <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                   <p>
//                     The reason behind such a situation may vary. So, it is
//                     recommended that you take your car to the Maruti Suzuki
//                     authorized service centre nearest to you.
//                   </p>
//                 </Disclosure.Panel>
//               </>
//             )}
//           </Disclosure>
//           <Disclosure>
//             {({ open }) => (
//               <>
//                 <Disclosure.Button className="flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none">
//                   <span className="text-base uppercase">
//                     3. CAN I GET MY NEW ALTO S-CNG TUNED FROM OUTSIDE?
//                   </span>
//                 </Disclosure.Button>
//                 <Disclosure.Panel className="pb-2 text-sm text-gray-500">
//                   <p>
//                     Getting your CNG kit tuned from outside is something that is
//                     not advisable at all. Since the Alto S-CNG comes equipped
//                     with factory-fitted CNG kit, the right tuning equipment for
//                     properly calibrating the kit will only be available at a
//                     Maruti Suzuki authorized service centre.
//                   </p>
//                 </Disclosure.Panel>
//               </>
//             )}
//           </Disclosure>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AltoCNG;
