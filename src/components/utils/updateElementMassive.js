
export const updateObjectInArray = (items, itemId, objPropsName, newObjProps) => {
    return  items.map( list => {
            if (list[objPropsName] === itemId) {
                return {...list, ...newObjProps}
            }
            return list;
        })
    };