"use client";

import { PERSONNE_QUERY, PERSONNE_DELETE, PERSONNE_SHOW } from "@queries/personne";
import { GetpersonneQuery } from "@graphql/types";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/hasura";
import { Space, Table } from "antd";

export default function PersonneList() {
  const { tableProps } = useTable<GetFieldsFromList<GetpersonneQuery>>({
    syncWithLocation: true,

    initialSorter: [
      {
        field: "id",
        order: "asc",
      }
    ],

    meta: {
      fields: PERSONNE_QUERY,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"id"} />
        <Table.Column dataIndex="nom" title={"nom"} />
        <Table.Column dataIndex="prenom" title={"prenom"} />
        <Table.Column dataIndex="age" title={"age"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} meta={{gqlMutation:PERSONNE_DELETE}}/>
            </Space>
          )}
        />
      </Table>
    </List>
  );
}







