import {
  createTheme,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";

const Header = ({ language, setLanguage, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      type: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (language) => {
    setLanguage(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionary"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="Search a word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
