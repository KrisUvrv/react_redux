import './Paragraph.css';

function Paragraph({size, children}) {

  return (
    <p className={`paragraph ${size}`}>{children}</p>
  )
}

export default Paragraph;
