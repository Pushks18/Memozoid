import { useState } from "react";

function App() {
  const [meme, setMeme] = useState({});
  const [subreddit, setSubReddit] = useState("wholesomememes");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const GenerateMeme = async () => {
    setIsButtonClicked(true);
    const res = await fetch(`https://meme-api.com/gimme/${subreddit}`);
    const data = await res.json();
    setMeme(data);
  };
  return (
    <div className="">
      <div className="flex text-5xl font-medium items-center justify-center space-y-4 my-4">
        Memozoid
      </div>
      <div className="flex flex-col space-y-4 mt-10 items-center justify-center">
        <input
          className="pl-12 border rounded-md border-gray-300"
          onChange={(e) => {
            setSubReddit(e.target.value);
          }}
          type="text"
          name="subreddit"
          id="subreddit"
          placeholder="Enter subreddit"
        />
        <button
          className="bg-blue-500 border rounded-md border-gray-300 hover:bg-700 mr-3 px-4 py-2"
          onClick={GenerateMeme}
        >
          Generate Meme
        </button>
      </div>

      {isButtonClicked ? (
        <div className="flex items-center justify-center">
          <Meme meme={meme} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

function Meme({ meme }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-5">
      <h1 className="text-2xl font-medium">Title: {meme.title}</h1>
      <p className="text-2xl font-medium">Subreddit: {meme.subreddit}</p>
      <p className="text-2xl font-medium">Upvotes: {meme.ups}</p>
      <p className="text-2xl font-medium">Author: {meme.author}</p>
      <img src={meme.url} alt={meme.title} />

      
    </div>
  );
}

export default App;
