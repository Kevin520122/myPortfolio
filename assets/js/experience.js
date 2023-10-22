AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  
  {
    title: "Softwarre Developer",
    cardImage: "assets/images/experience-page/cass.png",
    place: "CASS(Center for Applied Systems & Software)",
    time: "(Aug 2019 - June 2020)",
    desp: "<li>Create factories to detect current weather meet the warning level via .NET and set unit tests to test if corresponding factories work appropriately</li>"+
          "<li>Implement Client-Side Validations and fetched data to communicate with REST services with JSON Data.</li>"+
          "<li>Write SQL query in back-end to clean and collect the data</li>"+
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


