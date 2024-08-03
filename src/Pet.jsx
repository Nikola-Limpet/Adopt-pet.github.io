
const Pet = (props) => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Chimmie" animal="Dog" breed="Pomeranian" /> 
      {/*this is a recursive call to the Pet component that will cause an infinite loop */}
      <Pet name="Lolen" animal="Lion" breed="African" />
      <Pet name="Poki" animal="Donkey" breed="American" />
    </div>
  );
};

export default Pet;
