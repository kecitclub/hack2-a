import { Form, Input, Button, Textarea } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/radio";

interface MarkerType {
  lat: number;
  lng: number;
}

interface ListFormProps {
  marker: MarkerType | null;
  onSubmit: (formData: any) => void;
}

const ListForm = ({ marker, onSubmit }: ListFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = {
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      roomSharing:
        (
          form.querySelector(
            'input[name="roommate"]:checked'
          ) as HTMLInputElement
        )?.value === "yes",
      description: form.description.value,
      price: Number(form.rentFee.value),
      bedrooms: Number(form.noOfBedroom.value),
      bathrooms: Number(form.noOfBathroom.value),
      kitchen: Number(form.noOfKitchen.value),
      phone: form.phone.value,
      images: Array.from(form.image.files as FileList).map((file) =>
        URL.createObjectURL(file)
      ),
      location: marker ? `${marker.lat},${marker.lng}` : null,
    };

    onSubmit(formData);
  };

  return (
    <div>
      <Form
        className="w-full p-5"
        validationBehavior="native"
        onSubmit={handleSubmit}
      >
        <RadioGroup
          label="Searching for a Roommate?"
          className="text-md text-black accent-[#f63e3e]"
        >
          <Radio className="accent-[#f63e3e]" value="yes">
            Yes
          </Radio>
          <Radio className="accent-[#f63e3e]" value="no">
            No
          </Radio>
        </RadioGroup>
        <Input
          isRequired
          errorMessage="Please add a valid image"
          label="Images"
          labelPlacement="outside"
          name="image"
          multiple
          placeholder="Image"
          type="file"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid phone number"
          label="Phone"
          labelPlacement="outside"
          name="phone"
          placeholder="Enter your phone"
          type="number"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid rent fee"
          label="Rent Fee"
          labelPlacement="outside"
          name="Rent Fee"
          placeholder="Enter your rent fee"
          type="number"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        <Input
          isRequired
          errorMessage="Please enter valid number of Kitchen"
          label="No. of kitchen"
          labelPlacement="outside"
          name="noOfKitchen"
          placeholder="Enter no. of kitchen"
          type="number"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <Input
          isRequired
          errorMessage="Please enter valid number of bedroom"
          label="No. of bedroom"
          labelPlacement="outside"
          name="noOfBedroom"
          placeholder="Enter no. of bedroom"
          type="number"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <Input
          isRequired
          errorMessage="Please enter valid number of bathroom"
          label="No. of bathroom"
          labelPlacement="outside"
          name="noOfBathroom"
          placeholder="Enter no. of bathroom"
          type="number"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        <Input
          isRequired
          errorMessage="Please enter a title"
          label="Title"
          labelPlacement="outside"
          name="title"
          placeholder="Enter property title"
          type="text"
        />

        <Textarea
          errorMessage="Please enter a description"
          label="Description"
          labelPlacement="outside"
          name="description"
          placeholder="Enter description (optional)"
          type="text"
        />

        <Button
          type="submit"
          variant="shadow"
          className="bg-[#f63e3e] text-white font-medium mt-3"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ListForm;
