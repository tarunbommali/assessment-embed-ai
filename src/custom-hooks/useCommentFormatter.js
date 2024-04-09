const useCommentFormatter = ({ count }) => {
    const formatCommentCount = (count) => {
        if (count < 1000) {
            return count.toString(); // Return count as string if less than 1000
        } else if (count < 1000000) {
            return Math.floor(count / 1000) + 'k'; // Return count in 'k' format if less than 1 million
        } else {
            return Math.floor(count / 1000000) + 'm'; // Return count in 'm' format if greater than or equal to 1 million
        }
    };

    // Call the formatCommentCount function and return its result
    return formatCommentCount(count);
};


export default useCommentFormatter