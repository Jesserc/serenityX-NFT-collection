# Thentic NFT API

## Task

- build a Blockchain application using Thentic API

## Solution

- I used the thentic api to:
- Code can be found in src/thentic api/

### create contract endpoint

```js
import axios from "axios";

const headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  "Content-Type": "application/json",
};

const bodyContent = JSON.stringify({
  key: "RyfCTWEUn94iAnArFHVThS3Pyr0LTODZ",
  chain_id: "4",
  name: "Serenity X",
  short_name: "SRNTX",
});

const reqOptions = {
  url: "https://thentic.tech/api/nfts/contract",
  method: "POST",
  headers: headersList,
  data: bodyContent,
};

const response = await axios.request(reqOptions);
console.log(response.data);

/*
returns
{
  "request_id": "F76MDtiIuxHbtRzc",
  "status": "pending",
  "transaction_pixel": "<iframe src='https://thentic.tech/request?id=F76MDtiIuxHbtRzc' width=1 height=1 scrolling=no frameborder=0></iframe>",
  "transaction_url": "https://thentic.tech/request?id=F76MDtiIuxHbtRzc"
}

contract address = 0x212329ae69e8deb1a2f13d80c93151138c181074
*/
```

### mint NFT endpoint

```js
import axios from "axios";

const headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  "Content-Type": "application/json",
};

const bodyContent = JSON.stringify({
  key: "RyfCTWEUn94iAnArFHVThS3Pyr0LTODZ",
  chain_id: "4",
  contract: "0x212329ae69e8deb1a2f13d80c93151138c181074",
  nft_id: 1,
  nft_data:
    "https://pixabay.com/illustrations/eye-watercolor-art-sketch-eye-eye-4453129/",
  to: "0x6F67207Ca079A26Fdfe3b0B8bD71814D75Ac048D",
});

const reqOptions = {
  url: "https://thentic.tech/api/nfts/mint",
  method: "POST",
  headers: headersList,
  data: bodyContent,
};

const response = await axios.request(reqOptions);
console.log(response.data);

/*
returns
{
  "request_id": "izvlJEJtZ8aQlGWH",
  "status": "pending",
  "transaction_pixel": "<iframe src='https://thentic.tech/request?id=izvlJEJtZ8aQlGWH' width=1 height=1 scrolling=no frameborder=0></iframe>",
  "transaction_url": "https://thentic.tech/request?id=izvlJEJtZ8aQlGWH"
}
*/
```

## Get all NFTs

```js
import axios from "axios";

const headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  "Content-Type": "application/json",
};

const reqOptions = {
  url: "https://thentic.tech/api/nfts?key=RyfCTWEUn94iAnArFHVThS3Pyr0LTODZ&chain_id=4",
  method: "GET",
  headers: headersList,
};

const response = await axios.request(reqOptions);
console.log(response.data);

/*
returns array of nfts
*/
```
