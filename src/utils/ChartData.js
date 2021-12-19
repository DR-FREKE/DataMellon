const chartData = infodata => {
  const byDate = infodata.reduce((obj, item) => {
    const date_type = new Date(item["Order Date"]).getFullYear();

    obj[date_type] = [...(obj[date_type] || []), item];

    return obj;
  }, {});

  const sum_up_data_by_date = Object.keys(byDate).map((content, index) => {
    let total_profit = byDate[content].reduce((acc, itm) => {
      return acc + itm.Profit;
    }, 0);

    let total_sales = byDate[content].reduce((acc, itm) => {
      return acc + itm.Sales;
    }, 0);

    return { Profit: total_profit, Sales: total_sales, year: content };
    // }
  });

  return sum_up_data_by_date;
};

export const processChartData = (data, index) => ({
  Profit: parseInt(data.Profit),
  Sales: parseInt(data.Sales),
  "Order Date": data["Order Date"],
});
export default chartData;
