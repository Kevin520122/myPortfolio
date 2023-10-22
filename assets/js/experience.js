AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  
  {
    title: "Softwarre Developer",
    cardImage: "assets/images/experience-page/cass.png",
    place: "CASS(Center for Applied Systems & Software)",
    time: "(December 2021 – July 2022)",
    desp: "<li>Developed transportation weather notification service components for Oregon residents using ASP.NET Core.</li>"+
          "<li>Implemented functionalities to detect if current weather meets the warning level in the service under test-driven development.</li>"+
          "<li>Refactored existing data pipelines into a RESTful API serving as a centralized data entry point and tested with SQL database.</li>"+
          "<p>...</p>",
  },
];

const showExpCards = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <p>
              ${desp}
            </p>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showExpCards);


