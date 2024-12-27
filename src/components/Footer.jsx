import React from "react";
import logo from "../images/logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#bf6b41] text-center">
        <h2 className="text-3xl my-5 lg:mx-auto lg:ml-16 pt-5">Contact us</h2>
        <img
          src={logo}
          alt=""
          className="ml-6 md:ml-[17%] lg:ml-[30%] my-8 rounded-2xl w-[90%] md:w-[65%] lg:w-[45%]"
        />
        <h2 className="text-2xl lg:text-3xl mb-4">
          Better yet, see us in person!
        </h2>

        <div className="lg:flex items-center justify-center gap-10 mb-6 lg:text-2xl">
          <div className="m-4 lg:w-[50%]">
            <a
              href="https://wa.me/918885020339"
              className="flex items-center justify-center gap-6 rounded-2xl text-lg my-4 mx-auto p-2 bg-green-500 md:w-[60%]  lg:text-2xl"
            >
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.vkuON3FFk20a6kfGE8bsrAHaHa&pid=Api&P=0&h=180"
                alt=""
                className="rounded-full w-12 "
              />
              <h2>constact us on Whatsapp</h2>
            </a>

            <p>
              5th Floor, Bizness Square, opp. Hitex Entrance, Whitefields, HITEC
              City, Hyderabad, Telangana 500081
            </p>

            <p>Phone : 8885020339 / 040 46000370</p>
          </div>
          <hr />
          <div className="hidden lg:block w-[2px] h-52 bg-black "></div>

          <div className="m-4 lg:w-[50%] ">
            <div className="mb-4 tracking-wide">
              <h2>For Enquirers & Bookings</h2>
              <span>laelan.hitech@gmail.com</span>
            </div>

            <div className="tracking-wide">
              <h2>For Feedback/Marketing/Careers</h2>
              <span>contact@laelan.in</span>
            </div>
          </div>
        </div>

        <div className="mt-5 p-2">
          <h2 className="text-2xl lg:text-4xl ">Hours :</h2>
          <span className="lg:text-2xl">Monday - Sunday: 11:00 AM–9:00 PM</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
