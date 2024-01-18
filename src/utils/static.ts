import message from "/msg.jpg";
import premium from "/premsg.jpg";
import tambahan from "/jasatambahan.jpg";

export const regular = [
  {
    item: "Regular Massage 1 Jam",
    price: "100000",
    image: message,
    code: "regular1",
    is_multiple: true,
  },
  {
    item: "Regular Massage 1.5 Jam",
    price: "160000",
    image: message,
    code: "regular2",
    is_multiple: true,
  },
  {
    item: "Regular Massage 2 Jam",
    price: "180000",
    image: message,
    code: "regular3",
    is_multiple: false,
  },
];

export const prem = [
  {
    item: "Premium Massage 1 Jam",
    price: "170000",
    image: premium,
    code: "premium1",
    is_multiple: false,
  },
  {
    item: "Premium Massage 1.5 Jam",
    price: "200000",
    image: premium,
    code: "premium2",
    is_multiple: false,
  },
  {
    item: "Premium Massage 2 Jam",
    price: "225000",
    image: premium,
    code: "premium3",
    is_multiple: true,
  },
];

export const jasaTambahan = [
  {
    item: "Reflexology 0.5 Jam",
    price: "40000",
    image: tambahan,
    code: "tambahan1",
    is_multiple: true,
  },
  {
    item: "Reflexology 1 Jam",
    price: "80000",
    image: tambahan,
    code: "tambahan2",
    is_multiple: true,
  },
];
