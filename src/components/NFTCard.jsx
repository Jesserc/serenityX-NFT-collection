import { Fragment } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "../styles/NFT Card/nft.scss";

const NFTCard = ({ nft, index }) => {
  return (
    <Fragment key={index}>
      <div className="fragment">
        <div className="nft-card">
          <div className="nft-image">
            <img src={nft.data} alt="" style={{}} />
          </div>
          <div className="nft-body">
            <div className="nft-title">
              <h2>{nft.name}</h2>
              <div className="nft-address">
                <div className="details">
                  <p>id: {nft.id}</p>
                  <p>{`${nft.contract.substr(0, 4)}...${nft.contract.substr(
                    nft.contract.length - 4
                  )}`}</p>
                </div>

                <div className="copy-btn">
                  <CopyToClipboard className="btn" text={nft.contract}>
                    <button className="btn">Copy Address</button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>

            <div className="etherscan-btn">
              <a
                target={"_blank"}
                href={`https://etherscan.io/token/${nft.contract}`}
              >
                View on etherscan
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default NFTCard;
