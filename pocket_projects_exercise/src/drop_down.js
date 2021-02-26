

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

// const dropDownList = document.getElementsByClassName("drop-down-dog-list")[0];

const dropDownList = document.querySelector(".drop-down-dog-list")

function dogLinkCreator () {
  const dogLinks = []

  for (let key in dogs) { 
    let value = dogs[key];

    let dog = document.createElement("a");
    dog.innerHTML = key;
    dog.href = value;

    let listItem = document.createElement("li");
    listItem.className = "dog-link"

    listItem.appendChild(dog);

    dogLinks.push(listItem);

  };
  return dogLinks;
};

function attachDogLinks () {
    const dogLinks = dogLinkCreator();

    for (let i = 0; i < dogLinks.length; i++) {
      dropDownList.appendChild(dogLinks[i]);
    }

    dropDownList.addEventListener("mouseenter", handleEnter);
    dropDownList.addEventListener("mouseleave", handleLeave);
    
};

function handleEnter () {
    
}

function handleLeave () {
  
}

attachDogLinks();
