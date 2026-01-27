import React from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
    <Helmet>
      <title>404 Not Found</title>
    </Helmet>
      <Header />
      <div className="pt-32 pb-16">
        <img
          src="https://cdn.shopify.com/s/files/1/0049/2122/9384/products/12-oops_2048x.jpg?v=1576165833"
          className="h-[300px] mx-auto"
          alt=".."
        />
        <h4 className="text-3xl font-semibold text-center uppercase">404 - Page Not Found!</h4>
        <p className="mt-3 text-center">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <div className="flex items-center justify-center mt-3">
          <Link
            className="px-4 py-3 text-white uppercase bg-blue-700 rounded-full hover:opacity-80"
            to="/"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
