export const getLocalStorageItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  return JSON.parse(item);
};

export const setLocalStorageItem = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.error(
      'Your local storage is full. Please clear the data to continue view this page.'
    );
    return false;
  }
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
