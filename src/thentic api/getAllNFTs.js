import axios from "axios";

const headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  "Content-Type": "application/json",
};

const reqOptions = {
  url: "https://thentic.tech/api/nfts?key=tR46iyz93iEf00XgDd7X3WMQzVP47lvI&chain_id=4",
  method: "GET",
  headers: headersList,
};

const response = await axios.request(reqOptions);
console.log(response.data);
