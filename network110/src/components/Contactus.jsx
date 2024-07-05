import React from "react";
import { useForm, Controller } from "react-hook-form";
import "../css/contactForm.css";
import "../css/aboutUs.css";
import "animate.css/animate.min.css"; 
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="form" className="container">
      <div className="card-heading-service about-us"  >
        <h1><span>اتصل بنا</span></h1>
      </div>
      <div className="contactForm-container">
        <div className="form-container container">
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="email"
                {...register("email", { 
                  required: "Email is required", 
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address"
                  }
                })}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email"
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
                    inputProps={{
                      name: 'phone',
                      placeholder: 'Phone',
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
                placeholder="Your physical address."
              ></textarea>
              {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
            </div>
            <div className="btn-container animate__animated">
              <button type="submit">
                <span>أرسل رسالة</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
