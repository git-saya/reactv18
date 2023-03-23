const BasicProps = (props) => {
   return (
      <header>
         <h3>{props.title}</h3>
      </header>
   )
}

// https://www.npmjs.com/package/prop-types
BasicProps.defaultProps = {
   title : "Default Title"
}

export default BasicProps