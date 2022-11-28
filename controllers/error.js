exports.get404 = (req, res, next) => {
  res.status(404).render("pagenotfound", {
    docTitle: "404",
    path: "/pagenotfound",
    isLogged: req.session.isLogged,
  });
};

exports.get500 = (req, res, next) => {
  res.status(500).render("500", {
    docTitle: "Error",
    path: "/500",
    isLogged: req.session.isLogged,
  });
};
