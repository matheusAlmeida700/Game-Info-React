// ES6 Modules

import './App.css';
import Header from "./components/header";
import Section from "./components/section";
import ListItem from "./components/listItem";

//também pode criar a função do main aqui dentro

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT"
  }
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imgUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  }
  ,
  {
    url: "https://www.twitch.tv/alanzoka",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMCBhFxe0K6mDCJbju8vCwHQ2wIN9rwIm0w&s",
    alt: "Imagem de Alanzoka"
  }
  ,
  {
    url: "https://www.twitch.tv/cellbit",
    imgUrl: "https://yt3.googleusercontent.com/k2Y-uLTQ16UjB6-ScXpNUc6zokiFu8GULNcN5_N7xqiMi9SrYFBkqpV20FIn9PBfkRy8TAwKeQ=s900-c-k-c0x00ffffff-no-rj",
    alt: "Imagem de Cellbit"
  }

]

const socialListData = [
  {
    url: "https://instagram.com/matheusauthentic8",
    imgUrl: "/assets/instagram.svg",
    alt: "Instagram Matheus Almeida"
  },
  {
    url: "https://twitter.com/matheusauthentic8",
    imgUrl: "/assets/twitter.svg",
    alt: "Twitter Matheus Almeida"
  },
  {
    url: "https://youtube.com/matheusauthentic8",
    imgUrl: "/assets/youtube.svg",
    alt: "Youtube Matheus Almeida"
  },
  {
    url: "https://twitch.com/matheusauthentic8",
    imgUrl: "/assets/twitch.svg",
    alt: "Twitch Matheus Almeida"
  }
]

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section title="Meus Jogos" subtitle="Os games que mais curto jogar" className="games-list">

          {/* map = função atrelada a um array */}
          {
            gamesListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imgUrl={item.imgUrl}
                  alt={item.alt}
                />
              );
            })
          }
        </Section>

        <Section title="Canais e Streamers" subtitle="Lista de canais e transmissões que não perco nunca" className="channel-list">

          {
            channelListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imgUrl={item.imgUrl}
                  alt={item.alt}
                />
              )
            })
          }

        </Section>

        <Section title="Minhas Redes" subtitle="Se conecte comigo agora mesmo!" className="social-list">

          {
            socialListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imgUrl={item.imgUrl}
                  alt={item.alt}
                />
              )
            })
          }

        </Section>
      </main>
    </div>
  );
}

export default App;
