import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

const Draggable: React.FC<{ children: ReactNode }> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
};

export default Draggable;
