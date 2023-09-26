import { useLoaderData, useOutletContext } from "react-router-dom";
// import { useEffect, useState } from "react";
import DonationsCard from "../../components/DonationsCard/DonationsCard";
import { useEffect, useState } from "react";

const Home = () => {
  const donations = useLoaderData();

  const searchValue = useOutletContext();
  // const searchValueLower = searchValue.toLowerCase();

  // console.log(searchValueLower);

  const [displayDonations, setDisplayDonations] = useState([]);

  useEffect(() => {
    if (searchValue === "Health".toLowerCase()) {
      const healthDonation = donations?.filter(
        (health) => health.category === "Health"
      );
      setDisplayDonations(healthDonation);
    } else if (searchValue === "Education".toLowerCase()) {
      const educationDonation = donations?.filter(
        (education) => education.category === "Education"
      );
      setDisplayDonations(educationDonation);
    } else if (searchValue === "Clothing".toLowerCase()) {
      const clothDonations = donations?.filter(
        (education) => education.category === "Clothing"
      );
      setDisplayDonations(clothDonations);
    } else if (searchValue === "Food".toLowerCase()) {
      const foodDonations = donations?.filter(
        (education) => education.category === "Food"
      );
      setDisplayDonations(foodDonations);
    } else {
      setDisplayDonations(donations);
    }
  }, [searchValue, donations]);

  // console.log(displayDonations);

  // console.log(donations);

  return (
    <section>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
        {displayDonations?.map((donation) => (
          <DonationsCard key={donation.id} donation={donation}></DonationsCard>
        ))}
      </div>
    </section>
  );
};

export default Home;
