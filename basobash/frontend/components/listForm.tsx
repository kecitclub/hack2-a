import {Form, Input, Button} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
interface ListFormProps {
  marker: { lat: number; lng: number } | null;
}

const ListForm: React.FC<ListFormProps> = ({ marker }) => {
  return (
    <div>
      <Form className="w-full max-w-xs" validationBehavior="native">
      <Input
        isRequired
        errorMessage="Please add a valid image"
        label="Images"
        labelPlacement="outside"
        name="image"
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
      />
      <Input
        isRequired
        errorMessage="Please enter a valid rent fee"
        label="Rent Fee"
        labelPlacement="outside"
        name="Rent Fee"
        placeholder="Enter your rent fee"
        type="number"
      />

      <Input
        isRequired
        errorMessage="Please enter valid number of bedroom"
        label="No. of bedroom"
        labelPlacement="outside"
        name="noOfBedroom"
        placeholder="Enter no. of bedroom"
        type="number"
      />
      <Input
        isRequired
        errorMessage="Please enter valid number of bathroom"
        label="No. of bathroom"
        labelPlacement="outside"
        name="noOfBathroom"
        placeholder="Enter no. of bathroom"
        type="number"
      />
    <RadioGroup label="Has a Kitchen">
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
      />

      <Button type="submit" variant="bordered">
        Submit
      </Button>
      </Form>

    </div>
  );
};

export default ListForm;
