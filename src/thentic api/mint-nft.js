import axios from "axios";

const headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  "Content-Type": "application/json",
};

const bodyContent = JSON.stringify({
  key: "tR46iyz93iEf00XgDd7X3WMQzVP47lvI",
  chain_id: "4",
  contract: "0xa0f89Ba6a989F4F790548d0EfA901135E6145d83",
  nft_id: 0,
  nft_data: "bafkreigqe24v64roqacufib7yekgp4ssektaqiibef3dvtl727fcbdnhhy",
  to: "0x571B102323C3b8B8Afb30619Ac1d36d85359fb84",
});

const reqOptions = {
  url: "https://thentic.tech/api/nfts/mint",
  method: "POST",
  headers: headersList,
  data: bodyContent,
};

const response = await axios.request(reqOptions);
console.log(response.data);
