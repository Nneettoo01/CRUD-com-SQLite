export const getAllUsers = (req, res) => {
  res.status(200).json({
    messagem: "Rota GET para todos os usuários",
  });
};

export const newUser = (req, res) => {
  const { nome, email } = req.body;
  const newUser = {
    nome: nome,
    email: email,
  };
  res.status(200).json(newUser);
};
