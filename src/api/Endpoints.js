export const getRandomQuote = async () => {
  const options = {
    method: "GET",
  };

  const link = `https://api.quotable.io/random`;

  const raw = await fetch(link, options);
  const quote = await raw.json();

  return { quote, isLoading: !quote };
};
