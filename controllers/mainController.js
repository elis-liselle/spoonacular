exports.getMainPage = (req, res) => {
  if (!error) {
    res.render("index.ejs", { dataFromSpoonacular: recipe });
  } else {
    console.log(error);
  }
};
