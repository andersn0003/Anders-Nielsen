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
        description={"Kaizen.Finance is the world's first cross-chain automated token launch platform for projects and investors"}
        link={""}
        detail={[
          {
            topic:
              "Established the back-end infrastructure",
            content:
              "from the 30% stage using Rust, Rocket framework, Zero Knowledge Proof, bellman and arkworks for zk-SNARK, ScyllaDB and PostgreSQL for database interaction, Air for live reloading, Docker for containerization and designed the database schema",
          },
          {
            topic: "Built responsive, user-friendly interface",
            content:
              "from the 0% stage by integrating smart contracts with front-end frameworks - Next.js.",
          },
          {
            topic: "Created 80% of all Smart Contracts for launching various tokens",
            content:
              "such as ERC20, SPL, token 2022, ERC1155, TRC20, and BEP20.",
          },
          {
            topic: "Collaborated in an agile environment with regular team meetings",
            content:
              "facilitated through Slack for communication, Jira for project management, and Google Meet for virtual meetings.",
          },
        ]}
      />
      <ExperienceContents
        period={{ start: "03/2020", end: "10/2020" }}
        company="Futureswap"
        role={"Smart Contract and Frontend Engineer"}
        description={"Futureswap is a Decentralized leveraged trading on Arbitrum and Avalanche."}
        link={"https://www.futureswap.com/"}
        detail={[
          {
            topic:
              "Developed a Decentralized Exchange page",
            content:
              " using Typescript, NextJS, TailwindCSS and Web3JS from the 0% stage and integrated various APIs of CMC, CG and 0x.",
          },
          {
            topic: "Collaborate with cross-functional team of 7 members",
            content:
              " to design and implement innovative features that enhance user experience and system performance.",
          },
          {
            topic: "Engineered the back-end infrastructure",
            content:
              " from the 40% stage using Solidity smart contracts and Subgraph to facilitate efficient and secure transactions.",
          },
          {
            topic: "Participated in 100% of code test",
            content:
              " using Jest testing framework, contribute to architectural discussions, and implement best practices in version control, testing, and deployment using CI/CD pipelines like GitHub.",
          },
        ]}
      />
      <ExperienceContents
        period={{ start: "11/2017", end: "04/2019" }}
        company="Coin Metrics"
        role={"Blockchain Full Stack Developer"}
        description={""}
        link={""}
        detail={[
          {
            topic:
              "Designed and developed about 10% of blockchain solutions",
            content:
              "  by building and integrating various smart contracts such as auction contract, voting contract and token contract, and secure back-end services using Web3 technologies like Solana / Web3.js, Wagmi, Viem and so on",
          },
          {
            topic: "Created more than 20 user-friendly front-end components ",
            content:
              " for Coin Metrics using modern frameworks like React.js ensuring responsive and efficient interaction with decentralized system.",
          },
          {
            topic: "Integrated with 3 third-party APIs including IPFS, Arweave, and Fleek",
            content:
              "  to enhance platform functionality, data storage, and overall user experience across blockchain ecosystems.",
          },
        ]}
      />
    </div>
  );
}
