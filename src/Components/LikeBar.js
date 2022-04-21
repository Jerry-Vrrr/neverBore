
const LikeBar = ({openNotes}) => {
  return (
    <section className="like-bar">
      <button>Let's Do It!</button>
      <button onClick={openNotes}>Favorite Ideas</button>
      <button>No F'n Way!</button>
    </section>
  );
};

export default LikeBar;