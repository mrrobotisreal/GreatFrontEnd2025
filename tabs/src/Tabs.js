import { useState } from 'react';

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("html");

  return (
    <div>
      <div>
        <button onClick={() => {
          if (currentTab !== "html") {
            setCurrentTab("html");
          }
        }} style={{
          backgroundColor: currentTab === "html" ? "purple" : undefined,
          color: currentTab === "html" ? "white" : undefined,
          borderRadius: 4,
        }}>HTML</button>
        <button onClick={() => {
          if (currentTab !== "css") {
            setCurrentTab("css");
          }
        }} style={{
          backgroundColor: currentTab === "css" ? "purple" : undefined,
          color: currentTab === "css" ? "white" : undefined,
          borderRadius: 4,
        }}>CSS</button>
        <button onClick={() => {
          if (currentTab !== "js") {
            setCurrentTab("js");
          }
        }} style={{
          backgroundColor: currentTab === "js" ? "purple" : undefined,
          color: currentTab === "js" ? "white" : undefined,
          borderRadius: 4,
        }}>JavaScript</button>
      </div>
      <div>
        {currentTab === "html" && (
          <p>
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </p>
        )}
        {currentTab === "css" && (
          <p>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </p>
        )}
        {currentTab === "js" && (
          <p>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </p>
        )}
      </div>
    </div>
  );
}
