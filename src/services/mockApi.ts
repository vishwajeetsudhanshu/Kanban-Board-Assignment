export const simulateApi = async () => {
  const delay = Math.floor(Math.random() * 1000) + 1000;

  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const failed = Math.random() < 0.2; // 20% failure

      if (failed) {
        reject(new Error("API Failed"));
      } else {
        resolve();
      }
    }, delay);
  });
};
