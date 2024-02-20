import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/actions/create-safe-actions";

import { UpdateBoard } from "@/actions/update-board/schema";

export type InputType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Board>;
