const searchButton = document.getElementById('searchButton');
const result = document.getElementById('result');
const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"




const fetchApi = async(input)=>{
    try {
        const response = await fetch(`${apiUrl}${input}`)
        const data = await response.json()
        console.log(data)
        display(data[0].meanings[0].partOfSpeech,data[0].meanings[0].definitions[0].definition,data[0].word,data[0].meanings[1].definitions[0].definition)
    } catch (error) {
        console.error('can not fetching',error)
    }
    
}
searchButton.addEventListener('click',()=>{
    const input = document.getElementById('searchInput').value;
    fetchApi(input)
})


const display = (partOfSpeech,definition,input,definition2) =>{
    result.innerHTML = ` <h3>${input}</h3>
                <div class="details">
                    <p>${partOfSpeech}</p>
                    <p>/sample/</p>
                </div>
                <p>${definition}</p>
                <p class="world">${definition2}</</p>`
}