export interface GithubStats {
    totalContributions: number;
    totalRepositories: number;
    followers: number;
  }
  
  export async function fetchGithubStats(): Promise<GithubStats> {
    const token = "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";
    
    // GraphQL query to get GitHub contribution calendar and other stats
    const query = `
      query {
        viewer {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
          repositories(first: 100, privacy: PUBLIC) {
            totalCount
          }
          followers {
            totalCount
          }
        }
      }
    `;
  
    try {
      // Fetch GitHub user stats using GraphQL API
      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) throw new Error('GitHub API request failed');
  
      const data = await response.json();
      const githubData = data.data.viewer;
  
      // Return only the stats needed
      return {
        totalContributions: githubData.contributionsCollection.contributionCalendar.totalContributions,
        totalRepositories: githubData.repositories.totalCount,
        followers: githubData.followers.totalCount,
      };
  
    } catch (error) {
      console.error('Error fetching GitHub stats:', error);
      throw error;
    }
  }
  