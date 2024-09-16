"use client";

import { PERSONNE_QUERY, PERSONNE_SHOW } from "@queries/personne";
import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";
import { GetFields } from "@refinedev/hasura";
import { Getpersonne } from "@graphql/types";
import gql from "graphql-tag";

const { Title } = Typography;

export default function PersonneShow() {
  const { queryResult } = useShow<GetFields<Getpersonne>>({
    metaData: {
       gqlQuery: PERSONNE_SHOW,
      },
  });
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Nom"}</Title>
      <TextField value={record?.nom} />
      <Title level={5}>{"Prenom"}</Title>
      <TextField value={record?.prenom} />
      <Title level={5}>{"Age"}</Title>
      <TextField value={record?.age} />
    </Show>
  );
}
