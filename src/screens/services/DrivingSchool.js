import React, { useEffect, useState } from 'react';
import drivingSchoolBanner from '../../assets/banners/vehicles/banners-2024/Maruti_Suzuki_Driving_School.webp';

import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
import { toast } from 'react-toastify';
import Header from '../../components/header/Header';
// import { useNavigate } from 'react-router-dom';
// import { Helmet } from "react-helmet";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { LazyImage } from '../about/About';
import SeoMeta from '../../components/SEo/SeoMeta';

function DrivingSchool() {
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);
  return (
    <>
      <Header />
      <SeoMeta
        title='Maruti Driving School in Hyderabad | Fees & Offers on Maruti Driving School'
        description='Maruti Driving School in Hyderabad. Special initiatives that have lady instructors for women learners. Get world-class driving training at Maruti Driving School. Call now 9848898488 for fees & Offers.'
        keywords='suzuki, maruti suzuki suzuki'
        canonicalUrl='https://www.saboomaruti.in/maruti-suzuki-driving-school'
        ogImage='/img/og-tags/default.webp'
        twitterUrl='https://x.com/saboorksmaruti'
      />

      {/* <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="hidden lg:mt-16 sm:block"
      >
        
        <SwiperSlide className="">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/saboo-driving-school-december-2023.webp"
            alt="offers"
            className="w-full "
          />
        </SwiperSlide>

        <div
          ref={navigationPrevRef}
          className="absolute z-10 p-3 bg-white rounded-full cursor-pointer left-10 top-1/2"
        >
          <GrFormPrevious />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute z-10 p-3 bg-white rounded-full cursor-pointer right-10 top-1/2"
        >
          <GrFormNext />
        </div>
      </Swiper> */}

      <LazyImage
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/saboo-driving-school-december-2023.webp'
        // src={require('../../assets/banners/Website_Maruti_Suzuki_Driving_School_Raksha_Bandhan_Offers_August_offers_Saboo_RKS_Motor.webp')}
        alt='Maruti Suzuki Driving School October Dussehra Diwali Offers Popular RKS  Learn Driving Driving School'
        className='hidden w-full mt-14 sm:block'
      />
      <LazyImage
        src={drivingSchoolBanner}
        alt='Maruti Suzuki Driving School October Dussehra Diwali Offers Popular RKS Learn Driving Driving School'
        className='w-full sm:hidden'
      />
      {/* <img
        src={require("../../Website_Maruti_Suzuki_Driving_School_January_New_Year_2025_offers_Saboo_RKS_Motor (1).webp")}
        // src={require("../../assets/banners/vehicles/banners-2024/Website_Maruti_Suzuki_Driving_School_October_Dussehra_Diwali_Offers_Saboo_RKS_Motor_Learn_Driving_Driving_School.webp")}
        alt="Maruti Suzuki Driving School Year-end Offers Saboo RKS Motor Learn Driving Driving School"
        className="hidden w-full mt-14 sm:block"
      />
      <img
        src={require("../../Website_Mobile_Maruti_Suzuki_Driving_School_January_New_Year_2025_offers_Saboo_RKS_Motor.webp")}
        // src={require("../../assets/banners/vehicles/banners-2024/Website_Mobile_Maruti_Suzuki_Driving_School_October_Dussehra_Diwali_Offers_Saboo_RKS_Motor_Learn_Driving_Driving_School.webp")}
        alt="Maruti Suzuki Driving School December Offers Saboo RKS Motor Learn Driving Driving School"
        className="w-full sm:hidden"
      /> */}

      {/* <RegisterInterest /> */}
      {/* <CarEnquiry /> */}

      <p className='mx-auto text-center max-w-6xl my-5 p-6 sm:px-0 text-3xl font-semibold text-[#232053]'>
        A pioneer in driving training since 2005, sets the gold standard with
        state-of-the-art technology and a progressive curriculum. <br></br>
      </p>
      <div className='container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3'>
        {/* Card 1: Happy Students */}
        <div className='flex flex-col items-center p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/happy-student.webp'
            alt='Happy Student'
            className='object-cover mb-4 '
          />
          <p className='mb-2 text-3xl font-semibold text-gray-500 animate-pulse'>
            10,656
          </p>
          <p className=' font-semibold mb-2 text-[#232053]'>HAPPY STUDENTS</p>
          <p className='text-sm font-light text-center text-gray-500'>
            We have successfully transformed 14,57,712 beginners into skilled
            and confident drivers.
          </p>
        </div>

        {/* Card 2: Certified Trainers */}
        <div className='flex flex-col items-center p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/trained-faculty.webp'
            alt='Certified Trainers'
            className='object-cover mb-4 '
          />
          <p className='mb-2 text-3xl font-semibold text-gray-500 animate-pulse'>
            10
          </p>
          <p className=' font-semibold mb-2 text-[#232053]'>
            CERTIFIED TRAINERS
          </p>
          <p className='text-sm font-light text-center text-gray-500'>
            Get driving training from our team of driving professionals that has
            1,328 certified male and female trainers.
          </p>
        </div>

        {/* Card 3: Training Schools */}
        <div className='flex flex-col items-center p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/authorised-dealers.webp'
            alt='Training Schools'
            className='object-cover mb-4 '
          />
          <p className='mb-2 text-3xl font-semibold text-gray-500 animate-pulse'>
            3
          </p>
          <p className='mb-2 font-semibold text-gray-700'>TRAINING SCHOOLS</p>
          <p className='text-sm font-light text-center text-gray-500'>
            We have made quality driving training accessible with our widespread
            network of 475+ Training Schools.
          </p>
        </div>
      </div>

      {/* <p className='mx-auto text-center max-w-6xl my-5 p-6 sm:px-0 text-3xl font-bold text-[#232053]'>
        Our commitment to excellence has redefined driving training nationwide,
        ensuring learners receive unparalleled instruction and confidence on the
        roads. <br></br>
      </p> */}
      <Confidence />
      <Tabs />
      {/* <LearnerCourse />
      <AdvanceCourse />
      <CorporateCourse /> */}
      {/* <DrivingSchoolForm /> */}
      <DrivingSchoolEnquiry />
    </>
  );
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='container p-2 mx-auto'>
      <div className='flex flex-col mb-4 sm:flex-row'>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 flex items-center justify-center rounded-t ${
            activeTab === 1 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(1)}
        >
          STANDARD
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 flex items-center justify-center rounded-t ${
            activeTab === 2 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(2)}
        >
          EXTENDED
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 flex items-center justify-center rounded-t ${
            activeTab === 3 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(3)}
        >
          DETAILED
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 flex items-center justify-center rounded-t ${
            activeTab === 4 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(4)}
        >
          ADVANCED
        </div>
        <div
          className={`flex-1 cursor-pointer p-4 border border-b-0 rounded-t flex items-center justify-center ${
            activeTab === 5 ? 'bg-[#232053] text-white' : 'bg-white'
          }`}
          onClick={() => handleTabClick(5)}
        >
          CORPORATE
        </div>
      </div>

      <div className='bg-white rounded'>
        {activeTab === 1 && <LearnerCourse />}
        {activeTab === 2 && <LearnerExtendedCourse />}
        {activeTab === 3 && <LearnerDetailedCourse />}
        {activeTab === 4 && <AdvanceCourse />}
        {activeTab === 5 && <CorporateCourse />}
      </div>
    </div>
  );
};

const DrivingSchoolEnquiry = ({ title, carName }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // const [method, setMethod] = useState();
  // const [email, setEmail] = useState('noname@gmail.com');
  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState('');
  const [submitted, setSubmitted] = useState(false);
  // Inside your component function
  // const [showToast, setShowToast] = useState(false);
  var result = '';
  var d = new Date();
  result += d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

  const checkFormValidity = () => {
    return name.trim() !== '' && phone.length === 10 && !loading;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !phone || !outlet) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);

    // try {
    //   await axios
    //     .post('https://saboogroups.com/admin/api/arena-driving-school', {
    //       name: name,
    //       phone: phone,
    //       // email: email,

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
          'https://arena-backend-git-main-arenas-projects.vercel.app/drvingSchool',
          {
            name: name,
            phone: phone,
            // email: email,

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
   RKS Motor.
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
    window.gtag('event', 'Driving school enquiry', {
      'phone number': `+91${phone}`,

      outlet: `${outlet}`,
      name: `${name}`,
    });
  }

  useEffect(() => {
    if (submitted) {
      document.getElementById('arenaCarEnq2').submit();
    }
  }, [submitted]);

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
    <div className='py-12 mt-12 bg-blue-800' id='dsenquiry'>
      <div className='container px-5 mx-auto space-y-5 lg:px-0'>
        <h3 className='text-xl font-normal text-white normal-case'>
          Start Your Driving Journey
        </h3>
        <form
          id='arenaCarEnq2'
          action={
            pattern.test(phone) && phone.length === 10
              ? 'https://crm.zoho.in/crm/WebToLeadForm'
              : '#'
          }
          name='WebToLeads54158000086119144'
          method={'POST'}
          acceptCharset='UTF-8'
        >
          <input
            type='text'
            className='hidden'
            name='xnQsjsdp'
            value='e90826c3339d3ba260a0d53e08a10af72619bc0156dbc13c479cffbba0f90eb0'
          />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' />
          <input
            type='text'
            className='hidden'
            name='xmIwtLD'
            value='fa1ac1c97e29ced20fe77c2e3e1f30966c62a31509e502e343c8914d44ef78454149ad0bebf0a241396d5a54d9439aee'
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
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2'>
            <div>
              <input
                className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
                placeholder='Name'
                id='Last_Name'
                name='Last Name'
                onChange={(e) => setName(e.target.value)}
                required
              />
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
                <small className='text-red-500'>Phone number is invalid</small>
              ) : (
                ''
              )}
            </div>
            <div>
              <input
                className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
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
                <small className='text-red-500'>Phone number is invalid</small>
              ) : (
                ''
              )}
            </div>
            {/* email */}
            {/* <div>
              <input
                className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
                type='email'
                ftype='email'
                id='Email'
                name='Email'
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
              />
              {email.length > 0 && !emailPattern.test(email) ? (
                <small className='text-red-500'>Invalid email address</small>
              ) : (
                ''
              )}
            </div> */}
            <div>
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
                className='block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              >
                <option disabled>Select Outlet</option>
                <option value='Kushaiguda'>Kushaiguda</option>
                <option value='Malakpet'>Malakpet</option>
                <option value='Nampally'>Nampally</option>
              </select>
            </div>
          </div>
          {/* <div className='flex items-center my-3 space-x-1'>
          <input id='comments' name='comments' type='checkbox' required />
          <label htmlFor='comments' className='font-medium text-gray-200'>
            I Agree
          </label>
        </div>
        <p className='mb-2 text-gray-200'>
          <span className='font-semibold'>Disclaimer :</span> I agree that
          by clicking the ‘Submit’ button below, I am explicitly soliciting
          a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
          Representatives on my ‘Mobile’
        </p> */}
          <button
            type='submit'
            disabled={
              !checkFormValidity() ||
              phone.length !== 10 ||
              !pattern.test(phone) ||
              loading
            }
            onClick={handleSubmit}
            className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
              !checkFormValidity()
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
            }`}
          >
            {loading ? (
              <div className='flex items-center justify-center'>
                <CgSpinner className='h-5 mr-2 text-white animate-spin' />
                Loading
              </div>
            ) : (
              'SUBMIT'
            )}
          </button>
          <div className='flex items-start py-1 '>
            <div className='ml-2 text-sm'>
              <label
                htmlFor='disclaimer'
                className='italic font-medium text-gray-700'
              >
                <span className='font-bold text-white'>Disclaimer</span>
                <span className='text-white font-extralight'>
                  : By clicking 'SUBMIT', you agree to our
                </span>
                <a
                  href='/maruti-car-terms-and-conditions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-2 text-sm font-bold text-red-700 '
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Confidence = () => {
  return (
    <div className='container p-5 mx-auto text-center border rounded shadow-md my-7 '>
      <p className='font-semibold text-3xl text-[#232053] normal-case'>
        Elevate your driving skills with our expert courses.
      </p>
      <p className='mt-3 text-lg text-gray-500 font-extralight'>
        Discover confidence on the road through our thoughtfully crafted driving
        courses. Whether you're a beginner or looking to refine your skills, our
        diverse training programs are tailored to make you a skilled and
        self-assured driver. <br />
        <br />
        <span className='font-light text-[#232053]'>
          Join Popular Maruti Suzuki Driving School and embark on a journey
          towards driving excellence,{' '}
          <span className='text-red-700 font-extralight'>
            pick your favourite course below.
          </span>
        </span>
      </p>
    </div>
  );
};

const LearnerCourse = () => {
  return (
    <div className='container p-5 mx-auto bg-white rounded shadow-lg mb-7'>
      <div className='grid items-center sm:grid-cols-2'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/learner-course.webp'
          alt='1'
          className='object-cover w-full h-auto mx-auto md:w-2/3'
        />
        <div className='p-6'>
          <p className='mb-5 text-2xl font-semibold text-blue-800'>
            Learner Standard Track Course
          </p>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Theory Session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Theory Session</p>
              <p className='text-sm text-gray-500'>07 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Practical Session</p>
              <p className='text-sm text-gray-500'>10 Hours</p>
            </div>
            {/* demo session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Demo Session</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Simulator Session</p>
              <p className='text-sm text-gray-500'>2.5 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Theory Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            {/* demo session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Practical Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
          </div>
          <p className='my-5'>
            If you’ve never been behind the steering wheel, this course is for
            you. At the end of 21 days, you’ll know the basic traffic rules and
            have a hands-on driving experience through simulators and on-road
            driving. What’s more, you’ll have the confidence of taking the RTO
            driving exam to obtain a permanent driving license.
          </p>
          <a
            href='tel:9848898488'
            className='inline-block px-4 py-2 text-white uppercase bg-blue-800 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
      </div>
    </div>
  );
};
const LearnerExtendedCourse = () => {
  return (
    <div className='container p-5 mx-auto bg-white rounded shadow-lg mb-7'>
      <div className='grid items-center sm:grid-cols-2'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/Learner+Extended+Track+Course.webp'
          alt='1'
          className='object-cover w-full h-auto mx-auto md:w-2/3'
        />
        <div className='p-6'>
          <p className='mb-5 text-2xl font-semibold text-blue-800'>
            Learner Extended Track Course
          </p>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Theory Session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Theory Session</p>
              <p className='text-sm text-gray-500'>07 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Practical Session</p>
              <p className='text-sm text-gray-500'>15 Hours</p>
            </div>
            {/* demo session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Demo Session</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Simulator Session</p>
              <p className='text-sm text-gray-500'>2.5 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Theory Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            {/* demo session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Practical Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
          </div>
          <p className='my-5'>
            f you've never been behind the steering wheel, this course is for
            you. At the end of 26 days, you'll know the basic traffic rules and
            have a hands-on driving experience through simulators and on-road
            driving. What's more, you'll have the confidence of taking the RTO
            driving exam to obtain a permanent driving license.
          </p>
          <a
            href='tel:9848898488'
            className='inline-block px-4 py-2 text-white uppercase bg-blue-800 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
      </div>
    </div>
  );
};
const LearnerDetailedCourse = () => {
  return (
    <div className='container p-5 mx-auto bg-white rounded shadow-lg mb-7'>
      <div className='grid items-center sm:grid-cols-2'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/Learner+Detailed+Track+Course.webp'
          alt='1'
          className='object-cover w-full h-auto mx-auto md:w-2/3'
        />
        <div className='p-6'>
          <p className='mb-5 text-2xl font-semibold text-blue-800'>
            Learner Detailed Track Course
          </p>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Theory Session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Theory Session</p>
              <p className='text-sm text-gray-500'>07 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-5.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Practical Session</p>
              <p className='text-sm text-gray-500'>20 Hours</p>
            </div>
            {/* demo session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-2.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Demo Session</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-3.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Simulator Session</p>
              <p className='text-sm text-gray-500'>2.5 Hours</p>
            </div>
            {/* ... (Repeat for other sessions) */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Theory Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
            {/* demo session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-4.webp'
                className='mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Practical Exam</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div>
          </div>
          <p className='my-5'>
            f you've never been behind the steering wheel, this course is for
            you. At the end of 31 days, you'll know the basic traffic rules and
            have a hands-on driving experience through simulators and on-road
            driving. What's more, you'll have the confidence of taking the RTO
            driving exam to obtain a permanent driving license.
          </p>
          <a
            href='tel:9848898488'
            className='inline-block px-4 py-2 text-white uppercase bg-blue-800 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
      </div>
    </div>
  );
};

const AdvanceCourse = () => {
  return (
    <div className='container p-5 mx-auto bg-white rounded shadow-lg mb-7'>
      <div className='grid items-center sm:grid-cols-2'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/advance-course.webp'
          alt='1'
          className='w-full h-auto'
        />
        <div className='p-6'>
          <p className='mb-5 text-2xl font-semibold text-blue-800'>
            Advance Course
          </p>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Theory Session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Theory Session</p>
              <p className='text-sm text-gray-500'>02 Hours</p>
            </div>

            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Practical Session</p>
              <p className='text-sm text-gray-500'>06 Hours</p>
            </div>
            {/* <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Demo Session</p>
              <p className='text-sm text-gray-500'>30 Minutes</p>
            </div> */}
          </div>
          <p className='my-5'>
            If you’re the one who has a license but feels under-confident while
            driving alone, this course is for you. At the end of these exciting
            8 days, you’ll take on the roads effortlessly. How? By training
            under proficient trainers, of course.
          </p>
          <a
            href='tel:9848898488'
            className='inline-block px-4 py-2 text-white uppercase bg-blue-800 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
      </div>
    </div>
  );
};

const CorporateCourse = () => {
  return (
    <div className='container p-5 mx-auto bg-white rounded shadow-lg'>
      <div className='grid items-center sm:grid-cols-2'>
        <div className='p-6'>
          <p className='mb-5 text-2xl font-semibold text-blue-800'>
            Corporate Course
          </p>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Theory Session */}
            <div className='p-4 py-4 mx-2 my-4 text-center transition-transform transform bg-white border rounded-lg shadow-md hover:scale-105'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/maruti-drivingschool-icon-1.webp'
                className='object-cover w-16 h-16 mx-auto'
                alt='1'
              />
              <p className='mt-4 text-lg font-semibold'>Theory Session</p>
              <p className='text-sm text-gray-500'>01 Hour</p>
            </div>
            {/* ... (Repeat for other sessions) */}
          </div>
          <p className='my-5'>
            Hiring a driver? Or Looking to brush up the skills of your
            executives? Have them take this course. By the end of it, you’ll be
            able to access the proficiency of the driver on 25 parameters like
            the ability to manage cars, adherence to traffic rules and practice
            of safety norms, among others. For the executives, special emphasis
            is laid on changing their attitude and road culture.
          </p>
          <a
            href='tel:9848898488'
            className='inline-block px-4 py-2 text-white uppercase bg-blue-800 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
          >
            Interested
          </a>
        </div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/driving-school/corporate-course.webp'
          alt='1'
          className='w-full h-auto'
        />
      </div>
    </div>
  );
};

export default DrivingSchool;
