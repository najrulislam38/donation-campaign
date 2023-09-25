import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationToStoredLocalStorage } from "../../utilities/utilities";
import { Pie, PieChart } from "recharts";

const Statistics = () => {
  const donationsData = useLoaderData();

  const totalDonationItems = donationsData.length;

  const [storedDonationItems, setStoredDonationItems] = useState([]);

  useEffect(() => {
    const storedDonationId = getDonationToStoredLocalStorage();
    setStoredDonationItems(storedDonationId.length);
  }, []);

  // console.log(storedDonationItems, totalDonationItems);

  const data1 = [
    { name: "TotalDonation", value: totalDonationItems },
    { name: "AddDonation", value: storedDonationItems },
  ];

  return (
    <section>
      <div className=" w-fit mx-auto">
        <PieChart width={730} height={250}>
          <Pie
            data={data1}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          />
        </PieChart>
      </div>
    </section>
  );
};

export default Statistics;
