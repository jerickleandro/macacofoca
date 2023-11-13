import { createClient } from 'pexels';

async function generate(request, response) {
  const client = createClient(process.env.API_KEY_PEXELS);
  const termos = ["monkey", "seal"];
  const query = termos[gerarAleatorioZeroOUm()];

  const photos = await client.photos.search({ query, per_page: 50 })
  const result = photos.photos[gerarAleatorioZeroAVinte()].src.original;
  return response.status(400).json({ status: "OK", URL: result });
}

function gerarAleatorioZeroOUm() {
  return Math.floor(Math.random() * 2);
}

function gerarAleatorioZeroAVinte() {
  return Math.floor(Math.random() * 20);
}
export default generate;
