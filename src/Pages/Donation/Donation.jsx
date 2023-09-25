import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationToStoredLocalStorage } from "../../utilities/utilities";
import AddedDonationCard from "../../components/AddedDonationCard/AddedDonationCard";

const Donation = () => {
  const donations = useLoaderData();

  const [donationsAdded, setDonationsAdded] = useState([]);

  useEffect(() => {
    const storedDonationIds = getDonationToStoredLocalStorage();
    // console.log(storedDonationIds);

    if (donations.length > 0) {
      const storedDonations = [];

      for (const id of storedDonationIds) {
        const donation = donations?.find((donation) => donation.id === id);
        storedDonations.push(donation);
      }
      setDonationsAdded(storedDonations);
      // console.log(donations, storedDonationIds, storedDonations);
    }
  }, [donations]);

  console.log(donationsAdded);

  return (
    <section className="my-10">
      <div className="grid gap-6 lg:grid-cols-2 pb-10">
        {donationsAdded.map((addedDonation) => (
          <AddedDonationCard
            key={addedDonation.id}
            addedDonation={addedDonation}
          ></AddedDonationCard>
        ))}
      </div>
    </section>
  );
};

export default Donation;
