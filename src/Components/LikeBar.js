
const LikeBar = ({openNotes}) => {
  return (
    <section className="like-bar">
      <button className='saved' onClick={openNotes}>See Your Saved Activities</button>
    </section>
  );
};

export default LikeBar;