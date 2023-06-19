import React from "react";
import FacebookPagePlugin from "../FacebookPagePlugin";

const Embed = () => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="w-full px-10 py-20 ">
        <h1 className="text-3xl font-bold">CONNECT WITH US</h1>
        <div className="grid w-full h-auto grid-cols-3 gap-6 mt-10">
          <div className="w-full col-span-1 shadow-md">
            <FacebookPagePlugin />
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6428690161033!2d91.72382287568833!3d26.338061384549263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a53bcf9c7bdef%3A0x507f1fbb93cc351!2sDreamlight%20Hospital%20and%20reasearch%20center%20Pvt%20Ltd%20office!5e0!3m2!1sen!2sin!4v1687167489937!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: "0px solid #07344e" }}
            className="col-span-2 shadow-md "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Embed;
