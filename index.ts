import {
  objectType,
  interfaceType,
  queryType,
  // stringArg,
  // enumType,
  // intArg,
  // arg,
  makeSchema,
} from "nexus"
import { GraphQLServer } from "graphql-yoga"
import { prisma } from './generated/prisma-client'

const Product = objectType({
  name: "Product",
  definition(t) {
    t.id("id")
    t.string("name")
    t.int("version")
  },
})

const Hero = objectType({
  name: "Hero",
  definition(t) {
    t.id("id")
    t.string("name")
    t.string("stand")
    t.field("product", {
      type: Product,
      resolve(root, _, ctx) {
        return ctx.getHero(root.id).product()
      },
    })
  },
})

const Enemy = objectType({
  name: "Enemy",
  definition(t) {
    t.id("id")
    t.string("name")
    t.string("stand")
    t.field("product", {
      type: Product,
      resolve(root, _, ctx) {
        return ctx.getHero(root.id).product()
      },
    })
  },
})

const Query = queryType({
  definition(t) {
    t.list.field("products", {
      type: Product,
      args: {},
      resolve(_, __, ctx) {
        // 本当は ctx を使わないとダメそう
        return prisma.products()
      }
    })
    // t.list.field("heros", {
    //   type: Hero,
    //   args: {},
    //   resolve(_, __, ctx) {
    //     return prisma.heros()
    //   }
    // })
    // t.list.field("enemies", {
    //   type: Enemy,
    //   args: {},
    //   resolve(_, __, ctx) {
    //     return prisma.enemies()
    //   }
    // })
  },
});

const schema = makeSchema({
  types: [
    Product,
    Hero,
    Enemy,
    Query],
  outputs: {
    schema: __dirname + "/generated/schema.graphql",
    typegen: __dirname + "/generated/typings.ts",
  },
})

const server = new GraphQLServer({
  schema,
})

server.start(() => `Server is running on http://localhost:4000`)
