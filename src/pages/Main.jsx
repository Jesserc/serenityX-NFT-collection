import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NFTCard from "../components/NFTCard";
import "../styles/Main/main.scss";
const Main = () => {
  const [data, setData] = useState("");

  ///create contract
  const createContract = async () => {
    let headersList = {
      Accept: "*/*",
      //   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let reqOptions = {
      url: "https://thentic.tech/api/nfts?key=RyfCTWEUn94iAnArFHVThS3Pyr0LTODZ&chain_id=4",
      method: "GET",
      headers: headersList,
    };

    let response = await axios.request(reqOptions);
    console.log(response.data.nfts);
    setData(response.data.nfts);
    // return response.data;
  };

  useEffect(() => {
    createContract();
  }, []);

  return (
    <>
      <Hero />
      <div className="secton-title">
        <h2>See our latest NFTs</h2>
      </div>

      <div className="nft-container">
        {data &&
          data.slice(1).map((nft, index) => {
            //how do i remove the first index in my array?
            // let todoItems = this.state.todoItems.slice(0, -1);

            return <NFTCard nft={nft} key={index} />;
          })}
      </div>

      <Footer />
    </>
  );
};
export default Main;
