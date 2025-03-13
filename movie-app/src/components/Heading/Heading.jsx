import './Heading.css';

function Heading({children}) {

  return (
    <h1 className='heading ${size}'>{children}</h1>
  )
}

export default Heading;
