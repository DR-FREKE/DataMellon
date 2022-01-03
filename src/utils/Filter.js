const filterData = (filter_data, input_data) => {
  const { profit, sale, year } = input_data;

  const input_array = profit.split("-");
  const from = parseInt(input_array[0]);
  const to = parseInt(input_array[1]);

  if (filter_data.length > 0) {
    const filtered_data = filter_data.filter(compareData(from, to, year));

    const data = filtered_data;
    const total = data.length;
    return { data, total };
  }
};

const compareData = (from, to, year) => content => {
  const response =
    content.Profit > from &&
    content.Profit < to &&
    content["Order Date"].includes(year);

  return response;
};

export default filterData;
