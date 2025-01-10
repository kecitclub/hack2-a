const { MongoClient } = require("mongodb");

const properties = [
  {
    title: "Cozy Apartment in Lazimpat",
    description: "A cozy apartment perfect for small families.",
    price: 25000,
    location: "Lazimpat, Kathmandu",
    bedrooms: 2,
    bathrooms: 1,
    kitchen: 1,
    images: ["https://via.placeholder.com/150"],
    latitude: 27.7268,
    longitude: 85.3188
  },
  {
    title: "Modern Flat in Boudha",
    description: "Spacious and modern flat near the stupa.",
    price: 30000,
    location: "Boudha, Kathmandu",
    bedrooms: 3,
    bathrooms: 2,
    kitchen: 1,
    images: ["https://via.placeholder.com/150"],
    latitude: 27.7206,
    longitude: 85.3616
  },
  {
    title: "Luxury Villa in Baluwatar",
    description: "A luxury villa in the heart of Kathmandu.",
    price: 120000,
    location: "Baluwatar, Kathmandu",
    bedrooms: 5,
    bathrooms: 4,
    kitchen: 2,
    images: ["https://via.placeholder.com/150"],
    latitude: 27.7258,
    longitude: 85.3282
  },
    {
      title: "Cozy Apartment in Lazimpat",
      description: "A cozy apartment perfect for small families.",
      price: 25000,
      location: "Lazimpat, Kathmandu",
      bedrooms: 2,
      bathrooms: 1,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7268,
      longitude: 85.3188
    },
    {
      title: "Modern Flat in Boudha",
      description: "Spacious and modern flat near the stupa.",
      price: 30000,
      location: "Boudha, Kathmandu",
      bedrooms: 3,
      bathrooms: 2,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7206,
      longitude: 85.3616
    },
    {
      title: "Luxury Villa in Baluwatar",
      description: "A luxury villa in the heart of Kathmandu.",
      price: 120000,
      location: "Baluwatar, Kathmandu",
      bedrooms: 5,
      bathrooms: 4,
      kitchen: 2,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7258,
      longitude: 85.3282
    },
    {
      title: "Elegant House in Jhamsikhel",
      description: "A stylish house with modern amenities.",
      price: 45000,
      location: "Jhamsikhel, Kathmandu",
      bedrooms: 4,
      bathrooms: 3,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.6785,
      longitude: 85.3262
    },
    {
      title: "Spacious Penthouse in Thamel",
      description: "A penthouse with a breathtaking view of the city.",
      price: 80000,
      location: "Thamel, Kathmandu",
      bedrooms: 6,
      bathrooms: 5,
      kitchen: 2,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7155,
      longitude: 85.3003
    },
    {
      title: "Charming Studio in Sanepa",
      description: "A charming studio ideal for young professionals.",
      price: 22000,
      location: "Sanepa, Kathmandu",
      bedrooms: 1,
      bathrooms: 1,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.6711,
      longitude: 85.3270
    },
    {
      title: "Affordable Room in New Road",
      description: "A budget-friendly room in a great location.",
      price: 12000,
      location: "New Road, Kathmandu",
      bedrooms: 1,
      bathrooms: 1,
      kitchen: 0,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7103,
      longitude: 85.3130
    },
    {
      title: "Beautiful House in Kupondole",
      description: "A well-maintained house in a peaceful area.",
      price: 35000,
      location: "Kupondole, Kathmandu",
      bedrooms: 3,
      bathrooms: 2,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.6505,
      longitude: 85.3360
    },
    {
      title: "Luxurious Flat in Pashupatinath",
      description: "A luxurious flat with a view of the temple.",
      price: 90000,
      location: "Pashupatinath, Kathmandu",
      bedrooms: 4,
      bathrooms: 3,
      kitchen: 2,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7105,
      longitude: 85.3386
    },
    {
      title: "Stylish Apartment in Gairidhara",
      description: "A modern apartment with excellent amenities.",
      price: 55000,
      location: "Gairidhara, Kathmandu",
      bedrooms: 3,
      bathrooms: 2,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7039,
      longitude: 85.3287
    },
    {
      title: "Spacious House in Sitapaila",
      description: "A large house with a beautiful garden.",
      price: 65000,
      location: "Sitapaila, Kathmandu",
      bedrooms: 5,
      bathrooms: 4,
      kitchen: 2,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.6284,
      longitude: 85.3183
    },
    {
      title: "Cozy Cottage in Thankot",
      description: "A cozy cottage perfect for weekend getaways.",
      price: 28000,
      location: "Thankot, Kathmandu",
      bedrooms: 2,
      bathrooms: 1,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.6004,
      longitude: 85.2245
    },
    {
      title: "Luxury Apartment in Maharajgunj",
      description: "A premium apartment in a central location.",
      price: 95000,
      location: "Maharajgunj, Kathmandu",
      bedrooms: 4,
      bathrooms: 3,
      kitchen: 2,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.6986,
      longitude: 85.3271
    },
    {
      title: "Spacious House in Gokarna",
      description: "A spacious house near the Gokarna Forest.",
      price: 70000,
      location: "Gokarna, Kathmandu",
      bedrooms: 5,
      bathrooms: 3,
      kitchen: 2,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7259,
      longitude: 85.3425
    },
    {
      title: "Modern Home in Chabahil",
      description: "A modern home in a well-connected area.",
      price: 45000,
      location: "Chabahil, Kathmandu",
      bedrooms: 3,
      bathrooms: 2,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7195,
      longitude: 85.3387
    },
    {
      title: "Charming Villa in Budhanilkantha",
      description: "A charming villa near the famous temple.",
      price: 85000,
      location: "Budhanilkantha, Kathmandu",
      bedrooms: 4,
      bathrooms: 3,
      kitchen: 2,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7086,
      longitude: 85.3376
    },
    {
      title: "Affordable Apartment in Koteshwor",
      description: "A budget-friendly apartment with basic amenities.",
      price: 20000,
      location: "Koteshwor, Kathmandu",
      bedrooms: 2,
      bathrooms: 1,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.6552,
      longitude: 85.3652
    },
    {
      title: "Spacious Flat in Chhetrapati",
      description: "A spacious flat with easy access to downtown.",
      price: 40000,
      location: "Chhetrapati, Kathmandu",
      bedrooms: 3,
      bathrooms: 2,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.7140,
      longitude: 85.3017
    },
    {
      title: "Elegant House in Bakhundole",
      description: "A beautifully designed house in a quiet neighborhood.",
      price: 60000,
      location: "Bakhundole, Kathmandu",
      bedrooms: 4,
      bathrooms: 3,
      kitchen: 1,
      images: ["https://via.placeholder.com/150"],
      latitude: 27.6739,
      longitude: 85.3584
    }
];

const uri = "mongodb://127.0.0.1:27017";
const dbName = "realestate";

async function populateDatabase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("properties");

    const result = await collection.insertMany(properties);
    console.log(`${result.insertedCount} properties inserted.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

populateDatabase();
