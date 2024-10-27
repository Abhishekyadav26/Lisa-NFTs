"use client";
import NFTClaimer  from "@/app/components/NFTClaimer"
import { defineChain, getContract } from "thirdweb";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "./client";

export default function Home() {
  const account = useActiveAccount();

  const ARBContract = getContract({
    client: client,
    chain: defineChain(421614),
    address: "0xCA05F6442e8051F38f6E24d914D6Eb65744cCA9B"
  });

  const LineasepliaContract = getContract({
    client: client,
    chain: defineChain(59141),
    address: "0x683FCc4A1592095f4090E4F808e9DD3A038a8e19"
  });
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <h1 className="text-center text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-12 cursor-pointer">
          MultiChain <span className="text-blue-700 ">Art Work</span>
          <br />
           <span className="text-blue-700" >NFTs</span> Transactions
        </h1>
        <div className="text-center ">
        <ConnectButton 
          client={client}
          // accountAbstraction={{
          //   chain: defineChain(1320),
          //   sponsorGas: true,
          // }}
        />
        </div>
        <div className="flex flex-row">
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={ARBContract}
          tokenId={0n}
        />
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <NFTClaimer 
          recieverAddress={account?.address}
          dropContract={LineasepliaContract}
          tokenId={0n}
        />
        </div>
      </div>
    </main>
  );
}

