import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('100.00'); // Set default amount
  const [currency, setCurrency] = useState('USD'); // Set default currency
  const [name, setName] = useState('Test Product');
  const [description, setDescription] = useState('A description of your product');
  const [charges, setCharges] = useState([]);
  const [chargeId, setChargeId] = useState(''); // For inputting charge ID
  const [specificCharge, setSpecificCharge] = useState(null); // For storing the fetched charge details
  const [events, setEvents] = useState([]);
  const [eventId, setEventId] = useState(''); // For inputting event ID
  const [specificEvent, setSpecificEvent] = useState(null); // For storing the fetched event details
  const REACT_APP_COMMERCE_API_KEY = process.env.REACT_APP_COMMERCE_API_KEY;

  const handleCreateCharge = async () => {
    const config = {
      method: 'post',
      url: 'https://api.commerce.coinbase.com/charges',
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': REACT_APP_COMMERCE_API_KEY // Ensure you secure your API key
      },
      data: {
        name: name,
        description: description,
        pricing_type: "fixed_price",
        local_price: {
          amount: amount,
          currency: currency
        }
      }
    };

    try {
      const response = await axios.request(config);
      console.log('Charge created:', response.data);
      alert('Charge created successfully. ID: ' + response.data.data.id);
    } catch (error) {
      console.error('Error creating charge:', error);
      alert('Failed to create charge. Error: ' + error.message);
    }
  };

  const handleListCharges = async () => {
    const config = {
      method: 'get',
      url: 'https://api.commerce.coinbase.com/charges',
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': REACT_APP_COMMERCE_API_KEY
      }
    };

    try {
      const response = await axios.request(config);
      setCharges(response.data.data);
      alert('Charges retrieved successfully!');
    } catch (error) {
      console.error('Error retrieving charges:', error);
      alert('Failed to retrieve charges. Error: ' + error.message);
    }
  };

  const handleShowCharge = async () => {
    if (!chargeId) {
      alert('Please enter a charge ID.');
      return;
    }
    const config = {
      method: 'get',
      url: `https://api.commerce.coinbase.com/charges/${chargeId}`,
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': REACT_APP_COMMERCE_API_KEY
      }
    };

    try {
      const response = await axios.request(config);
      setSpecificCharge(response.data.data);
      alert('Charge retrieved successfully!');
    } catch (error) {
      console.error('Error retrieving charge:', error);
      alert('Failed to retrieve charge. Error: ' + error.message);
    }
  };

  const handleListEvents = async () => {
    const config = {
      method: 'get',
      url: 'https://api.commerce.coinbase.com/events',
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': REACT_APP_COMMERCE_API_KEY, // Use secure handling of API Key
        'X-CC-Version': '2018-03-22' // Specify the desired API version
      }
    };
  
    try {
      const response = await axios.request(config);
      setEvents(response.data.data);
      alert('Events retrieved successfully!');
    } catch (error) {
      console.error('Error retrieving events:', error);
      alert('Failed to retrieve events. Error: ' + error.message);
    }
  };

  const handleShowEvent = async () => {
    if (!eventId) {
      alert('Please enter an event ID.');
      return;
    }
    const config = {
      method: 'get',
      url: `https://api.commerce.coinbase.com/events/${eventId}`,
      headers: {
        'Content-Type': 'application/json',
        'X-CC-Api-Key': REACT_APP_COMMERCE_API_KEY, // Replace with secure handling of API key
        'X-CC-Version': '2018-03-22' // Specify the desired API version
      }
    };
  
    try {
      const response = await axios.request(config);
      setSpecificEvent(response.data.data);
      alert('Event retrieved successfully!');
    } catch (error) {
      console.error('Error retrieving event:', error);
      alert('Failed to retrieve event. Error: ' + error.message);
    }
  };

  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-6 text-center">
        <h1>Coinbase Commerce Charge Creator</h1>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="space-y-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleCreateCharge}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Charge
          </button>
          <button
            onClick={handleListCharges}
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            List Charges
          </button>
          <input
            type="text"
            placeholder="Enter Charge ID to Show"
            value={chargeId}
            onChange={(e) => setChargeId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleShowCharge}
            className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Show Charge
          </button>
          <button
            onClick={handleListEvents}
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            List Events
          </button>
          <input
            type="text"
            placeholder="Enter Event ID to Show"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleShowEvent}
            className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Show Event
          </button>
  
          {specificCharge && (
            <div>
              <h2 className="text-lg font-bold">Specific Charge Details:</h2>
              <p>{specificCharge.name} - {specificCharge.description} - {specificCharge.pricing_type} - {specificCharge.local_price?.amount ?? 'N/A'} {specificCharge.local_price?.currency ?? 'N/A'}</p>
            </div>
          )}
  
  {charges.length > 0 && (
          <div>
            <h2 className="text-lg font-bold">Charges:</h2>
            <ul>
              {charges.map(charge => (
                <li key={charge.id}>
                  {charge.name} - {charge.description} - {charge.pricing_type} - 
                  {charge.local_price?.amount ?? 'N/A'} {charge.local_price?.currency ?? 'N/A'} - 
                  Charge ID: {charge.id}
                  <button onClick={() => handleShowCharge(charge.id)} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    View Details
                  </button>
                  {/* Check if hosted_url exists and show the button */}
                  {charge.hosted_url && (
                    <button onClick={() => window.location.href = charge.hosted_url} className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                      Pay with Crypto
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
  
  {events.length > 0 && (
          <div>
            <h2 className="text-lg font-bold">Events:</h2>
            <ul>
              {events.map(event => (
                <li key={event.id}>
                  {event.type} - API Version: {event.api_version} - {new Date(event.created_at).toLocaleString()} - Event ID: {event.id}
                </li>
              ))}
            </ul>
          </div>
        )}
  
          {specificEvent && (
            <div>
              <h2 className="text-lg font-bold">Specific Event Details:</h2>
              <p>Type: {specificEvent.type}</p>
              <p>ID: {specificEvent.id}</p>
              <p>API Version: {specificEvent.api_version}</p>
              <p>Created At: {new Date(specificEvent.created_at).toLocaleString()}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
  
}

export default App;
