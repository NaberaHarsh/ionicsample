import React from 'react';
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonHeader,
  IonSearchbar,
 
} from '@ionic/react';

 const ToolbarExample: React.FC = () => (
<IonHeader >

  <IonToolbar color="danger">
  <IonTitle style={{textAlign:'center'}}>Dark Toolbar</IonTitle>

    <IonButtons slot="start" >
        <IonButton>
    <IonIcon name="menu-outline" slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"> </IonIcon> 
    </IonButton>
    <IonButton>

    <IonIcon name="person-outline" slot="icon-only"></IonIcon>
</IonButton>
    <IonSearchbar style={{width:300, textAlign:'center'}} showCancelButton="focus" cancelButtonText="Custom Cancel"></IonSearchbar>
    </IonButtons>
<IonButtons slot="end" >
    <IonButton>
    <IonIcon name="person-outline" slot="icon-only" ></IonIcon>
    </IonButton>
</IonButtons>
  </IonToolbar>
  </IonHeader>
);

export default ToolbarExample;
