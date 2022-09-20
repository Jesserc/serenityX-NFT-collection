import axios from "axios";
const createContract = async () => {
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    key: "tR46iyz93iEf00XgDd7X3WMQzVP47lvI",
    chain_id: "4",
    name: "Hashira X",
    short_name: "HSHX",
  });

  const reqOptions = {
    url: "https://thentic.tech/api/nfts/contract",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  const response = await axios.request(reqOptions);
  console.log(response.data);
  //   console.log(response.data.transaction_url);

  return response.data;
};

export default createContract;
