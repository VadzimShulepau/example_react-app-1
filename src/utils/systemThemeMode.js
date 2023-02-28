const systemThemeMode = () => {
  // eslint-disable-next-line no-unused-expressions
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
};

export default systemThemeMode;
