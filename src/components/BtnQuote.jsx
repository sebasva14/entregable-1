import getRamdomElemArray from "../utils/getRamdomElemArray"

const BtnQuote = ({ setQuote, phrases, setnumberBg }) => {

  const handleRandomPhrase = () => {
    setQuote(getRamdomElemArray(phrases))
    setnumberBg (getRamdomElemArray([1,2,3,4]))
  }

  return (
    <button className="container_btn" onClick={handleRandomPhrase}>Other phrase</button>
  )
}

export default BtnQuote