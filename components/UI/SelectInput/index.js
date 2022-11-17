const SelectInput = ({ data, label, value, ...remainingProps }) => {
  return (
    <select {...remainingProps} className="flex-1 p-2 rounded-md">
      {data?.map((d) => (
        <option value={value(d)} key={d.id}>
          {label(d)}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
