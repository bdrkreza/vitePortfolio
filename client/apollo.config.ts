module.exports = {
  client: {
    service: {
      name: "project",
      url: "http://localhost:4000/graphql",
      // optional headers
      headers: {
        authorization: "Bearer lkjfalkfjadkfjeopknavadf",
      },
      // optional disable SSL validation check
      skipSSLValidation: true,
    },
    includes: ["./src/**/*.ts"],
    excludes: ["**/__tests__/**"],
  },
};
