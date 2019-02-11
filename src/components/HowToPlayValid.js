import React from 'react'
import Button from '@material-ui/core/Button';

const howToPlayValid = (props) => {
  return (
    <div>
      <p>Valid</p>
      <Button
       variant="outlined"
       onClick={props.instructions}
       >
       Back
       </Button>
       <Button
       variant="outlined"
       color="primary"
       style={style.button}
       onClick={props.invalid}
       >
       Next
       </Button>
    </div>
  )
}

const style = {
  button: {
    margin: 15
  }
}

export default howToPlayValid
