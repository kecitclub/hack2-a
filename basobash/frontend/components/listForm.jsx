"use client";

import { Form, Input, Button } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { useState } from "react";

const ListForm = ({ marker }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    location: "",
    bedrooms: 0,
    bathrooms: 0,
    kitchen: "no",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation: Check if required fields are populated
    if (
      !formData.title ||
      !formData.price ||
      !formData.bedrooms ||
      !formData.bathrooms ||
      !formData.images.length
    ) {
      alert("Please fill out all required fields.");
      return;
    }
  
    try {
      const response = await fetch("/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          kitchen: formData.kitchen === "yes" ? 1 : 0,
          location: marker
            ? `Lat: ${marker.lat}, Lng: ${marker.lng}`
            : formData.location,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert("Property listed successfully!");
        console.log(data);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div>
      <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
        <Input
          isRequired
          errorMessage="Please add a valid image"
          label="Images"
          labelPlacement="outside"
          name="images"
          type="file"
          placeholder="Image URLs (comma-separated)"
          onChange={handleChange}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid phone number"
          label="Phone"
          labelPlacement="outside"
          name="price"
          placeholder="Enter your price"
          type="number"
          onChange={handleChange}
        />
        <Input
          isRequired
          errorMessage="Please enter a valid rent fee"
          label="Rent Fee"
          labelPlacement="outside"
          name="price"
          placeholder="Enter rent fee"
          type="number"
          onChange={handleChange}
        />
        <Input
          isRequired
          errorMessage="Please enter valid number of bedroom"
          label="No. of bedroom"
          labelPlacement="outside"
          name="bedrooms"
          placeholder="Enter no. of bedrooms"
          type="number"
          onChange={handleChange}
        />
        <Input
          isRequired
          errorMessage="Please enter valid number of bathroom"
          label="No. of bathroom"
          labelPlacement="outside"
          name="bathrooms"
          placeholder="Enter no. of bathrooms"
          type="number"
          onChange={handleChange}
        />
        <RadioGroup
          label="Has a Kitchen"
          onChange={(value) => setFormData({ ...formData, kitchen: value })}
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </RadioGroup>

        <Input
          errorMessage="Please enter a description"
          label="Description"
          labelPlacement="outside"
          name="description"
          placeholder="Enter description (optional)"
          type="text"
          onChange={handleChange}
        />

        <Button type="submit" variant="bordered">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ListForm;
