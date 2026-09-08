import React, { useState } from "react";
import { useEffect } from "react";
// import { BsCalendarCheck } from "react-icons/bs";
import "react-image-gallery/styles/css/image-gallery.css";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";

export const VehicleCarEnquiry = ({ title, carName }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const checkFormValidity = () => {
    return name.trim() !== "" && phone.length === 10 && !loading;
  };

  const navigate = useNavigate();
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

          LEADCF23: outlet,
          // adding date

          Company: "Reward Points",
        }),
      });
      if (response.ok) {
        navigate("/thank-you-for-contact-us");
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
          "https://arena-backend-git-main-arenas-projects.vercel.app/general",
          {
            name: name,
            phone: phone,
            // email: email,
            // model: model,
            outlet: outlet,
            leadFrom: "Reward Points",
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
   Popular RKS.
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

  useEffect(() => {
    if (submitted) {
      document.getElementById("arenaCarEnq2").submit();
    }
  }, [submitted]);

  const pattern = /^(?![6-9]{10}$)(?!.*(\d)(?:-?\1){9})[6-9]\d{9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }

  return (
    // <div className='py-12 mt-12 bg-blue-800'>
    <div className="container p-5 py-6 mx-auto mt-8 shadow lg:p-6">
      <div className="mb-5 text-4xl font-semibold text-blue-800 normal-case ">
        Enroll Now
      </div>
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
        className="grid gap-4"
      >
        <div>
          <input
            className="w-full h-10 px-3 mb-4 border rounded-full outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Name"
            id="Last_Name"
            name="Last Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className="w-full h-10 px-3 mb-4 border rounded-full outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
            minLength="10"
            maxLength="10"
            id="Phone"
            name="Phone"
            value={phone}
            required
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
            onChange={(e) => {
              const selectedValue = e.target.value;
              // Check if the selected option is not "Select Outlet"
              if (selectedValue !== "Select Outlet") {
                // Perform the backend call or set the model state here
                setOutlet(selectedValue);
              }
            }}
            defaultValue="Select Outlet"
            className="block w-full h-10 px-3 py-2 mb-4 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option disabled>Select Tier</option>
            <option value="Platinum Tier">Platinum Tier</option>
            <option value="Gold Tier">Gold Tier</option>
            <option value="Silver Tier">Silver Tier</option>
            <option value="Member Tier">Member Tier</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={!checkFormValidity()}
          onClick={handleSubmit}
          className={`h-10 inline-flex justify-center py-2 px-4 mt-4 mb-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white ${
            !checkFormValidity()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          }`}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <CgSpinner className="h-5 mr-2 text-white animate-spin" />
              Loading
            </div>
          ) : (
            "SUBMIT"
          )}
        </button>
        <div className="flex items-start py-1 ">
          <div className="ml-2 text-xs">
            <label
              htmlFor="disclaimer"
              className="italic font-medium text-gray-700"
            >
              <span className="font-bold text-blue-800">Disclaimer</span>
              <span className="text-blue-800 font-extralight">
                : By clicking SUBMIT, you agree to our
              </span>
              <a
                href="/maruti-car-terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 text-xs text-blue-800 hover:font-bold hover:underline "
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
