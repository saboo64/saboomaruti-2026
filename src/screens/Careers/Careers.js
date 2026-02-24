import { useState, useRef } from 'react';
import React from 'react';
import emailjs from '@emailjs/browser';
import './Careers.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Careers = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  // const [salaryRequirements, setSalaryRequirements] = useState('');
  const [expsalary, setExpsalary] = useState('');
  const [, setStartDate] = useState('');
  // State to store the selected years of experience
  const [yearsExperience, setYearsExperience] = useState('');
  // State to store the selected notice period
  const [noticePeriod, setNoticePeriod] = useState('');
  const [previousCompany, setPreviousCompany] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [ setWillingToRelocate] = useState('');
  const [ setQueries] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [ setSubmitted] = useState(false);
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);
  const [position, setPosition] = useState('');
  // const [email, setEmail] = useState('');
  const [emailError,] = useState('');
  const [selectedGender, setSelectedGender] = useState('male');

  const handleReset = () => {
    setSelectedGender('');
    setSelectedCity('');
    setPostalCode('');
    setSelectedState('');
    setSelectedCountry('');
    setExpsalary('');
    setStartDate('');
    setYearsExperience('');
    setNoticePeriod('');
    setPreviousCompany('');
    setLinkedinProfile('');
    setWillingToRelocate('');
    setQueries('');
    setDob('');
    setPhoneNumber('');
    setSubmitted(false); // Optionally, reset the submitted state if needed
  };

  // email js config
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tx79oi9',
        'template_t4q2mx1',
        form.current,
        'KDphtENMRH7e9YNWh'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Redirect to the thank-you page upon successful submission
          navigate('/thank-you-for-contact-us');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Define city-to-postal code, city-to-state, and city-to-country mappings
  const cityData = {
    Hyderabad: {
      postalCode: '500xxx',
      state: 'Telangana',
      country: 'India',
    },
    Secunderabad: {
      postalCode: '500xxx',
      state: 'Telangana',
      country: 'India',
    },
    Warangal: {
      postalCode: '506xxx',
      state: 'Telangana',
      country: 'India',
    },
    Nizamabad: {
      postalCode: '503xxx',
      state: 'Telangana',
      country: 'India',
    },
    Karimnagar: {
      postalCode: '505xxx',
      state: 'Telangana',
      country: 'India',
    },
    Khammam: {
      postalCode: '507xxx',
      state: 'Telangana',
      country: 'India',
    },
    Ramagundam: {
      postalCode: '505xxx',
      state: 'Telangana',
      country: 'India',
    },
    Visakhapatnam: {
      postalCode: '530xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Vijayawada: {
      postalCode: '520xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Guntur: {
      postalCode: '522xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Nellore: {
      postalCode: '524xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Tirupati: {
      postalCode: '517xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Rajahmundry: {
      postalCode: '533xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Kakinada: {
      postalCode: '533xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Anantapur: {
      postalCode: '515xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Kadapa: {
      postalCode: '516xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Machilipatnam: {
      postalCode: '521xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Ongole: {
      postalCode: '523xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Adilabad: {
      postalCode: '504xxx',
      state: 'Telangana',
      country: 'India',
    },
    Siddipet: {
      postalCode: '502xxx',
      state: 'Telangana',
      country: 'India',
    },
    Mahbubnagar: {
      postalCode: '509xxx',
      state: 'Telangana',
      country: 'India',
    },
    Nalgonda: {
      postalCode: '508xxx',
      state: 'Telangana',
      country: 'India',
    },
    Chittoor: {
      postalCode: '517xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Srikakulam: {
      postalCode: '532xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Vizianagaram: {
      postalCode: '535xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Eluru: {
      postalCode: '534xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Tenali: {
      postalCode: '522xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Tadepalligudem: {
      postalCode: '534xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Proddatur: {
      postalCode: '516xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Kurnool: {
      postalCode: '518xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Bhimavaram: {
      postalCode: '534xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Suryapet: {
      postalCode: '508xxx',
      state: 'Telangana',
      country: 'India',
    },
    Kothagudem: {
      postalCode: '507xxx',
      state: 'Telangana',
      country: 'India',
    },
    Jagtial: {
      postalCode: '505xxx',
      state: 'Telangana',
      country: 'India',
    },
    Miryalaguda: {
      postalCode: '508xxx',
      state: 'Telangana',
      country: 'India',
    },
    Bhongir: {
      postalCode: '508xxx',
      state: 'Telangana',
      country: 'India',
    },
    Sircilla: {
      postalCode: '505xxx',
      state: 'Telangana',
      country: 'India',
    },
    Karur: {
      postalCode: '505xxx',
      state: 'Telangana',
      country: 'India',
    },
    Adoni: {
      postalCode: '518xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Nandyal: {
      postalCode: '518xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Madanapalle: {
      postalCode: '517xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Puttaparthi: {
      postalCode: '515xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Hindupur: {
      postalCode: '515xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Gudur: {
      postalCode: '524xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Kovvur: {
      postalCode: '534xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Palakollu: {
      postalCode: '534xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Tadipatri: {
      postalCode: '515xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Amalapuram: {
      postalCode: '533xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Tanuku: {
      postalCode: '534xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Tenkasi: {
      postalCode: '517xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Kavali: {
      postalCode: '524xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Tuni: {
      postalCode: '533xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Repalle: {
      postalCode: '522xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },

    Palasa: {
      postalCode: '532xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },

    Parvathipuram: {
      postalCode: '535xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },

    Kadiri: {
      postalCode: '515xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Sattenapalle: {
      postalCode: '522xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Narasaraopet: {
      postalCode: '522xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Chirala: {
      postalCode: '523xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Bapatla: {
      postalCode: '522xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Markapur: {
      postalCode: '523xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Piduguralla: {
      postalCode: '522xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
    Guntakal: {
      postalCode: '515xxx',
      state: 'Andhra Pradesh',
      country: 'India',
    },
  };

  // You can continue to add more cities and their data as needed.

  // Handle city selection
  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);

    // Get city data based on the selected city
    const cityInfo = cityData[selectedCity] || {};
    setPostalCode(cityInfo.postalCode || '');
    setSelectedState(cityInfo.state || '');
    setSelectedCountry(cityInfo.country || '');
  };

  // Define the handleDobChange function to update the selected date
  // const handleDobChange = (e) => {
  //   setDob(e.target.value);
  // };

  const handleExpsalaryChange = (event) => {
    const input = event.target.value;

    // Use a regular expression to check if the input consists of only numbers
    if (/^\d*\.?\d*$/.test(input)) {
      // If it's a valid number, update the state
      setExpsalary(input);
    }
  };

  const handlePreviousCompanyChange = (event) => {
    const value = event.target.value;
    setPreviousCompany(value);
  };

  // Handle changes in LinkedIn Profile field
  const handleLinkedinProfileChange = (event) => {
    const value = event.target.value;
    setLinkedinProfile(value);
  };

  // Handle changes in Willing to Relocate radio buttons
  // const handleWillingToRelocateChange = (event) => {
  //   const value = event.target.value;
  //   setWillingToRelocate(value);
  // };

  // // Define a function to handle changes in the 'queries' state
  // const handleQueriesChange = (e) => {
  //   setQueries(e.target.value);
  // };

  const handlePhoneNumberChange = (event) => {
    // Get the new phone number value from the input
    const newPhoneNumber = event.target.value;

    // Remove any non-digit characters (e.g., spaces or dashes)
    const cleanedPhoneNumber = newPhoneNumber.replace(/\D/g, '');

    // Check if the cleaned input has 10 digits or fewer
    if (cleanedPhoneNumber.length <= 10) {
      // Update the state with the cleaned phone number
      setPhoneNumber(cleanedPhoneNumber);

      // Clear the error message
      setPhoneNumberError('');
    } else {
      // Display an error message
      setPhoneNumberError('Phone number must be exactly 10 digits');
    }
  };

  // Array to represent years of experience options
  const experienceOptions = [
    'Less than 1 year (Fresher)',
    '1-2 years',
    '3-5 years',
    '6-10 years',
    'More than 10 years',
  ];

  // Event handler to handle the change in selected experience
  const handleExperienceChange = (event) => {
    setYearsExperience(event.target.value);
  };

  // Options for the notice period
  const noticePeriodOptions = ['Immediate', '10-15 Days', '30 Days'];

  // Event handler to handle the change in selected notice period
  const handleNoticePeriodChange = (event) => {
    setNoticePeriod(event.target.value);
  };

  // Define a function to toggle the disclaimer checkbox state
  const handleDisclaimerChange = () => {
    setDisclaimerChecked(!disclaimerChecked);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleImageClick = (event) => {
    const userConfirmed = window.confirm(
      'All the progress will not be saved. Do you want to continue?'
    );
    if (!userConfirmed) {
      event.preventDefault(); // Prevent redirection if the user clicks "Cancel"
    }
  };
  // const handleEmailChange = (event) => {
  //   // Get the new email value from the input
  //   const newEmail = event.target.value;

  //   // Define a regular expression pattern for email validation
  //   const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  //   if (emailPattern.test(newEmail) || newEmail === '') {
  //     // Update the state with the new email
  //     setEmail(newEmail);

  //     // Clear the error message
  //     setEmailError('');

  //     // Log a message indicating the email is valid
  //     console.log('Valid Email:', newEmail);
  //   } else {
  //     // Display an error message
  //     setEmailError(
  //       'Please enter a valid email address in the format "user@example.com"'
  //     );

  //     // Log an error message indicating the email is invalid
  //     console.error('Invalid Email:', newEmail);
  //   }
  // };

  // ...

  return (
    <>
      <Helmet>
        <title>Careers | Popular RKS  Pvt Ltd | Popular Maruti</title>
        <meta
          name="title"
          content="Careers |Popular RKS Pvt Ltd | Popular Maruti"
        />
        <meta
          name="description"
          content="Upload Your Resume for Job openings in Popular RKS Pvt Ltd with great work culture and work environment. Job openings in Secunderabad & Hyderabad."
        />
      </Helmet>

      <div className="container p-4 mx-auto sm:p-8">
        <div className="flex flex-col items-center justify-center">
          <a href="/" onClick={handleImageClick} className="image-link">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/black-logo.png"
              alt="saboo rks logo"
              className="h-10 w-17"
            />
            <span className="bg-white hover-text opacity-5">Home</span>
          </a>

          <h1
            className="p-2 text-2xl font-bold text-center text-blue-900 sm:text-4xl sm:p-4"
            id="careers"
          >
            Join Our Team - Application Form
          </h1>
        </div>

        {/* Form layout */}
        <div className="mt-4 sm:mt-8">
          <div className="md:grid md:grid-cols-1 sm:grid-cols-2 md:gap-6">
            <div className="mt-5 md:col-span-1 sm:col-span-2 md:mt-0">
              <div className="p-2 overflow-hidden shadow sm:rounded-md sm:p-4">
                {/* form starting */}
                <form ref={form} onSubmit={sendEmail}>
                  <div className="space-y-4">
                    <div className="text-xl text-blue-900">
                      Personal Information
                    </div>
                    <div className="grid gap-3 p-2 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          First Name
                        </label>

                        <input
                          className="w-full h-10 px-3 border rounded-md outline-none focus:ring-red-500 focus:border-red-500"
                          type="text"
                          id="Last_Name"
                          name="firstname"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Last Name
                        </label>

                        <input
                          className="w-full h-10 px-3 border rounded-md outline-none focus:ring-red-500 focus:border-red-500"
                          type="text"
                          id="Last_Name"
                          name="lastname"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Email{" "}
                          <span className="text-xs font-normal text-red-600">
                            `example@gmail.com`
                          </span>
                        </label>
                        <input
                          className="w-full h-10 px-3 border rounded-md outline-none focus:ring-red-500 focus:border-red-500"
                          type="email"
                          id="email"
                          name="email"
                          required
                        />
                        {emailError && (
                          <span className="mt-1 text-sm text-red-500">
                            {emailError}
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                          Phone
                        </label>
                        <input
                          className="w-full h-10 px-3 border rounded-md outline-none focus:ring-red-500 focus:border-red-500"
                          type="tel"
                          id="phone"
                          minLength="10"
                          maxLength="10"
                          required
                          name="phone"
                          value={phoneNumber} // Bind the input value to the state
                          onChange={handlePhoneNumberChange} // Handle changes
                        />
                        {phoneNumberError && (
                          <p className="mt-1 text-sm text-red-500">
                            {phoneNumberError}
                          </p>
                        )}
                      </div>
                      <div className="block mt-2 mb-2 text-sm font-medium text-gray-900 ">
                        <h2>Select Your Gender</h2>
                        {/* Step 3: Create radio buttons */}
                        <div className="flex items-center w-full px-3 py-2 my-2 space-x-4 text-sm font-normal">
                          <label>
                            <input
                              type="radio"
                              value="male"
                              name="gender"
                              id="male"
                              checked={selectedGender === "male"}
                              onChange={handleGenderChange}
                            />
                            &nbsp;Male
                          </label>
                          <label>
                            <input
                              type="radio"
                              value="female"
                              id="female"
                              name="gender"
                              checked={selectedGender === "female"}
                              onChange={handleGenderChange}
                            />
                            &nbsp;Female
                          </label>
                        </div>
                      </div>
                      <div className="mt-2">
                        <label
                          htmlFor="startDate"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={dob}
                          required
                          onChange={(e) => setDob(e.target.value)}
                          className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="Date of Birth"
                        />
                      </div>
                    </div>
                    <div className="grid gap-3 md:grid-cols-1">
                      <div className="">
                        <label
                          htmlFor="position"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Position Applying For
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          value={position}
                          onChange={(e) => setPosition(e.target.value)} // Update the position state
                          className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="Position Applying For"
                        />
                      </div>
                    </div>
                    <hr className="my-6 border-t border-gray-300" />
                    <div className="text-xl text-blue-900">
                      Address Information
                    </div>
                    <div className="grid gap-3 md:grid-cols-1">
                      <div>
                        <label
                          htmlFor="addressLine1"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Address Line 1
                        </label>
                        <input
                          type="text"
                          id="address1"
                          name="address1"
                          className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="Address Line 1"
                        />
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="addressLine2"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Address Line 2 (optional)
                        </label>
                        <input
                          type="text"
                          id="address2"
                          name="address2"
                          className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="Address Line 2"
                        />
                      </div>

                      <div className="grid gap-3 p-2 md:grid-cols-2">
                        <div className="mt-4">
                          <label
                            htmlFor="city"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            City&nbsp;&nbsp;
                            <span className="text-xs font-normal text-red-600">
                              Postal code, State and Country will be added
                              automatically
                            </span>
                          </label>
                          <select
                            id="city"
                            name="city"
                            value={selectedCity}
                            onChange={handleCityChange}
                            className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                          >
                            <option value="" disabled>
                              Select a city
                            </option>
                            {Object.keys(cityData).map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="mt-4">
                          <label
                            htmlFor="postalCode"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Postal Code
                          </label>
                          <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={postalCode}
                            readOnly
                            className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Postal Code"
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            htmlFor="state"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            State/Province
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={selectedState}
                            readOnly
                            className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="State/Province"
                          />
                        </div>

                        <div className="mt-4">
                          <label
                            htmlFor="country"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            value={selectedCountry}
                            readOnly
                            className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Country"
                          />
                        </div>
                      </div>
                    </div>

                    <hr className="my-6 border-t border-gray-300" />
                    <div className="text-xl text-blue-900">Work Experience</div>
                    <div className="grid gap-3 p-2 md:grid-cols-2">
                      <div className="mt-4">
                        <label
                          htmlFor="previousCompany"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Last Worked Company
                        </label>
                        <input
                          type="text"
                          id="lastworked"
                          name="lastworked"
                          value={previousCompany}
                          onChange={handlePreviousCompanyChange}
                          required
                          className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="Previous Company Name"
                        />
                      </div>
                      {/* years of experience 1 */}
                      <div className="mt-4">
                        <label
                          htmlFor="experienceSelect"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Years of Experience
                        </label>
                        <div className="flex space-x-2">
                          <select
                            id="yearsexp"
                            name="yearsexp"
                            value={yearsExperience}
                            onChange={handleExperienceChange}
                            className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                          >
                            <option value="">Select</option>
                            {experienceOptions.map((experience, index) => (
                              <option key={index} value={experience}>
                                {experience}
                              </option>
                            ))}
                          </select>
                          <span className="text-xs text-red-600">
                            {" "}
                            {yearsExperience && (
                              <p>
                                You selected {yearsExperience} of experience.
                              </p>
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="expsalary"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Last Drawn Salary (in lakhs)
                        </label>
                        <input
                          type="text"
                          id="expsalary"
                          name="expsalary"
                          value={expsalary}
                          onChange={handleExpsalaryChange}
                          className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="Salary Requirements"
                        />
                      </div>
                      {/* add here */}
                      {/* notice period */}
                      <div className="mt-4">
                        <label
                          htmlFor="noticeperiod"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Notice Period
                        </label>
                        <select
                          id="noticeperiod"
                          name="noticeperiod"
                          value={noticePeriod}
                          onChange={handleNoticePeriodChange}
                          className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                        >
                          <option value="">Select Notice Period</option>
                          {noticePeriodOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="mt-4">
                        <label
                          htmlFor="linkedinProfile"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          LinkedIn / Resume Profile URL{" "}
                          <span className="text-xs font-normal text-red-600">
                            `https://www.example.com/`
                          </span>
                        </label>
                        <input
                          type="url"
                          id="profileurl"
                          name="profileurl"
                          value={linkedinProfile}
                          onChange={handleLinkedinProfileChange}
                          className="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                          placeholder="LinkedIn Profile URL"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {/* add new field */}
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold text-black">Disclaimer</span>:
                      I agree that by clicking the ‘Submit’ button below, I am
                      explicitly soliciting a call/Message from Saboo Maruti
                      (Popular RKS Pvt. Ltd) or its Representatives on my
                      ‘Mobile’.
                    </p>
                    <div className="flex items-start">
                      <input
                        id="disclaimer"
                        name="disclaimer"
                        type="checkbox"
                        required
                        className="w-4 h-4 rounded"
                        checked={disclaimerChecked}
                        onChange={handleDisclaimerChange} // Use the function as the event handler
                      />
                      <div className="ml-2 text-sm">
                        <label
                          htmlFor="disclaimer"
                          className="font-medium text-gray-700"
                        >
                          Please agree with the disclaimer
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-2">
                      <button
                        className="px-5 py-3 text-white transition duration-300 bg-blue-700 rounded-full hover:bg-red-800"
                        type="submit"
                        value="Send"
                      >
                        Submit
                      </button>
                      <button
                        className="px-5 py-3 ml-2 text-gray-700 transition duration-300 bg-gray-300 rounded-full hover:bg-gray-400"
                        type="button"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
