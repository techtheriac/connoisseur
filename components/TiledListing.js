const TiledListing = ({ title, info, span, xspan, xxspan }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {info.map(({ title, meta }, index) => {
          return (
            <div key={index}>
              <p>{title}</p>
              <p>{meta}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TiledListing;
