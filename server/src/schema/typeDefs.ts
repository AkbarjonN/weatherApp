import { gql } from "apollo-server";

export const typeDefs = gql`
  type CurrentWeather {
    city:String
    temp: Float
    feels_like: Float
    humidity: Int
    description: String
    wind: Float
    icon: String
  }


  type Query {
    weatherByCity(city: String!): CurrentWeather

  }
`;
