'use client';
import * as React from 'react';
import { Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TokenList } from '../TokenList';

export const Wallet = () => {
  /**
   * State
   */
  const [walletAddress, setWalletAddress] = React.useState<
    string | undefined
  >();

  console.log(walletAddress);

  /**
   * Callbacks
   */
  const handleCheckBalances = (formData: FormData) => {
    setWalletAddress(formData.get('walletAddress') as string);
  };

  /**
   * Render
   */
  return (
    <div className="flex flex-col w-full gap-8 mt-3">
      <form action={handleCheckBalances} className="flex flex-col w-full gap-3">
        <Input type="text" name="walletAddress" placeholder="Wallet Address" />
        <Button className="flex items-center gap-2 w-full" type="submit">
          <Coins /> Check Balances
        </Button>
      </form>
      {walletAddress && <TokenList walletAddress={walletAddress} />}
    </div>
  );
};
