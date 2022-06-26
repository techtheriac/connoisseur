import { GardenScroll } from "@/components/GardenScroll";
import { styled, css } from "stitches.config";
import Grid from "@/components/Grid";

const scrollTitles: string[] = [
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
];

const Garden = () => {
  return (
    <Grid>
      <GardenScroll heading="Musings" titles={scrollTitles} />
      <GardenScroll heading="Untended" titles={scrollTitles} />
      <GardenScroll heading="Poetry" titles={scrollTitles} />
    </Grid>
  );
};

export default Garden;
