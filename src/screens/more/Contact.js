import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { Tab } from '@headlessui/react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
// import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CgSpinner } from 'react-icons/cg';
// import ReCAPTCHA from 'react-google-recaptcha';
import { TextField, MenuItem } from '@mui/material';
import SeoMeta from '../../components/SEo/SeoMeta';

function Contact() {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [outlet, setOutlet] = useState('');
  const [model, setModel] = useState('');
  const [modelError, setModelError] = useState('');
  // const [selectedModel, setSelectedModel] = useState('');
  const [subject, setSubject] = useState('');
  // const [method, setMethod] = useState();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  // const [captchaValue, setCaptchaValue] = useState(null);

  // adding date
  var result = '';
  var d = new Date();
  result += d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

  const checkFormValidity = () => {
    return (
      name.trim() !== '' &&
      emailPattern.test(email) &&
      phone.length === 10 &&
      model.trim() !== '' &&
      !loading
    );
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone || !model || !subject) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // if (!captchaValue) {
    //   toast.error('Please complete the reCAPTCHA challenge.');
    //   return;
    // }
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
        navigate('/thank-you-for-contact-us');
        // Handle success, e.g., show a success message
      } else {
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      // Handle network or other errors
    }

    try {
      await axios
        .post(
          'https://arena-backend-git-main-arenas-projects.vercel.app/contactUs',
          {
            name: name,
            phone: phone,
            subject: subject,
            email: email,
            model: model,
            outlet: outlet,
            message: message,
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
   Popular RKS.
   98488 98488
   www.saboomaruti.in
   www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log('SMS API Response:', res.data);
        // setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        // setSubmitted(true);
        setLoading(false);
        // setLoading(false);
      });
  };

  if (window.gtag) {
    window.gtag('event', 'Contact us enquiry', {
      'phone number': `+91${phone}`,
      model: `${model}`,
      outlet: `${outlet}`,
      name: `${name}`,
      subject: subject,
      email: email,
      message: message,
    });
  }

  // useEffect(() => {
  //   if (submitted) {
  //     document.getElementById('ContactCarEnq2').submit();
  //   }
  // }, [submitted]);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Clear email error when email input changes
    setEmailError('');
  };

  const handleEmailBlur = () => {
    if (email.length > 0 && !emailPattern.test(email)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (phoneValue.length !== 10) {
      setPhoneError('Phone number must be 10 digits');
    } else {
      setPhoneError('');
    }
    // Update phone state
    setPhone(phoneValue);
  };

  const handleModelChange = (e) => {
    const selectedModel = e.target.value;
    setModel(selectedModel);

    // Check if a model is selected
    if (!selectedModel) {
      setModelError('Please select a model');
    } else {
      // Clear model error when model is selected
      setModelError('');
    }
  };

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
      <SeoMeta
        title='Popular Maruti | Contact us for any Maruti Car Sales, Feedback & Complaints'
        description='Contact your nearest Popular Maruti showroom for any Maruti Suzuki vehicle enquiry. For queries about any of the Maruti cars, feedback or complaints call now 9848898488.'
        keywords='car showrooms, saboo contact us, Popular true value'
        canonicalUrl='https://www.saboomaruti.in/contact-maruti-suzuki-showroom'
        ogImage='/img/og-tags/default.webp'
        twitterUrl='https://x.com/saboorksmaruti'
      />

      <Header />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/Contact-Us-Banner.webp'
        className='w-full max-w-full lg:mt-16'
        alt='1'
      />

      <p className='mt-8 mb-4 text-4xl font-extrabold text-center text-blue-800'>
        Get In Touch
      </p>
      <p className='mb-6 text-lg text-center text-gray-700'>
        If you have any questions or concerns, please fill out the form below.
      </p>

      <div className='px-5 pb-12 mx-auto max-w-7xl pt-14 md:px-0'>
        <div className='grid p-2 md:grid-cols-4 lg:gap-10'>
          <div className='col-span-3'>
            <Tab.Group>
              {/* <Tab.List className='space-x-3 mb-7'>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-blue-800 text-gray-50 mb-3 max-w-[260px] w-full ml-3 focus:outline-none rounded-t-xl'
                      : 'bg-gray-100 text-blue-800 border hover:bg-blue-800 rounded-t-lg hover:text-gray-300 mb-3 max-w-[260px] w-full ml-3 focus:outline-none'
                  }
                >
                  <p className='inline-flex px-4 py-4 text-sm font-medium text-center uppercase border-b-2 border-transparent rounded-t-lg group '>
                    <FaCar className='w-5 h-5 mr-2' />
                    Car Enquiry
                  </p>
                </Tab>
              </Tab.List> */}
              <Tab.Panels>
                {/* Car Enquiry */}
                <Tab.Panel>
                  <form
                  // id='ContactCarEnq2'
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
                      value='https://www.saboomaruti.in/thank-you-for-contact-us'
                    /> */}
                    {/* <input
                      type='text'
                      className='hidden'
                      name='returnURL'
                      value='https://www.saboomaruti.in/thank-you-for-contact-us'
                    /> */}
                    <div className='space-y-4'>
                      <div className='grid gap-3 mb-3 md:grid-cols-2'>
                        <div>
                          {/* <label className='block text-sm font-medium text-gray-700'>
                            &nbsp;Name
                            <span className='text-red-600 sub'>*</span>
                          </label> */}
                          <TextField
                            label='Name'
                            type='text'
                            id='Last Name'
                            name='Last Name'
                            onChange={(e) => setName(e.target.value)}
                            className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
                            required
                          />
                        </div>
                        <div>
                          {/* <label className='block text-sm font-medium text-gray-700'>
                            Phone<span className='text-red-600 sub'>*</span>
                          </label> */}
                          <TextField
                            label='Phone'
                            className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
                            placeholder='Enter your phone number'
                            id='Phone'
                            name='Phone'
                            value={phone}
                            required
                            inputProps={{ minLength: 10, maxLength: 10 }} // Setting minLength and maxLength as inputProps
                            onChange={handlePhoneChange}
                            error={!!phoneError} // Set error prop based on whether phoneError exists
                            helperText={phoneError} // Display phoneError as helper text
                          />
                        </div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'>
                          <div className='relative'>
                            <TextField
                              className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
                              type='email'
                              label='Email'
                              id='Email'
                              name='Email'
                              placeholder='Enter your email'
                              value={email}
                              onChange={handleEmailChange}
                              onBlur={handleEmailBlur}
                              error={!!emailError} // Set error prop based on whether emailError exists
                              helperText={emailError} // Display emailError as helper text
                            />
                          </div>
                        </div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'></div>
                        <div className='col-span-2'></div>
                        {/* model */}
                        <div className=''>
                          <TextField
                            id='LEADCF23'
                            name='LEADCF23'
                            select
                            onChange={handleModelChange}
                            // defaultValue='Select Outlet'
                            className='block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            label='Model'
                            error={!!modelError}
                            helperText={modelError}
                          >
                            <MenuItem disabled>Select Model</MenuItem>
                            {/* <MenuItem value="Alto 800">Alto 800</MenuItem> */}
                            <MenuItem value='VICTORIS'>VICTORIS</MenuItem>
                            <MenuItem value='ALTOK10'>ALTOK10</MenuItem>
                            <MenuItem value='WAGON-R'>WAGON-R</MenuItem>
                            <MenuItem value='CELERIO'>CELERIO</MenuItem>
                            <MenuItem value='SWIFT'>SWIFT</MenuItem>
                            <MenuItem value='DZIRE'>DZIRE</MenuItem>
                            <MenuItem value='S-PRESSO'>S-PRESSO</MenuItem>
                            <MenuItem value='ERTIGA'>ERTIGA</MenuItem>
                            <MenuItem value='BREZZA'>BREZZA</MenuItem>
                            <MenuItem value='EECO'>EECO</MenuItem>
                          </TextField>
                        </div>
                        <div className=''>
                          <TextField
                            id='LEADCF23'
                            name='LEADCF23'
                            select
                            onChange={(e) => setOutlet(e.target.value)}
                            // defaultValue='Select Outlet'
                            className='block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                            label='Outlet'
                          >
                            <MenuItem disabled>Select Outlet</MenuItem>
                            <MenuItem value='Somajiguda'>Somajiguda</MenuItem>
                            <MenuItem value='Malakpet'>Malakpet</MenuItem>
                            <MenuItem value='Secunderabad'>
                              Secunderabad
                            </MenuItem>
                            <MenuItem value='Kushaiguda'>Kushaiguda</MenuItem>
                            <MenuItem value='Kompally'>Kompally</MenuItem>
                            <MenuItem value='Shamirpet'>Shamirpet</MenuItem>
                            <MenuItem value='Narsingi'>Narsingi</MenuItem>
                            <MenuItem value='Kodangal'>Kodangal</MenuItem>
                            {/* <MenuItem value='Sangeeth Circle'>
                              Sangeeth Circle
                            </MenuItem> */}
                          </TextField>
                        </div>
                      </div>
                      {/* subject */}
                      <div className='col-span-2'>
                        <TextField
                          id='LEADCF23'
                          name='LEADCF23'
                          select
                          // defaultValue='General Enquiry'
                          onChange={(e) => setSubject(e.target.value)}
                          className='block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                          label='Subject'
                        >
                          <MenuItem disabled>Select Category</MenuItem>
                          <MenuItem value='General Enquiry'>
                            General Enquiry
                          </MenuItem>

                          <MenuItem value='Sales'>Sales</MenuItem>
                          <MenuItem value='Service'>Service</MenuItem>
                          <MenuItem value='Driving School'>
                            Driving School
                          </MenuItem>
                          <MenuItem value='Offers'>Latest Offers</MenuItem>
                          <MenuItem value='Finance'>Finance</MenuItem>
                          <MenuItem value='Insurance'>Insurance</MenuItem>
                          <MenuItem value='Accessories'>Accessories</MenuItem>
                          <MenuItem value='Other'>Other</MenuItem>
                        </TextField>
                        <div className='col-span-2'></div>
                      </div>
                      <div>
                        <TextField
                          label='Comments'
                          className='w-full h-20 px-1 border rounded-md outline-none focus:ring-red-500 focus:border-red-500'
                          type='text'
                          id='message'
                          name='message'
                          placeholder='Enter your message'
                          onChange={(e) => setMessage(e.target.value)}
                        ></TextField>
                      </div>

                      <div className='hidden zcwf_row wfrm_fld_dpNn'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='Lead Source'
                            name='Lead Source'
                          >
                            <option selected value='GOOGLE&#x20;ADS'>
                              WEBSITE VISIT
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className='hidden zcwf_row wfrm_fld_dpNn'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='LEADCF4'
                            name='LEADCF4'
                          >
                            <option selected value='ARENA'>
                              ARENA
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className='hidden zcwf_row wfrm_fld_dpNn'>
                        <div className='zcwf_col_fld'>
                          <select
                            className='zcwf_col_fld_slt'
                            id='LEADCF3'
                            name='LEADCF3'
                          >
                            <option selected value='INBOUND'>
                              INBOUND
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className='flex items-start '>
                        <div className='ml-2 text-sm'>
                          <label
                            htmlFor='disclaimer'
                            className='font-medium text-gray-700'
                          >
                            <span className='font-bold text-black'>
                              Disclaimer
                            </span>
                            <span className='text-black'>
                              : By clicking 'SUBMIT', you have agreed to our
                            </span>
                            <a
                              href='/maruti-car-terms-and-conditions'
                              target='_blank'
                              rel='noopener noreferrer'
                              className='px-2 text-sm text-blue-800 hover:font-bold'
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>

                      {/* <p className='text-gray-700'>
                        <span className='font-bold text-black'>Disclaimer</span>
                        : I agree that by clicking the ‘Submit’ button below, I
                        am explicitly soliciting a call/Message from Saboo
                        Maruti (RKS Motor Pvt. Ltd) or its Representatives on my
                        ‘Mobile’.
                      </p>
                      <div className='flex my-3'>
                        <input
                          id='disclaimer'
                          name='disclaimer'
                          type='checkbox'
                          className='w-4 h-4 rounded'
                        />
                        <div className='ml-2 text-sm'>
                          <label
                            htmlFor='disclaimer'
                            className='font-medium text-gray-700'
                          >
                            Please Agree with following Disclaimer
                          </label>
                        </div>
                      </div> */}
                      {/* <ReCAPTCHA
                        sitekey='6LcXK0wpAAAAAM_YuNjB0Q3c_5_ee9vTG8aQFjFn'
                        onChange={(value) => setCaptchaValue(value)}
                      /> */}
                      <button
                        className={`h-12 inline-flex justify-center mr-3 py-3 px-12 mt-4 mb-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white ${
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
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className='col-span-1 px-3 mt-4 space-y-3'>
            <a
              href='tel:9848898488'
              className='flex items-center text-blue-800'
            >
              <FaPhoneAlt className='mr-2 text-blue-800' />
              <span className='text-blue-800 font-extralight'>
                Customer Support
              </span>{' '}
              &nbsp;| 9848898488
            </a>
            <a
              href='tel:9848898488'
              className='flex items-center text-blue-800'
            >
              <FaEnvelope className='mr-2 text-blue-800' />
              <span className='text-blue-800 font-extralight'>Email </span>
              &nbsp;| smg.crc.cm@popularv.com
            </a>
            <div className='flex flex-col items-center space-y-3 text-center'>
              <Link
                to='/showrooms'
                className='w-full py-2 bg-blue-800 rounded-full text-gray-50'
              >
                Our Showrooms
              </Link>
              <Link
                to='/maruti-suzuki-car-service-center'
                className='w-full py-2 bg-blue-800 rounded-full text-gray-50'
              >
                Our Workshops
              </Link>
              <Link
                to='/true-value'
                className='w-full py-2 bg-blue-800 rounded-full text-gray-50'
              >
                True Value
              </Link>
              <Link
                to='/maruti-driving-school-locations'
                className='w-full py-2 bg-blue-800 rounded-full text-gray-50'
              >
                Driving School
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
