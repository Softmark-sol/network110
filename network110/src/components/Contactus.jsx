import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import "../css/contactForm.css";
import "../css/aboutUs.css";
import "animate.css/animate.min.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can perform further actions like sending data to a server
  };

  return (
    <div>
      <div className="card-heading-service about-us" id="form">
        <h1><span>{t('contactForm-h.contactUs')}</span></h1>
      </div>
      <div className="contactForm-container">
        <div className="form-container container">
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="email"
                {...register("email", { 
                  required:"Email is required", 
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email is required"
                  }
                })}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter your email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            <div className="form-group">
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={'sa'}
                    inputStyle={{ width: '100%' }}
                    placeholder="Enter your phone number"
                    inputProps={{
                      name: 'phone',
                      className: `form-control ${errors.phone ? "is-invalid" : ""}`,
                    }}
                  />
                )}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
            </div>
            <div className="form-group">
              <textarea
                {...register("address", { required: "Address is required" })}
                className={`form-control full-width ${errors.address ? "is-invalid" : ""}`}
                placeholder="Your physical address"
              ></textarea>
              {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
            </div>
            <div className="btn-container animate__animated">
              <button type="submit">
                {t('contactForm-btn.send')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
