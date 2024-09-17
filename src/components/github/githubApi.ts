import axios from 'axios';

//TODO: My access token -> to use for accessing githubApi
const GITHUB_STRING = process.env.GITHUB_STRING;
const query = `
query($userName:String!) {
  user(login: $userName) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

export async function retrieveContributionData(userName: string): Promise<Externals.Github.ApiResponse> {
  const variables = {
    userName: userName,
  };

  const body = {
    query: query,
    variables: variables,
  };

  try {
    const response = await axios.post('https://api.github.com/graphql', body, {
      headers: {
        Authorization: `Bearer ${GITHUB_STRING}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error retrieving contribution data:', error);
    throw error;
  }
}
