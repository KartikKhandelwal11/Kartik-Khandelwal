import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";  // Add this import
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import "../Assets/Styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_irdgocl",
        "template_m0f3zx5",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "X7grMNIBXS8gpkmb1"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative min-h-[90vh] bg-[#0A0A0A] py-8 md:py-16 overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 blur-[100px] rounded-full"></div>
            <h2 className="relative flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-3xl md:text-5xl font-bold">
              <div className="relative">
                <span className="absolute -inset-1 bg-white/20 blur-md rounded-lg"></span>
                <span className="relative text-white">Let's</span>
              </div>
              <div className="relative">
                <span className="absolute -inset-1 bg-purple-600/20 blur-md rounded-lg"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                  Connect
                </span>
              </div>
            </h2>
          </div>
          <div className="mt-8 relative">
            <span className="absolute -left-4 -top-4 w-3 h-3 bg-cyan-500 rounded-full animate-ping"></span>
            <span className="absolute -right-4 -bottom-4 w-3 h-3 bg-violet-500 rounded-full animate-ping"></span>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm just a message away.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Glass Card - adjusted padding and border radius */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-[2.5rem] border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                  <div className="space-y-4 md:space-y-6">
                    {[
                      {
                        icon: Mail,
                        title: "Email",
                        value: "Kartikkhandelwal1104@gmail.com",
                        link: "mailto:Kartikkhandelwal1104@gmail.com",
                      },
                      {
                        icon: Phone,
                        title: "Phone",
                        value: "+91 9509264338",
                        link: "tel:+919509264338",
                      },
                      {
                        icon: MapPin,
                        title: "Location",
                        value: "Alwar, Rajasthan",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-white/5 to-transparent hover:from-purple-500/10 hover:to-transparent transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-white/80 font-medium text-sm md:text-base">
                            {item.title}
                          </h4>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-gray-400 hover:text-purple-400 transition-colors text-sm md:text-base break-all"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-400 text-sm md:text-base">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links - adjusted sizing */}
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {[
                      {
                        icon: Linkedin,
                        link: "https://www.linkedin.com/in/pm-kartik",
                        color: "from-[#0077B5]/20",
                      },
                      {
                        icon: FaGithub,  // Use FaGithub instead of Github
                        link: "https://github.com/KartikKhandelwal11",
                        color: "from-[#333]/20",
                      },
                      {
                        icon: Instagram,
                        link: "https://www.instagram.com/kartik.khandelwal11/",
                        color: "from-[#E4405F]/20",
                      },
                      {
                        icon: MessageCircle,
                        link: "https://wa.me/919509264338",
                        color: "from-[#25D366]/20",
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} to-transparent hover:scale-110 transition-all duration-300`}
                      >
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact Form - adjusted spacing */}
                <div className="lg:col-span-3">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      {[
                        {
                          name: "name",
                          type: "text",
                          label: "Name",
                          placeholder: "Your name",
                        },
                        {
                          name: "email",
                          type: "email",
                          label: "Email",
                          placeholder: "Your email",
                        },
                      ].map((field) => (
                        <div key={field.name}>
                          <label className="block text-white/80 text-sm mb-1.5 md:mb-2">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            value={
                              formData[field.name as keyof typeof formData]
                            }
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-purple-500/5 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                            placeholder={field.placeholder}
                            required
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm mb-1.5 md:mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-purple-500/5 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                        placeholder="Your message"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 hover:from-purple-600 hover:via-purple-700 hover:to-pink-600 text-white rounded-lg md:rounded-xl py-3 md:py-4 text-sm md:text-base font-medium flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 group"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
