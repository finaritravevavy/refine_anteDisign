"use client";

import { PERSONNE_QUERY } from "../../../queries/personne";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function PersonneCreate() {
  const { formProps, saveButtonProps } = useForm({
    meta: {
      fields: PERSONNE_QUERY,
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
}
