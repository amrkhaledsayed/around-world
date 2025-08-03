const theme = (mode) => {
  const html = document.documentElement;

  if (mode === "dark") {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

export default theme;
