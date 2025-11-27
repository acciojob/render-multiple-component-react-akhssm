import React from "react";
import "../styles/App.css";

const App = () => {
  const projects = [
    {
      name: "AI Personal Assistant",
      description: "An AI assistant that helps manage daily tasks and schedules."
    },
    {
      name: "E-Learning Platform",
      description: "A platform for students to learn interactively with videos and quizzes."
    },
    {
      name: "Food Delivery App",
      description: "A simple food ordering and delivery system for users."
    }
  ];

  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default App;
