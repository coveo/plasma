const reorder = <T>(dragItem: T, hoverItem: T, list: T[]): T[] => {
    const newOrder = [...list];

    // Remove the dragged element from its original position in the list
    newOrder.splice(list.indexOf(dragItem), 1);

    // Insert the dragged element at the hovering position in the list
    newOrder.splice(list.indexOf(hoverItem), 0, dragItem);

    return newOrder;
};

export const DnDUtils = {
    reorder,
};
