import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'



export default function SummaryForm(){
    const [tcChecked, setTcChecked] = useState(false)

    
    // const popover = (
    //     <Popover id="popover-basic">
    //         <Popover.Content>
    //             No ice cream will actually be delivered
    //         </Popover.Content>
    //     </Popover>
    // )

    const popoverRight = (
        <Popover id="popover-positioned-right" title="Popover right">
             <span style={{color:"red"}}> 
                 No ice cream will actually be delivered
            </span>
        </Popover>
      );

    const checkboxLabel = (
        <span>
            I agree to 
            <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={popoverRight}>
                <span style={{ color: 'blue' }}>Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    )

    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={tcChecked}
                    onChange={(e)=> setTcChecked(e.target.checked)}
                    label={checkboxLabel} 
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!tcChecked}>
                Confirm order
            </Button>
        </Form>
    )
}