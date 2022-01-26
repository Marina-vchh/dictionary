const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const result = document.querySelector('#result');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', () => {
   let inputValue = document.querySelector('#input').value;
   console.log(inputValue);
   fetch(`${url} ${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
         result.innerHTML = `<div class="word">
         <h3 id="sample">${data[0].word}</h3>
         <button>
            <i class="fas fa-play"></i>
         </button>
      </div>
      <div class="details">
         <p>${data[0].meanings[0].partOfSpeech}</p>
         <p>//${data[0].phonetic}</p>
      </div>
      <div class="description">
         <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
         <p class="word-example">${data[0].meanings[0].definitions[0].example || ''}</p>
      </div>`
      })
      .catch(() => {
         result.innerHTML = `Please try again`;
      })
})