// Requisição -> Middleware -> Rota(Controllers) -> Resposta

// function middleware(req, res, next) {
//   //1. Fazer algo com a requisição:
//   //-> Validar as informações;
//   //-> Verificar se o usr tem conta.
//   //2. Modificar a resposta:
//   //-> Dar uma resposta ao cliente.
//   //3. Chamar o next() para passar para o proximo middleware(agente) ou encerrar com um res.send().
// }

export function validate(schema) {
  return (req, res, next) => {
    try {
      /*Validar o corpo da requisição contra o schema fornecido*/
      const validatedData = schema.parse(req.body);
      /*Substituir o body pelos dados validados*/
      req.body = validatedData;
      next();
    } catch (error) {
      return res.status(400).json({
        message: "Erro de validação",
        error: error.message,
      });
    }
  };
}
