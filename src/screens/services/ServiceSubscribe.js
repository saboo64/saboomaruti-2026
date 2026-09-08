import React, { useState, Fragment, useEffect } from "react";
import Header from "../../components/header/Header";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";

function ServiceSubscribe() {
  return (
    <>
      <Header />
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Saboo-Maruti-Suzuki-Subscribe-Banner+copy.webp"
        className="w-full max-w-full lg:mt-16"
        alt="Service Subscribe"
      />
      <div className="container mx-auto my-8">
        <p className="mx-5 text-3xl font-bold text-blue-900">
          Why Subscribe from Maruti Suzuki?
        </p>
        <p className="mx-5 text-gray-500">
          Introducing a surprisingly easy way of bringing home a car. Simply
          choose a car for a preferred tenure and drive ahead to enjoy for an
          all-inclusive monthly fee which takes care of your maintenance and
          insurance cost also.
        </p>
        <div className="grid grid-cols-2 gap-5 mx-5 md:grid-cols-3 md:mx-0">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/subscription-benefits.webp"
            alt="1"
          />
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/subscription-benifits-2.webp"
            alt="2"
          />
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/subscription-benefits-3.webp"
            alt="3"
          />
        </div>
        <ul className="mx-10 text-gray-600 list-disc md:mx-0">
          <li>
            In White plate, vehicle will be registered in customer’s name.
            Tenure options available in white plate are 24, 36 or 48 months.
          </li>
          <li>
            In Back plate, vehicle will be registered in the name of
            subscription partner. Tenure options available in black plate are
            12, 18, 24, 30, 36, 42 or 48 months.
          </li>
          <li>MS Subscribe is available in select cities only.</li>
        </ul>
      </div>
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto">
          <p className="mx-5 text-3xl font-semibold text-blue-900">
            Easy Steps to Subscribe your Car
          </p>
          <div className="grid grid-cols-2 gap-5 mx-5 md:grid-cols-4 md:mx-0">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-1.webp"
              alt="1"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-2.webp"
              alt="2"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-3.webp"
              alt="3"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-4.webp"
              alt="4"
            />
          </div>
        </div>
      </div>
      <PreferenceForm />
    </>
  );
}

const PreferenceForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // const [method, setMethod] = useState();
  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState("");

  // adding date
  var result = "";
  var d = new Date();
  result += d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  const checkFormValidity = () => {
    return (
      name.trim() !== "" && phone.length === 10 && outlet !== "" && !loading
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://crm.zoho.in/crm/WebToLeadForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          xnQsjsdp:
            "c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529",
          zc_gad: "",
          xmIwtLD:
            "adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4",
          actionType: "TGVhZHM=",
          returnURL: "https://www.saboomaruti.in/",
          "Last Name": name,
          // Email: phone + '@gmail.com',
          Phone: phone,
          // LEADCF6: model,
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
    //       // model: model,
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
          "https://arena-backend-git-main-arenas-projects.vercel.app/general",
          {
            name: name,
            phone: phone,
            // email: email,
            // model: model,
            outlet: outlet,

            leadFrom: "Subscribe",
          }
        )
        .then((res) => {
          toast.success("Enquiry sent successfully");
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Something went wrong!");
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
        console.log("SMS API Response:", res.data);
        setSubmitted(true);
        // setOpen(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error sending SMS:", err);
        setSubmitted(true);
        // setOpen(false);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (submitted) {
      document.getElementById("arenaCarEnq2").submit();
    }
  }, [submitted]);

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      sessionStorage.setItem("popup", "false");
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }

  return (
    <>
      <div className="container mx-auto my-8">
        <p className="my-4 text-3xl font-semibold text-blue-900">
          Select your Preference
        </p>
        <form
          id="arenaCarEnq2"
          action={
            pattern.test(phone) && phone.length === 10
              ? "https://crm.zoho.in/crm/WebToLeadForm"
              : "#"
          }
          name="WebToLeads54158000007156717"
          method={"POST"}
          acceptCharset="UTF-8"
        >
          <input
            type="text"
            className="hidden"
            name="xnQsjsdp"
            value="c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input
            type="text"
            className="hidden"
            name="xmIwtLD"
            value="adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4"
          />
          <input
            type="text"
            className="hidden"
            name="actionType"
            value="TGVhZHM="
          />
          <input
            type="text"
            className="hidden"
            name="returnURL"
            value="https://www.saboomaruti.in/thank-you-for-contact-us"
          />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
            <div>
              <input
                className="w-full h-10 px-3 border rounded-full outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Name"
                id="Last_Name"
                name="Last Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="w-full h-10 px-3 border rounded-full outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Phone"
                minlength="10"
                maxlength="10"
                id="Mobile"
                name="Phone"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(/[^1-9 ]/g, "") &&
                      e.target.value.replace(/ /g, "")
                  )
                }
              />
              {phone.length > 7 && phone.length < 10 ? (
                <small className="text-red-500">
                  Phone number must be 10 digits
                </small>
              ) : !pattern.test(phone) && phone.length === 10 ? (
                <small className="text-red-500">Phone number is invalid</small>
              ) : (
                ""
              )}
            </div>

            <div>
              <select
                id="LEADCF23"
                name="LEADCF23"
                onChange={(e) => setOutlet(e.target.value)}
                defaultValue="Select Outlet"
                className="block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option disabled>Select Outlet</option>
                <option value="Somajiguda">Somajiguda</option>
                <option value="Malakpet">Malakpet</option>
                <option value="Secunderabad">Secunderabad</option>
                <option value="Kushaiguda">Kushaiguda</option>
                <option value="Kompally">Kompally</option>
                <option value="Shamirpet">Shamirpet</option>
                <option value="Narsingi">Narsingi</option>
                <option value="Kodangal">Kodangal</option>
                {/* <option value="Sangeeth Circle">Sangeeth Circle</option> */}
              </select>
            </div>
          </div>
          {/* <div className='flex items-center my-3 space-x-1'>
            <input id='comments' name='comments' type='checkbox' required />
            <label htmlFor='comments' className='font-medium text-gray-900'>
              I Agree
            </label>
          </div>
          <p className='mb-2 text-gray-900'>
            <span className='font-semibold'>Disclaimer :</span> I agree that by
            clicking the ‘Submit’ button below, I am explicitly soliciting a
            call / Message from Saboo Maruti (RKS Motor Pvt. Ltd) or its
            Representatives on my ‘Mobile’
          </p> */}
          <button
            type="submit"
            disabled={
              !checkFormValidity() ||
              phone.length !== 10 ||
              !pattern.test(phone) ||
              loading
            }
            onClick={handleSubmit}
            className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white ${
              !checkFormValidity()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <CgSpinner className="w-5 h-5 mr-2 text-white animate-spin" />
                Loading
              </div>
            ) : (
              "SUBMIT"
            )}
          </button>
          <div className="flex items-start py-1 ">
            <div className="ml-2 text-sm">
              <label htmlFor="disclaimer" className="font-medium text-gray-700">
                <span className="font-bold text-black">Disclaimer</span>
                <span className="text-black">
                  : By clicking 'SUBMIT', you have agreed to our
                </span>
                <a
                  href="/maruti-car-terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 text-sm text-red-600 "
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
        </form>
        {/* <form
          action='https://crm.zoho.in/crm/WebToLeadForm'
          name='WebToLeads54158000007156717'
          method={method}
          // method='POST'
          acceptCharset='UTF-8'
        >
          <input
            type='text'
            className='hidden'
            name='returnURL'
            value='https://www.saboomaruti.in/thank-you-for-contact-us'
          />
          <div className='grid gap-3 sm:grid-cols-3'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                className='w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500'
                id='Last_Name'
                name='Last Name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                ftype='email'
                id='Email'
                name='Email'
                onChange={(e) => setEmail(e.target.value)}
                className='block w-full h-10 px-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Phone
              </label>
              <input
                className='block w-full h-10 px-2 mt-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
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
                <small className='text-red-500'>phone number is invalid</small>
              ) : (
                ''
              )}
            </div>
            <div className=''>
              <label className='block text-sm font-medium text-gray-700'>
                Outlets
              </label>
              <select
                id='LEADCF23'
                name='LEADCF23'
                onChange={(e) => setOutlet(e.target.value)}
                className='block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              >
                <option>Select Outlet</option>
                <option value='RKS Motor - Somajiguda'>
                  RKS Motor - Somajiguda
                </option>
                <option value='RKS Motor - Malakpet'>
                  RKS Motor - Malakpet
                </option>
                <option value='RKS Motor - Secunderabad'>
                  RKS Motor - Secunderabad
                </option>
                <option value='RKS Motor - Kushaiguda'>
                  RKS Motor - Kushaiguda
                </option>
                <option value='RKS Motor - Kompally'>
                  RKS Motor - Kompally
                </option>
                <option value='RKS Motor - Shamirpet'>
                  RKS Motor - Shamirpet
                </option>
                <option value='RKS Motor - Narsingi'>
                  RKS Motor - Narsingi
                </option>
                <option value='RKS Motor - Kodangal'>
                  RKS Motor - Kodangal
                </option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Registeration Type
              </label>
              <select className='block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
                <option> Select Type</option>
                <option value='White Plate'>White Plate</option>
                <option value='Black Plate'>Black Plate</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Subscription Tenure
              </label>
              <select className='block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
                <option> Select Tenure </option>
                <option value='12'>12</option>
                <option value='18'>18</option>
                <option value='24'>24</option>
                <option value='30'>30</option>
                <option value='36'>36</option>
                <option value='42'>42</option>
                <option value='48'>48</option>
              </select>
            </div>
          </div>
          <button
            type='submit'
            onClick={handleSubmit}
            className='inline-flex justify-center h-10 px-4 py-2 mt-5 mr-3 text-sm font-medium text-white bg-red-800 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
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
        </form> */}
      </div>
    </>
  );
};

export default ServiceSubscribe;
