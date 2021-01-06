const { gql } = require('apollo-server');

const typeDefs = gql`

     type Curso {
          titulo: String          
     }

     type Tecnologia {
          tecnologia: String
     }

     type Query {
          obtenerCursos: [Curso]

          obtenerTecnologia: [Tecnologia]
     }

     input UsuarioInput {
          nombre: String!
          email: String!
          password: String!
     }

     type Token {
          token: String
     }

     input AutenticarInput {
          email: String!
          password: String!
     }

     type Mutation {
          crearUsuario(input: UsuarioInput): String
          autenticarUsuario(input: AutenticarInput): Token
     }

`;

module.exports = typeDefs;