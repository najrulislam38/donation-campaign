import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationToStoredLocalStorage } from "../../utilities/utilities";
import AddedDonationCard from "../../components/AddedDonationCard/AddedDonationCard";

const Donation = () => {
  const donations = useLoaderData();

  const [donationsAdded, setDonationsAdded] = useState([]);

  const [isShowAll, setIsShowAll] = useState(false);

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

  // console.log(donationsAdded);

  const handleDonationButton = () => {
    setIsShowAll(true);
    const showAllButton = document.getElementById("show-all-button");

    showAllButton.classList.add("hidden");
  };

  return (
    <section className="my-10">
      {donationsAdded.length <= 0 && (
        <div className=" w-full h-[50vh] flex justify-center items-center ">
          <h1 className="text-4xl font-semibold text-center text-gray-700">
            You have not donation added yet!!!
          </h1>
        </div>
      )}
      <div className="grid gap-6 lg:grid-cols-2 pb-10">
        {isShowAll
          ? donationsAdded.map((addedDonation) => (
              <AddedDonationCard
                key={addedDonation.id}
                addedDonation={addedDonation}
              ></AddedDonationCard>
            ))
          : donationsAdded
              .slice(0, 4)
              .map((addedDonation) => (
                <AddedDonationCard
                  key={addedDonation.id}
                  addedDonation={addedDonation}
                ></AddedDonationCard>
              ))}
      </div>
      {donationsAdded.length > 4 && (
        <button
          id="show-all-button"
          onClick={handleDonationButton}
          className="btn bg-green-700 block mx-auto text-white hover:bg-green-600"
        >
          See all
        </button>
      )}
    </section>
  );
};

export default Donation;
