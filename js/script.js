// show categories on html

// loadCategories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => setCategories(data.categories))
    .catch((error) => console.log(error));
};

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => setVideos(data.videos))
    .catch((error) => console.log(error));
};

const setCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categories.map((item) => {
    // create a button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    // append
    categoryContainer.append(button);
  });
};

// "category_id": "1001",
//       "video_id": "aaaa",
//       "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//       "title": "Shape of You",
//       "authors": [
//         {
//           "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//           "profile_name": "Olivia Mitchell",
//           "verified": ""
//         }
//       ],
//       "others": {
//         "views": "100K",
//         "posted_date": "16278"
//       },
//       "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."

const setVideos = (videos) => {
  const videosContainer = document.getElementById("videos");
  videos.map((video) => {
    console.log(video);

    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
     <figure class="h-[250px] relative">
    <img
    class="h-full w-full object-cover"
      src=${video.thumbnail}
      alt="Videos" />
      ${video.others.posted_date.length==0?""
        :`<span class="absolute bottom-2 right-2 text-white rounded p-1 bg-black"> 
      ${video.others.posted_date}</span>`}
      
  </figure>
  <div class="px-0 py-3 flex gap-2">

  <div>
     <img class="w-10 h-10 rounded-full object-cover" src="${
       video.authors[0].profile_picture
     }">
  </div>

  <div>
        <h2 class="font-bold text-xl">${video.title}</h2>
        <div class="flex gap-2 items-center">
        <p class="text-gray-400">${video.authors[0].profile_name}</p>
       ${
         video.authors[0].verified == true
           ? `<img class="w-5 h-5 " src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"/>`
           : ""
       }
        </div>
        <p></p>
  </div>
   
  </div>
    `;
    videosContainer.append(card);
  });
};
loadCategories();
loadVideos();
