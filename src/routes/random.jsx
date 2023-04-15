import React from "react";
import { getRandomQuote } from "../api/Endpoints";
export default function Random() {
  const { loading, quote } = getRandomQuote();
  return <div>Here we will display a new quote to the user.</div>;
}
