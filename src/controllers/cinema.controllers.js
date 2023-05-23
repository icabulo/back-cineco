import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCinema = async (req, res) => {
  try {
    const { name } = req.body;
    const newCinema = await prisma.cinema.create({
      data: { name },
    });
    // console.log(newCinema);
    res.status(201).json({
      message: "cinema created",
      ...newCinema,
    });
  } catch (error) {
    console.log(error);
    res.json({ errorMessage: error });
  }
};

export const getAllCinemas = async (req, res) => {
  try {
    const findCinemas = await prisma.cinema.findMany();
    res.status(201).json(findCinemas);
  } catch (error) {
    console.log(error);
    res.json({ errorMessage: error });
  }
};

export const updateCinema = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updateCinema = await prisma.cinema.update({
      where: {
        idcinema: parseInt(id),
      },
      data: {
        name,
      },
    });
    res.status(201).json(updateCinema);
  } catch (error) {
    console.log(error);
    res.json({ errorMessage: error });
  }
};

export const deleteCinema = async (req, res) => {
  try {
    const { id } = req.params;

    const updateCinema = await prisma.cinema.delete({
      where: {
        idcinema: parseInt(id),
      },
    });
    res.status(201).json(updateCinema);
  } catch (error) {
    console.log(error);
    res.json({ errorMessage: error });
  }
};

export const filterCinema = async (req, res) => {
  try {
    const { id: inputText } = req.params;
    const foundCinema = await prisma.cinema.findMany({
      where: {
        name: { contains: inputText },
      },
    });
    res.status(201).json(foundCinema);
  } catch (error) {
    console.log(error);
    res.json({ errorMessage: error });
  }
};
