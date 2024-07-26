import ArRehman from "../../../Pitchers/Ar Rehman banner.jpg";
import ArijitSingh from "../../../Pitchers/Arijit Singh banner.jpeg";
import nusratFetehAliKhan from "../../../Pitchers/nusrat fateh ali khan banner.jpg";
import Shubh from "../../../Pitchers/Shubh Banner.jpg";
import SidhuMoseWala from "../../../Pitchers/Sidhu moose wala banner.jpeg";

import ArijitSinghRedio from "../../../Pitchers/Redio/Arijit Singh.jpg";
import ArRehmanRedio from "../../../Pitchers/Redio/Ar Rehman.jpg";
import DeljitSinghRedio from "../../../Pitchers/Redio/Deljit Dosanjh.jpg";
import ShreyaGhosalRedio from "../../../Pitchers/Redio/Shreya Ghosal.jpg";
import UditNarayanRedio from "../../../Pitchers/Redio/Udit narayan redio.jpg";

import top50Global from "../../../Pitchers/FeaturedCharts/Top 50 Global.jpg";
import top50India from "../../../Pitchers/FeaturedCharts/Top 50 India.jpg";
import topIndia from "../../../Pitchers/FeaturedCharts/Top india.jpg";
import topSongsGlobal from "../../../Pitchers/FeaturedCharts/Top Songs Global.jpg";
import topSongsIndia from "../../../Pitchers/FeaturedCharts/Top Songs India.jpg";

const artists = [
  {
    image: ArRehman,
    artist: "A.R.Rehman",
  },
  {
    image: ArijitSingh,
    artist: "Arijit Singh",
  },
  {
    image: nusratFetehAliKhan,
    artist: "Nusrat Feteh Ali Khan",
  },
  {
    image: Shubh,
    artist: "Shubh",
  },
  {
    image: SidhuMoseWala,
    artist: "Sidhu Moose Wala",
  },
];

const Redio = [
  {
    id: "1",
    Redio: "Arijit Singh",
    Artists: "Neha Kakkar , Prithem , KK",
    image: ArijitSinghRedio,
  },
  {
    id: "2",
    Redio: "Shreya Ghoshal",
    Artists: "Sonu Nigam, Sunidhi Chauhan, Shaan ",
    image: ShreyaGhosalRedio,
  },
  {
    id: "3",
    Redio: "A.R Rehman",
    Artists: " Shankar Mahadevan, Anirudh Ravichander, Yuvan Shankar Raja",
    image: ArRehmanRedio,
  },
  {
    id: "4",
    Redio: "Udit Narayan",
    Artists: " Kumar Sanu, Alka Yagnik, Anuradha Paudwal ",
    image: UditNarayanRedio,
  },
  {
    id: "5",
    Redio: "Diljit Dosanjh",
    Artists: "Garry Sandhu, Ranjit Bawa, Amrinder Gill",
    image: DeljitSinghRedio,
  },
];

const FeaturedCharts = [
  {
    id: "1",
    image: top50India,
    chart: "Top50-India",
    title: "Your daily update of the most played tracks right now - India",
    region: "Indian",
  },

  {
    id: "2",
    image: topSongsIndia,
    chart: "TopSongs-India",
    title: "Your weekly update of the most played tracks right now - India.",
    region: "Indian",
  },
  {
    id: "3",
    image: topIndia,
    chart: "Viral50-India",
    title: "Your daily update of the most viral tracks right now - India",
    region: "Indian",
  },
  {
    id: "4",
    image: top50Global,
    chart: "Top50-Global",
    title: "Your daily update of the most played tracks right now - Global.",
    region: "Global",
  },
  {
    id: "5",
    image: topSongsGlobal,
    chart: "TopSongs-Global",
    title: "Your weekly update of the most played tracks right now - Global",
    region: "Global",
  },
];
const spotifyData = {
  artists,
  Redio,
  FeaturedCharts,
};

export default spotifyData;
