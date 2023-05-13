import axios from "axios";
import qs from "querystring";

export default async function handler(req, res) {
  const requestData = {
    data: req.body.data,
    signature: req.body.signature,
  };

  const requestDataEncoded = qs.stringify(requestData);

  try {
    const response = await axios.post(
      "https://www.liqpay.ua/api/request",
      requestDataEncoded,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    console.log(response.data);
    // Handle the response data as needed
    res.status(200).json(response.data); // Send the response back to the client
  } catch (error) {
    console.error(error);
    // Handle the error
    res.status(500).json({ error: "An error occurred" }); // Send an error response to the client
  }
}
