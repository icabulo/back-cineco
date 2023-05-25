import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllMovies = async (req, res) => {
  try {
    const movies = await prisma.movie.findMany();
    res.status(201).json(movies);
  } catch (error) {
    console.log(error);
    res.json({ errorMessage: error });
  }
};
