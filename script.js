// Function to generate a random image URL from picsum.photos
function getRandomImageURL() {
  const id = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/id/${id}/300/300`;
}

function addRandomImageWithCommentary() {
  const imageContainer = document.getElementById("image-container");

  for (let i = 0; i < 10; i++) {
    const img = document.createElement("img");
    img.src = getRandomImageURL();
    img.alt = "Random Image";
    imageContainer.appendChild(img);

    const commentary = document.createElement("textarea");
    commentary.placeholder = "Add your commentary here";
    imageContainer.appendChild(commentary);

    const commentDisplay = document.createElement("div");
    imageContainer.appendChild(commentDisplay);

    const postButton = document.createElement("button");
    postButton.innerText = "Post";
    imageContainer.appendChild(postButton);

    postButton.addEventListener("click", function () {
      const commentText = commentary.value;

      if (commentText.trim() !== "") {
        // Create a new div for the comment and display it
        const commentDiv = document.createElement("div");
        commentDiv.textContent = commentText;
        commentDisplay.appendChild(commentDiv);
        // Clear the textarea for a new comment
        commentary.value = "";
      } else {
        alert("Please enter a comment before posting.");
      }
    });
  }
}


// display only one image
function DisplayOneImage() {
  const imageContainer = document.getElementById("image-container");
  const img = document.createElement("img");
  img.src = getRandomImageURL();
  img.alt = "Random Image";
  imageContainer.appendChild(img);
}

function DisplayOneImageTest() {
  console.log("hello this is a test!")
  const imageContainer = document.getElementById("image-container");
  const img = document.createElement("img")
  img.src = "https://picsum.photos/200/300"
  imageContainer.appendChild(img);
}

// Load random images with commentary when the button is clicked
document.getElementById("load-images").addEventListener("click", function () {
  const imageContainer = document.getElementById("image-container");
  const img = document.createElement("img")
  img.src = "https://picsum.photos/200/300"
  imageContainer.appendChild(img);
  // addRandomImageWithCommentary();
  // DisplayOneImageTest();
  // DisplayOneImage();
});


// 1. create a js file
// 2. create a button with an id, and an other <div id='..'> :) (html file)
// 3. on your JS, use this line to listen to the button clicked: (js file)
//    document.getElementById("load-images").addEventListener("click", function () {});
// 4. use getElementById to get the tag! (je file)
// 5. generate new image link (js file)
