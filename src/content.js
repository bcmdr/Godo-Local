export default {
  rooms: {
    one: {
      actions: {
        none: [
          "You are dead.",
          "There is a man.",
          "The man is walking away.",
          "There is a light.",
          "The light is dimming.",
          "You can follow. Or you can wait.",
          "You are alone.",
          "It is cold.",
          "The light is dimming.",
        ],
        follow: [
          "You are following the man.",
          "The light is getting brighter.",
          "You enter a hallway.",
          "It is cold.",
        ],
        wait: [
          "The man is walking away.",
          "The light is dimming.",
          "You are alone.",
          "It is cold.",
          "There is a door.",
          "The door is open.",
          "There is a noise.",
          "You can wait.",
          "You can follow.",
        ]
      }
    }
  },
  story: {
    chapter: {
      one: [
        "You are dead.",
        "There is a man.",
        "The man is walking away.",
        "There is a light.",
        "The light is dimming.",
        "You can wait.",
        "You can follow.",
        "The windows are boarded.",
        "You are following the man.",
        "You enter a hallway.",
        "You find a lighter.",
        "The man is gone.",
        "You are alone.",
        "It is cold.",
        "Get out. Before he does."
      ]
    }
  },
  prompts: {
    chapter: {
      one: ["You don't know.", "You are dead."]
    }
  },
  options: {
    chapter: {
      one: ["Stay", "Follow"]
    }
  }
};