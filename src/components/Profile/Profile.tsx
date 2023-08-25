import React from 'react';
import { IonAvatar, IonChip, IonItem, IonLabel, IonRouterLink } from '@ionic/react';
import BuildListComponent from '../../components/BuildList/BuildListComponent';
import useProfile from './hooks/useProfile';
import { DATE_ICON, EMAIL_ICON, ID_CARD_ICON, PROFILE_ICON } from '../../constants';

interface ProfileProps {
  user: any
}

const Profile = (props: ProfileProps) => {

  const { initials, dateJoined } = useProfile()

  return (
    <>
      <IonItem lines='none' className='avatar'>
        <div className="initials-avatar">
          {initials(props.user.first_name, props.user.last_name)}
        </div>
        <IonLabel className='ion-text-wrap'>
          <IonChip className='chip-not-button'>
            <IonAvatar>
              <img src={PROFILE_ICON} />
            </IonAvatar>
            <IonLabel>{props.user.username}</IonLabel>
          </IonChip>
          <IonChip className='chip-not-button'>
            <IonAvatar>
              <img src={ID_CARD_ICON} />
            </IonAvatar>
            <IonLabel>{props.user.first_name} {props.user.last_name}</IonLabel>
          </IonChip>
          <IonRouterLink color="dark" href={`mailto:${props.user.email}`} >
            <IonChip>
              <IonAvatar>
                <img src={EMAIL_ICON} />
              </IonAvatar>
              <IonLabel>{props.user.email}</IonLabel>
            </IonChip>
          </IonRouterLink>
          <IonChip className='chip-not-button'>
            <IonAvatar>
              <img src={DATE_ICON} />
            </IonAvatar>
            <IonLabel>Miembro desde: {dateJoined(props.user.date_joined)}</IonLabel>
          </IonChip>
        </IonLabel>
      </IonItem>

      <BuildListComponent builds={props.user.builds} />
    </>
  );
};

export default React.memo(Profile);