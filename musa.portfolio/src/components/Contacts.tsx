// src/components/Contacts.tsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contacts: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black px-6">
      <div className="container mx-auto max-w-xl text-center space-y-6">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Let's Connect</h2>
        <p className="text-blue-300 text-2xl">I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.</p>
        <div className="space-y-4 text-lg">
          <p className="flex items-center justify-center gap-2 text-blue-300">
            <Mail size={20} /> martinmusa802@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2 text-blue-300">
            <Phone size={20} /> +2547 4023 7965
          </p>
          <p className="flex items-center justify-center gap-2 text-blue-300">
            <MapPin size={20} /> Nairobi, Kenya
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
