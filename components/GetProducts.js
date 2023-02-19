// import { useState, useEffect } from "react";
// import axios from "axios";
// import { parseString } from "xml2js";

// function GetProducts() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://chebyrashka.com.ua/index.php?route=feed/yandex_market"
//         );
//         const jsonData = await xmlToJson(response.data);
//         setData(jsonData);
//       } catch (error) {
//         console.error("Failed to fetch Yandex Market feed:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const xmlToJson = (xml) => {
//     return new Promise((resolve, reject) => {
//       parseString(xml, (err, result) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//   };

//   if (!data) {
//     return <p>Loading data...</p>;
//   }

//   return (
//     <div>
//       <h1>{data.yml_catalog.shop.name}</h1>
//       <ul>
//         {data.yml_catalog.shop.offers.offer.map((offer) => (
//           <li key={offer.id}>{offer.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default GetProducts;
