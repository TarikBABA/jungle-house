function Recommendation () {

  const currentMonth = new Date().getMonth()+1
  // +1 because start of 0 
  // console.log(currentMonth);
  
  const isSpring = currentMonth >= 3 && currentMonth <= 6

  if (isSpring) {
      return <div>C'est le printemps, rempotez 🌱</div>
  }
    return <div>Ce n'est pas le moment de rempoter</div>
}
export default Recommendation