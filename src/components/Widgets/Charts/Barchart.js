import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Loader } from "../Loader/Loader";

const AppBarChart = ({ data, loading }) => (
  <>
    {loading == true ? (
      <Loader loading={loading} />
    ) : (
      <ResponsiveContainer aspect={2}>
        <BarChart
          width={680}
          height={300}
          data={data}
          margin={{ right: 30, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" stroke="#8884d8" />
          <YAxis />
          <Legend />
          <Bar dataKey="Sales" fill="rgb(244 63 94)" barSize={30} />
          <Bar dataKey="Profit" fill="#00C49F" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    )}
  </>
);

export default AppBarChart;
