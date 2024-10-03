// Function to generate a unique ID for CreateFriend screen

export default function generateRandomID() {
  const timeComponent = Date.now();
  const randomComponent = Math.floor(Math.random() * 100);
  return timeComponent + randomComponent;
}
