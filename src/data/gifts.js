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
import cake1 from "../assets/items/cakes/cake1.jpg";
import cake2 from "../assets/items/cakes/cake2.jpg";
import cake3 from "../assets/items/cakes/cake3.jpg";
import cake4 from "../assets/items/cakes/cake4.jpg";


export const gifts = [
  // 🎂 Birthday
  {
    id: 1,
    name: "Birthday Cake",
    price: 25,
    originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284,         // ✅ required
    image: birthday_cake,
    category: "Birthday",
    isTopSelling: true,
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    images: [cake1, cake2, cake3, cake4],
    offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]
  },
  {
    id: 2,
    name: "Birthday Balloon Set",
    price: 15,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284, 
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    image:birthday_balloon_set,
    category: "Birthday",
    isTrending: true,
        images: [cake1, cake2, cake3,cake4], // gallery images
        offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]

  },

  // 💍 Wedding
  {
    id: 3,
    name: "Wedding Ring Box",
    price: 60,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284, 
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    image: wedding_ring_box,
    category: "Wedding",
    isTopSelling: true,
        images: [cake1, cake2, cake3,cake4],offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ] // gallery images

  },
  {
    id: 4,
    name: "Wedding Photo Frame",
    price: 35,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284, 
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    image:wedding_photo_frame,
    category: "Wedding",
        images: [cake1, cake2, cake3,cake4],
         // gallery images
         offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]

  },

  // ❤️ Anniversary
  {
    id: 5,
    name: "Rose Bouquet",
    price: 40,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284, 
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    image: rose_bouquet,
    category: "Anniversary",
    isTrending: true,
        images: [cake1, cake2, cake3,cake4], // gallery images
        offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]

  },
  {
    id: 6,
    name: "Heart Pendant",
    price: 70,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284, 
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    image: heart_gold_pendant,
    category: "Anniversary",
        images: [cake1, cake2, cake3,cake4], // gallery images
        offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]

  },

  // 🎁 Festivals
  {
    id: 7,
    name: "Diwali Sweet Box",
    price: 20,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284,
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.", 
    image: diwali_sweet_box,
    category: "Festivals",
        images: [cake1, cake2, cake3,cake4], // gallery images
        offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]

  },
  {
    id: 8,
    name: "Christmas Tree Decor",
    price: 50,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284, 
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    image: christmas_tree_decor,
    category: "Festivals",
    isTopSelling: true,
        images: [cake1, cake2, cake3,cake4], // gallery images
        offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]

  },

  // 💡 Gift Ideas
  {
    id: 9,
    name: "Personalized Mug",
    price: 18,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284, 
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    image: personalized_mug1,
    category: "Gift Ideas",
    isTrending: true,
        images: [cake1, cake2, cake3,cake4], // gallery images
        offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]

  },
  {
    id: 10,
    name: "Custom T-Shirt",
    price: 22,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284, 
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    image: custom_tshirt,
    category: "Gift Ideas",
        images: [cake1, cake2, cake3,cake4], // gallery images
        offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]

  },

  // 🔲 Others
  {
    id: 11,
    name: "Handmade Diary",
    price: 15,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284, 
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    image: handmade_diary,
    category: "Others",
        images: [cake1, cake2, cake3,cake4], // gallery images
        offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]

  },
  {
    id: 12,
    name: "Keychain Set",
    price: 8,
     originalPrice: 30,          // ✅ required
    rating: 4.7,                // ✅ required
    reviewsCount: 1284, 
    description:
      "Delicious and freshly baked birthday cake made with premium ingredients. Perfect for celebrating special moments with your loved ones.",
    
    instructions:
      "Store the cake in a cool place. Consume within 24 hours. For best taste, refrigerate and bring to room temperature before serving.",
    
    deliveryInfo:
      "Same-day delivery available in selected cities. Midnight delivery available with additional charges.",
    image: keychain_set,
    category: "Others",
    isTopSelling: true,
        images: [cake1, cake2, cake3,cake4] ,// gallery images
        offers: [                   // ✅ required
      "Get 10% off on prepaid orders",
      "Free candle & knife",
      "Same-day delivery available"
    ]

  },
];
