const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-3 p-5 flex items-center justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-gray-200 py-3 px-5"
        name=""
        id=""
      >
        <option disabled value="">
          Select
        </option>
        <option value="inc">low to high</option>
        <option value="dec">high to low</option>
      </select>
    </div>
  );
};

export default Sorting;
