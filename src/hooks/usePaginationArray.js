function usePaginationArray(start, end, step) {
    const left = start - step, right = start + step + 1, range = [];
    for (let i = 1; i <= end; i++) 
            if (i == 1 || i == end || i >= left && i < right) 
                range.push(i);
    return range;
}

export default usePaginationArray
