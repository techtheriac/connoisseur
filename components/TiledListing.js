const TiledListing = ({ title, info, span, xspan, xxspan }) => {
  return (
    <r-cell span={span} span-s={xspan} span-xs={xxspan} data-scroll-section>
      <h3>{title}</h3>
      <div>
        {info.map(({ title, meta }, index) => {
          return (
            <div key={index} className={`flex-h space-between`}>
              <p>{title}</p>
              <p>{meta}</p>
            </div>
          );
        })}
      </div>
    </r-cell>
  );
};
export default TiledListing;
