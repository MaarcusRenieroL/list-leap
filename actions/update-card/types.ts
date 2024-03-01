import { z } from "zod";
import { List } from "@prisma/client";

import { ActionState } from "@/actions/create-safe-actions";

import { UpdateCard } from "./schema";

export type InputType = z.infer<typeof UpdateCard>;
export type ReturnType = ActionState<InputType, List>;
