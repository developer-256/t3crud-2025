import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const shoppingRouter = createTRPCRouter({
  createItem: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.shoppingItem.create({ data: { name: input.name } });
    }),

  getAllItems: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.shoppingItem.findMany();
  }),

  getItemByID: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.shoppingItem.findUnique({ where: { id: input.id } });
    }),

  updateItem: publicProcedure
    .input(z.object({ id: z.number(), name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.shoppingItem.update({
        where: { id: input.id },
        data: { name: input.name },
      });
    }),

  deleteItem: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.shoppingItem.delete({ where: { id: input.id } });
    }),
});
