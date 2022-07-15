import { gql } from "@apollo/client";

export const GET_ALL_PRODUCT = gql`
  query Projects {
    projects {
      image
      title
      author
      category
    }
  }
`;

export const GET_FILTER_PROJECT = gql`
  query FilterProject($filter: String, $skip: Int, $take: Int, $sort: String) {
    filterProject(filter: $filter, skip: $skip, take: $take, sort: $sort) {
      _id
      image
      title
      author
      category
      tags
      date
      rating
    }
  }
`;
export const GET_SINGLE_PROJECT = gql`
  query SingleProject($singleProjectId: String) {
    singleProject(id: $singleProjectId) {
      image
      title
      author
      category
      slug
      liveLink
      getHubLink
      screenshots
      imagelevel
      tags
      rating
      date
      userFeature {
        title
        image
        tags
      }
      adminFeature {
        title
        image
        tags
      }
      about {
        title
        tools
      }
    }
  }
`;
