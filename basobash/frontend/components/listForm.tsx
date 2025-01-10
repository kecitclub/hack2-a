interface ListFormProps {
  marker: { lat: number; lng: number } | null;
}

const ListForm: React.FC<ListFormProps> = ({ marker }) => {
  return (
    <div>
      <h1>ListForm</h1>
    </div>
  );
};

export default ListForm;
