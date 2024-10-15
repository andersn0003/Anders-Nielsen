import React from "react";
import ExperienceContents from "../components/ExperienceContents";

export default function Experience() {
  return (
    <div className="flex flex-col gap-10">
      <ExperienceContents
        period={{ start: "08/2024", end: "Present" }}
        company="DDID"
        role={"Rust Engineer"}
        description={
          "DDID is a decentralized identification system for dogs that utilizes biometric data and zero-knowledge proofs, developed for enhanced pet identification. DDID ensures secure verification of a dog's identity while keeping sensitive biometric information private, facilitating reliable tracking and management across modular blockchain environments."
        }
        link={""}
        detail={[
          {
            topic: "Design and develop an Off-Chain system",
            content:
              "  from the 0% development stage using Rust, Zero Knowledge Proof, Merkle Proofs, bellman for zk-SNARK, ZK-circuit, PostgreSQL as a database for storing user data and C++.",
          },
          {
            topic:
              "Create all of the Smart Contracts",
            content:
              " for storing and updating Merkle hash of user data, proving zk-Proof by using verifying key and returning permission",
          },
          {
            topic:
              "Collaborated in an agile environment with regular team meetings",
            content:
              " facilitated through Google doc for understanding, Jira for project management, and Google Meet for virtual meetings.",
          },
        ]}
      />
      <ExperienceContents
        period={{ start: "04/2023", end: "07/2024" }}
        company="Cata Labs"
        role={"Blockchain core engineer"}
        description={
          "Catalyst is an open-source liquidity protocol for modular blockchains, developed by Cata Labs. Catalyst will automatically connect each new chain to other chains of interest, such as other app environments or hubs like Ethereum and Cosmos."
        }
        link={"https://catalyst.exchange/"}
        detail={[
          {
            topic: "Design, develop, and implement a Cross-Chain AMM/DEX infra",
            content:
              "from the 20% development stage using Cosmos SDK, Go programming language, C++ and blockchain frameworks like Maya chain and Bifrost protocol",
          },
          {
            topic: "Collaborate with cross-functional team",
            content:
              " to build and maintain 100% scalable, secure, and efficient backend services with smart contracts using Solidity and Rust for blockchain integration.",
          },
          {
            topic: "Create a user-friendly front-end interface for catalyst",
            content:
              " from the 0% stage with your team using modern frameworks like Next.js, ensuring responsive and efficient interaction with decentralized systems.",
          },
          {
            topic: "Conduct thorough testing, debugging, and deployment of blockchain-based system",
            content:
              "to ensure 100% security standards and privacy.",
          },
        ]}
      />
      <ExperienceContents
        period={{ start: "01/2020", end: "02/2023" }}
        company="Kaizen Finance"
        role={"Software Engineer"}
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
