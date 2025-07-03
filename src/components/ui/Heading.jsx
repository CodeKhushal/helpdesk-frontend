export default function Heading({value}) {
  return (
    <h1 className="heading" style={{color: 'black', fontSize: '24px', margin: '15px 0 10px', fontFamily: 'helvetica, arial, sans-serif'}}>
      {value}
    </h1>
  )
}
