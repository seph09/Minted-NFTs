/**
 * This function mints three NFTs, prints details of NFTs to the console, and prints the total NFT supply to the console.
 * 
 * @returns {void}
 */
function mintThreeNFTs() {
    try {
      // Mint three NFTs
      const nft1 = { id: 1, name: "NFT 1", owner: "John Doe" };
      const nft2 = { id: 2, name: "NFT 2", owner: "Jane Doe" };
      const nft3 = { id: 3, name: "NFT 3", owner: "Bob Smith" };
  
      // Print details of NFTs to the console
      console.log("NFT 1:", nft1);
      console.log("NFT 2:", nft2);
      console.log("NFT 3:", nft3);
  
      // Print the total NFT supply to the console
      console.log("Total NFT supply:", 3);
    } catch (error) {
      console.error(error);
    }
  }