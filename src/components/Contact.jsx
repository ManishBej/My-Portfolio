import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Email Card */}
        <div className="bg-darkBackground shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-primary dark:text-secondary">Email</h3>
          <p className="mt-2 text-textDark dark:text-textLight">
            <a href="mailto:manishbej@gmail.com" className="text-secondary hover:underline">
              manishbej@gmail.com
            </a>
          </p>
        </div>

        {/* LinkedIn Card */}
        <div className="bg-darkBackground shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-primary dark:text-secondary">LinkedIn</h3>
          <p className="mt-2 text-textDark dark:text-textLight">
            <a
              href="https://www.linkedin.com/in/manish-bej-23306b279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              linkedin.com/in/manish-bej-23306b279/
            </a>
          </p>
        </div>

        {/* FaceBook Card */}
        <div className="bg-darkBackground shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-primary dark:text-secondary">FaceBook</h3>
          <p className="mt-2 text-textDark dark:text-textLight">
            <a
              href="https://www.facebook.com/manishbej.babu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              https://www.facebook.com/manishbej.babu
            </a>
          </p>
        </div>

        {/* GitHub Card */}
        <div className="bg-darkBackground shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-primary dark:text-secondary">GitHub</h3>
          <p className="mt-2 text-textDark dark:text-textLight">
            <a
              href="https://github.com/ManishBej"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              https://github.com/ManishBej
            </a>
          </p>
        </div>
        {/* X Card */}
        <div className="bg-darkBackground shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-primary dark:text-secondary">X</h3>
          <p className="mt-2 text-textDark dark:text-textLight">
            <a
              href="https://x.com/ManishBej"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              https://x.com/ManishBej
            </a>
          </p>
        </div>

        {/* Phone Card */}
        <div className="bg-darkBackground shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-primary dark:text-secondary">Phone & WhatsApp</h3>
          <p className="mt-2 text-textDark dark:text-textLight">+91 9064277729</p>
        </div>

        {/* Location Card */}
        <div className="bg-darkBackground shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-primary dark:text-secondary">Lives in</h3>
          <p className="mt-2 text-textDark dark:text-textLight">West Bengal, India</p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-3 xl:h-auto md:h-[550px] h-[350px] w-full'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");