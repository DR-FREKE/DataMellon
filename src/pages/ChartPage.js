import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DashboardLayout } from "../components/Layout/layout.style";
import AppBarChart from "../components/Widgets/Charts/Barchart";
import AppCompositeBar from "../components/Widgets/Charts/CompositeBarchart";
import AppPieChart from "../components/Widgets/Charts/PieChart";
import TimeSeries from "../components/Widgets/Charts/TimeSeries";
import Table from "../components/Widgets/Table/Table";
import {
  postAction,
  filterAction,
  setOriginalData,
} from "../store/actions/action.creator";
import { SEND_TEST } from "../store/actions/action.types";
import { useForm } from "react-hook-form";
import { SelectField } from "../components/Widgets/Form/Form";
import { processTableData } from "./chart.data";
import chartData, { processChartData } from "../utils/ChartData";
import { IoMdOptions } from "react-icons/io";
import { FiRefreshCcw } from "react-icons/fi";
import { Button } from "../components/Widgets/Button/Button";

const ChartPage = props => {
  const { handleSubmit, formState, setValue, register, control } = useForm({
    mode: "onChange",
  });
  const data = {
    angular_test: "angular-developer",
  };
  const chart_data = chartData(props.charts.map(processChartData));

  useEffect(() => {
    props.postAction(SEND_TEST, data);
  }, []);

  const tableInfo = props.charts?.map(processTableData);

  const onSubmit = data => {
    props.filterAction(props.data_origin, data);
  };

  const handleRefresh = e => {
    e.preventDefault();
    props.postAction(SEND_TEST, data);
  };

  return (
    <>
      <DashboardLayout className="md:grid md:grid-cols-2 flex flex-col sm:grid-cols-2 md:bg-transparent gap-6">
        <div className="filter-div sm:col-start-1 sm:col-end-3">
          <form
            className="px-0 w-full flex justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className="md:grid md:grid-cols-3 grid-cols-2 gap-4"
              style={{ width: "85%" }}
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
                {...register("year", { required: false })}
              />
              <SelectField
                defaultValue="Select Sales"
                name="sales"
                control={control}
                error={formState.errors.sales}
                {...register("sales", { required: false })}
              />
            </div>
            <div style={{ width: "15%" }} className="flex justify-end">
              <Button
                icon={<IoMdOptions />}
                name="Filter"
                className="mr-3 ml-3 w-4/5"
              />
              <Button
                icon={<FiRefreshCcw />}
                name="Refresh"
                className="ml-1 w-4/5"
                onPress={handleRefresh}
              />
            </div>
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
        <div className="col-start-1 col-end-3 mt-5 flex-col">
          <Table
            tableData={tableInfo}
            loading={props.loading}
            total={props.total}
          />
        </div>
      </DashboardLayout>
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.chart.loading,
  charts: state.chart?.data,
  data_origin: state.chart?.origin_data,
  total: state.chart?.total,
});

export default connect(mapStateToProps, {
  postAction,
  filterAction,
  setOriginalData,
})(ChartPage);
