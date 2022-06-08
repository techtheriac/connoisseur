import { GardenScroll } from "@/components/GardenScroll";
import { styled, css } from "stitches.config";
import Grid from "@/components/Grid";

const scrollTitles = [
  "Drawn Swords",
  "Dawn of Taicho",
  "Modulz",
  "Musings on dogs",
  "Lime and Linda",
  "Hey Marie",
  "I Lost My Mind",
  "Paroxism",
  "Kill My Ego",
  "Autre Ne Veut",
  "Sampha the great",
  "Drawn Swords",
  "Dawn of Taicho",
  "Modulz",
  "Musings on dogs",
  "Lime and Linda",
  "Hey Marie",
  "I Lost My Mind",
  "Paroxism",
  "Kill My Ego",
  "Autre Ne Veut",
  "Sampha the great",
  "Drawn Swords",
  "Dawn of Taicho",
  "Modulz",
  "Musings on dogs",
  "Lime and Linda",
  "Hey Marie",
  "I Lost My Mind",
  "Paroxism",
  "Kill My Ego",
  "Autre Ne Veut",
  "Sampha the great",
  "Drawn Swords",
  "Dawn of Taicho",
  "Modulz",
  "Musings on dogs",
  "Lime and Linda",
  "Hey Marie",
  "I Lost My Mind",
  "Paroxism",
  "Kill My Ego",
  "Autre Ne Veut",
  "Sampha the great",
  "Dawn of Taicho",
  "Modulz",
  "Musings on dogs",
  "Lime and Linda",
  "Hey Marie",
  "I Lost My Mind",
  "Paroxism",
  "Kill My Ego",
  "Autre Ne Veut",
  "Sampha the great",
  "Drawn Swords",
  "Dawn of Taicho",
  "Modulz",
  "Musings on dogs",
  "Lime and Linda",
  "Hey Marie",
  "I Lost My Mind",
  "Paroxism",
  "Kill My Ego",
  "Autre Ne Veut",
  "Sampha the great",
  "Drawn Swords",
  "Dawn of Taicho",
  "Modulz",
  "Musings on dogs",
  "Lime and Linda",
  "Hey Marie",
  "I Lost My Mind",
  "Paroxism",
  "Kill My Ego",
  "Autre Ne Veut",
  "Sampha the great",
];

const Garden = () => {
  return (
    <Grid grid="gridBase">
      <GardenScroll titles={scrollTitles} heading="Musings" />
      <GardenScroll titles={scrollTitles} heading="Playlists" />
      <GardenScroll titles={scrollTitles} heading="Engineering" />
    </Grid>
  );
};

export default Garden;
