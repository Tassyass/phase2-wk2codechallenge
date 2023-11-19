// // import React from "react";
// // import BotCard from "./BotCard";

// // function BotCollection({ bots, enlistBot, deleteBot }) {
// //   // Your code here
// //   const botItem = bots.map((bot) => {
// //     return (
// //       <BotCard
// //         key={bot.id}
// //         bot={bot}
// //         clickEvent={enlistBot}
// //         deleteBot={deleteBot}
// //       />
// //     );
// //   });
// //   return (
// //     <div className="ui four column grid">
// //       <div className="row">
// //         {/*...and here..*/}
// //         {botItem}
// //       </div>
// //     </div>
// //   );
// // }

// // export default BotCollection;


// import React, { useState, useEffect } from 'react';

// const BotCollection = () => {
//   const [bots, setBots] = useState([]);
//   const [yourBotArmy, setYourBotArmy] = useState([]);

//   useEffect(() => {
//     // Fetch bot data from the provided link
//     fetch('http://localhost:3000/bots')
//       .then(response => response.json())
//       .then(data => setBots(data));
//   }, []);

//   const addToYourBotArmy = (bot) => {
//     if (!yourBotArmy.includes(bot)) {
//       setYourBotArmy([...yourBotArmy, bot]);
//     }
//   };

//   const removeFromYourBotArmy = (bot) => {
//     setYourBotArmy(yourBotArmy.filter(b => b !== bot));
//   };

//   const dischargeFromService = (bot) => {
//     // Delete the bot from backend (you need to implement this part)
//     // ...

//     removeFromYourBotArmy(bot);
//   };

//   return (
//     <div>
//       <h2>Available Bots</h2>
//       <ul>
//         {bots.map(bot => (
//           <li key={bot.id}>
//             {bot.name} - {bot.description}
//             <button onClick={() => addToYourBotArmy(bot)}>Add to Army</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Your Bot Army</h2>
//       <ul>
//         {yourBotArmy.map(bot => (
//           <li key={bot.id}>
//             {bot.name} - {bot.description}
//             <button onClick={() => removeFromYourBotArmy(bot)}>Release</button>
//             <button onClick={() => dischargeFromService(bot)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BotCollection;

// import React from "react";

// const BotCollection = ({ botCollection, addToYourBotArmy, selectBot }) => {
//   return (
//     <div className="bot-collection">
//       {botCollection.map((bot) => (
//         <div key={bot.id}>
//           <h3>{bot.name}</h3>
//           <p>Description: {bot.description}</p>
//           <button onClick={() => addToYourBotArmy(bot)}>
//             Add to YourBotArmy
//           </button>
//           <button onClick={() => selectBot(bot)}>View Details</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BotCollection;


