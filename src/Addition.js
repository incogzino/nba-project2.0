// import React from 'react';

// interface MyComponentProps {
//   num1: number;
//   num2: number;
// }

// const MyComponent: React.FC<MyComponentProps> = ({ num1, num2 }) => {
//   // simple function to calculate the sum cuz it aint working type shi
//   const calculateSum = (a: number, b: number): number => a + b;

//   // should i end it all???
//   return (
//     <div>
//       <p>{`The sum of ${num1} and ${num2} is: ${calculateSum(num1, num2)}`}</p>
//     </div>
//   );
// };

// export default MyComponent;

function sum(a, b) {
    return a + b;
  }


export default sum;
