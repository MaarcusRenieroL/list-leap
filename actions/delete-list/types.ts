import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/actions/create-safe-actions";

import { DeleteList } from "@/actions/delete-list/schema";

export type InputType = z.infer<typeof DeleteList>;
export type ReturnType = ActionState<InputType, Board>;
