import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationToStoredLocalStorage } from "../../../utilities/utilities";
import { Pie, PieChart, Tooltip, Cell } from "recharts";

const StatisticsPieChart = () => {
  const donationsData = useLoaderData();

  const [storedDonation, setStoredDonation] = useState([]);

  useEffect(() => {
    const storedDonationId = getDonationToStoredLocalStorage();
    setStoredDonation(storedDonationId.length);
  }, []);

  const totalDonationItems = donationsData.length;

  const remainderDonation = totalDonationItems - storedDonation;
  // const remainderDataPasenteage = parseInt(
  //   (remainderDonation / totalDonationItems) * 100
  // );

  // const storedDonationParsantage = parseInt(
  //   (storedDonation / totalDonationItems) * 100
  // );

  // const storedDonationData = storedDonationItems % 100;

  // console.log(remainderDataPasenteage, storedDonationParsantage);

  // console.log(storedDonationItems, totalDonationItems);

  const data = [
    { name: "Total Donation", value: remainderDonation },
    { name: "Your Donation", value: storedDonation },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section className="w-full lg:h-[70vh] flex justify-center items-center">
      <div>
        <div className="flex justify-center items-center">
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip></Tooltip>
          </PieChart>
        </div>
        <div className="w-fit mx-auto flex gap-10 lg:gap-20 flex-wrap justify-between items-center text-xl font-semibold mt-5">
          <div>
            <h2>
              <span>Your Donation: </span>
              {storedDonation}
              <span className=" px-5 py-0 bg-[#00C49F]"> </span>
            </h2>
          </div>
          <div>
            <h2>
              Total Donation:
              {remainderDonation}
              <span className="py-0 px-5 bg-[#FF444A]"> </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsPieChart;
