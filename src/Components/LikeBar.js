
const LikeBar = ({openNotes}) => {
  return (
    <section className="like-bar">
      <button onClick={openNotes}>Open Your Favorites Notepad!</button>
      {/* <button>No F'n Way!</button> */}
    </section>
  );
};

export default LikeBar;