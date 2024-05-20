import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo_bigdrop.png",
  fullDecal: "./logo_bigdrop.png",
});

export default state;
