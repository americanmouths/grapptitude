import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';
import { GreatContainer, UserGreatCreated, UserGreatRemove, PastThankful, DailyGreatContent } from '../../theme/style';

const UserGreats = (props) => {

  const allUserGreats = props.userGreats.map((great, index) => {
    const id = great.id
    return (
      <div key={index}>
        <GreatContainer>
          <UserGreatCreated>
              <Glyphicon glyph="calendar" /> {great.date_created}
          </UserGreatCreated>
          <UserGreatRemove>
              <Glyphicon glyph="remove" onClick={() => props.deleteUserGreat(id)} />
          </UserGreatRemove>
          <DailyGreatContent>
            {great.content}
          </DailyGreatContent>
        </GreatContainer>
      </div>
    )
  })

  return(
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <PastThankful>
          In the past you have been thankful for...
        </PastThankful>
        {allUserGreats}
      </div>
      <div className="col-md-4"></div>
    </div>
  )
}

export default UserGreats;
