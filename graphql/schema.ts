import { gql } from "apollo-server-micro"
import * as types from "./types"
import { makeSchema } from "nexus"
import { join } from "path"

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), "node-modules", "@types", "nexus-typegen", "index.d.ts"),
    schema: join(process.cwd(), "graphql", "shema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "graphql", "context.ts"),
  },
})