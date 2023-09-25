const getDonationToStoredLocalStorage = () => {
  const storedDonation = localStorage.getItem("donations");
  if (storedDonation) {
    return JSON.parse(storedDonation);
  }

  return [];
};

const saveDonationIntoLocalStorage = (id) => {
  const storedDonations = getDonationToStoredLocalStorage();
  const exists = storedDonations?.find((donationId) => donationId === id);
  if (!exists) {
    storedDonations.push(id);
    localStorage.setItem("donations", JSON.stringify(storedDonations));
  }
};

export { getDonationToStoredLocalStorage, saveDonationIntoLocalStorage };
