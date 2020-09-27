## Tezosign

Validate and prove ownership of your documents on the Tezos blockchain.

- Document validity is a huge issue in copyright and law.
- With Tezosign, you can prove the legitamacy or previous ownership of documents for low cost by tying a particular document or IP to the Tezos blockchain.
- Record your name, time, and any notes as part of the upload.
- Come back and check the previous existence or tampering of documents by using the built-in document validation logic.
- Validate that documents haven't been tampered with.

### Tech

- Use smartpy to generate the smart contract for managing historic upload state, and inserting/querying.
- Use PyTezos to query the deployed contract
- Created a serverless function to mediate the API calls from the front end to the smart contract and deliver back a result.

### Structure:

<pre>
`tezosign-api`: Serverless api for receiving and hashing documents.
`tezosign-web`: Web interface for uploading and validating documents.
`contracts`: Tezosign smartpy Tezos smart contract.
</pre>

### Running backend locally

PyTezos is used to interact with the (or a) deployed testnet Tezos smart contract.

Preparing local pytezos backend:

<pre>
brew tap cuber/homebrew-libsecp256k1
brew install libsodium libsecp256k1 gmp
</pre>

From the tezosign-api folder, follow the instructions <a href="https://github.com/aws/chalice#quickstart" target="_blank">here</a> to start the backend.

Use `chalice local` to start the backend functions locally.

Requires the tezos smartcontract already deployed and in the environment (original test pointed against Tezos carthagenet).
