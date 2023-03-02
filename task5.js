const inputWidth = document.getElementById("page");
const inputHeight = document.getElementById("limit");
const submitButton = document.querySelector("button");
const outputSpan = document.querySelector("span");
const photosContainer = document.querySelector("div");

submitButton.addEventListener("click", submitButtonHandle);

function submitButtonHandle() {
    const page = inputWidth.value;
    const limit = inputHeight.value;
  
  if ((page < 1 || page > 10 || isNaN(page)) && (limit < 1 || limit > 10 || isNaN(limit))) {
        write("Номер страницы и лимит вне диапазона от 1 до 10.");
        return;
    } else
    if (page < 1 || page > 10 || isNaN(page)) {
        write("Номер страницы вне диапазона от 1 до 10.");
        return;
    } else
    if (limit < 1 || limit > 10 || isNaN(limit)) {
        write("Лимит вне диапазона от 1 до 10.");
        return;
    }
  
    fetch(`https://picsum.photos/${page}/${limit}`)
        .then((response) => response.url)
        .then((result) => {
            loadPhoto(result);
            write("Фото загружено.");
        })
        .catch((reason) => {
            write("Ошибка: " + reason);
        });
}

function write(text) {
    outputSpan.innerHTML = text;
}


function loadPhotos(apiData) {
    let cards = String();

    apiData.forEach(item => {
        const cardBlock =     `<div>
                                <img
                                  src="${item.download_url}"
                                  style="width: 150px; margin-right: 30px"
                                />
                                <p>${item.author}</p>
                              </div>`;
        cards += cardBlock;
    });

    photosContainer.innerHTML = cards;
}

function savePhotosToLocalStorage() {
    localStorage.setItem("last_photos", photosContainer.innerHTML);
}

function loadPhotosFromLocalStorage() {
    photosContainer.innerHTML = localStorage.getItem("last_photos");
    return  photosContainer.innerHTML.length > 0;
}