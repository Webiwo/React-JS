const EventHandling = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse entered", e.currentTarget);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked", e.currentTarget);
  };

  return (
    <div onMouseEnter={handleMouseEnter} style={{ backgroundColor: "#414d72" }}>
      <h3>Event handling - move your mouse pointer over me</h3>
      <button onClick={handleClick}>Clicked Me</button>
    </div>
  );
};

export default EventHandling;
