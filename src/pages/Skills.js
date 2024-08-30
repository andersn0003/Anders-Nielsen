import React from 'react'
import SkillSet from '../components/SkillSet'

export default function Skills() {
    return (
        <div className='w-full flex flex-wrap justify-center gap-8'>
            <SkillSet percentage={10} skillName={'Frontend'} detailSkills={['Typescript/Javascript', 'ReactJS / NextJS v13, v14', 'TailwindCSS / MUI / Headless', 'Figma / Responsive Design','Redux / Zustand / Jotai','VueJS / Nuxt','Atomic Design','Vitest / Jest']} />
            <SkillSet percentage={10} skillName={'Backend'} detailSkills={['NodeJS / Express / NestJS', 'Rust', 'GoLang / GoFiber / Gorm', 'GraphQL / Apollo', 'Sentry / Monitoring','Python / Django','PostgreSQL / MySQL','Redis / MongoDB','Prisma / TypeORM / Mongoose']} />
            <SkillSet percentage={10} skillName={'Blockchain'} detailSkills={['Smart Contract / Web3', 'Solidity / Hardhat / EVM', 'Rust / Solana / SEI', 'Solana / SPL / Token 2022','Cross Chain / Cosmos / Bifrost','Uniswap v2 / v3','BRC20 / Ordinal / Inscription','Fiat On/Off Ramp','NFT / ERC404','UTXO','TheGraph / Subgraph','Crypto Analytics','Trading / MEV / Bot','Blockchain Infra / Layer Zero','Third Party API','Dune Query']} />
            <SkillSet percentage={9} skillName={'AgileProjectManagement'} detailSkills={['Docker / Kubernetes', 'Truffle / Jira / Kanban', 'DevOps/ CI/CD', 'GitHub / GitLab','Slack / Scrum','AWS','Agile Methodology','Project Management','Leadership / Startup']} />
        </div>
    )
}
