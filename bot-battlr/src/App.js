// import React from "react";
// import BotsPage from "./components/BotsPage";

// function App() {
//   return (
//     <div className="App">
//       <BotsPage />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import BotCollection from './components/BotCollection';
// import YourBotArmy from './components/YourBotArmy';

// const App = () => {
//   return (
//     <div>
//       <h1>My Bot Army</h1>
//       <BotCollection />
//       <YourBotArmy />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import YourBotArmy from "./components/YourBotArmy";
// import BotCollection from "./components/BotCollection";

// const App = () => {
//   const [yourBotArmy, setYourBotArmy] = useState([]);
//   const [selectedBot, setSelectedBot] = useState(null);
//   const [botCollection, setBotCollection] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/bots")
//       .then((response) => response.json())
//       .then((data) => setBotCollection(data));
//   }, []);

//   const addToYourBotArmy = (bot) => {
//     if (!yourBotArmy.includes(bot)) {
//       setYourBotArmy([...yourBotArmy, bot]);
//     }
//   };

//   const removeFromYourBotArmy = (bot) => {
//     setYourBotArmy(yourBotArmy.filter((b) => b !== bot));
//   };

//   const dischargeBot = (bot) => {
//     fetch(`http://localhost:3000/bots/${bot.id}`, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then(() => {
//         setBotCollection(
//           botCollection.filter((b) => b.id !== bot.id)
//         );
//         setYourBotArmy(
//           yourBotArmy.filter((b) => b.id !== bot.id)
//         );
//       });
//   };

//   const selectBot = (bot) => {
//     setSelectedBot(bot);
//   };

//   return (
//     <div>
//       <h1>Bot Collection</h1>
//       <h2>Add Bots to Your Army</h2>
//       <BotCollection
//         botCollection={botCollection}
//         addToYourBotArmy={addToYourBotArmy}
//         selectBot={selectBot}
//       />
      
//       <h2>Your Bot Army</h2>
//       <YourBotArmy
//         yourBotArmy={yourBotArmy}
//         removeFromYourBotArmy={removeFromYourBotArmy}
//         dischargeBot={dischargeBot}
//       />

//       {selectedBot && (
//         <div>
//           <h2>Selected Bot Details</h2>
//           <h3>Name: {selectedBot.name}</h3>
//           <p>Description: {selectedBot.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


