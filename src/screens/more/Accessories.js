import Header from '../../components/header/Header';
import React, { useRef, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { Newaccesoriessliders } from '../../constants';
// import { Helmet } from 'react-helmet';
import axios from 'axios';
import { CgSpinner } from 'react-icons/cg';
import SeoMeta from '../../components/SEo/SeoMeta';
import { SEOPages } from '../../constants/SEOData';

const Accessory = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // const pattern = /^[6-9][0-9]{6,9}$/;
  // if (phone !== '' && phone.length === 10) {
  //   if (!pattern.test(phone)) {
  //     toast.error('Enter valid phone number', {
  //       theme: 'colored',
  //     });
  //   }
  // }

  return (
    <>
      <SeoMeta {...SEOPages.Accessory} />
      <div>
        <Header />
        <Swiper
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
          className='w-full mySwiper lg:mt-16'
        >
          {Newaccesoriessliders.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.img} alt='offers' className='w-full' />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='text-center' id='accessories'>
          <h1 className='pt-2 text-xl font-semibold md:text-2xl lg:text-3xl'>
            ACCESSORIES
          </h1>
          <p className='p-2 text-xl md:text-2xl lg:text-2xl'>
            Explore a World of Stylish Accessories for Every Occasion
          </p>
        </div>
        <CustomTabs tabsData={tabsData} />;
      </div>
    </>
  );
};

export function CardDefault({ cardData }) {
  const { imageUrl, title, description } = cardData;
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(title);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('noname@gmail.com');
  // const [model, setModel] = useState('');
  // const [product, setproduct] = useState('');
  const [loading, setLoading] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  // const [outlet, setOutlet] = useState('');
  // adding date
  var result = '';
  var d = new Date();
  result += d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
  const checkFormValidity = () => {
    return phone.length === 10 && !loading;
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
          // LEADCF6: model,
          LEADCF23: product,
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
    //       // model: model,
    //       product: product,
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
          'https://arena-backend-git-main-arenas-projects.vercel.app/accessories',
          {
            name: name,
            phone: phone,
            // email: email,
            // model: model,
            product: product,

            leadFrom: 'Accessories',
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
        setOpen(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error sending SMS:', err);
        // setSubmitted(true);
        setOpen(false);
        setLoading(false);
      });

    if (window.gtag) {
      window.gtag('event', `${product} - Accessories enquiry`, {
        'phone number': `+91${phone}`,
        product: product,

        name: `${name}`,
      });
    }
  };

  // const pattern = /^[6-9][0-9]{6,9}$/;
  // if (phone !== '' && phone.length === 10) {
  //   if (!pattern.test(phone)) {
  //     toast.error('Enter valid phone number', {
  //       theme: 'colored',
  //     });
  //   }
  // }
  //ffect(() => {
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
  const cancelButtonRef = useRef(null);

  return (
    <>
      {/* <Card className='flex flex-col w-full h-auto m-4 mt-6 transition duration-500 transform rounded lg:w-72 md:w-1/4 hover:scale-110'>
        <CardHeader
          shadow={false}
          floated={false}
          className='relative flex-shrink-0 h-64'
        >
          <img
            src={imageUrl}
            alt='card'
            className='object-contain w-full h-full max-w-full max-h-full'
          />
        </CardHeader>
        <CardBody>
          <div className='flex items-center justify-between mb-2'>
            <Typography color='blue-gray' className='font-medium'>
              {title}
            </Typography>
            <Typography color='blue-gray' className='font-medium'>
              ₹ {price}
            </Typography>
          </div>
          <Typography
            variant='small'
            color='gray'
            className='font-normal opacity-75'
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter className='pt-0'>
          <Button
            onClick={() => setOpen(true)}
            ripple={false}
            fullWidth={true}
            className='text-white bg-blue-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 gradient'
          >
            Buy it
          </Button>
        </CardFooter>
      </Card> */}

      <div className='flex flex-col w-full h-auto m-4 mt-6 transition duration-500 transform bg-white rounded-lg shadow-lg lg:w-72 md:w-1/4 hover:scale-105'>
        <div className='relative flex-shrink-0 h-64'>
          <img
            src={imageUrl}
            alt='card'
            className='object-contain w-full h-full rounded-t-lg'
          />
        </div>
        <div className='p-4'>
          <div className='mb-2'>
            <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>
          </div>
          <p className='text-sm font-normal text-gray-600'>{description}</p>
          <div className='flex items-center justify-between mt-4'>
            {/* <div className='text-lg font-medium text-blue-700'>
              ₹ {price}
              <span className=''>*</span>
            </div> */}
            <button
              onClick={() => setOpen(true)}
              className='px-4 py-2 text-white transition duration-300 bg-blue-700 rounded-full hover:bg-blue-500 focus:outline-none focus:ring-blue-900 active:bg-blue-700'
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
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
                    style={{ display: 'none' }}
                    name='xnQsjsdp'
                    value='c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529'
                  />
                  <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    name='xmIwtLD'
                    value='adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4'
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
                  /> */}
                  <Dialog.Panel className='relative overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-3xl sm:my-8 sm:max-w-lg sm:w-full'>
                    <div className='px-4 pt-5 pb-4 bg-gray-100 sm:p-6 sm:pb-4'>
                      <div className='mt-3'>
                        <Dialog.Title
                          as='h3'
                          className='text-2xl font-medium leading-6 text-center text-blue-900'
                        >
                          Explore our accessory options for an upgrade!
                        </Dialog.Title>
                        <div className='mt-2 space-y-3'>
                          <div className='py-8 mt-2 space-y-3'>
                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Name
                              </label>
                              <input
                                type='text'
                                id='Last_Name'
                                name='Last Name'
                                onChange={(e) => setName(e.target.value)}
                                required
                                className='block w-full h-10 px-2 mt-1 border-gray-600 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                              />
                            </div>

                            {/* <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Email
                              </label>
                              <input
                                type='email'
                                ftype='email'
                                id='Email'
                                name='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                className='block w-full h-10 px-2 mt-1 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                              />
                              {email.length > 0 && !emailPattern.test(email) ? (
                                <small className='text-red-500'>
                                  Invalid email address
                                </small>
                              ) : (
                                ''
                              )}
                            </div> */}

                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Phone
                              </label>
                              <input
                                className='block w-full h-10 px-2 mt-1 border-gray-600 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
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
                              {!pattern.test(phone) && phone.length === 10 ? (
                                <small className='text-red-500'>
                                  phone number is invalid
                                </small>
                              ) : (
                                ''
                              )}
                            </div>

                            {/* <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Model
                              </label>
                              <select
                                id='LEADCF6'
                                name='LEADCF6'
                                onChange={(e) => setModel(e.target.value)}
                                required
                                className='block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                              >
                                <option>Select Category</option>
                                <optgroup label='Accessories'>
                                  <option value='Exterior'>Exterior</option>
                                  <option value='Interior'>Interior</option>
                                  <option value='Car Care'>Car Care</option>
                                  <option value='Life Style'>Life Style</option>
                                  <option value='Infotainment'>
                                    Infotainment
                                  </option>
                                  <option value='Safety and Security'>
                                    Safety and Security
                                  </option>
                                </optgroup>
                              </select>
                            </div> */}
                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Product
                              </label>
                              <select
                                id='LEADCF6'
                                name='LEADCF6'
                                onChange={(e) => setProduct(e.target.value)}
                                required
                                value={title}
                                defaultValue={title}
                                className='block w-full px-3 py-2 bg-white border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                              >
                                <option disabled>Select accessory</option>
                                <optgroup label='Accessories'>
                                  <option value={title}>{title}</option>
                                </optgroup>
                              </select>
                            </div>
                          </div>

                          <div className='flex items-start '>
                            <div className='ml-2 text-xs italic'>
                              <label
                                htmlFor='disclaimer'
                                className='font-medium text-gray-700'
                              >
                                <span className='font-bold text-black'>
                                  Disclaimer
                                </span>
                                <span className='text-xs font-light text-black'>
                                  : By clicking 'SUBMIT',&nbsp; you agree to our
                                </span>
                                <a
                                  href='/maruti-car-terms-and-conditions'
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='text-xs font-semibold text-blue-800 '
                                >
                                  &nbsp;Terms and Conditions
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center p-3 bg-gray-100 pd-8 sm:px-6 sm:flex sm:flex-row-reverse'>
                      <button
                        type='submit'
                        disabled={
                          !checkFormValidity() ||
                          phone.length !== 10 ||
                          !pattern.test(phone) ||
                          loading
                        }
                        onClick={handleSubmit}
                        className={`h-10 inline-flex m-4 justify-center w-full sm:w-auto my-2 sm:my-0 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white ${
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

                      <button
                        type='button'
                        className='inline-flex justify-center w-full h-10 px-4 py-2 text-base font-medium text-blue-900 bg-white border border-blue-900 border-solid rounded-full shadow-md hover:bg-red-700 hover:border-red-700 hover:text-white focus:outline-none sm:w-auto sm:text-sm'
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const Tab = ({ title, isActive, onClick }) => (
  <button
    className={`p-2 font-bold ${
      isActive ? 'text-blue-500' : 'text-gray-500'
    } font-bold text-xl focus:outline-none`}
    onClick={onClick}
  >
    {title}
  </button>
);

const TabsBody = ({ children, animate }) => {
  return (
    <div className={`mt-4 ${animate ? 'transition-all duration-300' : ''}`}>
      {children}
    </div>
  );
};

const CustomTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='flex flex-col items-center min-h-screen p-4 bg-gray-100'>
      <div className='flex flex-wrap justify-center w-full p-2 space-x-4 bg-white rounded'>
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>

      <TabsBody className='w-full p-2 mt-2'>
        {/* Center align the cards */}
        <div className='container mx-auto'>
          <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {/* Render content based on active tab */}
            {tabsData[activeTab].content.map((cardData, index) => (
              <div key={index} className='flex justify-center'>
                <CardDefault cardData={cardData} />
              </div>
            ))}
          </div>
        </div>
      </TabsBody>
    </div>
  );
};

const tabsData = [
  {
    title: 'Exterior',
    content: [
      // new swift content starts
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T01-030/990j0m75t01-030_body_side_moulding_garnish.jpg',
        title: 'Body Side Moulding | New Swift',
        price: '2490',
        description: '990J0M75T01-030',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T01-020/990j0m75t01-020_body_side_moulding_white.jpg',
        title: 'Body Side Moulding | New Swift',
        price: '1790',
        description: '990J0M75T01-020',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T01-010/990j0m75t01-010_body_side_moulding_red.jpg',
        title: 'Body Side Moulding | New Swift',
        price: '1790',
        description: '990J0M75T01-010',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TQ0-010/990j0m75tq0-010_door_visor.jpg',
        title: 'Door Visor | New Swift',
        price: '1690',
        description: '990J0M75TQ0-010',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TQ0-020/990j0m75tq0-020_door_visor_steel.jpg',
        title: 'Door Visor | New Swift',
        price: '2450',
        description: '990J0M75TQ0-020',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-010/990j0m75t07-010_front_skid-_chrome_grey.jpg',
        title: 'Front Skid Plate | New Swift',
        price: '1690',
        description: '990J0M75T07-010',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-030/990j0m75t07-030_front_under_spoiler_black.jpg',
        title: 'Front Underbody Spoiler | New Swift',
        price: '4190',
        description: '990J0M75T07-030',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-060/990j0m75t07-060_rear_under_spoiler_black_red.jpg',
        title: 'Rear Underbody Spoiler | New Swift',
        price: '3490',
        description: '990J0M75T07-060',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-070/990j0m75t07-070_rear_under_spoiler_black_white.jpg',
        title: 'Rear Underbody Spoiler | New Swift',
        price: '3490',
        description: '990J0M75T07-070',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-080/990j0m75t07-080_2.jpg',
        title: 'Rear Underbody Spoiler | New Swift',
        price: '3490',
        description: '990J0M75T07-080',
      },
      // new swift content ends
      // section 2 start
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-090/990j0m75t07-090_side_under_spoiler_black.jpg',
        title: 'Side Underbody Spoiler | New Swift',
        price: '4050',
        description: '990J0M75T07-090',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-130/990j0m75t07-130_rear_upper_spoiler_black_red.jpg',
        title: 'Rear Upper Spoiler | New Swift',
        price: '3390',
        description: '990J0M75T07-130',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-100/990j0m75t07-100_wheel_arch_black_red.jpg',
        title: 'Wheel Arch Kit| New Swift',
        price: '4790',
        description: '990J0M75T07-100',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-110/990j0m75t07-110_wheel_arch-_black_white.jpg',
        title: 'Wheel Arch Kit| New Swift',
        price: '4790',
        description: '990J0M75T07-110',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-120/990j0m75t07-120_2.jpg',
        title: 'Wheel Arch Kit| New Swift',
        price: '4790',
        description: '990J0M75T07-120',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T07-140/990j0m75t07-140_rear_upper_spoiler_black_white.jpg',
        title: 'Rear Upper Spoiler | New Swift',
        price: '3390',
        description: '990J0M75T07-140',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T17-010/990j0m75t17-010_bumper_corne_protector_red.jpg',
        title: 'Bumper Corner Protector | New Swift',
        price: '599',
        description: '990J0M75T17-010',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T17-070/990j0m75t17-070_4.jpg',
        title: 'Bumper Corner Protector | New Swift',
        price: '599',
        description: '990J0M75T17-070',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T17-060/990j0m75t17-060_4.jpg',
        title: 'Bumper Corner Protector | New Swift',
        price: '599',
        description: '990J0M75T17-060',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T17-030/990j0m75t17-030_bumper_corne_protector_orange.jpg',
        title: 'Bumper Corner Protector | New Swift',
        price: '599',
        description: '990J0M75T17-030',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T17-020/990j0m75t17-020_4.jpg',
        title: 'Bumper Corner Protector | New Swift',
        price: '599',
        description: '990J0M75T17-020',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T17-050/990j0m75t17-050_bumper_corne_protector_silver.jpg',
        title: 'Bumper Corner Protector | New Swift',
        price: '599',
        description: '990J0M75T17-050',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T17-040/990j0m75t17-040_bumper_corne_protector_white.jpg',
        title: 'Hood + Roof Graphics | New Swift',
        price: '1899',
        description: '990J0M75T17-040',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TJ2-010/990j0m75tj2-010_hood_graphics_carbon.jpg',
        title: 'Rear Underbody Spoiler | New Swift',
        price: '1899',
        description: '990J0M75TJ2-010',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TJ2-030/990j0m75tj2-030_hood_graphics_black.jpg',
        title: 'Hood + Roof Graphics | New Swift',
        price: '2290',
        description: '990J0M75TJ2-030',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/72201M75T00/72201m75t00_mud_flap.jpg',
        title: 'Mud Flap | New Swift',
        price: '550',
        description: '72201M75T00',
      },
      // section 2 end
      {
        imageUrl:
          'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/accessory-page/exterior-webp/83716M53M00-U3J_1.webp',
        title: 'Graphic Speaker | Alto',
        price: '49',
        description: '83716M53M00-U3J',
      },

      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q6/77862m78l00-0pg_1.jpg',
        title: 'Car Emblem - Eeco Logo',
        price: '107',
        description: '77862M78L00-0PG',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/05/990j0m55r00-020_1.jpg',
        title: 'Mud Flap Set - Front',
        price: '150',
        description: '990J0M55R00-020',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m53m00-020_1.jpg',
        title: 'Mud Flap Set - Back',
        price: '199',
        description: '990J0M53M00-020',
      },
      // Line 2
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2023/02/990j0m62s00-020_1-jpg.jpg',
        title: 'Mud Flop Set - Front',
        price: '200',
        description: '990J0M62S00-020',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m53m00-010_1.jpg',
        title: 'Mud Flap Set - Front',
        price: '249',
        description: '990J0M53M00-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised/990j0m62s00-030_1.jpg',
        title: 'Mud Flap Set - Rear',
        price: '250',
        description: '990J0M62S00-030',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q11/990j0m55r00-010_3.jpg',
        title: 'Mud Flap Set - Rear',
        price: '250',
        description: '990J0M55R00-010',
      },
      // Line 3
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised1/990j0m52m00-010_1.jpg',
        title: 'Mud Flap Set',
        price: '300',
        description: '990J0M52M00-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/04/celerio/990j0m81r17-010_0-jpg.jpg',
        title: 'Bumper Corner Protector',
        price: '330',
        description: '990J0M81R17-010',
      },
      // {
      //   imageUrl:
      //     "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/05/990j0m55r00-020_1.jpg",
      //   title: "Wheel Cover Grey",
      //   price: "349",
      //   description: "43250M69R00-27N",
      // },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q7/99000m99110_1.jpg',
        title: 'Mud Flap Set - Front & Rear',
        price: '359',
        description: '99000M99110',
      },
      //Line 4
      // {
      //   imageUrl:
      //     "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q10/990j0m53m00-050_1.jpg",
      //   title: "Mud Flap Set - Front and Rear",
      //   price: "360",
      //   description: "990J0M53M00-050",
      // },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q22/990j0m69r00-090_1.jpg',
        title: 'Mud Flap Set - Rear | Eeco',
        price: '375',
        description: '990J0M69R00-090',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/24/990j0m62s00-010_1.jpg',
        title: 'Mud Flap Set - Front and Rear',
        price: '390',
        description: '990J0M62S00-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/990j0m53t00-010_0.jpg',
        title: 'Mud Flap Set | Alto K10',
        price: '390',
        description: '990J0M53T00-010',
      },
    ],
  },

  //Interior
  {
    title: 'Interior',
    content: [
      // interior new begining
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TPJ-050/990j0m75tpj-050_interior_styli_kit_carbon_red.jpg',
        title: 'Interior Styling Kit - New Swift',
        price: '6500',
        description: '990J0M75TPJ-050',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TPJ-040/990j0m75tpj-040_interior_styli_kit_carbon_blue.jpg',
        title: 'Interior Styling Kit - New Swift',
        price: '6500',
        description: '990J0M75TPJ-040',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TPJ-010/990j0m75tpj-010_interior_styli_kit_carbon.jpg',
        title: 'Interior Styling Kit - New Swift',
        price: '5590',
        description: '990J0M75TPJ-010',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TPJ-030/990j0m75tpj-030_interior_styli_kit_carbon_grey.jpg',
        title: 'Interior Styling Kit - New Swift',
        price: '6500',
        description: '990J0M75TPJ-030',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/75901M75T00/75901m75t00_all_weath_3d_mat.jpg',
        title: 'All Weather 3D Mat | New Swift',
        price: '3490',
        description: '75901M75T00',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TM6-010/990j0m75tm6-010_illuminated_door_sill.jpg',
        title: 'Illuminated Door Still Guard | New Swift',
        price: '2290',
        description: '990J0M75TM6-010',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/75901M75T40/75901m75t40_2.jpg',
        title: 'Black Mat - PVC | New Swift',
        price: '2250',
        description: '75901M75T40',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/75901M75T30/75901m75t30_designer_mat.jpg',
        title: 'Designer Mat - PVC | New Swift',
        price: '2090',
        description: '75901M75T30',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TM8-010/990j0m75tm8-010_door_sill_guard_metal.jpg',
        title: 'Stainless Steel Door Still Guard | New Swift',
        price: '2690',
        description: '990J0M75TM8-010',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/75901M75T50/75901m75t50_2.jpg',
        title: 'Transparent Mat | New Swift',
        price: '2250',
        description: '75901M75T50',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/75901M75TA0/75901m75ta0_deluxe_carpet_mat.jpg',
        title: 'Deluxe Carpet Mat | New Swift',
        price: '1290',
        description: '75901M75TA0',
      },
      //interior new ending
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q6/77862m78l00-0pg_1.jpg',
        title: 'Steering Wheel Cover',
        price: '250',
        description: '77862M78L00-0PG',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/05/990j0m55r00-020_1.jpg',
        title: 'Steering Wheel Cover',
        price: '150',
        description: '990J0M55R00-020',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m53m00-020_1.jpg',
        title: 'PVC Mat',
        price: '350',
        description: '990J0M53M00-020',
      },
      // {
      //   imageUrl:
      //     "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q14/990j0m55ra3-010_1.jpg",
      //   title: "Boot Mat",
      //   price: "400",
      //   description: "990J0M53M00-020",
      // },
      // Line 2

      //line 3
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m69rp6-030_1.jpg',
        title: 'Door Still Guard',
        price: '681',
        description: '990J0M69RP6-030',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q17/990j0m62sp6-020_1.jpg',
        title: 'Door Still Gaurd',
        price: '510',
        description: '990J0M62SP6-020',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q17/990j0m62sp6-010_1.jpg',
        title: 'Door Still Guard',
        price: '619',
        description: '990J0M62SP6-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/88910m53t00-r3f_1.jpg',
        title: 'Rear Parcel Tray',
        price: '619',
        description: '88910M53T00-R3F',
      },
      // line 4
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q27/990j0m75lc1-050_1.jpg',
        title: 'Steering Wheel Cover',
        price: '890',
        description: '990J0M75LC1-050',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/11/18/75901m78tg0_1.jpg',
        title: 'Black Mat - Eeco',
        price: '920',
        description: '75901M78TG0',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q26/990j0m74lc1-170_1.jpg',
        title: 'Steering Wheel Cover',
        price: '960',
        description: '990J0M74LC1-170',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m53ma0-080_1.jpg',
        title: 'Transparent Mat - Alto',
        price: '987',
        description: '990J0M53MA0-080',
      },
      //line 5
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/75901m53t00_0.jpg',
        title: 'Carpet Matt - Alto K10',
        price: '990',
        description: '75901M53T00',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q3/75901m62s00_1.jpg',
        title: 'Carpet Mat - Spresso',
        price: '990',
        description: '75901M62S00',
      },
      // {
      //   imageUrl:
      //     "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q4/75901m69rb0_1.jpg",
      //   title: "PVC Mat - WagonR",
      //   price: "1040",
      //   description: "R75901M69RB0",
      // },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/06/27/75901m66t00_1.jpg',
        title: 'Deluxe Carpet Matt - Brezza',
        price: '1090',
        description: '75901M66T00',
      },
    ],
  },
  {
    title: 'Car Care',
    content: [
      // new accessory start
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T02-030/990j0m75t02-030_body_cover.jpg',
        title: 'Body Cover | New Swift',
        price: '1690',
        description: '990J0M75T02-030',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T02-020/990j0m75t02-020_body_cover.jpg',
        title: 'Body Cover | New Swift',
        price: '1690',
        description: '990J0M75T02-020',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q7/99000m99178_1.jpg',
        title: 'Super Lubricant',
        price: '370',
        description: '99000M99178',
      },
      //new accessory end
      //line1
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/10/95850m69rb0_1.jpg',
        title: 'Cabin Air Filter - PM10',
        price: '210',
        description: '95850M69RB0',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised1/95862m62s20_1.jpg',
        title: 'Cabin Air Filter - PM10',
        price: '325',
        description: '95862M62S20',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q11/990j0m53ms0-010_1.jpg',
        title: 'Cabin Air Filter - PM10',
        price: '330',
        description: '990J0M53MS0-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q11/990j0m53ms0-010_1.jpg',
        title: 'Cabin Air Filter - PM10',
        price: '335',
        description: '990J0M79GS0-010',
      },
      //line 2
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/12/990j0m69rs0-010_1.jpg',
        title: 'PM 2.5 AC Filter',
        price: '550',
        description: '990J0M69RS0-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised/990j0m56rs0-010_1.jpg',
        title: 'Cabin Air Filter',
        price: '599',
        description: '990J0M56RS0-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q11/990j0m53mte-240_1.jpg',
        title: 'PM10 Cabin Air Filter',
        price: '600',
        description: '990J0M53MTE-240',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/12/990j0m82ps0-020_1.jpg',
        title: 'Activated Carbon Filter',
        price: '790',
        description: '990J0M82PS0-020',
      },

      // line 3

      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m53m02-020_1.jpg',
        title: 'Car Body Cover',
        price: '1390',
        description: '990J0M53M02-020',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/03/0203/990j0m62s02-010_1.jpg',
        title: 'Car Body Cover',
        price: '1390',
        description: '990J0M62S02-010',
      },
      // {
      //   imageUrl:
      //     "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m55r02-020_1.jpg",
      //   title: "Car Body Cover",
      //   price: "1410",
      //   description: "990J0M55R02-010",
      // },
      // {
      //   imageUrl:
      //     "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m55r02-020_1.jpg",
      //   title: "Car Body Cover",
      //   price: "1410",
      //   description: "990J0M55R02-020",
      // },

      //line 4

      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/10/ync/990j0m81r02-010_1.jpg',
        title: 'Car Body Cover | Celerio',
        price: '1490',
        description: '990J0M81R02-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m69r02-020_1.jpg',
        title: 'Car Body Cover',
        price: '1450',
        description: '990J0M69R02-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m69r02-020_1.jpg',
        title: 'Car Body Cover',
        price: '1450',
        description: '990J0M69R02-030',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised1/99000m99123_1.jpg',
        title: 'Car Body Cover | Eeco',
        price: '1450',
        description: '99000M99123',
      },

      // line 5

      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/990j0m53t02-030_0.jpg',
        title: 'Body Cover | Alto K10',
        price: '1490',
        description: '990J0M53T02-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/990j0m53t02-010_0.jpg',
        title: 'Body Cover | Alto K10',
        price: '1490',
        description: '990J0M53T02-030',
      },
      // {
      //   imageUrl:
      //     "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/09/990j0m55r02-050_1.jpg",
      //   title: "Car Smart Body Cover",
      //   price: "1499",
      //   description: "990J0M55R02-050",
      // },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/03/0203/990j0m55r02-030_1.jpg',
        title: 'Car Body Cover (Matte)',
        price: '1630',
        description: '990J0M55R02-030',
      },
    ],
  },
  {
    title: 'Life style',
    content: [
      // new swift content starts
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-010/990j0m75t13-010_rear_mid-g_garnish.jpg',
        title: 'Rear Mild Garnish - New Swift',
        price: '900',
        description: '990J0M75T13-010',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-060/990j0m75t13-060_front_bumper_white.jpg',
        title: 'Front Bumper Garnish - New Swift',
        price: '1090',
        description: '990J0M75T13-060',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-050/990j0m75t13-050_front_bumpe_garnish_red.jpg',
        title: 'Front Bumper Garnish - New Swift',
        price: '1090',
        description: '990J0M75T13-050',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-040/990j0m75t13-040_window_frame_kit.jpg',
        title: 'Window Frame Kit - New Swift',
        price: '2490',
        description: '990J0M75T13-040',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-030/990j0m75t13-030_rear_mid_garnish_black.jpg',
        title: 'Rear Mid Garnish - New Swift',
        price: '690',
        description: '990J0M75T13-030',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-090/990j0m75t13-090_3.jpg',
        title: 'Front Grill Insert - New Swift',
        price: '399',
        description: '990J0M75T13-090',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-080/990j0m75t13-080_front_grill_insert_red.jpg',
        title: 'Front Grill Insert - New Swift',
        price: '399',
        description: '990J0M75T13-080',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-070/990j0m75t13-070_front_grill_garnish.jpg',
        title: 'Front Grill Insert - New Swift',
        price: '990',
        description: '990J0M75T13-070',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-130/990j0m75t13-130_3.jpg',
        title: 'Front Grille Insert - New Swift',
        price: '399',
        description: '990J0M75T13-130',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-120/990j0m75t13-120_3.jpg',
        title: 'Front Grille Insert - New Swift',
        price: '399',
        description: '990J0M75T13-120',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-110/990j0m75t13-110_3.jpg',
        title: 'Front Grille Insert - New Swift',
        price: '399',
        description: '990J0M75T13-110',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-100/990j0m75t13-100_front_grill_insert_orange.jpg',
        title: 'Front Grille Insert - New Swift',
        price: '399',
        description: '990J0M75T13-100',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TU0-020/990j0m75tu0-020_window_sunsh_door_2d.jpg',
        title: 'Window Sunshade - New Swift',
        price: '650',
        description: '990J0M75TU0-020',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TU0-030/990j0m75tu0-030_1.jpg',
        title: 'Window Sunshade - New Swift',
        price: '475',
        description: '990J0M75TU0-030',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T13-140/990j0m75t13-140_rear_bumper_black_ganish.jpg',
        title: 'Rear Bumper Garnish - New Swift',
        price: '950',
        description: '990J0M75T13-140',
      },
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75TU0-010/990j0m75tu0-010_window_sunsh_door_4d.jpg',
        title: 'Window Sunshade - New Swift',
        price: '995',
        description: '990J0M75TU0-010',
      },
      //new swift content endds

      //line 1
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m62sp0-010_1.jpg',
        title: 'Speaker Grille - Rear',
        price: '220',
        description: '990J0M62SP0-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/04/990j0m52m13-030_1.jpg',
        title: 'Turn Signal Indicator',
        price: '260',
        description: '990J0M52M13-030',
      },
      // {
      //   imageUrl:
      //     "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/06/29/990j0m66t13-030_0.jpg",
      //   title: "Front Grille Garnish",
      //   price: "290",
      //   description: "990J0M66T13-030",
      // },
      // {
      //   imageUrl:
      //     "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/06/27/990j0m66t13-040_1.jpg",
      //   title: "Front Grille Garnish",
      //   price: "290",
      //   description: "990J0M66T13-040",
      // },
      // line 2
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/10/ync/990j0m81r13-110_1.jpg',
        title: 'Fog Lamp Garnish',
        price: '300',
        description: '990J0M81R13-110',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q14/990j0m55r13-260_1.jpg',
        title: 'C-Pillar Garnish',
        price: '360',
        description: '990J0M55R13-260',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/10/ync/990j0m81r13-050_1.jpg',
        title: 'Fog Lamp Garnish',
        price: '390',
        description: '990J0M81R13-050',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/03/0203/990j0m52m13-040_1.jpg',
        title: 'Fuel Lid Garnish',
        price: '400',
        description: '990J0M52M13-040',
      },
      //line 3
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m81r13-100_0.jpg',
        title: 'Fog Lamp Garnish',
        price: '410',
        description: '990J0M81R13-100',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m81r13-040_0.jpg',
        title: 'Fog Lamp Garnish',
        price: '410',
        description: '990J0M81R13-040',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/05/990j0m53t13-030_1.jpg',
        title: 'Rear Bumper Garnish',
        price: '430',
        description: '990J0M53T13-030',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/990j0m53t13-020_0.jpg',
        title: 'Rear Bumper Garnish',
        price: '430',
        description: '990J0M53T13-020',
      },
    ],
  },
  {
    title: 'Infotainment',
    content: [
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/oldimages/jan/39354m55kb0_1.jpg',
        title: 'Speaker Bracket',
        price: '107',
        description: '39354M55KB0',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/12/990j0m74lm5-010_1.jpg',
        title: 'Antenna Pig Tail Assembly',
        price: '128',
        description: '990J0M74LM5-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/07/990j0m83km5-010_1.jpg',
        title: 'Speaker Spacer',
        price: '183',
        description: '990J0M83KM5-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised/990j0m999m5-050_1.jpg',
        title: 'Spacer Ring',
        price: '195',
        description: '990J0M999M5-050',
      },
      // LINE 2
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/10/990j0m999m5-030_1.jpg',
        title: 'Speaker Spacer Set',
        price: '537',
        description: '990J0M999M5-030',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q18/990j0m66le1-010_1.jpg',
        title: 'Speaker - 10.16 cm',
        price: '690',
        description: '990J0M66LE1-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2023/02/990j0m60me3-010_1-jpg.jpg',
        title: 'Speaker 15.24 cm',
        price: '1130',
        description: '990J0M60ME3-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q18/990j0m66le1-070_1.jpg',
        title: 'Speaker - Dual Cone',
        price: '1650',
        description: '990J0M66LE1-070',
      },
      //line 3
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised/990j0m53me3-030_1.jpg',
        title: 'Speaker 15.24 cm',
        price: '1970',
        description: '990J0M53ME3-030',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q18/990j0m66le1-090_1.jpg',
        title: 'Speaker - Dual Cone',
        price: '2090',
        description: '990J0M66LE1-090',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q18/990j0m66le1-080_1.jpg',
        title: 'Speaker - 10.16 cm',
        price: '2190',
        description: '990J0M66LE1-080',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/r7/990j0m99919-150_1.jpg',
        title: 'Bluetooth Kit',
        price: '2490',
        description: '990J0M99919-150',
      },
      //line 4
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q19/990j0m66le1-100_1.jpg',
        title: 'Speaker - 15.24 cm',
        price: '2590',
        description: '990J0M66LE1-100',
      },
      {
        imageUrl:
          'https://www.marutisuzuki.com/assets/images/product-img-01.jpg',
        title: 'Tweeter 80W',
        price: '2690',
        description: '990J0M999EE-030',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q19/990j0m66le3-030_1.jpg',
        title: 'Speakers -  260W 2 - way',
        price: '2690',
        description: '990J0M66LE3-030',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m66le3-070_1.jpg',
        title: 'Speakers - 16 cm',
        price: '2690',
        description: '990J0M66LE3-070',
      },
    ],
  },
  {
    title: 'Safety and security',
    content: [
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M75T21-070/990j0m75t21-070_1.jpg',
        title: 'Front Parking Assist System - new Swift',
        price: '6990',
        description: '990J0M75T21-070',
      },
      // {
      //   imageUrl:
      //     "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/36550m64m50_1.jpg",
      //   title: "Plug and Play Footwell Light",
      //   price: "270",
      //   description: "36550M64M50",
      // },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/06/29/990j0m66te0-010_1.jpg',
        title: 'T Lead - Brezza',
        price: '365',
        description: '990J0M66TE0-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m52mm5-010_1.jpg',
        title: 'Audio Systen Hardware Kit',
        price: '460',
        description: '990J0M52MM5-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2023/02/990j0m53te0-020_1-jpg.jpg',
        title: 'Rear Door Speaker Harness',
        price: '510',
        description: '990J0M53TE0-020',
      },
      //line 2
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m62se0-020_1.jpg',
        title: 'Speaker Wiring Harness Kit',
        price: '520',
        description: '990J0M62SE0-020',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2023/02/990j0m53te0-010_1-jpg.jpg',
        title: 'Front Door Speaker Harness',
        price: '990',
        description: '990J0M53TE0-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/11/84702m53m10-5pk_1.jpg',
        title: 'Outside Rear View Mirror',
        price: '1053',
        description: '84702M53M10-5PK',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m62s21-020_1.jpg',
        title: 'Rear Parking Assistance',
        price: '2030',
        description: '990J0M62S21-020',
      },
      //line 3
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/06/29/990j0m66tpj-030_0.jpg',
        title: 'OVRM and ORVM Auto Cover',
        price: '3590',
        description: '990J0M66TPJ-030',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2021/1602/990j0m72r11-010_1.jpg',
        title: 'OVRM Turn Indicator',
        price: '3590',
        description: '990J0M72R11-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m66tpj-040_0-jpg.jpg',
        title: 'OVRM and IVRM Cover',
        price: '3590',
        description: '990J0M66TPJ-040',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/11/18/990j0m52m11-030_1.jpg',
        title: 'Fog Lamp - Eeco',
        price: '3750',
        description: '990J0M52M11-030',
      },
      //line 4
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M53TF0-030/product-img-101.jpg',
        title: 'Security Vxi+',
        price: '3790',
        description: '990J0M53TF0-030',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2020/07/990j0m62sf0-020_1.jpg',
        title: 'Secuirty System',
        price: '3950',
        description: '990J0M62SF0-020',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/24/990j0m69r11-010_1.jpg',
        title: 'Fog Lamp Kit',
        price: '4150',
        description: '990J0M69R11-010',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q12/990j0m55r11-010_1.jpg',
        title: 'Fog Lamp Kit',
        price: '4260',
        description: '990J0M55R11-010',
      },
    ],
  },
  // Add more tabs and their card data as needed
  {
    title: 'Packages',
    content: [
      {
        imageUrl:
          'https://marutistoragenew1.azureedge.net/paccmicroservice/990J0M999TE-330/990j0m999te-330_1.jpg',
        title: 'Stereo 2 DIN And Speaker Kit',
        price: '9990',
        description: '990J0M999TE-330',
      },
      {
        imageUrl:
          'https://az-ci-afde-prd-arena-01-e7fmh3dxacbgeyh5.z01.azurefd.net/-/media/marutigeniuneaccessories_27112019/2022/01/36550m64m50_1.jpg',
        title: 'Plug and Play Footwell Light',
        price: '270',
        description: '36550M64M50',
      },
    ],
  },
];

export default Accessory;
