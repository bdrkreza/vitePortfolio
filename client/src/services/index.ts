import client from "./apollo-client/apollo_client";
import {
  CREATE_PROJECT,
  DELETE_IMAGE,
  LOGIN_USER,
  REGISTER_USER,
} from "./apollo-client/apollo_mutation";
import {
  GET_ALL_PRODUCT,
  GET_FILTER_PROJECT,
  GET_SINGLE_PROJECT,
} from "./apollo-client/apollo_query";

export {
  client,
  GET_ALL_PRODUCT,
  GET_FILTER_PROJECT,
  GET_SINGLE_PROJECT,
  CREATE_PROJECT,
  LOGIN_USER,
  REGISTER_USER,
  DELETE_IMAGE,
};
