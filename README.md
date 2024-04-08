# ![Logo](https://github.com/dougiefresh49/crypto-wallet-demo/blob/main/src/app/icon.png) Crypto Wallet Balances Demo

This is a demo app that fetches and display all cryptocurrency token balances in a given wallet

Built with

- [Next.js](https://nextjs.org/)
- [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- pnpm
- tailwind
- [shadcn](https://ui.shadcn.com/)
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Test Wallets

- `0x742d35cc6634c0532925a3b844bc454e4438f44e`
- `0xfe9e8709d3215310075d67e3ed32a380ccf451c8`

## Implementation Details

### eth-balance-checker

- used to simplify the logic in checking a balance for all the tokens but the underlying logic boils down to

```js
for (let tokenAddress of tokenAddresses) {
  const contract = new web3.eth.Contract(erc20AbiJson, tokenAddress);
  const tokenBalance = await contract.methods.balanceOf(walletAddress).call();
  // convert from wei to eth etc
}
```

### Logo

- from chat gpt

## Deployment

Hostes on Vercel at [crypto-wallet-demo-theta.vercel.app](https://crypto-wallet-demo-theta.vercel.app/)
