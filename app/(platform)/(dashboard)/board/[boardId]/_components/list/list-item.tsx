"use client";

import { ListWithCards } from "@/types";
import { ListHeader } from "./list-header";
import { ElementRef, useRef, useState } from "react";
import { CardForm } from "../card/card-form";
import { cn } from "@/lib/utils";
import { CardItem } from "../card/card-item";
import { Draggable, Droppable } from "@hello-pangea/dnd";

interface ListItemProps {
  index: number;
  data: ListWithCards;
}

export const ListItem = ({ index, data }: ListItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const textAreaRef = useRef<ElementRef<"textarea">>(null);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    });
  };

  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="shrink-0 mb-5 h-full w-[272px] select-none"
        >
          <div
            className="w-full bg-[#f1f2f4] rounded-md shadow-md pb-2"
            {...provided.dragHandleProps}
          >
            <ListHeader onAddCard={enableEditing} data={data} />
            <Droppable droppableId={data.id} type="card">
              {(provided) => (
                <ol
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={cn(
                    "mx-1 px-1 py-0.5 flex flex-col gap-y-2",
                    data.cards.length > 0 ? "mt-2" : "mt-0",
                  )}
                >
                  {data.cards.map((card, index) => (
                    <CardItem index={index} key={card.id} data={card} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CardForm
              listId={data.id}
              ref={textAreaRef}
              isEditing={isEditing}
              enableEditing={enableEditing}
              disableEditing={disableEditing}
            />
          </div>
        </li>
      )}
    </Draggable>
  );
};
