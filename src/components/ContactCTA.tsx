import React, { useState } from "react";
import { Button } from "./ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    projectDescription: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "86e41aa0-d4c7-4a36-9849-4b78a476e9b7",
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert("Thank you for your submission!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        projectDescription: "",
        budget: "",
      });
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <section className="bg-white py-16 flex items-center justify-center">
  <div className="min-w-6xl px-4 sm:px-6 lg:px-8 w-full">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Contact Us
      </h2>
      <p className="mt-4 text-xl text-gray-600">
        We'd love to hear from you. Please fill out the form below to get in
        touch.
      </p>
    </div>
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-gray-700"
        >
          Contact
        </label>
        <input
          type="text"
          name="contact"
          id="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label
          htmlFor="projectDescription"
          className="block text-sm font-medium text-gray-700"
        >
          Project Description
        </label>
        <textarea
          name="projectDescription"
          id="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-gray-700"
        >
          Budget
        </label>
        <select
          name="budget"
          id="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        >
          <option value="">Select your budget</option>
          <option value="<$5,000">Less than $5,000</option>
          <option value="$5,000-$10,000">$5,000 - $10,000</option>
          <option value="$10,000-$20,000">$10,000 - $20,000</option>
          <option value=">$20,000">More than $20,000</option>
        </select>
      </div>
      <div className="text-center">
        <Button type="submit" variant="primary" size="lg">
          Submit
        </Button>
      </div>
    </form>
  </div>
</section>

  );
}
