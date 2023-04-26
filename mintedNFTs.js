/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT () {

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

}

// call your functions below this line

class NFTCollection {
  constructor() {
    this.nfts = [];
    this.totalSupply = 0;
  }

  /**
   * This function minst NFT and adds it to the collection.
   * @param {string} metadata - The metadata of NFT being minted.
   */
  mintNFT(metadata) {
    if (this.nfts.length >=3) {
      console.log("Collection in full. Cannot mint more NFTs.");
      return;
    }
    this.nfts.push(metadata);
    this.totalSupply++;
  }

  /**
   * This function lists all NFTs in the collection.
   */
  listNFTs() {
    console.log("NFTs in collection:");
    for (let i = 0; i < this.nfts.length; i++) {
      console.log(this.nfts[i]);
    }
  }

  /**
   * This function prints the total number of minted NFTs.
   */
  getTotalSupply() {
    console.log('Total number of minted NFTs: ${this.totalSupply}');
  }
}
