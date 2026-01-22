// import React, { useState } from 'react';
// import HeadingSection from '../../components/HeadingSection';

// const PricingSection = () => {
//   const [isYearly, setIsYearly] = useState(false);

//   const pricingPlan = [
//     {
//       id: 1,
//       name: "Freelancer",
//       monthlyPrice: 25,
//       yearlyPrice: 250,
//       saves: "$25 USD per month, paid annually",
//       Features: [
//         "1 Project",
//         "Basic Support",
//         "Access to all templates",
//         "5GB Storage",
//       ],
//     },
//     {
//       id: 2,
//       name: "Professional",
//       monthlyPrice: 65,
//       yearlyPrice: 650,
//       saves: "$65 USD per month, paid annually",
//       Features: [
//         "1 Project",
//         "Priority Support",
//         "Access to all templates",
//         "25GB Storage",
//         "Advanced Analytics",
//       ],
//     },
//     {
//       id: 3,
//       name: "Agency",
//       monthlyPrice: 95,
//       yearlyPrice: 950,
//       saves: "$95 USD per month, paid annually",
//       Features: [
//         "1 Project",
//         "Priority Support",
//         "Access to all templates",
//         "50GB Storage",
//         "Advanced Analytics",
//       ],
//     },
//   ];

//   return (
//     <div className='bg-gray-100 py-12 px-4 sm:px-6 lg:px-20'>
//       <HeadingSection 
//         heading="Choose Your Plan" 
//         subheading="Pricing" 
//         description="Our pricing plans are flexible and designed to fit your needs. Choose a plan that works best for you." 
//       />

//       {/* Toggle Button */}
//       <div className='flex justify-center my-8'>
//         <label className='inline-flex items-center cursor-pointer'>
//           <span className='mr-3 text-gray-700 font-medium'>
//             {isYearly ? "Yearly Pricing" : "Monthly Pricing"}
//           </span>
//           <div className='relative'>
//             <input 
//               type="checkbox" 
//               className='sr-only' 
//               checked={isYearly} 
//               onChange={() => setIsYearly(!isYearly)} 
//             />
//             <div className='w-14 h-8 bg-gray-300 rounded-full'></div>
//             <div className={`absolute top-1 left-1 w-6 h-6 bg-emerald-500 rounded-full transition-transform duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"}`}></div>
//           </div>
//         </label>
//       </div>

//       {/* Pricing Plans */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
//         {pricingPlan.map((plan) => (
//           <div key={plan.id} className='bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
//             {/* Header */}
//             <div className='p-6 text-center'>
//               <h3 className='text-xl font-semibold text-gray-800 mb-2'>{plan.name}</h3>
//               <p className='text-gray-500 mb-4'>Best for {plan.name.toLowerCase()}s</p>
//               <div className='text-2xl font-bold text-gray-800'>
//                 ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
//                 <span className='text-base'>/{isYearly ? "year" : "month"}</span>
//               </div>
//               <p className='mt-2 text-sm text-gray-500'>{isYearly ? plan.saves : ""}</p>
//             </div>

//             {/* Button */}
//             <div className='text-center p-4'>
//               <button className='px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold'>
//                 Choose {plan.name}
//               </button>
//             </div>

//             {/* Features */}
//             <div className='px-6 pb-6'>
//               <ul className='space-y-2'>
//                 {plan.Features.map((feature, index) => (
//                   <li key={index} className='text-gray-600'>• {feature}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PricingSection;
