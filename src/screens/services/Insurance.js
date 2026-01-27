import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Header from "../../components/header/Header";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";

import SeoMeta from "../../components/SEo/SeoMeta";

function Insurance() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("noname@gmail.com");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // adding date
  var result = "";
  var d = new Date();
  result += d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  const checkFormValidity = () => {
    return name.trim() !== "" && phone.length === 10 && !loading;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // try {
    //   await axios
    //     .post('https://saboogroups.com/admin/api/arena-insurance', {
    //       name: name,
    //       phone: phone,
    //       email: email,
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
          "https://arena-backend-git-main-arenas-projects.vercel.app/insurance",
          {
            name: name,
            phone: phone,
            email: email,
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
   RKS Motor Pvt. Ltd.
   98488 98488
   www.saboomaruti.in
   www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log("SMS API Response:", res.data);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error sending SMS:", err);
        setSubmitted(true);
        setLoading(false);
      });
  };

  if (window.gtag) {
    window.gtag("event", "Insurance enquiry", {
      "phone number": `+91${phone}`,
      email: `${email}`,
      name: `${name}`,
    });
  }

  useEffect(() => {
    if (submitted) {
      document.getElementById("arenaCarEnq2").submit();
    }
  }, [submitted]);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }

  return (
    <>
  <SeoMeta
  title="Maruti Insurance Renewal in Secunderabad, Hyderabad | Saboo Maruti"
  description="Maruti car insurance renewal in Hyderabad & Secunderabad. Get cashless accident repairs, fair & transparent claim settlement. Looking to Renew Insurance Online for, Maruti Swift,Maruti Wagon R, Maruti Ertiga, Eeco, Maruti S-Presso, Maruti Alto 800,Maruti Vitara brezza,Maruti brezza, Celerio"
  keywords="maruti insurance renewal, saboomaruti in car, suzuki renewal"
  canonicalUrl="https://www.saboomaruti.in/maruti-suzuki-car-insurance-renewal"
  ogImage="/img/og-tags/insurance.webp"
  twitterUrl="https://x.com/saboorksmaruti"
  author="Broaddcast"
/>

      <Header />
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Saboo-Maruti-Suzuki-Insurance-Banner.webp"
        className="w-full max-w-full lg:mt-16"
        alt="inusrance banner"
        id="insurance"
      />
      <div className="container px-5 py-16 mx-auto">
        <p className="text-2xl font-semibold text-red-500">Maruti Insurance</p>
        <p>
          We will help you get the new car insurance or used car insurance for
          your newly purchased car. We meet all you Maruti Suzuki car insurance
          needs by offering you attractive new car insurance schemes and
          benefits.Just fill this simple form and our marketing person will
          contact you at your convenience to offer you the best insurance option
          for your new Maruti Suzuki car and also discuss with you as to how it
          will benefit in the long run.
        </p>
        <form
          id="arenaCarEnq2"
          action={
            pattern.test(phone) && phone.length === 10
              ? "https://crm.zoho.in/crm/WebToLeadForm"
              : "#"
          }
          name="WebToLeads54158000083979838"
          method={"POST"}
          acceptCharset="UTF-8"
        >
          <input
            type="text"
            style={{ display: "none" }}
            name="xnQsjsdp"
            value="c74cc4baa2079f2637d12188693a8bb7a822a54f015337983612fcbc54e9f529"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input
            type="text"
            style={{ display: "none" }}
            name="xmIwtLD"
            value="adcef2507910e0e3ba3fffde446eb242f3dba817a00c872b6a7d471bc1ce61d0bd840c68a483b37a9012f6016a3ceeb4"
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="actionType"
            value="TGVhZHM="
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="returnURL"
            value="https://www.saboomaruti.in/thank-you-for-contact-us"
          />
          {/* <p className="font-bold uppercase text-md">my car details :</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <select
                id="LEADCF6"
                name="LEADCF6"
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>Select Model</option>
                <option value="Maruti Alto 800">Maruti Alto</option>
                <option value="Maruti Wagon R">Maruti Wagon R</option>
                <option value="Maruti Celerio">Maruti New Celerio</option>
                <option value="Maruti Swift">Maruti Swift</option>
                <option value="Maruti Dzire">Maruti Dzire</option>
                <option value="Maruti S-Presso">Maruti S-Presso</option>
                <option value="Maruti Ertiga">Maruti Ertiga</option>
                <option value="Maruti Vitara Brezza">
                  Maruti Vitara Brezza
                </option>
                <option value="Maruti Eeco">Maruti Eeco</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Registeration Number
              </label>
              <input
                className="w-full h-10 px-3 uppercase border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                id="LEADCF1"
                name="LEADCF1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Registeration Year
              </label>
              <input
                className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type="date"
                id="LEADCF83"
                name="LEADCF83"
              />
            </div>
          </div>

          <p className="font-bold uppercase text-md">existing Policy :</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Policy Number
              </label>
              <input
                className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name="car_insurance_policy_no"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Insurance Company
              </label>
              <input
                className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                id="Company"
                name="Company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Insurance Expiry
              </label>
              <input
                className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type="date"
                ng-model="vars.startDate"
                name="car_insurance_expiry_date"
              />
            </div>
          </div> */}

          <p className="font-bold uppercase text-md">my contact details :</p>
          <div className="grid gap-3 lg:grid-cols-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name<span className="text-red-600 sub">*</span>
              </label>
              <input
                className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                id="Last_Name"
                name="Last Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="hidden">
              <label className="block text-sm font-medium text-gray-700">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                className="w-full h-10 px-3 border rounded-md outline-none focus:ring-red-500 focus:border-red-500"
                type="text"
                required
                id="LEADCF83"
                name="LEADCF83"
                value={result}
              />
              {phone.length > 0 && phone.length < 10 ? (
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
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                ftype="email"
                id="Email"
                name="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {email.length > 0 && !emailPattern.test(email) ? (
                <small className="text-red-500">Invalid email address</small>
              ) : (
                ""
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                className="w-full h-10 px-3 border rounded-md outline-none focus:ring-blue-500 focus:border-blue-500"
                type="text"
                maxLength="10"
                minLength="10"
                required
                id="Phone"
                name="Phone"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(/[^1-9 ]/g, "") &&
                      e.target.value.replace(/ /g, "")
                  )
                }
              />
              {phone.length > 0 && phone.length < 10 ? (
                <small className="text-red-500">
                  Phone number must be 10 digits
                </small>
              ) : !pattern.test(phone) && phone.length === 10 ? (
                <small className="text-red-500">Phone number is invalid</small>
              ) : (
                ""
              )}
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Claim
              </label>
              <select
                id="LEADCF23"
                name="LEADCF23"
                className="block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option>Select Claim</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div> */}
          </div>
          {/* <p className='text-gray-700'>
            <span className='font-bold text-black'>Disclaimer</span>: I agree
            that by clicking the ‘Submit’ button below, I am explicitly
            soliciting a call / Message from Saboo Maruti (RKS Motor Pvt. Ltd)
            or its Representatives on my ‘Mobile’
          </p>
          <div className='flex items-start'>
            <input
              id='disclaimer'
              name='disclaimer'
              type='checkbox'
              className='w-4 h-4 rounded'
            />
            <div className='ml-2 text-sm'>
              <label htmlFor='disclaimer' className='font-medium text-gray-700'>
                Please Agree with Following Disclaimer
              </label>
            </div>
          </div> */}
          <button
            className={`h-10 inline-flex justify-center mr-3 py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white ${
              !checkFormValidity()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            }`}
            type="submit"
            disabled={
              !checkFormValidity() ||
              phone.length !== 10 ||
              !pattern.test(phone) ||
              loading
            }
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <CgSpinner className="w-5 h-5 mt-2 mr-2 text-white animate-spin" />
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
      </div>
    </>
  );
}

export default Insurance;
