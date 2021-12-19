import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Loader } from "../Loader/Loader";

const TimeSeries = ({ data, loading }) => (
  <div style={{ width: "100%", height: "100%" }}>
    {loading == true ? (
      <Loader loading={loading} />
    ) : (
      <ResponsiveContainer aspect={2}>
        <LineChart
          width={680}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Legend />
          <Line
            dataKey="Sales"
            type="natural"
            stroke="rgb(244 63 94)"
            //   fill="#00C49F"
            strokeWidth={2}
          />
          <Line dataKey="Profit" type="natural" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    )}
  </div>
);

export default TimeSeries;
