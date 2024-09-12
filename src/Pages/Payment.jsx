import React from 'react'

export const Payment = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Billing Info</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="p-2 border rounded" />
              <input type="tel" placeholder="Phone number" className="p-2 border rounded" />
              <input type="text" placeholder="Address" className="p-2 border rounded" />
              <input type="text" placeholder="Town or city" className="p-2 border rounded" />
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Rental Info</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center">
                  <input type="radio" name="pickupType" checked className="mr-2" />
                  Pick-Up
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="p-2 border rounded">
                  <option>Select your city</option>
                </select>
                <select className="p-2 border rounded">
                  <option>Select your date</option>
                </select>
                <select className="p-2 border rounded">
                  <option>Select your time</option>
                </select>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="radio" name="pickupType" className="mr-2" />
                  Drop-Off
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="p-2 border rounded">
                  <option>Select your city</option>
                </select>
                <select className="p-2 border rounded">
                  <option>Select your date</option>
                </select>
                <select className="p-2 border rounded">
                  <option>Select your time</option>
                </select>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Payment Method</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center">
                  <input type="radio" name="paymentMethod" checked className="mr-2" />
                  Credit Card
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Card number" className="p-2 border rounded" />
                <input type="text" placeholder="DD/MM/YY" className="p-2 border rounded" />
                <input type="text" placeholder="Card holder" className="p-2 border rounded" />
                <input type="text" placeholder="CVC" className="p-2 border rounded" />
              </div>
              <div>
                <label className="flex items-center">
                  <input type="radio" name="paymentMethod" className="mr-2" />
                  PayPal
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="radio" name="paymentMethod" className="mr-2" />
                  Bitcoin
                </label>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                I agree with sending an Marketing and newsletter emails. No spam, promised!
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                I agree with our terms and conditions and privacy policy.
              </label>
            </div>
            
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Rent Now
            </button>
          </form>
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-2xl font-bold mb-4">Rental Summary</h2>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded mr-4">
                <img src="/src/images/mi.png" alt="Rental Image" />
              </div>
              <div>
                <h3 className="font-bold">Nissan GT-R</h3>
                <div className="flex">
                  {[1, 2, 3, 4].map(star => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-1">440+ Reviewer</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$80.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Rental Price</span>
                <span>$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment


