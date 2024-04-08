import Image from 'next/image';
import { Wallet } from '@/components/Wallet';

export default async function Home() {
  return (
    <div className="flex justify-center w-full h-screen pt-8 bg-background">
      <div className="flex flex-col w-125 p-6 gap-2">
        <h1 className="text-4xl font-bold text-center flex items-center gap-2 w-98">
          <Image src="/icon.png" alt="Logo" width={48} height={48} />
          Crypto Wallet Balances
        </h1>
        <p className="text-md text-center text-gray-300 w-98">
          Check all token Balances in your wallet
        </p>
        <Wallet />
      </div>
    </div>
  );
}
