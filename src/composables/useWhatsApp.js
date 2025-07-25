import { computed } from 'vue'

export default function useWhatsApp() {
  const phoneNumber = '+2349048718086'
  const companyName = 'MegRoyal'

  const generateWhatsAppLink = (message = '') => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  const productInquiryMessage = (productName, productId) => {
    return `Hi ${companyName}, I'm interested in ${productName} (Product ID: ${productId}). Can you tell me more about it?`
  }

  const generalInquiryMessage = () => {
    return `Hi ${companyName}, I saw your website and would like to know more about your artificial flowers, Can you tell me more about your products?`
  }

  return {
    generateWhatsAppLink,
    productInquiryMessage,
    generalInquiryMessage,
    whatsAppNumber: computed(() => phoneNumber),
  }
}
