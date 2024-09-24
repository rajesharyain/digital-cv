import { FC, useEffect, useState } from "react";
import { VictoryGithubChart } from "../components/victory-chart/VictoryGithubChart";
import { retrieveContributionData } from "../components/github/githubApi";

type Props = {
    userName: string
    totalContributions: number
    contributionDays: Externals.Github.ContributionDay[]
}
interface ContributionDay {
    contributionCount: number;
    date: string;
  }

const ChartArea: FC<Props> = ({ totalContributions, contributionDays, userName }) => (
    <>
        <h1>GitHub Contributions of <a target="_blank" rel="noopener" href={`https://github.com/${userName}`}>{userName}</a></h1>
        <h2>Total Contributions: {totalContributions}</h2>
        <h2>Accumulation of Contributions Over One Year</h2>
        <VictoryGithubChart contributionDays={contributionDays} />
    </>
)
const VictoryChartPage: FC<Props> = ({  userName }) => {

    const [totalContributions, setTotalContributions] = useState<number>(0);
    const [contributionDays, setContributionDays] = useState<ContributionDay[]>([]);
    const MAIN_AUTHOR_USER_NAME = 'rajesharyain';
  

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data: { user: { contributionsCollection: { contributionCalendar: { totalContributions, weeks } } } } } = await retrieveContributionData(userName || MAIN_AUTHOR_USER_NAME);
            const days = weeks.reduce((prev: ContributionDay[], cur: any) => {
              return prev.concat(cur.contributionDays);
            }, []);
            setTotalContributions(totalContributions);
            setContributionDays(days);
          } catch (error) {
            console.error('Error fetching contribution data:', error);
          }
        };
    
        fetchData();
      }, [userName]);

      

    return (
        <>
            <div style={{ textAlign: 'center', fontFamily: 'roboto' }}>
                <ChartArea contributionDays={contributionDays} totalContributions={totalContributions} userName={userName} />
                {/*   <SearchArea userName={userName}/>
          <AuthorArea /> */}
            </div>
        </>
    )
}


export default VictoryChartPage;