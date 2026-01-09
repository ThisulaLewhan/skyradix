import { useState } from 'react';
import { poppins400, poppins500, poppins700, poppins600 } from '@/app/fonts';

const ContactSection = ({ title }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setFormMessage('Message sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        setFormMessage('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormMessage('An error occurred. Please try again later.');
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/94767607668', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@skyradix.com';
  };

  return (
    <section className="py-12 md:py-24 lg:py-36" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28">
        <h1 className={`${poppins700.className} lg:ml-5 text-left text-4xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 md:mb-4`}>
          {title}
        </h1>

        <div className="bg-[rgba(69,69,69,0.4)] rounded-3xl lg:rounded-[39px] p-6 lg:p-12 grid lg:grid-cols-[1fr_2px_1fr] gap-8 lg:gap-12">
          {/* Contact Info Section */}
          <div className="space-y-6 md:space-y-10">
            <div className="space-y-6 md:space-y-8">
              <p className="text-white text-base md:text-lg leading-relaxed font-medium mt-5">
                Have a project in mind or looking for innovative digital solutions? We'd love to hear from you!
              </p>
              <p className="text-white text-base md:text-lg leading-relaxed font-medium">
                Our team is ready to help transform your ideas into reality.
              </p>
            </div>

            <div className="space-y-6 md:space-y-10">
              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/94767607668"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center rounded-2xl lg:rounded-[20px] border border-white shadow-md bg-[rgba(235,235,235,0.50)] p-3 md:p-4 gap-3 md:gap-4 transition-all hover:bg-white/30 group cursor-pointer"
              >
                <img 
                  src="/images/icon-whatsapp.png" 
                  alt="WhatsApp" 
                  className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 ml-2 md:ml-3" 
                />
                <span className={`${poppins600.className} text-white font-bold tracking-wide text-lg md:text-xl text-center flex-1 pr-2`}>
                  076 760 7668
                </span>
              </a>

              {/* Email Button */}
              <a 
                href="mailto:contact@skyradix.com"
                className="w-full flex items-center rounded-2xl lg:rounded-[20px] border border-white shadow-md bg-[rgba(235,235,235,0.50)] p-3 md:p-4 gap-3 md:gap-4 transition-all hover:bg-white/30 group cursor-pointer"
              >
                <img 
                  src="/images/icon-envelope.png" 
                  alt="Email" 
                  className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 ml-2 md:ml-3" 
                />
                <span className={`${poppins600.className} text-white font-bold tracking-wide text-lg md:text-xl truncate flex-1 text-center`}>
                  contact@skyradix.com
                </span>
              </a>
            </div>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden lg:block w-0.5 bg-gray-300/50 h-full my-4" />

          {/* Contact Form */}
          <form action={`https://formsubmit.co/contact@skyradix.com`} method="POST" className="space-y-4 md:space-y-6">
          <input className="hidden" type="hidden" name="_template" value="box"></input>
            <input className="hidden" type="hidden" name="_subject" value={`New submission! from ${email}`}></input>
            <input type="text" name="_honey" className='hidden'></input>
            <input className="hidden" type="hidden" name="_next" value={`https://skyradix.com/thanks`}></input>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className={`${poppins400.className} text-base md:text-xl w-full rounded-2xl lg:rounded-[20px] h-14 md:h-[70px] tracking-wide border border-[rgba(255,255,255,0.61)] bg-[rgba(235,235,235,0.50)] shadow-[inset_5px_5px_13.2px_3px_rgba(0,0,0,0.30)] p-4 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />

            <textarea
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows={5}
              className={`${poppins400.className} text-base md:text-xl w-full rounded-2xl lg:rounded-[20px] h-32 md:h-[160px] tracking-wide border border-[rgba(255,255,255,0.61)] bg-[rgba(235,235,235,0.50)] shadow-[inset_5px_5px_13.2px_3px_rgba(0,0,0,0.30)] p-4 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />

            <button
              type="submit"
              className={`${poppins600.className} w-full bg-[#316FF6] shadow-md hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl lg:rounded-[20px] h-14 md:h-[65px] text-lg md:text-xl tracking-wide transition-all hover:shadow-xl`}
            >
              Send
            </button>

            {formMessage && (
              <div className="text-green-500 text-center mt-4">
                {formMessage}
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;