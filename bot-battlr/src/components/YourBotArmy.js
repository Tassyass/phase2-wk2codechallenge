// import React from "react";
// import BotCard from "./BotCard";

// function YourBotArmy({ bots, removeBot, deleteBot }) {
//   //your bot army code here...
//   const armyItem = bots.map((bot) => {
//     return (
//       <BotCard
//         key={bot.id}
//         bot={bot}
//         clickEvent={removeBot}
//         deleteBot={deleteBot}
//       />
//     );
//   });

//   return (
//     <div className="ui segment inverted olive bot-army">
//       <div className="ui five column grid">
//         <div className="row bot-army-row">
//           {/*...and here...*/}
//           {armyItem}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default YourBotArmy;

// import React from 'react';

// const YourBotArmy = () => {
//   return (
//     <div>
//       <h2>Your Bot Army</h2>
//       {/* Display your bot army here */}
//     </div>
//   );
// };

// export default YourBotArmy;

// import React from "react";

// const YourBotArmy = ({ yourBotArmy, removeFromYourBotArmy }) => {

//   return (
//     <div className="your-bot-army">
//       {yourBotArmy.map((bot) => (
//         <div key={bot.id}>
//           <h3>{bot.name}</h3>
//           <button onClick={() => removeFromYourBotArmy(bot)}>
//             Release from YourBotArmy
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourBotArmy;


