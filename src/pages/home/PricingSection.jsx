import React, { useState } from 'react'
import HeadingSection from '../../components/HeadingSection'


const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlan = [
    {
      id: 1,
      name: "Freelancer",
      monthlyPrice: 25,
      yearlyPrice: 250,
      saves: "$25 USD per month, paid annually",
      Features: [
        "1 Project",
        "Basic Support",
        "Access to akk template",
        "5GB Storage",
      ],
    },
    {
      id: 2,
      name: "Professional",
      monthlyPrice: 65,
      yearlyPrice: 650,
      saves: "$65 USD per month, paid annually",
      Features: [
        "1 Project",
        "Priority Support",
        "Access to all template",
        "25GB Storage",
        "Advanced Analytics",
      ],
    },
    {
      id: 3,
      name: "Agency",
      monthlyPrice: 95,
      yearlyPrice: 950,
      saves: "$55 USD per month, paid annually",
      Features: [
        "1 Project",
        "Priority Support",
        "Access to all template",
        "25GB Storage",
        "Advanced Analytics",
      ],
    },
  ]

  return (
    <div className='bg-gray-100 py-13 px-6'>
      <HeadingSection heading="Choose Your Plan" subheading="Pricing" description="our pricing plan are
        flexible and design to fit your needs. Choose a plan that woek best for you "/>

      {/* toggle button */}
      <div className='text-center '>
        <label className='inline-flex items-center cursor-pointer justify-center'>
          <span className='px-3'>
            {isYearly ? "Yearly Pricing " : "Monthly Pricing"}
          </span>
          <div className='relative'>
            <input type="checkbox" className='sr-only' checked={isYearly} onChange={() =>
              setIsYearly(!isYearly)} />
            <div className=' w-14 h-8 bg-gray-300 rounded-full'></div>
            <div className={`toggle-circle absolute top-1 left-1 w-6 h-6 bg-emerald-500 rounded-full transition-transform
            duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"}`}></div>
          </div>
        </label>
      </div>

      {/* Pricing Plan */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-6 sm:px-10 md:px-14 lg:px-20 '>
        {
          pricingPlan.map((plan, index) =>(
            <div key={plan.id} className='bg-white border border-gray-200 rounded-lg overflow-hidden 
            transition-all duration-300 shadow-lg hover:shadow-none hover:bg-gray-100 hover:border-amber-300 '>
              <div className='p-5 text-center'>
                <h3 className='text-xl font-semibold text-gray-800 my-3'>{plan.name}</h3>
                <p className='text-gray-500 mt-5'>Best for {plan.name.toLowerCase()}s</p>

                {/* Dynamic pricing Section */}
                <div className='text-2xl font-bold text-gray-800'>
                  ${
                    isYearly ? plan.yearlyPrice : plan.monthlyPrice
                  }
                  <span className=''>/{isYearly ? "year" : "month" }</span>
                </div>
                <p className='mt-3'>{isYearly ? plan.saves : ""}</p>
              </div>

              {/* Button Section */}
              <div className='text-center p-5 font-semibold '>
                <button className='cursor-pointer px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-800 transition duration-300 text-white'>
                  Choose {plan.name}
                </button>
              </div>

              {/* Features */}
              <div className='p-5 md:px-12 md:py-5'>
                <ul>
                  {
                    plan.Features.map((feature, index) =>(
                      <li key={index.id}>{feature}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PricingSection