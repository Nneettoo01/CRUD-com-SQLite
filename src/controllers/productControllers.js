import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.products.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      mensagem: "Error fetching all products",
      erro: error.message,
    });
  }
};

export const createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;

  try {
    const newProduct = await prisma.products.create({
      data: {
        name,
        description,
        price,
        stock,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({
      message: "Error trying to create product",
      erro: error.menssage,
    });
  }
};

export const oneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await prisma.products.findUnique({
      where: { id: parseInt(id) },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Error trying to find product",
      erro: erro.mensage,
    });
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const { name, description, price, stock } = req.body;
  try {
    const updateProduct = await prisma.products.update({
      where: { id: parseInt(id) },
      data: { name, description, price, stock },
    });
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(400).json({
      message: "Error trying to update product",
      erro: error.mensage,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await prisma.products.delete({
      where: { id: Number(id) },
    });
    res.status(200).json(["Product deleted successfully"]);
  } catch (error) {
    res.status(400).json({
      message: "Error when trying to delete product",
      erro: error.mensage,
    });
  }
};
