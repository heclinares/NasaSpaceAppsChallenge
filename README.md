# Cycle Chain - #NasaSpaceAppsChallenge
Improving the lifetime of a product, from the raw materials extraction to the recycling process.

We propose to use a blockchain based solution to track some key data:

## Products
Products are built with raw materials and other products. Tokenizing the raw materials used and the tokens that conform a product can help to track the complete life cycle. 
Some points of the life cycle of a product that can be tracked:
 - Raw materials extraction (amount and entity who extracted)
 - Raw materials and processes used in product manufacture (ex. 100g gold used in 100 mobile phones, date, components, processes used, etc)
 - Transport to the selling point (time, routes, etc)
 - Sell information (date, selling point)
 
## Users
Users are a critical part in the product life cycle. They own the products and have the decission of throw away or recycle it after its life time. Having the product tracked from the beginning, companies can introduce incentivisation processes for users.
 - Users buy products (a token can be send to the user that will represent the product ownment, this information remains anonymous)
 - Users start recycling process (date of recycling init, recycling entity/location, product sent)
 
 
 
## Recycling
Improving the recycling process is the main goal of this project. Tracking materials, products, processes, dates, etc will create a global public database of valuable information, that can be used by data minning systems to detect issues and flaw correlations.
Furthermore, using the complete tracking process can be an incentive to all the participants to create a real circular economy system.
 - Recycling (date of start, processes used, product received, raw materials recovered, etc)
 - Delivery to manufacturers
 
# Technology
Having in mind that this is a 48 hours competition, we will focus on the general solution. The technology needed to support this project is complex and requires lot of research and testing. Anyway there are some solutions we can use:
 - Private blockchains
 Using some private solution like Quorum or public/private capable blockchains, like Nem, could be a good pick. Using private blockchains make the system more efficient, reducing the need of pay per transaction. In the other hand, data is less open, which can be critical for this project.
 - Public blockchains
 Public blockchains with strong focus on smart contract programming, like Ethereum or Aeternity are good solutions for this project. Using this networks, the system will be more open, public and secure. The problem is that public networks are much more expensive than private ones.
 
Our proposal for the MVP is to use some public blockchain with support of some kind of off-chain transactions. Having this in mind, our initial selection is to use Aeternity network, that comes with state channels integration for smart contracts and oracles directly supported in the network.


 
 
