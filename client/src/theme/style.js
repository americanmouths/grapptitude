import styled from 'styled-components';

export const HeaderStyle = styled.main`
  display: flex;
  flex-direction: column;
  font-family: 'Satisfy', cursive;
  text-align: center;
  color: #4B655E;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const GreatContainer = styled.main`
  border: 2.5px double #bcdbb6;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  margin-top: 20px;
  width: 310px;
  text-align: center;
  background: #19282b;
  opacity: 0.75;
`;

export const Author = styled.main`
  color: #b27a74;
  font-family: Montserrat, sans-serif;
  display: inline-block;
  font-weight: 900;
  padding-right: 33px;
  font-size: 1.1em;
  border-bottom: 1px solid #bcdbb6;;
  position: relative;
`;

export const DateCreated = styled.main`
  color: #BDA765;
  font-family: Montserrat, sans-serif;
  display: inline-block;
  padding-left: 33px;
  font-weight: 900;
  font-size: 1.1em;
  border-bottom: 1px solid #bcdbb6;
  opacity: 1;
`;

export const DailyGreatContent = styled.main`
  font-weight: 400;
  font-size: 1.3em;
  color: #FDF5F2;
  padding-top: 17px;
  height: 50%;
  position: relative;
  padding-bottom: 5%;
`;

export const FormContainer = styled.main`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  margin-top: 20px;
  width: 350px;
  height: 225px;
  text-align: center;
  background: #19282b;
  opacity: 0.80;
`;

export const Errors = styled.main`
  color: #e56b5e;
  font-size: 20px;
  text-align: center;
`;

export const NoFollowedUsers = styled.main`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  margin-top: 20px;
  width: 350px;
  height: 100px;
  text-align: center;
  background: #19282b;
  opacity: 0.80;
  color: #FDF5F2;
  font-size: 1.0em;
`;

export const NoFolloweeUsers =
NoFollowedUsers.extend``;

export const NoUserLikes =
NoFollowedUsers.extend``;

export const FolloweeDateCreated =
  DateCreated.extend`
  border: none;
  padding: 0;
  display: block;
`;

export const FolloweeAuthor =
  Author.extend`
  border: none;
  padding-right: 50px;
`;

export const FolloweeGreats = styled.main`
  border: 2.5px double #bcdbb6;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  margin-top: 20px;
  width: 290px;
  text-align: center;
  background: #19282b;
  opacity: 0.75;
`;

export const UserGreatCreated =
FolloweeDateCreated.extend`
  padding-right: 74px;
  margin: none;
  display: inline-block;
`;

export const UserGreatRemove = styled.main`
  padding-left: 74px;
  color: red;
  display: inline-block;
`;

export const PastThankful = styled.main`
  display: flex;
  flex-direction: column;
  font-family: 'Satisfy', cursive;
  text-align: center;
  color: #FDF5F2;
  padding-bottom: 15px;
  padding-top: 25px;
  font-size: 1.7em;
`;
