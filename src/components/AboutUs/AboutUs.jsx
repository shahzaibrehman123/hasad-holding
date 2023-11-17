import React from "react";
import "./style.css";

function AboutUs({ data, isChecked }) {
  // Function to highlight text
  const highlightText = (text, highlightedText) => {
    const startIndex = text.indexOf(highlightedText);
    const endIndex = startIndex + highlightedText.length;
    const beforeText = text.slice(0, startIndex);
    const afterText = text.slice(endIndex);
    return (
      <>
        {beforeText}
        <span className="highlighted-text">{highlightedText}</span>
        {afterText}
      </>
    );
  };

  const getContent = () => {
    if (isChecked) {
      // Show Arabic content
      return highlightText(data.content, "مصنفة كمقاول من الدرجة الثانية من قبل وزارة الشؤون البلدية والإسكان");
    } else {
      // Show English content
      return highlightText(data.content, "recognized as a Tier-2 contractor");
    }
  };

  return (
    <div id="about">
      <div className="About-us-section">
        <div className="main-heading">
          <h3 className="heading">{data.title}</h3>
        </div>

        <div className="inner-content">
          <div className="about-us-content">
            <p>{getContent()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
