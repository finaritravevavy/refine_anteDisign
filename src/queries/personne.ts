import { gql } from "graphql-tag";

export const PERSONNE_QUERY = ["id", "nom", "prenom", "age"];

export const PERSONNE_QUERY1 = gql`query Getpersonne($id: Int!) {
    personne_by_pk(id: $id) {
      id
      nom
      prenom
      age
    }
  }`;

export const PERSONNE_CREATE_MUTATION = gql`
    mutation CreatePersonne($object: personne_insert_input!) {
        insert_personne_one(object: $object) {
            id
        }
    }
`;

export const PERSONNE_UPDATE_MUTATION = gql`
    mutation Updatepersonne($id: Int!, $object: personne_set_input!) {
        update_personne_by_pk(pk_columns: { id: $id }, _set: $object) {
            id
            nom
            prenom
            age
        }
    }
`;

export const PERSONNE_SHOW = gql`
    query personne($id: Int!){
        personne_by_pk(id: $id){
            id
            nom
            prenom
            age
        }
    }`;

export const PERSONNE_DELETE = gql`
mutation Deletepersonne($id: Int!) {
  delete_personne_by_pk(id: $id) {
    id
  }
}`;

//chat
export const DELETE_PERSONNE_MUTATION = gql`
  mutation DeletePersonne($id: Int!) {
    delete_personne_by_pk(id: $id) {
      id
    }
  }
`;


    //chat
//    export const PERSONNE_QUERY = gql`
//   query GetPersonnes($id: Int!) {
//     personne_by_pk(id: $id) {
//       id
//       nom
//       prenom
//       age
//     }
//   }
// `;
