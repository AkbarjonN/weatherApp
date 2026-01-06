import { gql } from "@apollo/client";

export const GET_WEATHER = gql`
  query ($city: String!) {
    weatherByCity(city: $city) {
      city
      temp
      feels_like
      humidity
      description
      wind
      icon
    }
  }
`

