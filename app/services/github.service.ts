import axios from "axios";

async function getStarsByRepository(repository: string) {
  const stars = (
    await axios.get(`https://api.github.com/repos/${repository}`).catch()
  ).data.stargazers_count;

  return stars;
}

export default {
  getStarsByRepository,
};
