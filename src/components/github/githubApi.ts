import axios from 'axios';

//TODO: My access token -> to use for accessing githubApi
const TOKEN = process.env.GITHUB_TOKEN;
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
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error retrieving contribution data:', error);
    throw error;
  }
}
