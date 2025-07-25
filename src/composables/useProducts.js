import { ref, computed } from 'vue'

export default function useProducts() {
  const whatsappNumber = '2349048718086' // Replace with actual WhatsApp number
  const companyName = 'MegRoyal'

  const products = ref([
    // Flower Arrangements
    {
      id: 1,
      name: 'Royal Rose Bouquet',
      price: '25,000',
      image: '/products/prod1.jpg',
      category: 'bouquets',
      description: 'Elegant arrangement of premium artificial roses perfect for home decor',
    },
    {
      id: 2,
      name: 'Classic Peony Arrangement',
      price: '32,500',
      image: '/products/prod2.jpg',
      category: 'bouquets',
      description: 'Lifelike peonies in a beautiful vase arrangement',
    },
    {
      id: 3,
      name: 'Luxury Orchid Display',
      price: '45,000',
      image: '/products/prod3.jpg',
      category: 'displays',
      description: 'Premium artificial orchids for office or luxury spaces',
    },
    {
      id: 4,
      name: 'Sunflower Centerpiece',
      price: '28,750',
      image: '/products/prod4.jpg',
      category: 'centerpieces',
      description: 'Bright and cheerful artificial sunflower arrangement',
    },

    // Artificial Plants
    {
      id: 5,
      name: 'Fiddle Leaf Fig Tree',
      price: '35,000',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-bird-of-paradise__1034065_pe840176_s5.jpg?f=s',
      category: 'plants',
      description: '4ft tall realistic fiddle leaf fig plant',
    },
    {
      id: 6,
      name: 'Artificial Monstera Plant',
      price: '22,500',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-weeping-fig__0748885_pe745274_s5.jpg?f=s',
      category: 'plants',
      description: 'Lush tropical monstera in decorative pot',
    },
    {
      id: 7,
      name: 'Mini Succulent Set',
      price: '15,000',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-kentia-palm__1154601_pe886227_s5.jpg?f=s',
      category: 'plants',
      description: 'Set of 6 realistic mini succulents',
    },
    {
      id: 8,
      name: 'Artificial Palm Tree',
      price: '42,000',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-eucalyptus__1288928_pe934321_s5.jpg?f=s',
      category: 'plants',
      description: '5ft tall artificial palm for indoor decor',
    },
    {
      id: 9,
      name: 'Hanging Pothos Plant',
      price: '18,500',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-bamboo__1217778_pe913017_s5.jpg?f=s',
      category: 'plants',
      description: 'Beautiful trailing pothos in hanging basket',
    },
    {
      id: 10,
      name: 'Artificial Bamboo Plant',
      price: '27,000',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-cherry-blossoms__1327205_pe944385_s5.jpg?f=s ',
      category: 'plants',
      description: 'Lucky bamboo arrangement in ceramic pot',
    },
    {
      id: 11,
      name: 'Artificial Olive Tree',
      price: '38,000',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-fiddle-leaf-fig__1217779_pe913018_s5.jpg?f=s',
      category: 'plants',
      description: 'Elegant artificial olive tree 4.5ft tall',
    },
    {
      id: 12,
      name: 'Artificial Snake Plant',
      price: '19,500',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-bird-of-paradise__1327204_pe944386_s5.jpg?f=s',
      category: 'plants',
      description: 'Low maintenance sansevieria plant',
    },
    {
      id: 13,
      name: 'Artificial Fern in Pot',
      price: '21,000',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-calathea__1372426_pe959440_s5.jpg?f=s',
      category: 'plants',
      description: 'Lush green fern in modern planter',
    },
    {
      id: 14,
      name: 'Artificial Bonsai Tree',
      price: '31,500',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-oregano__0748888_pe745271_s5.jpg?f=s',
      category: 'plants',
      description: 'Zen-inspired artificial bonsai tree',
    },
    {
      id: 15,
      name: 'Artificial Aloe Vera Plant',
      price: '16,500',
      image:
        'https://www.ikea.com/ca/en/images/products/smycka-artificial-bouquet-multicolor__1389888_pe965293_s5.jpg?f=s',
      category: 'plants',
      description: 'Set of 3 realistic aloe vera plants',
    },
    {
      id: 16,
      name: 'Artificial Lavender Bunches',
      price: '12,000',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artifi-potted-plant-w-pot-set-of-3-indoor-outdoor-leaves__1288937_pe934325_s5.jpg?f=s',
      category: 'plants',
      description: 'Set of 5 artificial lavender stems',
    },
    {
      id: 17,
      name: 'Artificial Rubber Plant',
      price: '24,000',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artifi-potted-plant-w-pot-set-of-3-indoor-outdoor-leaves__1288937_pe934325_s5.jpg?f=s',
      category: 'plants',
      description: '3ft tall realistic rubber plant',
    },
    {
      id: 18,
      name: 'Artificial Boxwood Topiary',
      price: '29,500',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-smoke-tree__1288962_pe934348_s5.jpg?f=s',
      category: 'plants',
      description: 'Elegant artificial boxwood ball topiary',
    },
    {
      id: 19,
      name: 'Artificial Eucalyptus Stems',
      price: '14,500',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-eucalyptus__0674947_pe718059_s5.jpg?f=ss',
      category: 'plants',
      description: 'Set of 10 realistic eucalyptus stems',
    },
    {
      id: 20,
      name: 'Artificial Cactus Collection',
      price: '23,000',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-hanging-fern__1184652_pe898009_s5.jpg?f=s',
      category: 'plants',
      description: 'Assorted artificial cacti in decorative pots',
    },
    {
      id: 21,
      name: 'Artificial Magnolia Tree',
      price: '47,000',
      image:
        'https://www.ikea.com/ca/en/images/products/smycka-artificial-bouquet-indoor-outdoor-green__0948711_pe799229_s5.jpg?f=s',
      category: 'plants',
      description: '5ft tall artificial magnolia with blooms',
    },
    {
      id: 22,
      name: 'Artificial Ivy Garland',
      price: '17,500',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-hanging-ivy__1417729_pe976244_s5.jpg?f=s',
      category: 'plants',
      description: '12ft long artificial ivy garland',
    },
    {
      id: 23,
      name: 'Artificial Dracaena Plant',
      price: '26,500',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-orchid-white__0748887_pe745276_s5.jpg?f=s',
      category: 'plants',
      description: 'Realistic artificial dracaena marginata',
    },
    {
      id: 24,
      name: 'Artificial Hydrangea Bush',
      price: '33,000',
      image:
        'https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-philodendron-green-pink__1389901_pe965306_s5.jpg?f=s',
      category: 'plants',
      description: 'Full artificial hydrangea in bloom',
    },
  ])

  const featuredProducts = computed(() => {
    return products.value.filter((product) => product.price > 30000)
  })

  const formatPrice = (price) => {
    const numericPrice = typeof price === 'string' ? price.replace(/,/g, '') : price
    return `₦${numericPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
  }

  const getProductById = (id) => {
    return products.value.find((product) => product.id === id)
  }

  const getProductsByCategory = (category) => {
    return products.value.filter((product) => product.category === category)
  }

  const generateWhatsAppLink = (product) => {
    const message = `Hello ${companyName}, I'm interested in ordering:\n\n*${product.name}* (${formatPrice(product.price)})\n\nProduct ID: ${product.id}\n\nPlease provide more details about availability and payment.`
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  return {
    products,
    featuredProducts,
    getProductById,
    getProductsByCategory,
    formatPrice,
    generateWhatsAppLink,
  }
}
