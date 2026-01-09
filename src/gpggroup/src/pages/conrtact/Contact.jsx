// import React, { useEffect } from 'react'

// import img from "../../assets/img/contact.webp"
// import "./contact.scss"
// import { useTranslation } from 'react-i18next'
// import { useCreateContactMutation } from '../../context/api/contactApi'
// import { useGetValue } from '../../hooks/useGetValue'
// import { toast } from 'react-toastify'

// const initialState = {
//   fullName: "",
//   phone: "",
//   email: "",
//   company: "",
//   message: ""
// }

// const Contact = () => {
//   const { t, i18n } = useTranslation()
//   const { formData, setFormData, handleChange } = useGetValue(initialState)
//   const [ createContact, {data, isSuccess, isError} ] = useCreateContactMutation()
//   console.log(data);
  
//   useEffect(() => {
//     scrollTo(0, 0)
//   }, [])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     createContact(formData)
//     setFormData(initialState)
//   }

//   useEffect(() => {
//     if(isSuccess) {
//       toast.success("Сообщение успешно отправлено!")
//     }
//   },[isSuccess])

//   useEffect(() => {
//     if(isError) {
//       toast.error("Ошибка отправки сообщения!")
//     }
//   },[isError])

//   return (
//     <div className='contact'>

//       <div className="contact-bg">
//         <div className="contact-top container">
//           <div className="contact-top-left">
//             <h3 className="contact-top-left-title">{t("Let's Talk")}</h3>
//             <p className='contact-top-left-text'>{t("Whether")}</p>
//           </div>

//           <div className="contact-top-right">
//             <img src={img} alt="contact-img" />
//           </div>
//         </div>
//       </div>

//       <div className="contact-form container">

//         <div className="contact-form-right">

//           <div className="contact-form-right-item">
//             <h2>{t("Email")}</h2>
//             <p><a href="mailTo:info@gpggroup.uz">info@gpggroup.uz</a></p>
//           </div>

//           <div className="contact-form-right-item">
//             <h2>{t("Phone Number")}</h2>
//             <p><a href="tel:+998 71 281 49 30">+998 71 281 49 30</a></p>
//             <p><a href="tel:+998 71 281 49 30">+998 71 281 49 30</a></p> 
//           </div>

//           <div className="contact-form-right-item">
//             <h2>{t("Address")}</h2>
//             <p>{t("add")}</p>
//           </div>

//         </div>

//         <div className="contact-form-left">
          
//           <h2 className="contact-form-left-title">{t("Contact Us")}</h2>

//           <form onSubmit={handleSubmit} className='contact-form-left-item' action="">

//             <div className="contact-form-left-item-top">
//               <input required name="fullName" value={formData.fullName} onChange={handleChange} placeholder='Full Name' type="text" id="" />
//               <input required name="email" value={formData.email} onChange={handleChange} placeholder='Email' type="text" id="" />
//               <input required name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone Number' type="number" id="" />
//               <input required name="company" value={formData.company} onChange={handleChange} placeholder='Company' type="text" id="" />
//             </div>

//             <div className='contact-form-left-item-bottom'>
//               <textarea placeholder='Message' name="message" value={formData.message} onChange={handleChange} id=""></textarea>
//               <button className='contact-form-left-item-bottom-btn'>{t("Let's Talk")}</button>
//             </div>

//           </form>

//         </div>

//       </div>

//       <div className="contact-maps">
//         <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3248.230692956812!2d69.136341!3d41.200520000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzAxLjkiTiA2OcKwMDgnMTAuOCJF!5e1!3m2!1sen!2s!4v1762319654663!5m2!1sen!2s" style={{ width: "100%", border: "0px" }} loading="lazy"></iframe>
//       </div>

//     </div>
//   )
// }

// export default Contact



import React, { useEffect, useState } from 'react'
import img from "../../assets/img/contact.webp"
import "./contact.scss"
import { useTranslation } from 'react-i18next'
import { useCreateContactMutation } from '../../context/api/contactApi'
import { useGetValue } from '../../hooks/useGetValue'
import { toast } from 'react-toastify'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  company: "",
  message: ""
}

const Contact = () => {
  const { t, i18n } = useTranslation()
  const { formData, setFormData, handleChange } = useGetValue(initialState)
  const [ createContact, {data, isSuccess, isError} ] = useCreateContactMutation()
  
  console.log(data);
  
  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    createContact(formData)
    setFormData(initialState)
  }

  useEffect(() => {
    if(isSuccess) {
      toast.success("Сообщение успешно отправлено!")
    }
  },[isSuccess])

  useEffect(() => {
    if(isError) {
      toast.error("Ошибка отправки сообщения!")
    }
  },[isError])

  return (
    <div className='contact'>

      <div className="contact-bg">
        <div className="contact-top container">
          <div className="contact-top-left">
            <h3 className="contact-top-left-title">{t("Let's Talk")}</h3>
            <p className='contact-top-left-text'>{t("Whether")}</p>
          </div>

          <div className="contact-top-right">
            <img src={img} alt="contact-img" />
          </div>
        </div>
      </div>

      <div className="contact-form container">

        <div className="contact-form-right">
          <div className="contact-form-right-item">
            <h2>{t("Email")}</h2>
            <p>info@gpggroup.uz</p>
          </div>
          <div className="contact-form-right-item">
            <h2>{t("Phone Number")}</h2>
            <p>+998 71 281 49 30</p>
            <p>+998 71 281 49 30</p> 
          </div>
          <div className="contact-form-right-item">
            <h2>{t("Address")}</h2>
            <p>{t("add")}</p>
          </div>
        </div>

        <div className="contact-form-left">
          
          <h2 className="contact-form-left-title">{t("Contact Us")}</h2>

          <form onSubmit={handleSubmit} className='contact-form-left-item' action="">

            <div className="contact-form-left-item-top">
              <input 
                required 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder='Full Name' 
                type="text" 
              />
              <input 
                required 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder='Email' 
                type="email" 
              />
              
              {/* Phone Input with all countries */}
              <PhoneInput
                country={'uz'}
                value={formData.phone}
                onChange={phone => setFormData({...formData, phone: '+' + phone})}
                enableSearch={true}
                searchPlaceholder="Search country..."
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: false
                }}
                containerClass="phone-input-container"
                inputClass="phone-input-field"
                buttonClass="phone-input-button"
                dropdownClass="phone-input-dropdown"
              />
              
              <input 
                required 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                placeholder='Company' 
                type="text" 
              />
            </div>

            <div className='contact-form-left-item-bottom'>
              <textarea 
                placeholder='Message' 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
              ></textarea>
              <button className='contact-form-left-item-bottom-btn'>{t("Let's Talk")}</button>
            </div>

          </form>

        </div>

      </div>

      <div className="contact-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3248.230692956812!2d69.136341!3d41.200520000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzAxLjkiTiA2OcKwMDgnMTAuOCJF!5e1!3m2!1sen!2s!4v1762319654663!5m2!1sen!2s" style={{ width: "100%", border: "0px" }} loading="lazy"></iframe>
      </div>

    </div>
  )
}

export default Contact