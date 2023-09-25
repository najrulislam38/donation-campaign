//

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDonation from "./SingleDonation";

const DonationDetails = () => {
  const [singleDonation, setSingleDonation] = useState({});
  const donations = useLoaderData();

  const { id } = useParams();

  useEffect(() => {
    const findSingleDonation = donations?.find(
      (donation) => donation.id === id
    );
    setSingleDonation(findSingleDonation);
  }, [id, donations]);

  // console.log(singleDonation);
  return (
    <section className="my-10">
      <SingleDonation singleDonation={singleDonation}></SingleDonation>
    </section>
  );
};

export default DonationDetails;
