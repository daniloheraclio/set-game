import React from 'react'
import Button from '@material-ui/core/Button';

const howToPlayInvalid = (props) => {
  return (
    <div>
      <p>Invalid</p>
      <Button
       variant="outlined"
       onClick={props.valid}
       >
       Back
       </Button>
       <Button
       variant="outlined"
       color="primary"
       style={style.button}
       onClick={props.menu}
       >
       Menu
       </Button>
    </div>
  )
}

const style = {
  button: {
    margin: 15
  }
}

export default howToPlayInvalid
