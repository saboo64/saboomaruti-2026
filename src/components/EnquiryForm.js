import React, { useState } from "react";
import axios from "axios"; // Import axios for making requests
import { toast } from "react-toastify"; // Import toast for notifications

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    carModel: "",
  });

  // State to handle validation errors
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.number)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    // If validation passes, reset error and handle submission logic
    setError("");
    console.log("Form submitted:", formData);

    // Start loading state
    setLoading(true);
      // "https://arena-backend-git-main-arenas-projects.vercel.app/popup";

    try {
      // Make the POST request to the server
      const response = await axios.post(
        "https://arena-backend-git-main-arenas-projects.vercel.app/general",
        {
          name: formData.name,
          phone: formData.number,
          model: formData.carModel,
          leadFrom: "LandingForm",
        }
      );
      // Display success message
      toast.success("Enquiry sent successfully");
    } catch (err) {
      // Handle errors during the request
      setLoading(false);
      toast.error("Something went wrong!");
      console.log(err);
    } finally {
      // Reset form after submission
      setFormData({
        name: "",
        number: "",
        carModel: "",
      });
      setLoading(false);
    }
  };
  return (
    <div className="bg-blue-400 max-w-xs w-full mx-auto z-[9999] absolute top-[85%] md:left-20 md:right-auto left-0 right-0 p-4 rounded-xl 2xl:min-w-[400px] 2xl:h-96 ">
      <div className="items-center p-6 space-y-5 rounded-md sm:items-center">
        <h1 className="text-2xl font-bold text-center text-white">
          Book your test drive
        </h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border-2 rounded-md"
            required
          />
          <br />
          <input
            type="text"
            id="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleInputChange}
            className="w-full p-3 border-2 rounded-md"
            required
          />
          <br />
          <select
            className="w-full p-3 border-2 rounded-md"
            value={formData.carModel}
            onChange={handleInputChange}
            required
            id="carModel"
          >
            <option value="">Select Model</option>{" "}
            {/* Make sure to have an empty value option */}
            <optgroup label="Arena">
              <option value="VICTORIS">VICTORIS</option>
              <option value="ALTOK10">ALTOK10</option>
              
              {/* <option value="Alto 800">Alto</option> */}
              <option value="WAGON-R">WAGON-R</option>
              <option value="CELERIO">CELERIO</option>
              <option value="SWIFT">SWIFT</option>
              <option value="DZIRE">DZIRE</option>
              <option value="S-PRESSO">S-PRESSO</option>
              <option value="ERTIGA">ERTIGA</option>
              <option value="BREZZA">BREZZA</option>
              <option value="EECO">EECO</option>
            </optgroup>
            <optgroup label="nexa">
              <option>INVICTO</option>
              <option>Fronx</option>
              <option>Jimny</option>
              <option>Grand Vitara</option>
              <option>XL6</option>
              <option>Ciaz</option>
              <option>Baleno</option>
              <option>Ignis</option>
            </optgroup>
          </select>

          <br />
          {error && <p className="text-center text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full p-2 font-bold text-white bg-red-600 rounded-2xl"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
