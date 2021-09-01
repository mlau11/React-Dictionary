import React from "react";
import { nanoid } from "nanoid";
import "./Definitions.css";

const Definitions = ({ word, meanings, language, lightMode}) => {
  return (
    <div className="meanings">
      {meanings[0] && word && language === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10, width: '100%' }}
          controls
        >
          Your browser does not support audio elements.
        </audio>
      )}

      {word === "" ? (
        <span className="subtitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                key={nanoid()}
                className="singleMeanings"
                style={{ 
                  backgroundColor: lightMode ? '#3b5360': "white",
                  color: lightMode ? 'white': "black" }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example : </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
