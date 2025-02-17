function Rating(props) {
    const rating = (rate) => {
        if (rate === 0) {
            return "☆☆☆☆☆"
        }
        else if (rate === 1) {
            return "★☆☆☆☆"
        } 
        else if (rate === 2) {
            return "★★☆☆☆"
        } 
        else if (rate === 3) {
            return "★★★☆☆"
        } 
        else if (rate === 4) {
            return "★★★★☆"
        } 
        else if (rate === 5) {
            return "★★★★★"
        }
    }

return (
    <>
        <p>{rating(Math.round(props.children))}</p>
    </>
)
}
export default Rating;