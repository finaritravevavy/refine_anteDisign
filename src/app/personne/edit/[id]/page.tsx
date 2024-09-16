"use client";

import { PERSONNE_QUERY } from "@queries/personne";
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { PERSONNE_UPDATE_MUTATION } from "@queries/personne";
import { GetFields, GetVariables } from "@refinedev/hasura";
import { UpdatepersonneMutation, UpdatepersonneMutationVariables } from "@graphql/types";
import { HttpError } from "@refinedev/core";
import gql from 'graphql-tag';
import { PERSONNE_SHOW } from "@queries/personne";

export default function PersonneEdit() {
  const { formProps, saveButtonProps, queryResult } = useForm<
    GetFields<UpdatepersonneMutation>,
    HttpError,
    GetVariables<UpdatepersonneMutationVariables>
  >({
    mutationMeta: {
      gqlMutation: PERSONNE_UPDATE_MUTATION,     
    },
    metaData:{
      gqlQuery: PERSONNE_SHOW,
    }
  });
 
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Nom"}
          name={["nom"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Prenom"}
          name={["prenom"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Age"}
          name={["age"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
}
