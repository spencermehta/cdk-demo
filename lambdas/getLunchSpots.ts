import { APIGatewayProxyResult } from 'aws-lambda';

const lunchSpots = [
  {
	name: "Papaya",
	rating: 10
  }
]

export const handler = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(lunchSpots),
  };
};
