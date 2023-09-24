import { useLoaderData } from "react-router-dom";
// import { useEffect, useState } from "react";
import DonationsCard from "../../components/Header/DonationsCard/DonationsCard";

const Home = () => {
  const donations = useLoaderData();
  console.log(donations);

  // const [donations, setDonations] = useState([]);

  // useEffect(() => {
  //   fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => setDonations(data));
  // }, []);

  return (
    <section>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
        {donations?.map((donation) => (
          <DonationsCard key={donation.id} donation={donation}></DonationsCard>
        ))}
      </div>
    </section>
  );
};

export default Home;
