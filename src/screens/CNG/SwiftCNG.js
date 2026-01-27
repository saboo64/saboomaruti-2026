import React from 'react';
// import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../components/header/Header';

import { Tab } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { CgSpinner } from 'react-icons/cg';
// import { Helmet } from "react-helmet";
import { CarEnquiryDown } from '../Forms/CarEnquiryDown';
import SeoMeta from '../../components/SEo/SeoMeta';
import { CNGvehicleSeo } from '../../constants/SEOData';

function SwiftCNG() {
  return (
    <>
      <SeoMeta {...CNGvehicleSeo.SwiftCNG} />
      <Header />
      <img
        //  src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/swift-2024-launch/swift-cng-launch/cng-page-banner/cng-page-desktop-new.webp"
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/alto/Website%2BSaboo%2BRKS%2BMotor%2BMaruti%2BSuzuki%2BArena%2BMarch%2BHoli%2BOffer.webp'
        className='w-full max-w-full lg:mt-16'
        alt='1'
      />
      <div className='container py-6 mx-auto md:px-3 md:py-10 lg:py-16'>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
          <div className='justify-between px-6 space-y-3'>
            <p className='text-4xl font-bold uppercase'>New Swift S-CNG</p>
            <p className='font-bold text-green-900'>
              8.195 lakh <sup>*</sup>
              <p className='font-light text-red-400'>ex-show room price</p>
            </p>

            <p className='text-s'>
              Discover unmatched efficiency with the Epic New Swift, now
              featuring our Factory-Fitted S-CNG technology. This combination of
              the Z-Series Engine and S-CNG helps achieve the best-in-segment
              mileage of 32.85* km/kg without compromising on what makes the
              swift special; its exhilarating driving dynamics.
            </p>
            <br></br>
            <p className='text-s'>
              This variant of the Swift also includes smart features like a CNG
              fuel level indicator and safe refuelling options. So what are you
              waiting for? It’s time to go #Swifting with S-CNG.
            </p>
            <br></br>
            <div className='flex flex-row'>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/wagonr/icon1.png'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/wagonr/icon2.png'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
              <div className='basis-1/1'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/CNG/wagonr/icon3.png'
                  className='w-full max-w-full pr-3'
                  alt='1'
                />
              </div>
            </div>
          </div>
          <div className='object-contain object-right w-100 '>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/colors/car-05.webp'
              alt='vehicle_banner'
              className='scale-x-[-1]'
            />
          </div>
        </div>
      </div>
      {/* insert form here  */}

      {/* <SwiftCarEnquiry /> */}
      <CarEnquiryDown title='SWIFT CNG' carName='SWIFT CNG' />
      <div className='container py-6 pt-6 mx-auto lg:px-0 md:px-3'>
        <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2'>
          <div className='justify-between px-6 space-y-3'>
            <p className='text-4xl font-bold uppercase'>Swift S-CNG features</p>
            <img
              //  src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/cng/cng_page/logo_swift"
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/logo/swift-cng-logo.webp'
              className='max-h-20'
              alt='swift-logo'
            />
          </div>
        </div>
      </div>
      <div className='container mx-auto lg:-mt-10'>
        <Accordian />
      </div>
    </>
  );
}

// const SwiftCarEnquiry = ({ title, carName }) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [model, setModel] = useState('Swift CNG');
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
//           Get Swift CNG On-Road price in Hyderabad
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
//                 defaultValue='Swift CNG'
//               >
//                 <option disabled>Select Model</option>

//                 <option value='Swift CNG'>Swift CNG</option>
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
                <p className='flex-1 px-5 py-3 border'>VXI CNG</p>
                <p className='flex-1 px-5 py-3 border'>ZXI CNG</p>
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
                          LED Rear Combination Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          LED High Mounted Stop Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured Outside Rear View Mirrors
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Side Turn Indicators on Outside Rear View Mirrors
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
                        <p className='flex-1 px-5 py-3 border '>
                          Full Wheel Cover
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured Bumpers
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Body Coloured Outside Front Door Handles
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
                          Leather^ Wrapped Steering Wheel
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Multi-Information Display
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Outside Temperature Display
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Silver Ornament on Front Door Armrest
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Seat Back Pocket (Co-Driver side)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Chrome Parking Brake Lever Tip
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>IP Ornament</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Gear Shift Knob in Piano Black Finish
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Chrome Inside Door Handles
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Dome Lamp
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
                          Co- Driver Side Sunvisor with Vanity Mirror
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Driver Side Sunvisor with Ticket Holder
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
                        safety and security
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
                          ABS with EBD and Brake Assist
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Dual Front Airbags
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Fog Lamps
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          ISOFix Child Seat Anchorages
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Seat Belt with Pre-Tensioner and Force Limiter
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Pinch Guard Power Window (Driver Side)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
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
                          Speed-Sensitive Automatic Door Lock
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Day and Night Adjustable Inside Rear View Mirror
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          High Speed Alert System*
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Seat Belt Reminder & Buzzer(Driver & Co-Driver Side)
                        </p>
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
                          Security Alarm System
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Pedestrian Protection Compliance
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
                        Audio & Entertainment
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
                          All New Feather Touch Audio System
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Navigation System with Live Traffic Update (through
                          Smartplay Studio App)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          AHA Platform (Through Smartplay Studio App){' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Steering Mounted Audio & Calling Controls
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Door Speakers (4 Speakers)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Tweeters (2 Tweeters)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Roof Antenna</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          17.78 cm Touchscreen Smartplay Studio
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Voice Command
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Smartphone Connect (Android Auto and Apple CarPlay)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Remote Control (through Smartplay Studio App)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          AUX-in, USB & Bluetooth Connectivity
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
                        comfort and convenience
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
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Automatic Climate Control
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Remote Keyless Entry System
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Manual Air Conditioner with Heater{' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Front Accessory Socket
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Central Door Locking
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Electromagnetic Back Door Opener
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
                          Electrically Adjustable Outside Rear View Mirrors
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Electrically Foldable Outside Rear View Mirrors{' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Auto Down Power Window (Driver Side){' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Auto Up Power Window (Driver Side)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Power & Tilt Steering{' '}
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
                          Adjustable Front Seat Headrests
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Luggage Room Lamp
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Defogger
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Wiper & Washer
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Adjustable Rear Seat Headrests
                        </p>
                        <p className='flex-1 px-5 py-3 border'>-</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          60:40 Split Rear Seat
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Rear Parcel Shelf
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Low Fuel Warning Lamp
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
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Headlamp On Reminder
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
                        colour variants
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
                          Solid Fire Red
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Pear Metallic Midnight Blue
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Pearl Arctic White
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Pearl Metallic Lucent Orange
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Metallic Magma Grey
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Metallic Silky Silver
                        </p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                        <p className='flex-1 px-5 py-3 border'>✔</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <div className='flex items-center justify-between bg-gray-100'>
                <p className='flex-1 px-5 py-3 border'>Specifications</p>
                <p className='flex-1 px-5 py-3 border'>VXI CNG</p>
                <p className='flex-1 px-5 py-3 border'>ZXI CNG</p>
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
                        <p className='flex-1 px-5 py-3 border '>Length</p>
                        <p className='flex-1 px-5 py-3 border'>3845 mm</p>
                        <p className='flex-1 px-5 py-3 border'>3845 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Width</p>
                        <p className='flex-1 px-5 py-3 border'>1735 mm</p>
                        <p className='flex-1 px-5 py-3 border'>1735 mm</p>
                      </div>

                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Height</p>
                        <p className='flex-1 px-5 py-3 border'>
                          1530 mm (Unladen)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1530 mm (Unladen)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Wheelbase</p>
                        <p className='flex-1 px-5 py-3 border'>2450 mm</p>
                        <p className='flex-1 px-5 py-3 border'>2450 mm</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Track, Front (mm)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1530 (165/80R14)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1520 (185/65R15)
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Track, rear (mm)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1530 (165/80R14)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          1520 (185/65R15)
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
                      <span className='text-base uppercase'>engine</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Engine Type</p>
                        <p className='flex-1 px-5 py-3 border'>
                          Advanced K Series Dual Jet, Dual VVT Engine{' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Advanced K Series Dual Jet, Dual VVT Engine
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Fuel Type</p>
                        <p className='flex-1 px-5 py-3 border'>
                          Gasoline & CNG{' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Gasoline & CNG
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Engine Capacity{' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1197 cc</p>
                        <p className='flex-1 px-5 py-3 border'>1197 cc</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Emission Type{' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>BS VI</p>
                        <p className='flex-1 px-5 py-3 border'>BS VI</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Max Power (CNG)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          57 kW @ 6000 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          57 kW @ 6000 rpm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Max Torque (CNG){' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          98.5 Nm @ 4300 rpm
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          98.5 Nm @ 4300 rpm
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Number of Cylinders{' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>4</p>
                        <p className='flex-1 px-5 py-3 border'>4</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Transmission</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>5MT</p>
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
                      <span className='text-base uppercase'>brakes</span>
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
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Steering</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Turning Radius
                        </p>
                        <p className='flex-1 px-5 py-3 border'>4.8 m</p>
                        <p className='flex-1 px-5 py-3 border'>4.8 m</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Power Steering Type
                        </p>
                        <p className='flex-1 px-5 py-3 border '>Electric</p>
                        <p className='flex-1 px-5 py-3 border'>Electric</p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Suspension</span>
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
                          Mac Pherson Strut
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          MacPherson Strut
                        </p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Rear</p>
                        <p className='flex-1 px-5 py-3 border'>Torsion Beam</p>
                        <p className='flex-1 px-5 py-3 border'>Torsion Beam </p>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border hover:bg-gray-200 focus:outline-none'>
                      <span className='text-base uppercase'>Fuel Tank</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Fuel Tank Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Gasoline: 37L CNG: 55L (water equivalent)
                        </p>
                        <p className='flex-1 px-5 py-3 border'>
                          Gasoline: 37L CNG: 55L (water equivalent)
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
                      <span className='text-base uppercase'>Tyre Size</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black font-bold`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Steal</p>
                        <p className='flex-1 px-5 py-3 border'>165/80 R14 </p>
                        <p className='flex-1 px-5 py-3 border'>185/65 R15</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>Alloy</p>
                        <p className='flex-1 px-5 py-3 border'>165/80 R14 </p>
                        <p className='flex-1 px-5 py-3 border'>185/65 R15</p>
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
                        seating capacity
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
                          Seating Capacity
                        </p>
                        <p className='flex-1 px-5 py-3 border'>5</p>
                        <p className='flex-1 px-5 py-3 border'>5</p>
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
                        <p className='flex-1 px-5 py-3 border '>
                          Kerb Weight (kg){' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>980-985 kg </p>
                        <p className='flex-1 px-5 py-3 border'>980-985 kg</p>
                      </div>
                      <div className='flex items-center justify-between text-base'>
                        <p className='flex-1 px-5 py-3 border '>
                          Gross Vehicle Weight (kg){' '}
                        </p>
                        <p className='flex-1 px-5 py-3 border'>1405 kg </p>
                        <p className='flex-1 px-5 py-3 border'>1405 kg</p>
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
      <div className='px-5 text-xs rounded-md resize'>
        <p>
          <sup>^</sup>The speed alert system gives audible warning for alert of
          over-speed to driver. When vehicle speed exceeds about 80 km/h,
          primary level warning with two beeps will sound every minute...&nbsp;
          <a
            href='https://www.marutisuzuki.com/cng/swift'
            className='text-blue-600'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read More
          </a>{' '}
        </p>
        <p>
          <sup>#</sup>As certified by Test Agency Under Rule 115 (G) of CMVR
          1989.
        </p>
        <p>
          <sup>*</sup>Claim as on date-supported by JATO Dynamics Ltd.,
          Sedan-Claim valid for CNG in its own class.
        </p>
      </div>
      <br></br>
      <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 md:grid-cols-2 '>
        <div className='px-6 my-auto space-y-3 text-left '>
          <p className='text-4xl font-bold uppercase'>New Swift S-CNG</p>
        </div>
        <div className='object-contain object-right p-3 h-50 w-100 pt-14'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    1. WHAT ARE THE DIFFERENT MODES FOR DRIVING THE NEW SWIFT
                    S-CNG?
                  </span>
                </Disclosure.Button>
                <br></br>
                <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                  <p className='indent-8'>
                    There are basically three fuel modes in the New Swift S-CNG,
                    <br></br>
                    <div className='leading-relaxed'>
                      <ol>
                        <li className='list-outside'>
                          1. <strong>Petrol Mode:</strong> The car starts and
                          drives on petrol in this modes.
                        </li>
                        <li>
                          2. <strong>Auto Mode:</strong> The car starts on
                          petrol and immediately switches to CNG in this mode.
                        </li>
                        <li>
                          3. <strong>Forced CNG Mode:</strong> Here, CNG is used
                          to start thecar.It is advisable to use this mode only
                          when the car’s petrol level is extremely low.
                        </li>
                      </ol>
                    </div>
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    2. IS THE CNG KIT IN SWIFT S-CNG TESTED FOR SAFETY ?
                  </span>
                </Disclosure.Button>
                <br></br>
                <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                  <p>
                    <strong>Swift S-CNG</strong> has undergone comprehensive
                    testing with the CNG setup in place to provide long-term
                    reliability and durability. The setup has a leak-proof
                    design made of stainless steel pipes and corrosion-resistant
                    joints. It also comes with an integrated wiring harness that
                    eliminates the possibility of short circuits.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex justify-between w-full px-5 py-3 text-sm font-medium text-left border-b-2 hover:bg-gray-200 focus:outline-none'>
                  <span className='text-base uppercase'>
                    3. CAN I GET MY NEW SWIFT S-CNG TUNED FROM OUTSIDE?
                  </span>
                </Disclosure.Button>
                <br></br>
                <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                  <p>
                    It is not recommended to have your new Swift S-CNG tuned by
                    any third party workshop. Always visit your nearest Maruti
                    Suzuki Arena authorized service centre to get the right
                    tuning and calibration for your Swift CNG.
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

export default SwiftCNG;
