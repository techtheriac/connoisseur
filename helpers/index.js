function setFluidCustomProps() {
  let flexaWeight = () => 100 + window.innerWidth * 0.09;
  let flexaWidth = () => window.innerWidth * 0.04;

  document.documentElement.style.setProperty("--flexa-weight", flexaWeight());
  document.documentElement.style.setProperty("--flexa-width", flexaWidth());
  console.log(flexaWeight(), flexaWidth());
}

export { setFluidCustomProps };
