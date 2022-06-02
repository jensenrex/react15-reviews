import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index]; 

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0; 
    } 
    if (number < 0) {
      return (people.length - 1); 
    }
    return number; 
  }
  function nextPerson() {
    setIndex((index)=> {
      let newIndex = index+1; 
      return checkNumber(newIndex); 
    });
  }; 

  const prevPerson = () => {
    setIndex(checkNumber(index-1)); 
  }

  const randomPerson = () => {
    let ranNumber = Math.floor((Math.random() * people.length)); 
    if (ranNumber == index) {
      ranNumber = index + 1; 
    }
    setIndex(checkNumber(ranNumber)); 
  }

  return (
    <div className="card-body">
      <img src={image} className="img-thumbnail rounded mx-auto d-block" alt={name} />
      <span className="quote-icon"><FaQuoteRight /></span>      
      <div className="text-center text-capitalize">

      <p className="h4  text-primary">{name}</p>
      <figcaption class="blockquote-footer">
        <cite>{job}</cite>
      </figcaption>
      </div>
      <p className="card-text">{text}</p>
      <div className="btn-group btn-group-lg" role="group">
        <button onClick={prevPerson}><FaChevronLeft/></button>
        <button className="btn-outline-primary" onClick={randomPerson}>Surprise Me</button>
        <button onClick={nextPerson}><FaChevronRight/></button>
      </div>
    </div>
  )

};

export default Review;
