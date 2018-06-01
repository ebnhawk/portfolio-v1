const projectsList = [
  {
    id: 1,
    name: 'PixelPet',
    desc:
      'A virtual pet that chats with you, reacts to your commands, and senses your emotions.',
    tools:
      'React, Redux, Sequelize, Express, Watson Assitant and Tone Analyzer, A-Frame, Mocha, and Chai',
    contributions: [
      'Trained a Watson Assistant chatbot and combined it with Tone Analyzer, then used API requests to deliver information to Redux store about the chatbot’s response, the user’s mood, and whether or not any user commands were identified',
      'Animated pet moods and command resonses using A-Frame'
    ],
    demo: 'pixelpet.rocks',
    github: 'https://github.com/PixelPetCo/pixel-pet'
  },
  {
    id: 2,
    name: 'Tutorial: IoT using React, PubNub, and Johnny-Five',
    desc:
      'Tutorial for creating an application that can turn an LED light on and off remotely.',
    tools: 'Johnny-Five, PubNub-React, React, and Express',
    contributions: [
      'Created a simple React web application with red, green, and blue sliders that changed the color of an LED on an Arduino connected to a server'
    ],
    demo:
      'https://medium.com/@mollyfhanes/tutorial-internet-of-things-using-react-pubnub-and-johnny-five-482c7f2c1774',
    github: 'https://github.com/ebnhawk/iot-pubnub-react'
  },
  {
    id: 3,
    name: 'Is It My Dog?',
    desc: `A React Native app that can take a photo of any object and answer the question, "Is it my dog?" (Developed for Fullstack Academy's Hackathon.)`,
    tools: 'React Native, Expo, and Clarifai',
    contributions: [
      'Trained a new Clarifai model to recognize my dog, used Expo to access camera and camera roll, and displayed the results using React Native'
    ],
    demo: 'https://youtu.be/xSNl3wCVEk4',
    github: 'https://github.com/ebnhawk/is-it-my-dog'
  },
  {
    id: 4,
    name: 'Chocolate Bazaar',
    desc: 'A mock ecommerce platform for artisanal chocolates.',
    tools: 'React, Redux, Sequelize, Express, Mocha, and Chai',
    contributions: [
      'Designed filter components allowing users to filter all products according to a variety of parameters, using Redux',
      'Designed product and category models in Sequelize',
      'Provided styling using CSS and React-Bootstrap'
    ],
    github: 'https://github.com/grace-hopper-bazaar/bazaar-web'
  }
]

export default projectsList
