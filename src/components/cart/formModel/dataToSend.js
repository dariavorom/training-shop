export const DataToSend = (values) => {
  return {
      products: values.products,
      deliveryMethod: values.deliveryMethod,
      paymentMethod: values.paymentMethod,
      totalPrice: values.totalPrice,
      phone: values.phone.replace(/[\s()]/g, ''),
      email: values.email,
      country: values.country,
      cashEmail: values.cashEmail,
      city: values.city,
      street: values.street,
      house: values.house,
      apartment: values.apartment,
      postcode: values.postcode,
      storeAddress: values.storeAddress,
      card: values.card,
      cardDate: values.cardDate,
      cardCVV: values.cardCVV
  }
}