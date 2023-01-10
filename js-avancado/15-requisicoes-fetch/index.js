// Selection
const btnPushCard = document.getElementById('btn-push-card');
const imageCard = document.getElementById('image-card');
const textRemaining = document.getElementById('remaining');

// Functions
const getDeck = async () => {
  const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  const res = await fetch(url);
  
  return await res.json();
}

const json = getDeck();

const getIdDeck = async (json) => {
  const deck = await json;

  return deck.deck_id;
}

const getCard = async (deck_id) => {
  const deckID = await deck_id;
  const url = `https://www.deckofcardsapi.com/api/deck/${await deckID}/draw/?count=1`;
  const res = await fetch(url);

  return await res.json();
}

const pushCardFromDeck = async () => {
  const card = await getCard(await getIdDeck(json)); // json => row 13
  const urlImageCard = card.cards[0].image;
  const remaining = card.remaining;

  if(remaining === 0) {
    btnPushCard.disabled = true;
    btnPushCard.classList.add('disabled');
    textRemaining.innerHTML = 'Você retirou todas as cartas';
  } else {
    imageCard.src = urlImageCard;
    textRemaining.innerHTML = `Restam ${remaining}`
  }
} 

// Events
btnPushCard.addEventListener('click', () => {
  pushCardFromDeck();
});

