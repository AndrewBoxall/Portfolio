import React, { Component } from 'react';
import './ProjectModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProjectModal extends Component {
  render() {
    let githubLink = "https://github.com/AndrewBoxall/" + this.props.github;
    
    return (
        <div className="project-modal-container">
          <img src={this.props.image} alt="project thumbnail" className="project-modal-img"></img>
          {this.props.desc}
          <div className="button-flex-container">
            <a id="explore" href={this.props.link} target="_blank" rel="noopener noreferrer">
            Visit website
            </a>
            <a id="codebase" href={githubLink} target="_blank" rel="noopener noreferrer">
            View code on <FontAwesomeIcon icon={['fab', 'github']} />
            </a>

          </div>
        </div>
    );
  }
}
export default ProjectModal;