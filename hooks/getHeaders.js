export default function getHeaders() {
  return {
    headers: {
      Authorization: process.env.API_TOKEN,
    },
  };
}
