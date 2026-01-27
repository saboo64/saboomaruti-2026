import React, { useState } from 'react';
import { useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import required modules
import { Autoplay } from 'swiper';
import { serviceIcons, reviews } from '../../constants/carservice';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
// import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import Banner from '../../components/Banner';
import SeoMeta from '../../components/SEo/SeoMeta';
import { SEOPages } from '../../constants/SEOData';

const serviceBanners = [
  // {
  //   desktopImg: require('../../assets/banners/March-Service-Banner-website.jpg'), Regular
  //   mobileImg: require('../../assets/banners/March Service Banner Mobile.webp'),
  //   alt: 'Regular service banner',
  //   link: '',
  // },
  // {
  //   desktopImg: require('../../assets/banners/Website_Maruti_Suzuki_Service_Freedom_offer_with_Saboo_RKS_Motor_service_Independence_day_Service.webp'),
  //   mobileImg: require('../../assets/banners/WM_Maruti_Suzuki_Service_Freedom_offer_with_Saboo_RKS_Motor_service_Independence_day_Service.webp'),
  //   alt: 'Regular service banner',
  //   link: '',
  // },

  // Regular-service-banners
  {
    desktopImg: require('../../assets/banners/Website_Maruti_Suzuki_Service_diwali_offer_with_Saboo_RKS_Motor_October_Service.webp'),
    mobileImg: require('../../assets/banners/WM_Maruti_Suzuki_Service_diwali_offer_with_Saboo_RKS_Motor_October_Service.webp'),
    alt: 'diwali',
    link: '',
  },
];

function BookAService() {
  return (
    <>
      <SeoMeta {...SEOPages.BookAService} />

      <Header />
      <Banner sliders={serviceBanners} />

      {/*<img
       //src={require("../../components/Website_Maruti_Suzuki_Service_drive_through_winter_worry_free_with_Saboo_RKS_Motor_service.webp")}
       src={require('../../assets/banners/Website_Maruti_Suzuki_Service_Republic_Day_Service_carnival_Saboo_RKS_Motor_service (1).webp')}
        alt="Maruti Suzuki Service  republic_day Saboo RKS Motor"
      //  className="w-full h-auto lg:mt-16 "
      className="hidden w-full h-auto sm:block lg:mt-16"
      />*/}
      {/* <img
        src={require('../../../src/assets/banners/Sankranti 2025 Service Banner website.webp')}
        alt='Maruti Suzuki Service  republic_day Saboo RKS Motor'
        className='hidden w-full h-auto sm:block lg:mt-16'
      />

      <img
        src={require('../../../src/assets/banners/Sankranti 2025 Service Banner web mobile copy.webp')}
        // src={require('../more/Website_mobile_Maruti_Suzuki_Service_Republic_Day_Service_carnival_Saboo_RKS_Motor_service (1).webp')}
        alt='Maruti Suzuki Service Republic_day Offers Saboo RKS Motor'
        className='w-full h-auto sm:hidden '
      /> */}

      <BookMarutiService />
      <FAQ />
      <Testimonials />
    </>
  );
}

const BookMarutiService = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('noname@gmail.com');
  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState('');
  const [submitted, setSubmitted] = useState(false);
  var result = '';
  var d = new Date();
  result += d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

  const checkFormValidity = () => {
    return phone.length === 10 && !loading;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !phone || !outlet) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await axios
        .post('https://saboogroups.com/admin/api/book-a-service', {
          name: name,
          phone: phone,
          email: email,

          outlet: outlet,
        })
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

    try {
      await axios
        .post(
          'https://arena-backend-git-main-arenas-projects.vercel.app/service',
          {
            name: name,
            phone: phone,
            email: email,

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
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        setSubmitted(true);
        setLoading(false);
      });
  };

  if (window.gtag) {
    window.gtag('event', 'Book car service enquiry', {
      'phone number': `+91${phone}`,
      email: `${email}`,
      outlet: `${outlet}`,
      name: `${name}`,
    });
  }

  useEffect(() => {
    if (submitted) {
      document.getElementById('arenaCarEnq2').submit();
    }
  }, [submitted]);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  return (
    <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/service_center_screen/our-service-bg.webp')] py-16">
      <div className='container grid grid-cols-2 px-5 mx-auto my-8 lg:grid-cols-3 md:gap-4'>
        {/* col-span-1 */}
        <div className='col-span-2 mb-5 bg-gray-100 rounded-3xl lg:col-span-1 md:mb-0 p-7'>
          <p className='text-xl font-semibold text-center text-blue-800'>
            Book A Maruti Suzuki Car Service
          </p>
          <p className='py-3 text-base text-center'>
            Please fill out the form and we'll get back to you right away !
          </p>
          {/* <form
            className='flex flex-col items-center space-y-3'
            action='https://crm.zoho.in/crm/WebToLeadForm'
            name='WebToLeads54158000001051288'
            method='POST'
            id='theform'
            acceptCharset='UTF-8'
          >
            <input
              type='text'
              className='hidden'
              name='xnQsjsdp'
              value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
            />
            <input type='hidden' name='zc_gad' id='zc_gad' value='' />
            <input
              type='text'
              className='hidden'
              name='xmIwtLD'
              value='3e4c511e1bfac462fb9ac158b261b0d3a1f7118a5052416c6735cee16458265f'
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
              value='https://www.saboomaruti.in/thank-you-for-contact-us'
            />
            <input
              type='text'
              className='hidden'
              id='ldeskuid'
              name='ldeskuid'
            />
            <input type='text' className='hidden' id='LDTuvid' name='LDTuvid' />
            <input
              type='text'
              className='border max-w-[350px] w-full bg-gray-100 p-2 outline-none focus:border-dashed focus:border-blue-800'
              placeholder='Name'
              id='Last_Name'
              name='Last Name'
              required
            />
            <input
              type='text'
              className='border max-w-[350px] w-full bg-gray-100 p-2 focus:border-dashed focus:border-blue-800 outline-none'
              placeholder='Phone'
              id='Phone'
              name='Phone'
              maxLength='10'
              minLength='10'
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value.replace(/[^1-9 ]/g, '') &&
                    e.target.value.replace(/ /g, '')
                )
              }
            />
            <select
              id='LEADCF11'
              name='LEADCF11'
              className='border max-w-[350px] w-full bg-gray-100 p-2 focus:border-dashed focus:border-blue-800 outline-none'
            >
              <option>Select Outlet</option>
              <option value='Somajiguda'>RKS Motor - Somajiguda</option>
              <option value='Malakpet'>RKS Motor - Malakpet</option>
              <option value='Secunderabad'>
                RKS Motor - Secunderabad/Tadbund
              </option>
              <option value='Kushaiguda'>RKS Motor - Kushaiguda</option>
              <option value='Uppal'>RKS Motor - Uppal</option>
              <option value='Kukatpally'>RKS Motor - Kukatpally</option>
              <option value='Nampally'>RKS Motor - Nampally</option>
              <option value='Shamirpet'>RKS Motor - Shamirpet</option>
            </select>
            <textarea
              className='border max-w-[350px] w-full bg-gray-100 p-2 resize-none focus:border-dashed focus:border-blue-800 outline-none'
              placeholder='Let us know what you need'
              rows={4}
            ></textarea>
            <div className='flex items-center space-x-2'>
              <input type='checkbox' id='agree' />
              <label htmlFor='agree'>
                I agree to{' '}
                <Link className='text-red-700' to='/'>
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <button
              type='submit'
              className='bg-blue-800 rounded shadow px-3 py-1.5 text-white'
            >
              Submit
            </button>
          </form> */}
          <form
            id='arenaCarEnq2'
            action={
              pattern.test(phone) && phone.length === 10
                ? 'https://crm.zoho.in/crm/WebToLeadForm'
                : '#'
            }
            name='WebToLeads54158000089751369'
            method={'POST'}
            acceptCharset='UTF-8'
          >
            <input
              type='text'
              style={{ display: 'none' }}
              name='xnQsjsdp'
              value='9a015d96f974402d083cc61e45444f7a4201371583e69e3695848f95fd4207ca'
            />
            <input type='hidden' name='zc_gad' id='zc_gad' value='' />
            <input
              type='text'
              style={{ display: 'none' }}
              name='xmIwtLD'
              value='5c9150e9e8d3f73eb2d7a97ad106fbb6ad6746d4ab97d1ff46b9510aff8f1524ec1fc46358556fbea056b952157e411a'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              name='actionType'
              value='TGVhZHM='
            />
            <input
              type='text'
              style={{ display: 'none' }}
              name='returnURL'
              value='https://www.saboomaruti.in/thank-you-for-contact-us'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              id='ldeskuid'
              name='ldeskuid'
            />
            <input
              type='text'
              style={{ display: 'none' }}
              id='LDTuvid'
              name='LDTuvid'
            />
            <div className='grid gap-1 md:grid-cols-2 lg:grid-cols-1'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Name <span className='text-red-600'>*</span>
                </label>
                <input
                  className='w-full h-10 px-3 border outline-none rounded-3xl focus:ring-red-500 focus:border-red-500'
                  type='text'
                  id='Last_Name'
                  name='Last Name'
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <input
                  className='w-full h-10 px-3 border outline-none rounded-3xl focus:ring-red-500 focus:border-red-500'
                  type='text'
                  ftype='email'
                  id='Email'
                  name='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email.length > 0 && !emailPattern.test(email) ? (
                  <small className='text-red-500'>Invalid email address</small>
                ) : (
                  ''
                )}
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Phone <span className='text-red-600'>*</span>
                </label>
                <input
                  className='w-full h-10 px-3 border outline-none rounded-3xl focus:ring-red-500 focus:border-red-500'
                  type='text'
                  maxLength='10'
                  minLength='10'
                  required
                  id='Phone'
                  name='Phone'
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(/[^1-9 ]/g, '') &&
                        e.target.value.replace(/ /g, '')
                    )
                  }
                />
                {phone.length > 0 && phone.length < 10 ? (
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
              <div className='hidden'>
                <label className='block text-sm font-medium text-gray-700'>
                  Phone <span className='text-red-600'>*</span>
                </label>
                <input
                  className='w-full h-10 px-3 border rounded-md outline-none focus:ring-red-500 focus:border-red-500'
                  type='text'
                  required
                  id='LEADCF83'
                  name='LEADCF83'
                  value={result}
                />
                {phone.length > 0 && phone.length < 10 ? (
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
              {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <select
                id="LEADCF6"
                name="LEADCF6"
                onChange={(e) => setModel(e.target.value)}
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option>Select Model</option>
                <option>S-Cross</option>
                <option>Ciaz</option>
                <option>Baleno</option>
                <option>Ignis</option>
                <option>XL6</option>
              </select>
            </div> */}
              <div>
                <label className='block text-sm font-light text-gray-700'>
                  Select Outlet <span className='text-red-600'>*</span>
                </label>
                <select
                  id='LEADCF23'
                  name='LEADCF23'
                  onChange={(e) => {
                    const selectedValue = e.target.value;

                    // Check if the selected option is not "Select Outlet"
                    if (selectedValue !== 'Select Outlet') {
                      // Perform the backend call or set the model state here
                      setOutlet(selectedValue);
                    }
                  }}
                  defaultValue='Select Outlet'
                  className='block w-full h-10 px-3 py-2 bg-white border border-gray-300 shadow-sm rounded-3xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                >
                  <option disabled>Select Outlet</option>
                  <option value='Somajiguda'>Somajiguda</option>
                  <option value='Malakpet'>Malakpet / Moosarambagh</option>
                  <option value='Tadbund'>Tadbund / Secunderabad</option>
                  <option value='Nampally'>Nampally</option>
                  <option value='Kushaiguda'>Kushaiguda</option>
                  <option value='Suchitra'>Suchitra</option>
                  <option value='Kompally'>Kompally</option>
                  <option value='Kukatpally'>Kukatpally</option>
                  <option value='Kodangal'>Kodangal</option>
                  <option value='Narsingi'>Narsingi</option>
                  <option value='Shamirpet'>Shamirpet</option>
                  <option value='Uppal'>Uppal</option>
                  <option value='Hafeezpet'>Hafeezpet</option>
                </select>
              </div>
              <div className='flex items-start'>
                <div className='ml-2 text-xs'>
                  <label
                    htmlFor='disclaimer'
                    className='font-medium text-gray-700'
                  >
                    <span className='font-bold text-black'>Disclaimer</span>
                    <span className='text-black font-extralight'>
                      : By clicking 'SUBMIT', you have agreed to our
                    </span>
                    <a
                      href='/maruti-car-terms-and-conditions'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-1 text-sm italic font-bold text-red-600 '
                    >
                      <br></br> Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              {' '}
              <button
                className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-3xl text-white ${
                  !checkFormValidity()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                }`}
                disabled={
                  !checkFormValidity() ||
                  phone.length !== 10 ||
                  !pattern.test(phone) ||
                  loading
                }
                onClick={handleSubmit}
              >
                {loading ? (
                  <div className='flex items-center justify-center'>
                    <CgSpinner className='w-5 h-5 mr-2 text-white animate-spin' />
                    Loading
                  </div>
                ) : (
                  'SUBMIT'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* col-span-2 */}
        <div className='col-span-2'>
          <p className='text-xl font-semibold text-blue-800'>
            Maruti Suzuki Car Services
          </p>
          <div className='grid grid-cols-2 gap-4 my-5 md:grid-cols-3 lg:grid-cols-4'>
            {serviceIcons.map((icon) => (
              <div
                className='py-2 transition-transform transform bg-white border rounded shadow-md hover:scale-105'
                key={icon.id}
              >
                <img src={icon.img} alt={icon.id} className='mx-auto' />
                <p className='text-center'>{icon.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className='container mx-auto my-5 '>
      <p className='mb-8 text-3xl text-center text-blue-800'>Reviews</p>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='px-8'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
                className='mx-auto'
                alt='offers'
              />

              <p className='text-sm text-center'>{item.text}</p>
              <p className='py-2 text-base font-semibold text-center'>
                {item.author}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className='w-full px-4 pt-16 mb-20'>
      <div className='w-full max-w-6xl p-2 mx-auto bg-white rounded-2xl'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-3 text-base font-medium text-left text-blue-900 bg-blue-100 rounded-3xl hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span className='text-sm'>
                  Why should I get my car serviced at Maruti Suzuki Service?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                Choosing Maruti Suzuki Service for your car maintenance or
                servicing offers several benefits. Our experienced technicians
                follow proper guidelines to ensure quality of the service. Apart
                from this, you can rest be assured that only genuine parts will
                be used (if required) to fix your car. Getting your car serviced
                from an Authorised Maruti Suzuki Service centre also ensures
                your vehicle warranty stays intact.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-base font-medium text-left text-blue-900 bg-blue-100 rounded-3xl hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span className='text-sm'>
                  How do I make a service booking at Maruti Suzuki Service?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                You can book a service appointment at Maruti Suzuki Service
                online on our{' '}
                <Link to='/maruti-car-service-centers-near-me'>website</Link>.
                You can also call <a href='tel:9848898488'>9848898488</a> and
                book a service appointment for your car.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-base font-medium text-left text-blue-900 bg-blue-100 rounded-3xl hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span className='text-sm'>
                  Where to find a Maruti Suzuki Authorized Service station?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                Kindly use our Workshop locator present on Maruti Suzuki webpage
                to find a Maruti Suzuki authorised service station near you.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-base font-medium text-left text-blue-900 bg-blue-100 rounded-3xl hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span className='text-sm'>
                  How much is a periodic servicing going to cost me?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                Cost of service varies according to car model, average running
                of the car and its current odometer reading. To calculate an
                estimated cost of service for your vehicle visit our Maruti
                Suzuki Service centers.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-2'>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-base font-medium text-left text-blue-900 bg-blue-100 rounded-3xl hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'>
                <span className='text-sm'>
                  How do I know my car needs servicing?
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-gray-500'>
                If your vehicle is running rough, is delivering low mileage, or
                if warning lamps have switched on, you should take your car
                immediately to a service centre. Apart from this, the schedule
                that you should follow for regular preventive maintenance will
                be listed in your owner’s manual.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default BookAService;
