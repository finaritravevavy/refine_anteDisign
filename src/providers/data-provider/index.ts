"use client";

import dataProviderHasura, { GraphQLClient } from "@refinedev/hasura";

const API_URL = "http://localhost:8080/v1/graphql";

export const client = new GraphQLClient(API_URL, {
  headers: {
    "x-hasura-admin-secret": "myadminsecretkey",
  },
});

export const dataProvider = dataProviderHasura(client);






















// async function deletePersonne(id) {
//   const response = await fetch('https://your-hasura-instance/v1/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'x-hasura-admin-secret': 'your-admin-secret',
//     },
//     body: JSON.stringify({
//       query: DELETE_PERSONNE_MUTATION,
//       variables: { id },
//     }),
//   });