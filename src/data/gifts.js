import personalized_mug1 from '../assets/items/personalized-mug1.png';
import birthday_cake from '../assets/items/birthday-cake2.png';
import birthday_balloon_set from '../assets/items/Birthday_Balloon_Set.png';
import wedding_ring_box from '../assets/items/wedding-ring-box.png';
import wedding_photo_frame from '../assets/items/wedding_photo_frame.png';
import rose_bouquet from '../assets/items/rose-bouquet.png';
import heart_gold_pendant from '../assets/items/Half-Heart-Gold-Pendant.jpg';
import diwali_sweet_box from '../assets/items/diwali_sweet_box.png';
import christmas_tree_decor from '../assets/items/christmas_tree_decor.png';
import custom_tshirt from '../assets/items/custom_tshirt.png';
import handmade_diary from '../assets/items/handmade_diary.png';
import keychain_set from '../assets/items/keychain_set.png';
export const gifts = [
  // 🎂 Birthday
  {
    id: 1,
    name: "Birthday Cake",
    price: 25,
    image:birthday_cake,
    category: "Birthday",
    isTopSelling: true,
  },
  {
    id: 2,
    name: "Birthday Balloon Set",
    price: 15,
    image:birthday_balloon_set,
    category: "Birthday",
    isTrending: true,
  },

  // 💍 Wedding
  {
    id: 3,
    name: "Wedding Ring Box",
    price: 60,
    image: wedding_ring_box,
    category: "Wedding",
    isTopSelling: true,
  },
  {
    id: 4,
    name: "Wedding Photo Frame",
    price: 35,
    image:wedding_photo_frame,
    category: "Wedding",
  },

  // ❤️ Anniversary
  {
    id: 5,
    name: "Rose Bouquet",
    price: 40,
    image: rose_bouquet,
    category: "Anniversary",
    isTrending: true,
  },
  {
    id: 6,
    name: "Heart Pendant",
    price: 70,
    image: heart_gold_pendant,
    category: "Anniversary",
  },

  // 🎁 Festivals
  {
    id: 7,
    name: "Diwali Sweet Box",
    price: 20,
    image: diwali_sweet_box,
    category: "Festivals",
  },
  {
    id: 8,
    name: "Christmas Tree Decor",
    price: 50,
    image: christmas_tree_decor,
    category: "Festivals",
    isTopSelling: true,
  },

  // 💡 Gift Ideas
  {
    id: 9,
    name: "Personalized Mug",
    price: 18,
    image: personalized_mug1,
    category: "Gift Ideas",
    isTrending: true,
  },
  {
    id: 10,
    name: "Custom T-Shirt",
    price: 22,
    image: custom_tshirt,
    category: "Gift Ideas",
  },

  // 🔲 Others
  {
    id: 11,
    name: "Handmade Diary",
    price: 15,
    image: handmade_diary,
    category: "Others",
  },
  {
    id: 12,
    name: "Keychain Set",
    price: 8,
    image: keychain_set,
    category: "Others",
    isTopSelling: true,
  },
];
