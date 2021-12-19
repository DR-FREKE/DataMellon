import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DashboardLayout } from "../components/Layout/layout.style";
import AppBarChart from "../components/Widgets/Charts/Barchart";
import AppCompositeBar from "../components/Widgets/Charts/CompositeBarchart";
import AppPieChart from "../components/Widgets/Charts/PieChart";
import TimeSeries from "../components/Widgets/Charts/TimeSeries";
import Table from "../components/Widgets/Table/Table";
import { postAction, filterAction } from "../store/actions/action.creator";
import { SEND_TEST } from "../store/actions/action.types";
import { useForm } from "react-hook-form";
import { SelectField } from "../components/Widgets/Form/Form";
import { processTableData } from "./chart.data";
import chartData, { processChartData } from "../utils/ChartData";
import { IoMdOptions } from "react-icons/io";

const ChartPage = props => {
  const [appchart, setAppChart] = useState([]);
  const { handleSubmit, formState, setValue, register, control } = useForm({
    mode: "onChange",
  });
  const chart_data = chartData(appchart.map(processChartData));

  useEffect(() => {
    const data = {
      angular_test: "angular-developer",
    };
    props.postAction(SEND_TEST, data);
  }, []);

  useEffect(() => {
    if (props.filtering == true) {
      setAppChart(props.filtered_chart);
    } else {
      setAppChart(props.charts);
    }
  }, [props.filtering]);

  const tableInfo = appchart?.slice(0, 10).map(processTableData);

  const onSubmit = data => {
    props.filterAction(props.charts, data);
    // alert(JSON.stringify(props.charts));
  };

  return (
    <DashboardLayout className="md:grid md:grid-cols-2 flex flex-col sm:grid-cols-2 md:bg-transparent gap-6">
      <div className="filter-div sm:col-start-1 sm:col-end-3">
        <form
          className="px-0 w-full flex justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className="md:grid md:grid-cols-3 grid-cols-2 gap-4"
            style={{ width: "97%" }}
          >
            <SelectField
              defaultValue="Select Profit"
              item={["0 - 1000", "1000 - 2000", "2000 - 10000"]}
              name="profit"
              control={control}
              error={formState.errors.profit}
              {...register("profit", { required: false })}
            />
            <SelectField
              defaultValue="Select Year"
              item={["2014", "2015", "2016", "2017"]}
              name="year"
              control={control}
              error={formState.errors.year}
              {...register("year", { required: true })}
            />
            <SelectField
              defaultValue="Select Sales"
              name="sales"
              control={control}
              error={formState.errors.sales}
              {...register("sales", { required: false })}
            />
          </div>
          <button
            className="flex justify-center items-center"
            style={{
              backgroundColor: "#EFEFEF",
              width: "3%",
              marginLeft: "10px",
              padding: "8px",
              borderRadius: "5px",
              boxShadow: "0 0 3px #BBBBBB",
              cursor: "pointer",
            }}
          >
            <IoMdOptions size={25} color="#AAAAAA" />
          </button>
        </form>
      </div>
      <div className="flex flex-col bg-purple-50 rounded-md pb-5">
        <span className="pb-5 px-5 py-3 w-full font-semibold">Bar Chart</span>
        <AppBarChart data={chart_data} loading={props.loading} />
      </div>
      <div className="flex flex-col bg-red-50 rounded-md">
        <span className="pb-5 px-5 py-3 w-full font-semibold">
          Pie Chart <small>(Hover over to get more insight)</small>
        </span>
        <AppPieChart data={chart_data} loading={props.loading} />
      </div>
      <div className="mt-10 flex flex-col bg-green-50 rounded-md">
        <span className="pb-5 px-5 py-3 w-full font-semibold">
          Composite Bar Chart
        </span>
        <AppCompositeBar data={chart_data} loading={props.loading} />
      </div>
      <div className="mt-10 flex flex-col bg-yellow-50 rounded-md">
        <span className="pb-5 px-5 py-3 w-full font-semibold">
          Time Series Chart
        </span>
        <TimeSeries data={chart_data} loading={props.loading} />
      </div>
      <div className="col-start-1 col-end-3 mt-5">
        <Table tableData={tableInfo} loading={props.loading} />
      </div>
    </DashboardLayout>
  );
};

const mapStateToProps = state => ({
  loading: state.chart.loading,
  filtering: state.chart.filtering,
  charts: state.chart?.data,
  filtered_chart: state.chart?.filtered_data,
});

export default connect(mapStateToProps, { postAction, filterAction })(
  ChartPage
);
