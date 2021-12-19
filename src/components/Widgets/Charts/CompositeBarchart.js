import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Loader } from "../Loader/Loader";

const AppCompositeBar = ({ data, loading }) => (
  <>
    {loading == true ? (
      <Loader loading={loading} />
    ) : (
      <ResponsiveContainer aspect={2}>
        <BarChart width={680} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Legend />
          <Bar dataKey="Sales" stackId="a" fill="#FF8042" barSize={30} />
          <Bar dataKey="Profit" stackId="a" fill="#FFBB28" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    )}
  </>
);

export default AppCompositeBar;
