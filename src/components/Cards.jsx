const Cards = ({ heading, children }) => {
  return (
    <>
      <div className="cards">
        <h2 className="heading-md m-block-2">{heading}</h2>
        <div className="cards__grid">
          {/* {data.map((d) => {
            return <Card key={d.title} d={d} />;
          })} */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Cards;
