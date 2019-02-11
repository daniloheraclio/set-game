import React from 'react'
import Button from '@material-ui/core/Button';

const about = (props) => {
  return (
    <div>
      <h1>About</h1>
      <Button
      variant="outlined"
      color="primary"
      style={style.button}
      onClick={props.menu}
       >Menu</Button>
    </div>
  )
}

const style = {
  button: {
    margin: 15
  }
}

export default about
