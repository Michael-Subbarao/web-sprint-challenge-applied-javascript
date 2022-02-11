import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  console.log(topics);
  const topicsEl = document.createElement('div');
  topicsEl.classList.add('topics');

  //creating a div element for each item in topics array and appending it to the topicsElement
  topics.forEach((item)=>{
    const tabEl = document.createElement('div');
    tabEl.classList.add('tab');
    tabEl.textContent = item;
    topicsEl.appendChild(tabEl);
  })

  //returning parent element 
  return topicsEl;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
  //get data from the response then append a Tab component created with the topics key from data.
 axios.get('http://localhost:5000/api/topics')
 .then(response => {document.querySelector(`${selector}`).appendChild(Tabs(response.data.topics))})
 .catch(error=>console.log(error));
}

export { Tabs, tabsAppender }
