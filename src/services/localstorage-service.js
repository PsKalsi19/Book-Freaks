const AUTH_TOKEN = "auth_token";
const USER = "user";
const CART = "cart";
const WISHLIST = "wishlist";
const ADDRESS = "address";

export const setAuth = (token) => localStorage.setItem(AUTH_TOKEN, token);

export const setUser = (user) =>
  localStorage.setItem(USER, JSON.stringify(user));

export const getAuth = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem(USER)) ?? {};
};

export const getCart = () => {
  return getUser().hasOwnProperty(CART) ? getUser()[CART] : [];
};

export const getWishlist = () => {
  return getUser().hasOwnProperty(WISHLIST) ? getUser()[WISHLIST] : [];
};

export const handleLocalStorageLogOut = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER);
  localStorage.removeItem(ADDRESS);
};

export const updateCart = (payload) => {
  const userData = getUser();
  setUser({ ...userData, [CART]: payload });
};

export const updateWishlist = (payload) => {
  const userData = getUser();
  setUser({ ...userData, [WISHLIST]: payload });
};

export const getUserName = () => {
  const user = getUser();
  return `${user.firstName} ${user.lastName}`;
};

export const getUserEmail = () => {
  const user = getUser();
  return user.email;
};

export const saveAddress = (payload) => {
  const addresses = getAddress() ?? [];
  if (payload.isDefault) {
    const oldAddresses = addresses.map((ele) => ({ ...ele, isDefault: false }));
    localStorage.setItem(ADDRESS, JSON.stringify([...oldAddresses, payload]));
  } else {
    localStorage.setItem(ADDRESS, JSON.stringify([...addresses, payload]));
  }
};

export const getAddress = () => {
  return JSON.parse(localStorage.getItem(ADDRESS) ?? "[]");
};

export const updateAddress = (payload, id) => {
  const addresses = getAddress() ?? [];
  const updatedData = addresses.map((ele) =>
    ele.id === id
      ? { ...payload, id: id }
      : { ...ele, isDefault: payload.isDefault ? false : ele.isDefault }
  );
  localStorage.setItem(ADDRESS, JSON.stringify(updatedData));
};

export const deleteAddress = (id) => {
  const addresses = getAddress() ?? [];
  const updatedAddresses = addresses.filter((ele) => ele.id !== id);
  localStorage.setItem(ADDRESS, JSON.stringify(updatedAddresses));
};
