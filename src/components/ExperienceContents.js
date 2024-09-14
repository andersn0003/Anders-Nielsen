import React from "react";

export default function ExperienceContents({
  period,
  company,
  role,
  description,
  link,
  detail,
}) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-row items-center justify-between w-full text-gray-400">
        <div className=" border rounded-md border-gray-400 p-1 ml-4 text-wrap">
          {period.start + "-" + period.end}
        </div>
        <a href={link} className="font-semibold mr-20 max-[860px]:mr-0">
          {company}
        </a>
      </div>
      <h1 className="text-2xl">{role}</h1>
      <div className="text-[16px] ml-4">{description}</div>
      <a href={link} className="text-blue-500 text-[14px] font-semibold ml-5">
        {link}
      </a>
      <ul className="ml-8 list-disc">
        {detail.map((spread, index) => (
          <li key={index}>
            <b>{spread.topic}</b>
            {" " + spread.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
