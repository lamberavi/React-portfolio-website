import React from 'react';

const CONTACT = {
  address: "Lovely Professional University, Punjab, India",
  phoneNo: "+91 636 1234 292",
  email: "ravilambe66@gmail.com",
};

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl font-bold text-cyan-400">
        Get In Touch
      </h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-neutral-300">{CONTACT.address}</p>
        <p className="my-4 text-neutral-300">{CONTACT.phoneNo}</p>
        <p className="my-4 text-neutral-300">{CONTACT.email}</p>
      </div>
    </div>
  );
};

export default Contacts;
