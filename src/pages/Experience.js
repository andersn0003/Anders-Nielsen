import React from "react";
import ExperienceContents from "../components/ExperienceContents";

export default function Experience() {
  return (
    <div className="flex flex-col gap-10">
      <ExperienceContents
        period={{ start: "02/2023", end: "04/2024" }}
        company="Cata Labs"
        role={"Blockchain Full-Stack Engineer"}
        description={
          "Catalyst is an open-source liquidity protocol for modular blockchains, developed by Cata Labs. Catalyst will automatically connect each new chain to other chains of interest, such as other app environments or hubs like Ethereum and Cosmos."
        }
        link={" https://catalyst.exchange/"}
        detail={[
          {
            topic: "Developed a Cross-Chain AMM/DEX platform from scratch",
            content:
              " using Cosmos SDK, Bifrost protocol, Maya chain, and TSS.",
          },
          {
            topic:
              "Created an NFT Marketplace on multichain - Ethereum and Solana",
            content:
              "like Opensea, utilizing Solidity smart contracts, Rust programming language, Candy Machine -v3 technology, and Metaplex framework.",
          },
        ]}
      />
      <ExperienceContents
        period={{ start: "10/2020", end: "02/2023" }}
        company="Futureswap"
        role={"Software Engineer"}
        description={
          "Futureswap is a Decentralized leveraged trading on Arbitrum and Avalanche."
        }
        link={"https://www.futureswap.com"}
        detail={[
          {
            topic: "Developed a Smart Exchange page",
            content:
              "using Typescript, NextJS, MUI, UniswapV3, Smart router, Fiat On/Off Ramp, and integrated Cmc/Cg/0x APIs.",
          },
          {
            topic: "Established the backend infrastructure",
            content:
              "using Golang, Fiber framework, Redis for caching, Gorm ORM for database interaction, Air for live reloading, Zap for logging, Docker for containerization, and designed the database schema.",
          },
          {
            topic: "Created Smart Contracts",
            content:
              "for smart wallets incorporating Account Abstraction ERC- 4337 standard, Metakeep functionality, and implemented in Solidity.",
          },
          {
            topic: "Collaborated in an agile environment",
            content:
              "with regular team meetings facilitated through Slack for communication, Jira for project management, and Google Meet for virtual meetings.",
          },
        ]}
      />
      <ExperienceContents
        period={{ start: "08/2019", end: "10/2020" }}
        company="Rubyswap"
        role={"Smart Contract and Frontend Developer"}
        description={"DEX Platform for Crypto Trading on Ethereum Blockchain"}
        link={"https://ruby.exchange"}
        detail={[
          {
            topic:
              "Spearheaded the development of a user-friendly web interface for the DEX platform",
            content:
              "utilizing Next.JS, ensuring seamless navigation and optimal user experience.",
          },
          {
            topic: "Engineered the backend infrastructure",
            content:
              "using Solidity smart contracts and Subgraph to facilitate efficient and secure transactions on the Ethergem blockchain.",
          },
          {
            topic: "Employed Redux for robust state management,",
            content:
              "integrated TailwindCSS and Material- UI (MUI) for sophisticated UI styling, enhancing the platform's visual appeal and functionality.",
          },
          {
            topic: "Conducted comprehensive testing of the web interface",
            content:
              "using the Jest testing framework to ensure reliability, performance, and adherence to project requirements.",
          },
        ]}
      />
      <ExperienceContents
        period={{ start: "11/2017", end: "04/2019" }}
        company="Bidify Org"
        role={"Smart Contract and Web3 Developer"}
        description={"Multi-Blockchain NFT Marketplace"}
        link={"https://bidify.org"}
        detail={[
          {
            topic:
              "Orchestrated the creation of robust smart contracts in Solidity",
            content:
              " to facilitate seamless buying, selling, and auctioning of NFTs across multiple blockchain networks within the marketplace.",
          },
          {
            topic: "Collaborated on the development of the user interface",
            content:
              "(UI) using ReactJS, ensuring a visually appealing and user-friendly experience for platform users.",
          },
          {
            topic: "Successfully integrated with various third-party APIs",
            content:
              "including IPFS, Arweave, and Fleek to enhance platform functionality, data storage, and overall user experience across different blockchain ecosystems.",
          },
        ]}
      />
    </div>
  );
}
