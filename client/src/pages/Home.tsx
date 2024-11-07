import React from "react";


const style = {
  moodHelp: {
    color: 'white'
  },
};


const Home = () => {

  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
    //store mood in database, also store current datetime. this will be for the history later. 
    // pass mood to the playlist page using useContext
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="">How are you feeling today?</label>
        <input
          className="form-control required"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          id="moodInput"
          placeholder="I'm feeling..."
        />
        <div style={style.moodHelp} id="mood-help" className="form-text">We'll never share your mood with anyone else.</div>
        <input type="submit" />
      </form>

    </div>
  )
}

export default Home