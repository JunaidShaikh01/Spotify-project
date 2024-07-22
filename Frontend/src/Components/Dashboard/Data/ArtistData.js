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

const spotifyData = {
  artists,
  Redio,
};

export default spotifyData;
