import React from 'react';
import ProblemCard from './problemCard'; 

const problems = [
  {
    title: "Your Website Can't Be Found",
    description:
      "If your site doesn't rank, customers can't find you when they're ready to buy.",
  },
  {
    title: "Traffic Isn't Converting",
    description:
      "Getting visitors is great, but it doesn't guide visitors toward action.",
  },
  {
    title: "Your Website Can't Be Found",
    description:
      "Overreliance on ads can be expensive and short-lived without a long-term strategy.",
  },
];

function ProblemList() {
  return (
    <div className='flex flex-col justify-center lg:pl-8'>
      {problems.map((problem, index) => (
        <ProblemCard
          key={index}
          title={problem.title}
          description={problem.description}
        />
      ))}
    </div>
  );
}

export default ProblemList;
