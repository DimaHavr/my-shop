export default function getHeaders() {
  return {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };
}
