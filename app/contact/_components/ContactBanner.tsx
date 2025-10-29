import React from 'react'

const ContactBanner = () => {
  return (
    
    <div className="flex justify-center items-center ">
      <iframe
        className="w-full h-[calc(100vh-158px)] mt-[-38px]"
        src="https://maps.google.com/maps?q=13.508142248195583,2.109648236771046&hl=en&t=k&z=18&ie=UTF8&iwloc=A&iwloc=B&output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}




export default ContactBanner